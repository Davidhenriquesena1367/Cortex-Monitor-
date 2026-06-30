/* ══════════════════════════════════════════════════════
   CORTEX MONITOR — script.js
══════════════════════════════════════════════════════ */
'use strict';

const REFRESH = 3000;
const MAX_PTS = 40;

Chart.defaults.color          = '#4a5a7a';
Chart.defaults.borderColor    = 'rgba(255,255,255,0.05)';
Chart.defaults.font.family    = "'DM Mono', monospace";
Chart.defaults.font.size      = 11;

const C = {
  cpu:  '#38bdf8',
  ram:  '#34d399',
  disk: '#fbbf24',
  net:  '#a78bfa',
  tx:   '#f97316',
};

function alpha(hex, a) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${a})`;
}

function mkLine(id, color, yMax = 100) {
  const el = document.getElementById(id);
  if (!el) return null;
  return new Chart(el, {
    type: 'line',
    data: { labels: [], datasets: [{
      data: [],
      borderColor: color,
      backgroundColor: alpha(color, 0.07),
      borderWidth: 2,
      pointRadius: 0,
      tension: 0.45,
      fill: true,
    }]},
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 350 },
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#0f1420',
          borderColor: 'rgba(255,255,255,0.08)',
          borderWidth: 1,
          titleColor: '#8b9bbf',
          bodyColor: '#eef0f8',
        }
      },
      scales: {
        x: { display: false },
        y: {
          min: 0,
          max: yMax,
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { maxTicksLimit: 5, color: '#4a5a7a' },
        }
      }
    }
  });
}

function pushPt(chart, label, value) {
  if (!chart) return;
  chart.data.labels.push(label);
  chart.data.datasets[0].data.push(+value);
  if (chart.data.labels.length > MAX_PTS) {
    chart.data.labels.shift();
    chart.data.datasets[0].data.shift();
  }
  chart.update('none');
}

const charts = {};
function initCharts() {
  charts.cpu       = mkLine('cpuChart',       C.cpu,  100);
  charts.ram       = mkLine('ramChart',       C.ram,  100);
  charts.cpuDetail = mkLine('cpuDetailChart', C.cpu,  100);
  charts.ramDetail = mkLine('ramDetailChart', C.ram,  100);
  charts.rx        = mkLine('rxChart',        C.net);
  charts.tx        = mkLine('txChart',        C.tx);
}

let donut = null;
function updateDonut(used, free, swap) {
  const el = document.getElementById('ramDonut');
  if (!el) return;
  if (!donut) {
    donut = new Chart(el, {
      type: 'doughnut',
      data: {
        labels: ['Usada','Livre','Swap'],
        datasets: [{
          data: [used, free, swap],
          backgroundColor: [C.ram, '#1a2338', C.disk],
          borderColor: ['#07090f'],
          borderWidth: 3,
        }]
      },
      options: {
        responsive: false,
        cutout: '70%',
        animation: { duration: 500 },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#0f1420',
            borderColor: 'rgba(255,255,255,0.08)',
            borderWidth: 1,
          }
        }
      }
    });
  } else {
    donut.data.datasets[0].data = [used, free, swap];
    donut.update('active');
  }
  const lg = document.getElementById('donutLegend');
  if (lg) lg.innerHTML = [
    { label:'Usada',  val: used.toFixed(1)+' GB', col: C.ram },
    { label:'Livre',  val: free.toFixed(1)+' GB', col: '#1a2338' },
    { label:'Swap',   val: swap.toFixed(1)+' GB', col: C.disk },
  ].map(i => `
    <div class="dl-row">
      <div class="dl-dot" style="background:${i.col};${i.col==='#1a2338'?'border:1px solid #1f2a42':''}"></div>
      <span class="dl-label">${i.label}</span>
      <span class="dl-val">${i.val}</span>
    </div>`).join('');
}

function goTab(name) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const tab = document.getElementById('tab-' + name);
  const btn = document.querySelector(`.nav-btn[data-tab="${name}"]`);
  if (tab) tab.classList.add('active');
  if (btn) btn.classList.add('active');
}

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => goTab(btn.dataset.tab));
});

document.querySelectorAll('.kpi-card[data-tab]').forEach(card => {
  card.addEventListener('click', () => goTab(card.dataset.tab));
});

const $  = id => document.getElementById(id);
const st = (id, v) => { const el = $(id); if (el) el.textContent = v; };
const sw = (id, w) => { const el = $(id); if (el) el.style.width = Math.min(100, +w) + '%'; };

function tickClock() {
  const n = new Date();
  const pad = x => String(x).padStart(2,'0');
  st('clock', `${pad(n.getHours())}:${pad(n.getMinutes())}:${pad(n.getSeconds())}`);
  st('clockDate', n.toLocaleDateString('pt-BR', { weekday:'short', day:'2-digit', month:'short' }));
}
setInterval(tickClock, 1000);
tickClock();

let toastTimer;
function showToast(msg) {
  const t = $('toast');
  st('toastMsg', msg);
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 5000);
}

function setOnline(on) {
  const dot   = $('statusDot');
  const label = $('statusLabel');
  const ring  = $('pulseRing');
  dot.className   = 'status-dot ' + (on ? 'online' : 'offline');
  label.textContent = on ? 'Online' : 'Offline';
  if (ring) ring.className = 'pulse-ring ' + (on ? 'active' : '');
}

async function poll() {
  try {
    const r = await fetch('/api/system', { cache: 'no-store' });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const d = await r.json();
    render(d);
    setOnline(true);
  } catch (e) {
    setOnline(false);
    showToast('Falha ao conectar ao servidor. Tentando novamente...');
  }
}

function render(d) {
  const ts = new Date().toLocaleTimeString('pt-BR');

  if (d.os) {
    st('osLabel',   d.os.distro + ' ' + d.os.release);
    st('hostLabel', '@ ' + d.os.hostname);
    st('uptime',    d.os.uptime);
    st('i-platform', d.os.platform);
    st('i-release',  d.os.distro + ' ' + d.os.release);
    st('i-arch',     d.os.arch);
    st('i-host',     d.os.hostname);
  }

  if (d.cpu) {
    const load = parseFloat(d.cpu.load);
    const kvCpu = $('kv-cpu');
    if (kvCpu) kvCpu.innerHTML = `${d.cpu.load}<span class="kpi-unit">%</span>`;
    sw('kb-cpu', load);
    st('kf-cpu', d.cpu.model || '—');
    pushPt(charts.cpu,       ts, load);
    pushPt(charts.cpuDetail, ts, load);
    st('cpu-live', d.cpu.load + '%');
    st('sc-load',    d.cpu.load + '%');
    st('sc-model',   d.cpu.model);
    st('sc-phys',    d.cpu.physCores);
    st('sc-threads', d.cpu.cores);
    st('sc-speed',   d.cpu.speed + ' GHz');
    st('sc-temp',    d.cpu.temp ? d.cpu.temp + ' °C' : 'N/D');
    if (d.cpu.loadPerCore && d.cpu.loadPerCore.length) {
      const grid = $('coreGrid');
      if (grid) {
        if (grid.children.length !== d.cpu.loadPerCore.length) {
          grid.innerHTML = d.cpu.loadPerCore.map((_, i) => `
            <div class="core-item">
              <div class="core-lbl">C${i}</div>
              <div class="core-track"><div class="core-fill" id="cf${i}" style="height:0%"></div></div>
              <div class="core-pct" id="cv${i}">0%</div>
            </div>`).join('');
        }
        d.cpu.loadPerCore.forEach((v, i) => {
          const f = $('cf' + i), c = $('cv' + i);
          if (f) f.style.height = Math.min(100, +v) + '%';
          if (c) c.textContent = v + '%';
        });
      }
    }
  }

  if (d.ram) {
    const pct   = parseFloat(d.ram.percent);
    const used  = parseFloat(d.ram.usedGB);
    const total = parseFloat(d.ram.totalGB);
    const free  = parseFloat(d.ram.freeGB);
    const swap  = parseFloat(d.ram.swapUsedGB) || 0;

    const kvRam = $('kv-ram');
    if (kvRam) kvRam.innerHTML = `${d.ram.percent}<span class="kpi-unit">%</span>`;
    sw('kb-ram', pct);
    st('kf-ram', `${d.ram.usedGB} / ${d.ram.totalGB} GB`);

    pushPt(charts.ram,       ts, pct);
    pushPt(charts.ramDetail, ts, pct);
    st('ram-live', d.ram.percent + '%');

    st('m-used',  d.ram.usedGB  + ' GB');
    st('m-free',  d.ram.freeGB  + ' GB');
    st('m-total', d.ram.totalGB + ' GB');
    st('m-pct',   d.ram.percent + '%');
    st('m-swap',  d.ram.swapUsedGB + ' GB');
    st('m-swapt', d.ram.swapTotal  + ' GB');

    updateDonut(used, free, swap);
  }

  if (d.disk && d.disk.length) {
    const main = d.disk[0];
    const kvDisk = $('kv-disk');
    if (kvDisk) kvDisk.innerHTML = `${main.percent}<span class="kpi-unit">%</span>`;
    sw('kb-disk', main.percent);
    st('kf-disk', `${main.usedGB} / ${main.totalGB} GB`);

    const list = $('diskList');
    if (list) {
      list.innerHTML = d.disk.map(dk => {
        const p    = parseFloat(dk.percent);
        const cls  = p > 85 ? 'crit' : p > 70 ? 'warn' : '';
        return `
        <div class="disk-item fade">
          <div class="disk-row1">
            <div>
              <div class="disk-mount">${dk.mount}</div>
              <div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-top:2px">${dk.fs}</div>
            </div>
            <div class="disk-meta">
              <span class="disk-tag">${dk.type}</span>
              <div class="disk-pct ${cls}">${dk.percent}%</div>
            </div>
          </div>
          <div class="disk-track"><div class="disk-fill ${cls}" style="width:${dk.percent}%"></div></div>
          <div class="disk-nums">
            <span>Usado: <b>${dk.usedGB} GB</b></span>
            <span>Livre: <b>${dk.freeGB} GB</b></span>
            <span>Total: <b>${dk.totalGB} GB</b></span>
          </div>
        </div>`;
      }).join('');
    }
  }

  if (d.network && d.network.length) {
    const n0 = d.network[0];
    const rx = parseFloat(n0.rxMbps);
    const tx = parseFloat(n0.txMbps);

    st('kv-rx', rx.toFixed(2) + ' Mbps');
    st('kv-tx', tx.toFixed(2) + ' Mbps');
    st('kf-net', n0.iface || '—');

    pushPt(charts.rx, ts, rx);
    pushPt(charts.tx, ts, tx);

    const il = $('ifaceList');
    if (il) {
      il.innerHTML = d.network.map(n => `
        <div class="iface-card fade">
          <div class="iface-name">${n.iface}</div>
          <div class="iface-row"><span class="ik">Download</span><span class="iv" style="color:var(--net)">${n.rxMbps} Mbps</span></div>
          <div class="iface-row"><span class="ik">Upload</span><span class="iv" style="color:var(--tx)">${n.txMbps} Mbps</span></div>
          <div class="iface-row"><span class="ik">Total RX</span><span class="iv">${n.rxTotal} GB</span></div>
          <div class="iface-row"><span class="ik">Total TX</span><span class="iv">${n.txTotal} GB</span></div>
        </div>`).join('');
    }
  }

  if (d.processes) {
    const p = d.processes;
    st('pt-total', p.total);
    st('pt-run',   p.running);
    st('pt-blk',   p.blocked);
    st('p-total',  p.total);
    st('p-run',    p.running);
    st('p-blk',    p.blocked);

    const tbody = $('procBody');
    if (tbody && p.top && p.top.length) {
      tbody.innerHTML = p.top.map(proc => `
        <tr>
          <td>${proc.pid}</td>
          <td>${proc.name}</td>
          <td>${proc.cpu}%</td>
          <td>${proc.memMB} MB</td>
          <td>
            <div class="cpu-mini-bar">
              <div class="cpu-mini-fill" style="width:${Math.min(100, proc.cpu)}%"></div>
            </div>
          </td>
        </tr>`).join('');
    }
  }

  if (d.battery && d.battery.has) {
    const box = $('batteryBox');
    if (box) box.style.display = '';
    const pct = d.battery.percent;
    const fill = $('battFill');
    if (fill) {
      const w = Math.max(4, pct);
      fill.style.width = w + '%';
      fill.style.background = pct < 20 ? '#f87171' : pct < 40 ? '#fbbf24' : '#34d399';
    }
    st('battPct',    pct + '%');
    st('battStatus', d.battery.charging ? '⚡ Carregando' : 'Na bateria');
  }
}

initCharts();
poll();
setInterval(poll, REFRESH);
