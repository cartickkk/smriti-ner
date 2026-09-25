// ==========================================
// ADVANCED ANALYTICS & MULTI-RANGE MODULE (Supabase Backed & Daily Midnight Reset)
// ==========================================

async function fetchTelemetryReports(patientName = 'Mr. D. Borah') {
  try {
    const startTime = performance.now();
    const { data, error } = await window.supabaseClient
      .from('telemetry_logs')
      .select('*')
      .eq('patient_name', patientName)
      .order('created_at', { ascending: true });

    const latencyMs = Math.round(performance.now() - startTime);
    if (error) throw error;

    return { success: true, data: data || [], latencyMs };
  } catch (err) {
    console.warn('Supabase fetch notice (using local/default state):', err.message);
    return { success: false, data: [], latencyMs: 0 };
  }
}

let currentAnalyticsView = 'Week';
let cachedTelemetryData = [];

async function switchAnalyticsTimeframe(timeframe) {
  currentAnalyticsView = timeframe;
  
  // Update button UI highlights
  ['Day', 'Week', 'Month', 'Year'].forEach(t => {
    const btn = document.getElementById(`btn-analytics-${t.toLowerCase()}`);
    if (btn) {
      if (t === timeframe) {
        btn.className = 'px-3.5 py-1.5 bg-emerald-600 text-white font-black text-xs rounded-xl shadow transition';
      } else {
        btn.className = 'px-3.5 py-1.5 bg-slate-800 text-slate-300 hover:text-white font-bold text-xs rounded-xl transition';
      }
    }
  });

  renderTimeframeChart(cachedTelemetryData, timeframe);
}

async function initAdvancedAnalytics() {
  // Execute midnight reset check
  checkAndResetDailyTelemetry();

  const result = await fetchTelemetryReports();
  cachedTelemetryData = result.data;

  // Update backend latency metric
  const latEl = document.getElementById('stat-latency');
  if (latEl) latEl.innerText = `${result.latencyMs} ms`;

  // Update today's event count safely
  const todayStr = new Date().toISOString().split('T')[0];
  const todayEvents = cachedTelemetryData.filter(log => log.created_at && log.created_at.startsWith(todayStr));
  const dailyEvEl = document.getElementById('stat-daily-events');
  if (dailyEvEl) dailyEvEl.innerText = todayEvents.length;

  // Set default view to Week
  switchAnalyticsTimeframe('Week');
  renderAnalyticsTimeline(cachedTelemetryData);
}

/**
 * Automatically resets daily active telemetry breakdown and task records at 00:00 midnight
 */
function checkAndResetDailyTelemetry() {
  const todayDateStr = new Date().toDateString();
  const lastRecordedDate = localStorage.getItem('smriti_last_telemetry_date');

  if (lastRecordedDate !== todayDateStr) {
    console.log('New calendar day detected. Resetting daily telemetry breakdown to 0.0s.');
    const emptyTier = { memory: [0, 0, 0], sequence: [0, 0, 0], spotter: [0, 0, 0], trail: [0, 0, 0], lantern: [0, 0, 0] };
    const freshTiers = { easy: emptyTier, med: emptyTier, hard: emptyTier };
    
    localStorage.setItem('smriti_telemetry_tiers', JSON.stringify(freshTiers));
    localStorage.setItem('smriti_last_telemetry_date', todayDateStr);
    
    const freshTasks = { medication: false, memory: false, sequence: false, spotter: false, trail: false, lantern: false };
    localStorage.setItem('smriti_daily_tasks', JSON.stringify(freshTasks));
  }
}

function renderTimeframeChart(logs, timeframe) {
  const ctx = document.getElementById('cognitiveMultiChart');
  if (!ctx) return;

  let labels = [];
  let chartValues = [];
  let avgMetric = '0.0s Average';

  const todayStr = new Date().toISOString().split('T')[0];

  if (timeframe === 'Day') {
    labels = ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'];
    chartValues = [0, 0, 0, 0, 0, 0]; // Starts at 0
    
    const todayLogs = logs.filter(l => l.created_at && l.created_at.startsWith(todayStr));
    if (todayLogs.length > 0) {
      todayLogs.forEach((log, idx) => {
        if (idx < 6) chartValues[idx] = log.metrics_json?.response_time || 0;
      });
    }
    avgMetric = `${todayLogs.length} Events Today`;

  } else if (timeframe === 'Week') {
    labels = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    chartValues = [0, 0, 0, 0, 0, 0, 0]; // Starts at 0
    
    if (logs.length > 0) {
      const recent = logs.slice(-7);
      recent.forEach((log, idx) => {
        if (idx < 7) chartValues[idx] = log.metrics_json?.response_time || 0;
      });
    }
    avgMetric = logs.length > 0 ? `${(chartValues.reduce((a,b)=>a+b,0)/chartValues.filter(Boolean).length || 0).toFixed(1)}s Weekly Avg` : '0.0s Weekly Avg';

  } else if (timeframe === 'Month') {
    labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
    chartValues = Array(30).fill(0); // Starts at 0
    
    if (logs.length > 0) {
      logs.slice(-30).forEach((log, idx) => {
        if (idx < 30) chartValues[idx] = log.metrics_json?.response_time || 0;
      });
    }
    avgMetric = 'Monthly Activity Log';

  } else if (timeframe === 'Year') {
    labels = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
    chartValues = Array(12).fill(0); // Starts at 0
    
    if (logs.length > 0) {
      logs.forEach(log => {
        const monthIdx = new Date(log.created_at).getMonth();
        chartValues[monthIdx] = (chartValues[monthIdx] || 0) + 1;
      });
    }
    avgMetric = 'Annual Telemetry Overview';
  }

  const avgEl = document.getElementById('analytics-avg-label');
  if (avgEl) avgEl.innerText = avgMetric;

  if (window.multiChartInstance) {
    window.multiChartInstance.destroy();
  }

  window.multiChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: `${timeframe} Performance Metric`,
        data: chartValues,
        backgroundColor: '#059669',
        borderRadius: 6,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true, grid: { color: '#334155' }, ticks: { color: '#94a3b8' } },
        x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
      },
      plugins: { legend: { display: false } }
    }
  });
}

function renderAnalyticsTimeline(logs) {
  const container = document.getElementById('analytics-timeline');
  if (!container) return;

  if (logs.length === 0) {
    container.innerHTML = `<p class="text-xs text-slate-400">No telemetry logs recorded in Supabase yet. Play games or trigger events to populate data.</p>`;
    return;
  }

  container.innerHTML = logs.slice(-10).reverse().map(log => `
    <div class="flex justify-between items-center p-3 bg-slate-800/60 rounded-xl border border-slate-700 text-xs text-slate-200">
      <div>
        <span class="font-bold text-emerald-400">${log.difficulty_tier || 'EVENT'}</span>
        <span class="text-[11px] text-slate-400 ml-2">${new Date(log.created_at).toLocaleString()}</span>
      </div>
      <span class="px-2.5 py-0.5 rounded-full text-[11px] font-black ${log.stability_score === 0 ? 'bg-rose-900 text-rose-200' : 'bg-emerald-900 text-emerald-200'}">
        Score: ${log.stability_score}
      </span>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initAdvancedAnalytics, 800);
});