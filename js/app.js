/**
 * SIH Hackathon Portal - Application Controller & Interactive Cadastral GIS Map
 * Problem Statement ID: 26018 - Intelligent Land Record Digitization and Validation System
 * Organization: Sannivesham
 */

// Global State
let map = null;
let currentTileLayer = null;
let satelliteLayer = null;
let streetLayer = null;
let parcelsLayerGroup = null;
let activeMarkerPin = null;
let selectedParcelFeature = null;
let activeCategories = new Set(["clear", "commercial", "dispute", "govt", "water"]);

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCadastralMap();
  initCategoryFilters();
  initSearchAndPills();
  initRegionSwitcher();
  initDeedModal();
  hydrateProblemMetadata();
  hydrateTables();
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
 * Initialize Interactive Cadastral Leaflet Map
 */
function initCadastralMap() {
  const mapContainer = document.getElementById("cadastral-map");
  if (!mapContainer || typeof L === "undefined") return;

  // Default Center: Rustumpet, Narsapur, Telangana
  const defaultCenter = [17.7385, 78.2835];
  const defaultZoom = 16;

  map = L.map("cadastral-map", {
    center: defaultCenter,
    zoom: defaultZoom,
    minZoom: 12,
    maxZoom: 19,
    zoomControl: false
  });

  // Custom Zoom Control top-right
  L.control.zoom({ position: "topright" }).addTo(map);

  // Satellite Imagery Layer (Esri World Imagery)
  satelliteLayer = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution: "Tiles &copy; Esri &mdash; National Geographic, DeLorme, NAVTEQ",
      maxZoom: 19
    }
  );

  // Standard OpenStreetMap Streets Layer
  streetLayer = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 19
    }
  );

  // Set default to Satellite view for true cadastral satellite experience!
  satelliteLayer.addTo(map);
  currentTileLayer = satelliteLayer;

  // Layer Switcher Buttons
  const satBtn = document.getElementById("layer-sat-btn");
  const streetBtn = document.getElementById("layer-street-btn");

  if (satBtn && streetBtn) {
    satBtn.addEventListener("click", () => {
      map.removeLayer(streetLayer);
      map.addLayer(satelliteLayer);
      satBtn.classList.add("active");
      streetBtn.classList.remove("active");
      showToast("Switched to High-Resolution Satellite Imagery");
    });

    streetBtn.addEventListener("click", () => {
      map.removeLayer(satelliteLayer);
      map.addLayer(streetLayer);
      streetBtn.classList.add("active");
      satBtn.classList.remove("active");
      showToast("Switched to Street Map View");
    });
  }

  // Render Cadastral Land Polygons
  renderCadastralPolygons();

  // Zoom hint update
  map.on("zoomend", () => {
    const hint = document.getElementById("map-zoom-text");
    if (hint) {
      hint.textContent = `Current Zoom: ${map.getZoom()} | High-Precision Cadastral Mesh Active`;
    }
  });
}

/**
 * Render GeoJSON Land Parcels with Dynamic Classification Colors & Category Filter
 */
function renderCadastralPolygons() {
  if (!map || typeof TELUGU_LAND_REGISTRY === "undefined") return;

  if (parcelsLayerGroup) {
    map.removeLayer(parcelsLayerGroup);
  }

  // Filter features according to active checked categories
  const allFeatures = TELUGU_LAND_REGISTRY.parcels.features;
  const filteredFeatures = allFeatures.filter(f => activeCategories.has(f.properties.statusCode));

  // Update Category Counts & Total in Filter HUD
  updateCategoryCounts(allFeatures, filteredFeatures);

  const filteredGeoJson = {
    type: "FeatureCollection",
    features: filteredFeatures
  };

  parcelsLayerGroup = L.geoJSON(filteredGeoJson, {
    style: function(feature) {
      const status = feature.properties.statusCode;
      let strokeColor = "#10b981"; // Emerald green for clear
      let fillColor = "#10b981";

      if (status === "commercial") {
        strokeColor = "#06b6d4"; // Cyan
        fillColor = "#06b6d4";
      } else if (status === "dispute") {
        strokeColor = "#f59e0b"; // Amber
        fillColor = "#f59e0b";
      } else if (status === "govt") {
        strokeColor = "#a855f7"; // Purple
        fillColor = "#a855f7";
      } else if (status === "water") {
        strokeColor = "#3b82f6"; // Blue
        fillColor = "#3b82f6";
      }

      return {
        color: strokeColor,
        weight: 2.5,
        opacity: 0.9,
        fillColor: fillColor,
        fillOpacity: 0.28,
        dashArray: status === "dispute" ? "5, 5" : null
      };
    },
    onEachFeature: function(feature, layer) {
      const p = feature.properties;

      // Tooltip with Survey No and Owner
      layer.bindTooltip(`
        <div class="parcel-tooltip-label">
          <strong>సర్వే ${p.surveyNo}</strong><br/>
          <span>${p.ownerName}</span>
        </div>
      `, {
        permanent: false,
        direction: "center",
        className: "custom-leaflet-tooltip"
      });

      // Hover Effects
      layer.on({
        mouseover: function(e) {
          const l = e.target;
          l.setStyle({
            weight: 4,
            fillOpacity: 0.55,
            color: "#ffffff"
          });
          if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            l.bringToFront();
          }
        },
        mouseout: function(e) {
          parcelsLayerGroup.resetStyle(e.target);
        },
        click: function() {
          selectLandParcel(feature);
        }
      });
    }
  }).addTo(map);
}

/**
 * Initialize Interactive Category Checkbox Filter in Legend
 */
function initCategoryFilters() {
  const checkboxes = document.querySelectorAll(".cat-checkbox");
  const allBtn = document.getElementById("filter-all-btn");
  const noneBtn = document.getElementById("filter-none-btn");

  checkboxes.forEach(chk => {
    chk.addEventListener("change", (e) => {
      const code = e.target.value;
      const itemRow = e.target.closest(".legend-filter-item");

      if (e.target.checked) {
        activeCategories.add(code);
        if (itemRow) itemRow.classList.remove("dimmed");
      } else {
        activeCategories.delete(code);
        if (itemRow) itemRow.classList.add("dimmed");
      }

      renderCadastralPolygons();

      if (activeCategories.size === 0) {
        showToast("All land categories deselected. No parcels shown.");
      } else {
        showToast(`Filter updated: ${activeCategories.size} categories active`);
      }
    });
  });

  // "All" Button - Select all categories
  if (allBtn) {
    allBtn.addEventListener("click", () => {
      checkboxes.forEach(chk => {
        chk.checked = true;
        activeCategories.add(chk.value);
        const itemRow = chk.closest(".legend-filter-item");
        if (itemRow) itemRow.classList.remove("dimmed");
      });
      renderCadastralPolygons();
      showToast("Showing all land categories");
    });
  }

  // "None" Button - Deselect all categories
  if (noneBtn) {
    noneBtn.addEventListener("click", () => {
      checkboxes.forEach(chk => {
        chk.checked = false;
        activeCategories.delete(chk.value);
        const itemRow = chk.closest(".legend-filter-item");
        if (itemRow) itemRow.classList.add("dimmed");
      });
      renderCadastralPolygons();
      showToast("Deselected all categories");
    });
  }
}

/**
 * Update parcel counts in the filter legend
 */
function updateCategoryCounts(allFeatures, filteredFeatures) {
  const counts = { clear: 0, commercial: 0, dispute: 0, govt: 0, water: 0 };

  allFeatures.forEach(f => {
    const sc = f.properties.statusCode;
    if (counts[sc] !== undefined) {
      counts[sc]++;
    }
  });

  Object.keys(counts).forEach(k => {
    setText(`count-${k}`, counts[k].toString());
  });

  setText("active-parcel-count", `${filteredFeatures.length} of ${allFeatures.length} Plots`);
}

/**
 * Handle Selection of a Land Parcel (Opens Slide-in Drawer)
 */
function selectLandParcel(feature) {
  selectedParcelFeature = feature;
  const p = feature.properties;

  // Fly to parcel center
  if (p.center && map) {
    map.flyTo(p.center, 17, { duration: 1.2 });
  }

  // Populate Slide-in Drawer
  setText("drawer-survey-no", p.surveyNo);
  setText("drawer-owner-en", p.ownerName);
  setText("drawer-owner-te", p.ownerNameTe);
  setText("drawer-relation", `S/o or W/o: ${p.guardianName}`);
  setText("drawer-extent", `${p.extentText} (${p.extentAcres} Ac)`);
  setText("drawer-khata", p.khataNo);
  setText("drawer-class", p.landClassification);
  setText("drawer-ulpin", p.ulpin);
  setText("drawer-market-val", p.totalMarketValue);
  setText("drawer-status", p.status);
  setText("drawer-mutation-date", p.mutationDate);
  setText("drawer-deed-snippet", p.deedSnippet);

  // Status styling
  const statusEl = document.getElementById("drawer-status");
  if (statusEl) {
    if (p.statusCode === "clear") {
      statusEl.style.color = "var(--accent-green)";
    } else if (p.statusCode === "dispute") {
      statusEl.style.color = "var(--accent-amber)";
    } else {
      statusEl.style.color = "var(--accent-purple)";
    }
  }

  // Open Drawer
  const drawer = document.getElementById("land-details-drawer");
  if (drawer) {
    drawer.classList.add("open");
  }

  // Google Maps directions link
  const navBtn = document.getElementById("drawer-nav-btn");
  if (navBtn && p.center) {
    navBtn.setAttribute("href", `https://www.google.com/maps/search/?api=1&query=${p.center[0]},${p.center[1]}`);
    navBtn.setAttribute("target", "_blank");
  }

  showToast(`Loaded Land Record for Survey No: ${p.surveyNo} (${p.ownerName})`);
}

/**
 * Search by Survey Number, Owner Name, or Coordinates (Lat, Long)
 */
function initSearchAndPills() {
  const searchInput = document.getElementById("hud-search-input");
  const searchBtn = document.getElementById("hud-search-btn");
  const drawerCloseBtn = document.getElementById("drawer-close-btn");
  const quickPills = document.querySelectorAll(".coord-chip");

  // Close drawer
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener("click", () => {
      const drawer = document.getElementById("land-details-drawer");
      if (drawer) drawer.classList.remove("open");
      if (activeMarkerPin && map) {
        map.removeLayer(activeMarkerPin);
        activeMarkerPin = null;
      }
    });
  }

  // Quick Chips Click
  quickPills.forEach(pill => {
    pill.addEventListener("click", () => {
      const val = pill.getAttribute("data-query");
      if (searchInput) searchInput.value = val;
      executeSearch(val);
    });
  });

  // Search Button Click & Enter Key
  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      executeSearch(searchInput.value.trim());
    });

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        executeSearch(searchInput.value.trim());
      }
    });
  }
}

function executeSearch(query) {
  if (!query) {
    showToast("Please enter a Survey No, Owner Name, or Coordinates (lat, lng)");
    return;
  }

  // Check if query is Coordinates: e.g. "17.7382, 78.2828" or "17.7382 78.2828"
  const coordRegex = /^(-?\d+(\.\d+)?)[,\s]+(-?\d+(\.\d+)?)$/;
  const match = query.match(coordRegex);

  if (match) {
    const lat = parseFloat(match[1]);
    const lng = parseFloat(match[3]);

    if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
      locateCoordinates(lat, lng);
      return;
    }
  }

  // Otherwise search by Survey Number or Owner Name
  const parcels = TELUGU_LAND_REGISTRY.parcels.features;
  const qLower = query.toLowerCase();

  const found = parcels.find(f => 
    f.properties.surveyNo.toLowerCase().includes(qLower) ||
    f.properties.ownerName.toLowerCase().includes(qLower) ||
    f.properties.ownerNameTe.includes(query) ||
    f.properties.khataNo.toLowerCase().includes(qLower) ||
    f.properties.ulpin.toLowerCase().includes(qLower)
  );

  if (found) {
    selectLandParcel(found);
  } else {
    showToast(`No parcel found matching "${query}". Try sample chips below!`);
  }
}

/**
 * Coordinate Search & Radar Pin Drop
 */
function locateCoordinates(lat, lng) {
  if (!map) return;

  // Drop pulsating radar marker
  if (activeMarkerPin) {
    map.removeLayer(activeMarkerPin);
  }

  const radarIcon = L.divIcon({
    className: "pulse-marker-wrap",
    html: `<div class="pulse-marker-pin" title="${lat}, ${lng}"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });

  activeMarkerPin = L.marker([lat, lng], { icon: radarIcon }).addTo(map);

  // Smooth flyTo coordinates
  map.flyTo([lat, lng], 17, { duration: 1.5 });

  // Find nearest parcel to these coordinates
  const parcels = TELUGU_LAND_REGISTRY.parcels.features;
  let closestParcel = null;
  let minDistance = Infinity;

  parcels.forEach(f => {
    if (f.properties.center) {
      const dLat = f.properties.center[0] - lat;
      const dLng = f.properties.center[1] - lng;
      const dist = Math.sqrt(dLat * dLat + dLng * dLng);
      if (dist < minDistance) {
        minDistance = dist;
        closestParcel = f;
      }
    }
  });

  if (closestParcel && minDistance < 0.008) {
    setTimeout(() => {
      selectLandParcel(closestParcel);
    }, 900);
    showToast(`Located Parcel Survey ${closestParcel.properties.surveyNo} at GPS: ${lat.toFixed(4)}, ${lng.toFixed(4)}!`);
  } else {
    showToast(`GPS Pin dropped at [${lat.toFixed(4)}, ${lng.toFixed(4)}]`);
  }
}

/**
 * Region Switcher (Medak/Telangana vs Mangalagiri/AP)
 */
function initRegionSwitcher() {
  const regButtons = document.querySelectorAll(".region-btn");
  if (!regButtons || !map) return;

  regButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      regButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const regionId = btn.getAttribute("data-region");
      const region = TELUGU_LAND_REGISTRY.regions.find(r => r.id === regionId);

      if (region && map) {
        map.flyTo(region.center, region.zoom, { duration: 1.5 });
        showToast(`Navigated to ${region.name}`);

        // Automatically select the first parcel in this region
        const parcel = TELUGU_LAND_REGISTRY.parcels.features.find(f => {
          if (regionId.startsWith("telangana") && f.id.startsWith("TS-")) return true;
          if (regionId.startsWith("andhra") && f.id.startsWith("AP-")) return true;
          return false;
        });

        if (parcel) {
          setTimeout(() => selectLandParcel(parcel), 1200);
        }
      }
    });
  });
}

/**
 * Scanned Patta Deed Modal with OCR Bounding Boxes
 */
function initDeedModal() {
  const openBtn = document.getElementById("drawer-view-deed-btn");
  const modal = document.getElementById("deed-modal-backdrop");
  const closeBtn = document.getElementById("modal-close-btn");
  const passbookBtn = document.getElementById("drawer-download-passbook-btn");

  if (openBtn && modal) {
    openBtn.addEventListener("click", () => {
      if (!selectedParcelFeature) return;
      const p = selectedParcelFeature.properties;

      setText("modal-deed-title", `Digitized Land Deed & RoR: Survey ${p.surveyNo}`);
      setText("ocr-survey-box", p.surveyNo);
      setText("ocr-owner-box", `${p.ownerNameTe} (${p.ownerName})`);
      setText("ocr-guardian-box", p.guardianName);
      setText("ocr-extent-box", p.extentText);
      setText("ocr-khata-box", p.khataNo);
      setText("ocr-village-box", `${p.village}, ${p.mandal}, ${p.district}`);
      setText("ocr-ulpin-box", p.ulpin);

      modal.classList.add("open");
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("open");
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });
  }

  // Download Digital Passbook Simulation
  if (passbookBtn) {
    passbookBtn.addEventListener("click", () => {
      if (!selectedParcelFeature) return;
      const p = selectedParcelFeature.properties;
      const passbookContent = {
        title: "Government of India / DILRMP Digital Land Passbook (Bhu-Aadhaar)",
        state: p.state,
        district: p.district,
        mandal: p.mandal,
        village: p.village,
        surveyNo: p.surveyNo,
        pattadarName: `${p.ownerName} (${p.ownerNameTe})`,
        guardianName: p.guardianName,
        totalExtent: p.extentText,
        classification: p.landClassification,
        khataNumber: p.khataNo,
        ulpinBhuAadhaar: p.ulpin,
        digitalSignatureHash: "SHA256-" + Math.random().toString(36).substring(2, 12).toUpperCase(),
        issuedOn: new Date().toLocaleDateString("en-IN")
      };

      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(passbookContent, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `Bhu-Aadhaar-Passbook-${p.surveyNo.replace('/', '_')}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();

      showToast(`Digital Bhu-Aadhaar Passbook generated for Survey ${p.surveyNo}!`);
    });
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

  const ghLinks = document.querySelectorAll(".sih-gh-link");
  ghLinks.forEach(el => el.setAttribute("href", cfg.event.githubRepo));

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
 * Architecture Step Selection
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
 * Utilities
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
