<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Cortex Monitor</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js"></script>
  <link rel="stylesheet" href="style.css"/>
</head>
<body>

<!-- ═══ SIDEBAR ═══════════════════════════════════════════════════════════ -->
<aside class="sidebar" id="sidebar">

  <div class="brand">
    <div class="brand-logo">
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="36" height="36" rx="10" stroke="url(#lg)" stroke-width="1.5"/>
        <path d="M10 20 L15 12 L20 26 L25 14 L30 20" stroke="url(#lg)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
          <linearGradient id="lg" x1="2" y1="2" x2="38" y2="38">
            <stop offset="0%" stop-color="#6EE7F7"/>
            <stop offset="100%" stop-color="#818CF8"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="brand-text">
      <span class="brand-name">CORTEX</span>
      <span class="brand-ver">MONITOR v2.0</span>
    </div>
  </div>

  <div class="nav-section-label">PAINEL</div>
  <nav class="nav">
    <button class="nav-btn active" data-tab="overview">
      <svg class="nav-ic" viewBox="0 0 20 20"><rect x="2" y="2" width="7" height="7" rx="1.5" fill="currentColor" opacity=".5"/><rect x="11" y="2" width="7" height="7" rx="1.5" fill="currentColor"/><rect x="2" y="11" width="7" height="7" rx="1.5" fill="currentColor"/><rect x="11" y="11" width="7" height="7" rx="1.5" fill="currentColor" opacity=".5"/></svg>
      Visão Geral
    </button>
    <button class="nav-btn" data-tab="cpu">
      <svg class="nav-ic" viewBox="0 0 20 20"><rect x="5" y="5" width="10" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8 2v3M12 2v3M8 15v3M12 15v3M2 8h3M2 12h3M15 8h3M15 12h3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      Processador
    </button>
    <button class="nav-btn" data-tab="memory">
      <svg class="nav-ic" viewBox="0 0 20 20"><rect x="2" y="6" width="16" height="8" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6 6V4M10 6V4M14 6V4M6 14v2M10 14v2M14 14v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      Memória
    </button>
    <button class="nav-btn" data-tab="disk">
      <svg class="nav-ic" viewBox="0 0 20 20"><ellipse cx="10" cy="10" rx="8" ry="5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M2 10c0 2.76 3.58 5 8 5s8-2.24 8-5" stroke="currentColor" stroke-width="1.5"/><circle cx="13" cy="10" r="1" fill="currentColor"/></svg>
      Armazenamento
    </button>
    <button class="nav-btn" data-tab="network">
      <svg class="nav-ic" viewBox="0 0 20 20"><path d="M2 10h16M10 2v16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="10" cy="10" r="2" fill="currentColor"/><path d="M5.5 5.5Q7.5 8 10 10t4.5 4.5M14.5 5.5Q12.5 8 10 10T5.5 14.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
      Rede
    </button>
    <button class="nav-btn" data-tab="processes">
      <svg class="nav-ic" viewBox="0 0 20 20"><path d="M3 5h14M3 10h10M3 15h7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      Processos
    </button>
  </nav>

  <div class="sidebar-footer">
    <div class="pulse-ring" id="pulseRing"></div>
    <div class="status-dot" id="statusDot"></div>
    <span id="statusLabel">Aguardando...</span>
  </div>

  <div class="author-credit">
    Desenvolvido por <strong>David Henrique Sena</strong>
  </div>

</aside>

<!-- ═══ MAIN ═══════════════════════════════════════════════════════════════ -->
<main class="main">

  <!-- TOPBAR -->
  <header class="topbar">
    <div class="topbar-info">
      <div class="topbar-os" id="osLabel">Cortex Monitor</div>
      <div class="topbar-host" id="hostLabel">Inicializando...</div>
    </div>
    <div class="topbar-right">
      <div class="demo-badge" title="Este painel exibe os dados do servidor onde o site está hospedado, não os dados do seu dispositivo.">
        <span class="demo-dot"></span>
        Servidor de Demonstração
      </div>
      <div class="uptime-chip">
        <span class="chip-ic">⏱</span>
        <div>
          <div class="chip-sub">Uptime</div>
          <div class="chip-val" id="uptime">—</div>
        </div>
      </div>
      <div class="clock-block">
        <div class="clock" id="clock">--:--:--</div>
        <div class="clock-date" id="clockDate">—</div>
      </div>
    </div>
  </header>

  <!-- ── TAB: OVERVIEW ─────────────────────────────────────────────────── -->
  <section class="tab active" id="tab-overview">

    <!-- KPI Cards -->
    <div class="kpi-row">

      <div class="kpi-card" data-tab="cpu" id="kpi-cpu">
        <div class="kpi-top">
          <span class="kpi-label">CPU</span>
          <div class="kpi-badge cpu-badge">PROC</div>
        </div>
        <div class="kpi-value" id="kv-cpu">0<span class="kpi-unit">%</span></div>
        <div class="kpi-track"><div class="kpi-bar cpu-bar" id="kb-cpu"></div></div>
        <div class="kpi-foot" id="kf-cpu">—</div>
      </div>

      <div class="kpi-card" data-tab="memory" id="kpi-ram">
        <div class="kpi-top">
          <span class="kpi-label">RAM</span>
          <div class="kpi-badge ram-badge">MEM</div>
        </div>
        <div class="kpi-value" id="kv-ram">0<span class="kpi-unit">%</span></div>
        <div class="kpi-track"><div class="kpi-bar ram-bar" id="kb-ram"></div></div>
        <div class="kpi-foot" id="kf-ram">— / — GB</div>
      </div>

      <div class="kpi-card" data-tab="disk" id="kpi-disk">
        <div class="kpi-top">
          <span class="kpi-label">DISCO</span>
          <div class="kpi-badge disk-badge">STO</div>
        </div>
        <div class="kpi-value" id="kv-disk">0<span class="kpi-unit">%</span></div>
        <div class="kpi-track"><div class="kpi-bar disk-bar" id="kb-disk"></div></div>
        <div class="kpi-foot" id="kf-disk">— / — GB</div>
      </div>

      <div class="kpi-card" data-tab="network" id="kpi-net">
        <div class="kpi-top">
          <span class="kpi-label">REDE</span>
          <div class="kpi-badge net-badge">NET</div>
        </div>
        <div class="net-kpi-body">
          <div class="net-kpi-row">
            <span class="net-dir down">↓ RX</span>
            <span class="net-spd" id="kv-rx">0.00 Mbps</span>
          </div>
          <div class="net-kpi-row">
            <span class="net-dir up">↑ TX</span>
            <span class="net-spd" id="kv-tx">0.00 Mbps</span>
          </div>
        </div>
        <div class="kpi-foot" id="kf-net">—</div>
      </div>

    </div>

    <!-- Charts -->
    <div class="dual-charts">
      <div class="chart-box">
        <div class="chart-hd">
          <span class="chart-title">CPU — Histórico</span>
          <span class="chart-badge cpu-badge">%</span>
        </div>
        <canvas id="cpuChart"></canvas>
      </div>
      <div class="chart-box">
        <div class="chart-hd">
          <span class="chart-title">RAM — Histórico</span>
          <span class="chart-badge ram-badge">%</span>
        </div>
        <canvas id="ramChart"></canvas>
      </div>
    </div>

    <!-- Info strip -->
    <div class="info-strip">

      <div class="info-box">
        <div class="info-box-title">Sistema</div>
        <div class="info-rows" id="sysInfoRows">
          <div class="info-row"><span class="ir-k">Plataforma</span><span class="ir-v" id="i-platform">—</span></div>
          <div class="info-row"><span class="ir-k">Versão</span><span class="ir-v" id="i-release">—</span></div>
          <div class="info-row"><span class="ir-k">Arquitetura</span><span class="ir-v" id="i-arch">—</span></div>
          <div class="info-row"><span class="ir-k">Host</span><span class="ir-v" id="i-host">—</span></div>
        </div>
      </div>

      <div class="info-box">
        <div class="info-box-title">Processos</div>
        <div class="proc-trio">
          <div class="proc-tile">
            <div class="proc-big" id="pt-total">0</div>
            <div class="proc-sm">Total</div>
          </div>
          <div class="proc-divider"></div>
          <div class="proc-tile">
            <div class="proc-big green" id="pt-run">0</div>
            <div class="proc-sm">Ativos</div>
          </div>
          <div class="proc-divider"></div>
          <div class="proc-tile">
            <div class="proc-big yellow" id="pt-blk">0</div>
            <div class="proc-sm">Bloqueados</div>
          </div>
        </div>
      </div>

      <div class="info-box" id="batteryBox" style="display:none">
        <div class="info-box-title">Bateria</div>
        <div class="batt-body">
          <div class="batt-shell" id="battShell">
            <div class="batt-inner" id="battFill"></div>
            <div class="batt-tip"></div>
          </div>
          <div>
            <div class="batt-pct" id="battPct">—%</div>
            <div class="batt-status" id="battStatus">—</div>
          </div>
        </div>
      </div>

    </div>

  </section>

  <!-- ── TAB: CPU ──────────────────────────────────────────────────────── -->
  <section class="tab" id="tab-cpu">
    <div class="page-title">Processador</div>
    <div class="chart-box full">
      <div class="chart-hd">
        <span class="chart-title">Utilização — Tempo Real</span>
        <span class="chart-live-val cpu-col" id="cpu-live">0%</span>
      </div>
      <canvas id="cpuDetailChart"></canvas>
    </div>
    <div class="stat-grid six" id="cpuStatGrid">
      <div class="stat-card"><div class="sc-label">Carga</div><div class="sc-val cpu-col" id="sc-load">—</div></div>
      <div class="stat-card"><div class="sc-label">Modelo</div><div class="sc-val sm" id="sc-model">—</div></div>
      <div class="stat-card"><div class="sc-label">Núcleos Físicos</div><div class="sc-val" id="sc-phys">—</div></div>
      <div class="stat-card"><div class="sc-label">Threads</div><div class="sc-val" id="sc-threads">—</div></div>
      <div class="stat-card"><div class="sc-label">Velocidade</div><div class="sc-val" id="sc-speed">—</div></div>
      <div class="stat-card"><div class="sc-label">Temperatura</div><div class="sc-val cpu-col" id="sc-temp">—</div></div>
    </div>
    <div class="chart-box full">
      <div class="chart-hd"><span class="chart-title">Carga por Núcleo</span></div>
      <div class="core-grid" id="coreGrid"></div>
    </div>
  </section>

  <!-- ── TAB: MEMORY ───────────────────────────────────────────────────── -->
  <section class="tab" id="tab-memory">
    <div class="page-title">Memória RAM</div>
    <div class="mem-layout">
      <div class="chart-box">
        <div class="chart-hd">
          <span class="chart-title">Histórico de Uso</span>
          <span class="chart-live-val ram-col" id="ram-live">0%</span>
        </div>
        <canvas id="ramDetailChart"></canvas>
      </div>
      <div class="chart-box donut-box">
        <div class="chart-hd"><span class="chart-title">Distribuição Atual</span></div>
        <canvas id="ramDonut"></canvas>
        <div id="donutLegend" class="donut-legend"></div>
      </div>
    </div>
    <div class="stat-grid six">
      <div class="stat-card"><div class="sc-label">Usada</div><div class="sc-val ram-col" id="m-used">—</div></div>
      <div class="stat-card"><div class="sc-label">Livre</div><div class="sc-val" id="m-free">—</div></div>
      <div class="stat-card"><div class="sc-label">Total</div><div class="sc-val" id="m-total">—</div></div>
      <div class="stat-card"><div class="sc-label">Uso (%)</div><div class="sc-val ram-col" id="m-pct">—</div></div>
      <div class="stat-card"><div class="sc-label">Swap Usado</div><div class="sc-val" id="m-swap">—</div></div>
      <div class="stat-card"><div class="sc-label">Swap Total</div><div class="sc-val" id="m-swapt">—</div></div>
    </div>
  </section>

  <!-- ── TAB: DISK ─────────────────────────────────────────────────────── -->
  <section class="tab" id="tab-disk">
    <div class="page-title">Armazenamento</div>
    <div id="diskList" class="disk-list"></div>
  </section>

  <!-- ── TAB: NETWORK ──────────────────────────────────────────────────── -->
  <section class="tab" id="tab-network">
    <div class="page-title">Rede</div>
    <div class="dual-charts">
      <div class="chart-box">
        <div class="chart-hd"><span class="chart-title">Download — RX (Mbps)</span></div>
        <canvas id="rxChart"></canvas>
      </div>
      <div class="chart-box">
        <div class="chart-hd"><span class="chart-title">Upload — TX (Mbps)</span></div>
        <canvas id="txChart"></canvas>
      </div>
    </div>
    <div class="iface-list" id="ifaceList"></div>
  </section>

  <!-- ── TAB: PROCESSES ────────────────────────────────────────────────── -->
  <section class="tab" id="tab-processes">
    <div class="page-title">Processos</div>
    <div class="stat-grid three">
      <div class="stat-card"><div class="sc-label">Total</div><div class="sc-val" id="p-total">—</div></div>
      <div class="stat-card"><div class="sc-label">Em Execução</div><div class="sc-val green" id="p-run">—</div></div>
      <div class="stat-card"><div class="sc-label">Bloqueados</div><div class="sc-val yellow" id="p-blk">—</div></div>
    </div>
    <div class="table-wrap">
      <div class="table-hd">Top Processos — por CPU</div>
      <table class="proc-table">
        <thead>
          <tr><th>PID</th><th>Nome</th><th>CPU %</th><th>Memória</th><th>Gráfico</th></tr>
        </thead>
        <tbody id="procBody">
          <tr><td colspan="5" class="empty-cell">Aguardando dados...</td></tr>
        </tbody>
      </table>
    </div>
  </section>

</main>

<!-- TOAST -->
<div id="toast" class="toast">
  <svg viewBox="0 0 20 20" width="16"><path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 4v4m0 3v1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/></svg>
  <span id="toastMsg">Erro ao conectar</span>
</div>

<script src="script.js"></script>
</body>
</html>
