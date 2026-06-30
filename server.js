'use strict';

const express = require('express');
const cors    = require('cors');
const si      = require('systeminformation');
const path    = require('path');
const os      = require('os');

const app  = express();
const PORT = process.env.PORT || 3000;
const publicPath = __dirname;

app.use(cors());
app.use(express.json());

// Bloqueia acesso direto a arquivos sensíveis do servidor
app.use((req, res, next) => {
  const blocked = ['/server.js', '/package.json', '/package-lock.json', '/iniciar.bat', '/.env'];
  if (blocked.includes(req.path)) return res.status(404).end();
  next();
});

app.use(express.static(publicPath));

/* ── helpers ─────────────────────────────────────────────────────────────── */
const gb  = (b) => (b / 1_073_741_824).toFixed(2);
const pct = (u, t) => t > 0 ? ((u / t) * 100).toFixed(1) : '0.0';

function formatUptime(sec) {
  const d = Math.floor(sec / 86400);
  const h = Math.floor((sec % 86400) / 3600);
  const m = Math.floor((sec % 3600) / 60);
  if (d > 0) return `${d}d ${h}h ${m}m`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

/* ── /api/system ─────────────────────────────────────────────────────────── */
app.get('/api/system', async (_req, res) => {
  try {
    const [cpu, cpuTemp, mem, load, fs, nets, procs, battery, osInfo] =
      await Promise.all([
        si.cpu(),
        si.cpuTemperature().catch(() => ({ main: null })),
        si.mem(),
        si.currentLoad(),
        si.fsSize().catch(() => []),
        si.networkStats().catch(() => []),
        si.processes().catch(() => ({ all: 0, running: 0, blocked: 0, list: [] })),
        si.battery().catch(() => ({ hasBattery: false, percent: 0, isCharging: false })),
        si.osInfo().catch(() => ({})),
      ]);

    const disks = fs
      .filter(d => d.size > 100_000_000)
      .map(d => ({
        mount:   d.mount,
        type:    d.type   || 'N/D',
        fs:      d.fs     || '',
        totalGB: gb(d.size),
        usedGB:  gb(d.used),
        freeGB:  gb(d.size - d.used),
        percent: d.use != null ? Number(d.use).toFixed(1) : pct(d.used, d.size),
      }));

    const network = nets.slice(0, 6).map(n => ({
      iface:   n.iface,
      rxMbps:  (n.rx_sec  / 125_000).toFixed(2),
      txMbps:  (n.tx_sec  / 125_000).toFixed(2),
      rxTotal: gb(n.rx_bytes),
      txTotal: gb(n.tx_bytes),
    }));

    const topProcs = (procs.list || [])
      .sort((a, b) => b.cpu - a.cpu)
      .slice(0, 10)
      .map(p => ({
        pid:   p.pid,
        name:  p.name,
        cpu:   Number(p.cpu).toFixed(1),
        memMB: (p.mem_rss / 1_048_576).toFixed(0),
      }));

    res.json({
      timestamp: new Date().toLocaleString('pt-BR'),
      cpu: {
        model:       `${cpu.manufacturer} ${cpu.brand}`.trim(),
        cores:       cpu.cores,
        physCores:   cpu.physicalCores,
        speed:       cpu.speed,
        load:        Number(load.currentLoad).toFixed(1),
        loadPerCore: (load.cpus || []).map(c => Number(c.load).toFixed(1)),
        temp:        cpuTemp.main != null ? Number(cpuTemp.main).toFixed(1) : null,
      },
      ram: {
        usedGB:     gb(mem.used),
        totalGB:    gb(mem.total),
        freeGB:     gb(mem.free),
        percent:    pct(mem.used, mem.total),
        swapUsedGB: gb(mem.swapused  || 0),
        swapTotal:  gb(mem.swaptotal || 0),
      },
      disk:    disks,
      network,
      processes: {
        total:   procs.all,
        running: procs.running,
        blocked: procs.blocked || 0,
        top:     topProcs,
      },
      battery: {
        has:      battery.hasBattery,
        percent:  battery.percent  || 0,
        charging: battery.isCharging || false,
      },
      os: {
        platform: osInfo.platform  || os.platform(),
        distro:   osInfo.distro    || 'Windows',
        release:  osInfo.release   || os.release(),
        arch:     osInfo.arch      || os.arch(),
        hostname: os.hostname(),
        uptime:   formatUptime(os.uptime()),
      },
      meta: {
        author:    'David Henrique Sena',
        isRemote:  true,
      },
    });
  } catch (err) {
    console.error('[CORTEX ERROR]', err.message);
    res.status(500).json({ error: 'Falha ao coletar dados', detail: err.message });
  }
});

app.get('/api/ping', (_req, res) => res.json({ ok: true, version: '2.0.0' }));
app.get('*', (_req, res) => res.sendFile(path.join(publicPath, 'index.html')));

app.listen(PORT, () => {
  console.log('\x1b[36m%s\x1b[0m', `
  ██████╗ ██████╗ ██████╗ ████████╗███████╗██╗  ██╗
 ██╔════╝██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝╚██╗██╔╝
 ██║     ██║   ██║██████╔╝   ██║   █████╗   ╚███╔╝
 ██║     ██║   ██║██╔══██╗   ██║   ██╔══╝   ██╔██╗
 ╚██████╗╚██████╔╝██║  ██║   ██║   ███████╗██╔╝ ██╗
  ╚═════╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
  `);
  console.log(`\x1b[32m  ✔ Cortex Monitor rodando na porta ${PORT}\x1b[0m`);
  console.log(`\x1b[90m  Criado por David Henrique Sena\x1b[0m\n`);
});
