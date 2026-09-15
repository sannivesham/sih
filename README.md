<div align="center">

# 🇮🇳 Niriksha GIS
### Intelligent Land Record Digitization & Cadastral GIS Platform
**Smart India Hackathon (SIH) — Problem Statement ID: 26018**
*Developed by Team Sannivesham*

[![SIH Problem Statement 26018](https://img.shields.io/badge/SIH%202024-PS%2026018-FF9933?style=for-the-badge&logo=codefactor&logoColor=white)](https://sih.gov.in)
[![Category: Software Edition](https://img.shields.io/badge/Category-Software%20Edition-blue?style=for-the-badge)](https://sih.gov.in)
[![Ministry](https://img.shields.io/badge/Ministry-Dept%20of%20Land%20Resources%20%2F%20DILRMP-138808?style=for-the-badge)](https://dolr.gov.in)
[![Live Portal](https://img.shields.io/badge/Portal-Live%20Prototype-06b6d4?style=for-the-badge)](https://sannivesham.github.io/sih/)
[![Standalone Map](https://img.shields.io/badge/Fullscreen%20App-map.html-10b981?style=for-the-badge)](https://sannivesham.github.io/sih/map.html)
[![GitHub Organization](https://img.shields.io/badge/Organization-Sannivesham-8b5cf6?style=for-the-badge)](https://github.com/sannivesham)

<p align="center">
  <b>Niriksha: An AI-powered Intelligent Land Record Digitization and Validation System capable of automatically extracting structured information from scanned land records, handwritten documents, cadastral maps, and legacy PDF files across diverse Indian languages.</b>
</p>

[Explore Live Portal](https://sannivesham.github.io/sih/) • [Open Fullscreen Map App](https://sannivesham.github.io/sih/map.html) • [Problem Background](#-problem-background) • [Scope of Study](#-scope-of-study--problems-table) • [Suggested Technologies](#-suggested-components-wise-technology) • [System Architecture](#-5-stage-pipeline-architecture) • [Team](#-team-sannivesham)

---

</div>

## 📌 Problem Background & Overview

- **Problem Statement ID**: `26018`
- **Problem Statement Title**: `Intelligent Land Record Digitization and Validation System`
- **Ministry / Organization**: Department of Land Resources (DoLR) / Digital India Land Records Modernization Programme (DILRMP)
- **Category**: Software Edition
- **Domain**: Land Administration, Artificial Intelligence, Optical Character Recognition (OCR), Computer Vision, Natural Language Processing (NLP), GIS

### Background
Land records form the backbone of land administration, property ownership, taxation, land acquisition, dispute resolution, and infrastructure planning. Across India, a significant portion of historical land records continues to exist in the form of handwritten registers, scanned documents, maps, cadastral records, and legacy PDF files maintained at various administrative levels.

An intelligent digitization system significantly improves data quality while accelerating the modernization of India's land administration ecosystem.

---

## 📊 Scope of Study & Problems Table

| Problem Area | Legacy Issue in Traditional Records | Proposed AI-Powered Solution |
| :--- | :--- | :--- |
| **Physical Document Degradation** | Centuries-old cloth/paper records, faded ink, moisture damage, tears, and poor scanner contrast. | Adaptive Computer Vision preprocessing, super-resolution (ESRGAN), contrast enhancement, and neural document binarization. |
| **Handwritten Indic Scripts** | Cursive annotations, archaic administrative terminology (Urdu/Persian/Modi/Old Telugu scripts), varied handwriting styles. | Fine-tuned Vision Transformers (TrOCR / LayoutLMv3) with Indic character sequence modeling trained on historical vernacular deeds. |
| **Inconsistent Formats & Dialects** | Varying record structures across states (Khasra/Khata in North, 7/12 & 8A in West, Patta/Chitta/Adangal in South). | Dynamic schema classification and multilingual IndicBERT Named Entity Recognition (NER) mapping into national standardized Land Record schemas. |
| **Manual Inaccuracies & Frauds** | Manual data entry prone to typo errors, duplicate entries, undetected boundary overlaps, and land disputes. | Automated business rule validation, cross-database sanity checks, spatial polygon topology validation, and duplicate parcel detection. |
| **High Administrative Backlog** | Tens of millions of legacy sheets pending manual transcription, costing years and massive budgetary expenditure. | Distributed batch processing queue with sub-4 second per deed extraction and targeted Human-in-the-Loop (HITL) review for low-confidence fields. |

---

## 🛠️ Suggested Components-Wise Technology

| Component | Key Technologies & Frameworks | Operational Role & Target Outcome |
| :--- | :--- | :--- |
| **Image Preprocessing & Restoration** | `OpenCV`, `Sauvola Adaptive Binarization`, `Deskewing`, `ESRGAN Super-Resolution`, `Morphological Filters` | Enhances faded legacy paper, removes fold lines/smudges, auto-rotates skewed scans, and normalizes DPI for maximum character recognition. |
| **Vision & Indic OCR Engine** | `TrOCR` (Transformer-based OCR), `PaddleOCR Indic`, `CRAFT Text Detection`, `LayoutLMv3` | Multi-script character and word detection, handling printed tabular registries and complex cursive handwriting across 12+ Indian scripts. |
| **Layout Analysis & Indic NLP (NER)** | `LayoutLMv3`, `IndicBERT` (Bhashini), `Spacy Indic`, `Regex Rule Parsers` | Intelligently identifies document type (RoR, Khasra, 7/12, Patta) and extracts key-value pairs into structured schemas (Owner, Area, Survey No). |
| **Automated Validation & Business Rules** | `Python Rule Engine`, `Geodetic Area Verification`, `Levenshtein Distance Matching` | Validates sum of sub-plots against total area, checks valid Khasra sequences, cross-references owner records, and flags anomalies. |
| **Human-in-the-Loop (HITL) Studio** | `HTML5 Canvas`, `Interactive Bounding Box Annotation`, `Real-Time Diff Editor`, `WebSockets` | Allows verification officers (Patwaris, Tahsildars) to visually inspect flagged low-confidence values against original document snippets. |
| **GIS & Cadastral Map Integration** | `PostGIS`, `GeoServer`, `Leaflet / OpenLayers`, `ULPIN (Bhu-Aadhaar) Generator` | Binds extracted textual land parcels to geospatial coordinates, cadastral polygons, and satellite basemaps. |
| **Integration, Security & Audit** | `FastAPI`, `Docker`, `SHA-256 Hashing`, `Role-Based Access Control (RBAC)`, `DILRMP API Standard` | Secures sensitive land data, provides immutable tamper-evident logs, and facilitates state-level LRMS interoperability. |

---

## 🏗️ 5-Stage Pipeline Architecture

```text
[Legacy Scanned Deed / PDF]
            │
            ▼
┌───────────────────────────────────────┐
│ 1. Computer Vision Preprocessing      │ (Sauvola Binarization, Deskewing, ESRGAN)
└──────────────────┬────────────────────┘
                   │
                   ▼
┌───────────────────────────────────────┐
│ 2. Indic Vision Transformer OCR       │ (TrOCR + CRAFT Multi-Script Detection)
└──────────────────┬────────────────────┘
                   │
                   ▼
┌───────────────────────────────────────┐
│ 3. Layout Analysis & IndicBERT NER    │ (Khasra, Khata, Owner, Extent Extraction)
└──────────────────┬────────────────────┘
                   │
                   ▼
┌───────────────────────────────────────┐
│ 4. Multi-Layer Business Rules Engine  │ (Area Geometry, Duplicate Check, Sanity)
└─────────┬───────────────────┬─────────┘
          │ (High Conf)       │ (Low Conf <80%)
          ▼                   ▼
┌──────────────────┐  ┌───────────────────────────────────┐
│ Auto-Verified    │  │ Human-in-the-Loop (HITL) Review   │
│ Land Record      │  │ Patwari / Verification Approval   │
└─────────┬────────┘  └───────────────┬───────────────────┘
          │                           │ (Approved)
          └─────────────┬─────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│ 5. DILRMP / LRMS & GIS Cadastral Map (ULPIN Generated)  │
└─────────────────────────────────────────────────────────┘
```

---

## ⚡ Live Features in the Web Portal

- 🖥️ **Interactive Land Record Digitizer**: Live simulation of real land records from Uttar Pradesh (Khasra), Telangana (ROR 1-B), Maharashtra (7/12 Satbara), and Karnataka (RTC Pahani).
- 🔍 **Real-Time Scanning Laser & OCR Simulation**: Visual indicator demonstrating document ingestion, bounding box extraction, and confidence calculation.
- ⚠️ **Human-in-the-Loop (HITL) Alert Banner**: Automatic detection and flagging of low-confidence entries (e.g. damaged cursive annotations).
- ✏️ **Inline Attribute Editing**: In-browser editing and verification of landowner and survey number details.
- 🛡️ **Automated Validation Checklist**: Instant verification of format compliance, sub-plot sum consistency, and duplicate encumbrance checks.
- 💾 **Export to Standardized JSON**: One-click export of structured DILRMP-compliant JSON records.
- 📈 **National & State-Wise Digitization Telemetry**: Progress tracker showing documents processed and accuracy across Indian states.

---

## 📂 Repository Structure

```text
sih/
├── index.html          # Main portal with full PS 26018 details, tables & live digitizer
├── README.md           # Comprehensive hackathon & architectural documentation
├── .gitignore          # Git exclusion specifications
├── css/
│   └── style.css       # Design system, glassmorphism, scanner animations & theme tokens
└── js/
    ├── config.js       # Structured dataset: PS 26018 specs, tables, and sample deeds
    └── app.js          # Controller: theme switcher, live scanner simulator & validation logic
```

---

## 🚀 Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sannivesham/sih.git
   cd sih
   ```

2. **Open in Browser**:
   - Double-click `index.html` or open via VS Code Live Server.
   - Zero runtime dependencies — fully self-contained!

---

## 👥 Team Sannivesham

Developed with dedication for **Smart India Hackathon (SIH)**.

- **GitHub Organization**: [@sannivesham](https://github.com/sannivesham)
- **Problem Statement ID**: `26018`

---

## 📄 License

Distributed under the [MIT License](LICENSE).
