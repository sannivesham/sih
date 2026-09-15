/**
 * SIH Hackathon Portal - Application Controller
 * Problem Statement ID: 26018 - Intelligent Land Record Digitization and Validation System
 * Organization: Sannivesham
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  hydrateProblemMetadata();
  hydrateTables();
  initSimulator();
  hydrateDashboard();
  initArchitectureSteps();
});

/**
 * Theme Toggle & Persistence
 */
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("sih_theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const active = document.documentElement.getAttribute("data-theme");
      const next = active === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("sih_theme", next);
      updateThemeIcon(next);
      showToast(`Switched to ${next} mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("theme-icon");
  if (!icon) return;
  if (theme === "light") {
    icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  } else {
    icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  }
}

/**
 * Hydrate Problem Metadata from SIH_CONFIG
 */
function hydrateProblemMetadata() {
  if (!window.SIH_CONFIG) return;
  const cfg = window.SIH_CONFIG;

  setText("hero-edition", cfg.event.name);
  setText("hero-tagline", cfg.problemStatement.tagline);
  setText("problem-badge-id", `PS ID: ${cfg.problemStatement.id}`);
  setText("problem-badge-theme", cfg.problemStatement.domain);
  setText("problem-badge-org", cfg.problemStatement.ministry);
  setText("problem-badge-cat", cfg.problemStatement.category);

  setText("problem-title-display", cfg.problemStatement.title);
  setText("problem-desc-lead", cfg.problemStatement.background);

  // GitHub links
  const ghLinks = document.querySelectorAll(".sih-gh-link");
  ghLinks.forEach(el => el.setAttribute("href", cfg.event.githubRepo));

  // Metrics
  const metricsContainer = document.getElementById("metrics-container");
  if (metricsContainer && cfg.metrics) {
    metricsContainer.innerHTML = cfg.metrics.map(m => `
      <div class="metric-card">
        <div class="metric-value">${m.value}</div>
        <div class="metric-label">${m.label}</div>
        <div class="metric-note">${m.note}</div>
      </div>
    `).join("");
  }

  // Objectives
  const objContainer = document.getElementById("objectives-container");
  if (objContainer && cfg.problemStatement.coreObjectives) {
    objContainer.innerHTML = cfg.problemStatement.coreObjectives.map(o => `
      <li>${o}</li>
    `).join("");
  }

  // Architecture Pipeline
  const pipelineContainer = document.getElementById("pipeline-container");
  if (pipelineContainer && cfg.techComponents) {
    pipelineContainer.innerHTML = cfg.techComponents.slice(0, 5).map((comp, idx) => `
      <div class="pipeline-step ${idx === 0 ? 'active' : ''}" data-step="${idx + 1}">
        <div class="step-number">0${idx + 1}</div>
        <h4>${comp.component}</h4>
        <p>${comp.role.substring(0, 85)}...</p>
      </div>
    `).join("");
  }

  // Team
  const teamContainer = document.getElementById("team-container");
  if (teamContainer && cfg.team) {
    teamContainer.innerHTML = cfg.team.map(member => `
      <div class="team-card">
        <img src="${member.avatar}" alt="${member.name}" class="team-avatar" loading="lazy" />
        <h4 class="team-name">${member.name}</h4>
        <div class="team-role">${member.role}</div>
        <p class="team-bio">${member.bio}</p>
        <a href="${member.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="padding: 6px 14px; font-size: 0.8rem;">
          View Profile
        </a>
      </div>
    `).join("");
  }
}

/**
 * Hydrate Scope of Study and Suggested Components Tables
 */
function hydrateTables() {
  if (!window.SIH_CONFIG) return;
  const cfg = window.SIH_CONFIG;

  // Scope of Study Table
  const scopeTbody = document.getElementById("scope-table-tbody");
  if (scopeTbody && cfg.problemStatement.scopeOfStudyProblems) {
    scopeTbody.innerHTML = cfg.problemStatement.scopeOfStudyProblems.map(row => `
      <tr>
        <td><strong style="color: var(--text-main);">${row.problemArea}</strong></td>
        <td><span style="color: #f87171;">⚠️ ${row.legacyIssue}</span></td>
        <td><span style="color: var(--accent-cyan); font-weight: 500;">✓ ${row.aiSolution}</span></td>
      </tr>
    `).join("");
  }

  // Suggested Components Table
  const compTbody = document.getElementById("components-table-tbody");
  if (compTbody && cfg.techComponents) {
    compTbody.innerHTML = cfg.techComponents.map(row => `
      <tr>
        <td><strong style="color: var(--text-main);">${row.component}</strong></td>
        <td>${row.technologies.split(", ").map(t => `<span class="table-tag">${t}</span>`).join("")}</td>
        <td>${row.role}</td>
      </tr>
    `).join("");
  }
}

/**
 * Interactive Land Record Digitizer Simulator
 */
let currentRecordIndex = 0;

function initSimulator() {
  const cfg = window.SIH_CONFIG;
  if (!cfg || !cfg.sampleRecords) return;

  const strip = document.getElementById("sample-selector-strip");
  if (strip) {
    strip.innerHTML = `
      <span class="sample-strip-label">Select Sample Record:</span>
      ${cfg.sampleRecords.map((r, i) => `
        <button class="sample-btn ${i === 0 ? 'active' : ''}" data-idx="${i}">
          ${r.name}
        </button>
      `).join("")}
    `;

    strip.addEventListener("click", (e) => {
      const btn = e.target.closest(".sample-btn");
      if (!btn) return;
      document.querySelectorAll(".sample-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentRecordIndex = parseInt(btn.dataset.idx, 10);
      renderRecord(cfg.sampleRecords[currentRecordIndex], true);
    });
  }

  // Action Buttons
  const approveBtn = document.getElementById("sim-approve-btn");
  if (approveBtn) {
    approveBtn.addEventListener("click", () => {
      const rec = cfg.sampleRecords[currentRecordIndex];
      const mockHash = "SHA256-" + Math.random().toString(36).substring(2, 10).toUpperCase();
      showToast(`Record ${rec.id} Approved & Synced with DILRMP! (Hash: ${mockHash})`);
      document.getElementById("sim-status-text").textContent = "DILRMP Verified";
      const hitlAlert = document.getElementById("hitl-alert-strip");
      if (hitlAlert) hitlAlert.classList.remove("visible");
    });
  }

  const exportBtn = document.getElementById("sim-export-btn");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const rec = cfg.sampleRecords[currentRecordIndex];
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(rec, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `${rec.id}-digitized-record.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast(`Exported ${rec.id} structured JSON!`);
    });
  }

  const rescanBtn = document.getElementById("sim-rescan-btn");
  if (rescanBtn) {
    rescanBtn.addEventListener("click", () => {
      renderRecord(cfg.sampleRecords[currentRecordIndex], true);
      showToast("Re-running AI OCR and Layout analysis pipeline...");
    });
  }

  // Initial render
  renderRecord(cfg.sampleRecords[0], false);
}

function renderRecord(rec, animate) {
  const viewerMockup = document.getElementById("doc-paper-mockup");
  const fieldsTbody = document.getElementById("fields-table-tbody");
  const hitlAlert = document.getElementById("hitl-alert-strip");
  const statusBadge = document.getElementById("sim-status-text");

  if (animate && viewerMockup) {
    viewerMockup.classList.add("scanning-active");
    if (statusBadge) statusBadge.textContent = "AI Scanning & Inferring...";
    setTimeout(() => {
      viewerMockup.classList.remove("scanning-active");
      if (statusBadge) statusBadge.textContent = rec.status;
    }, 600);
  } else {
    if (statusBadge) statusBadge.textContent = rec.status;
  }

  // Update Scanned Paper Mockup
  setText("doc-code-display", `${rec.id} | ${rec.state} (${rec.script})`);
  setText("doc-type-display", rec.docType);
  setText("doc-text-display", rec.previewSnippet);
  setText("doc-geo-display", `Location: Village ${rec.village}, Tehsil ${rec.tehsil}, District ${rec.district}`);

  // Extracted Fields Table
  if (fieldsTbody) {
    fieldsTbody.innerHTML = rec.extractedFields.map(f => {
      let confClass = "conf-high";
      if (f.confidence < 80) confClass = "conf-low";
      else if (f.confidence < 95) confClass = "conf-med";

      return `
        <tr>
          <td class="field-label">${f.field}</td>
          <td class="field-value editable-field" contenteditable="true" title="Click to edit">${f.value}</td>
          <td>
            <span class="confidence-badge ${confClass}">
              ${f.confidence}%
            </span>
          </td>
        </tr>
      `;
    }).join("");
  }

  // HITL Alert Strip
  const lowConfField = rec.extractedFields.find(f => f.confidence < 80);
  if (lowConfField && hitlAlert) {
    hitlAlert.classList.add("visible");
    hitlAlert.innerHTML = `
      <h5>⚠️ Human-in-the-Loop Verification Required</h5>
      <p>Field <strong>"${lowConfField.field}"</strong> has lower confidence (${lowConfField.confidence}%). ${lowConfField.flagReason || 'Please review and confirm before approving.'}</p>
    `;
  } else if (hitlAlert) {
    hitlAlert.classList.remove("visible");
  }

  // Validation checks
  setText("val-format", rec.validationChecks.formatCheck);
  setText("val-area", rec.validationChecks.areaConsistency);
  setText("val-duplicate", rec.validationChecks.duplicateCheck);
  setText("val-dilrmp", rec.validationChecks.dilrmpSync);
}

/**
 * Hydrate State-wise Digitization Dashboard
 */
function hydrateDashboard() {
  const cfg = window.SIH_CONFIG;
  if (!cfg || !cfg.dashboardStats) return;
  const stats = cfg.dashboardStats;

  setText("dash-total-scanned", stats.totalDocumentsScanned);
  setText("dash-success-rate", stats.overallAccuracyPercentage);
  setText("dash-hitl-queue", stats.pendingHitlQueue);
  setText("dash-fraud-prevented", stats.duplicateFraudPrevented);

  const statesGrid = document.getElementById("state-progress-grid");
  if (statesGrid && stats.states) {
    statesGrid.innerHTML = stats.states.map(st => `
      <div class="state-card">
        <div class="state-card-header">
          <h4>${st.state}</h4>
          <span class="state-pct">${st.digitized}</span>
        </div>
        <div class="progress-bar-wrap">
          <div class="progress-bar-fill" style="width: ${st.digitized};"></div>
        </div>
        <div class="state-card-meta">
          <span>Scanned: <strong>${st.scanned}</strong></span>
          <span>System: <strong>${st.system}</strong></span>
        </div>
      </div>
    `).join("");
  }
}

/**
 * Architecture Steps Click
 */
function initArchitectureSteps() {
  const steps = document.querySelectorAll(".pipeline-step");
  steps.forEach(step => {
    step.addEventListener("click", () => {
      steps.forEach(s => s.classList.remove("active"));
      step.classList.add("active");
    });
  });
}

/**
 * Utility Helpers
 */
function setText(id, value) {
  const el = document.getElementById(id);
  if (el && value) el.textContent = value;
}

function showToast(message) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
