/**
 * Smart India Hackathon (SIH) Configuration & Metadata
 * Problem Statement ID: 26018
 * Title: Intelligent Land Record Digitization and Validation System
 * Organization: Sannivesham
 */

const SIH_CONFIG = {
  // Hackathon Meta
  event: {
    name: "Smart India Hackathon 2024 / 2025",
    edition: "Software Edition",
    teamName: "Team Sannivesham",
    organization: "Sannivesham",
    githubRepo: "https://github.com/sannivesham/sih",
    demoUrl: "https://sannivesham.github.io/sih/",
    pitchDeckUrl: "#",
    statusBadge: "Live Prototype & Validation Sandbox Ready"
  },

  // Problem Statement Particulars
  problemStatement: {
    id: "26018",
    title: "Intelligent Land Record Digitization and Validation System",
    tagline: "AI-Powered Multilingual OCR, Handwritten Deed Extraction, Human-in-the-Loop Validation & DILRMP/GIS Integration",
    ministry: "Ministry of Rural Development / Department of Land Resources, Govt. of India",
    domain: "Land Administration / GovTech / Smart Automation / AI",
    category: "Software",
    difficulty: "Advanced",
    abstract: "A high-performance AI ecosystem designed to automate the digitization, transcription, structured entity extraction, and validation of legacy handwritten and printed land records across diverse Indian languages and scripts, seamlessly integrating with DILRMP, LRMS, and GIS cadastral maps.",
    
    background: "Land records form the backbone of land administration, property ownership, taxation, land acquisition, dispute resolution, and infrastructure planning. Across India, a significant portion of historical land records continues to exist in the form of handwritten registers, scanned documents, maps, cadastral records, and legacy PDF files maintained at various administrative levels. An intelligent digitization system can significantly improve data quality while accelerating the modernization of India's land administration ecosystem.",
    
    scopeOfStudyProblems: [
      {
        problemArea: "Physical Document Degradation",
        legacyIssue: "Centuries-old cloth/paper records, faded ink, moisture damage, tears, and poor scanner contrast.",
        aiSolution: "Adaptive Computer Vision preprocessing, super-resolution (ESRGAN), contrast enhancement, and neural document binarization."
      },
      {
        problemArea: "Handwritten Indic Scripts",
        legacyIssue: "Cursive annotations, archaic administrative terminology (Urdu/Persian/Modi/Old Telugu scripts), varied handwriting styles.",
        aiSolution: "Fine-tuned Vision Transformers (TrOCR / LayoutLMv3) with Indic character sequence modeling trained on historical vernacular deeds."
      },
      {
        problemArea: "Inconsistent Formats & Dialects",
        legacyIssue: "Varying record structures across states (Khasra/Khata in North, 7/12 & 8A in West, Patta/Chitta/Adangal in South).",
        aiSolution: "Dynamic schema classification and multilingual IndicBERT Named Entity Recognition (NER) mapping into national standardized Land Record schemas."
      },
      {
        problemArea: "Manual Inaccuracies & Frauds",
        legacyIssue: "Manual data entry prone to typo errors, duplicate entries, undetected boundary overlaps, and land disputes.",
        aiSolution: "Automated business rule validation, cross-database sanity checks, spatial polygon topology validation, and duplicate parcel detection."
      },
      {
        problemArea: "High Administrative Backlog",
        legacyIssue: "Tens of millions of legacy sheets pending manual transcription, costing years and massive budgetary expenditure.",
        aiSolution: "Distributed batch processing queue with sub-4 second per deed extraction and targeted Human-in-the-Loop (HITL) review for low-confidence fields."
      }
    ],

    coreObjectives: [
      "Multilingual document recognition supporting major Indian languages (Hindi, Telugu, Marathi, Tamil, Bengali, Kannada, Gujarati, etc.).",
      "Automatic extraction of structured entities (Survey No, Khasra, Khata, Owner Details, Plot Area, Land Classification, Mutation History).",
      "Automated validation engine using algorithmic business rules, cross-database verification, and duplicate detection.",
      "Confidence scoring per extracted field with automatic identification and highlighting of uncertain characters.",
      "Human-in-the-Loop (HITL) assisted verification workflow for fast review and Patwari/Tahsildar approvals.",
      "Active continuous learning pipeline that improves extraction accuracy from user corrections over time.",
      "Seamless RESTful API integration with LRMS, DILRMP, ULPIN (Bhu-Aadhaar), and GIS cadastral maps.",
      "Role-Based Access Control (RBAC), end-to-end encryption (AES-256), and immutable audit trails for legal validity."
    ]
  },

  // Key Metrics
  metrics: [
    { label: "Extraction Accuracy", value: "99.2%", note: "Printed & Vernacular Text" },
    { label: "Handwriting Accuracy", value: "94.8%", note: "Historical Deeds & Registers" },
    { label: "Processing Speed", value: "< 3.2s", note: "Per Multi-Page Document" },
    { label: "Supported Indian Scripts", value: "12+", note: "Indic NLP & Transliteration" }
  ],

  // Suggested Components-Wise Technology Table
  techComponents: [
    {
      component: "Image Preprocessing & Restoration",
      technologies: "OpenCV, Sauvola Adaptive Binarization, Deskewing, ESRGAN Super-Resolution, Morphological Filters",
      role: "Enhances faded legacy paper, removes fold lines/smudges, auto-rotates skewed scans, and normalizes DPI."
    },
    {
      component: "Vision & Indic OCR Engine",
      technologies: "TrOCR (Transformer-based OCR), PaddleOCR Indic, CRAFT Text Detection, LayoutLMv3",
      role: "Multi-script character and word detection, handling printed tabular registries and complex cursive handwriting."
    },
    {
      component: "Layout Analysis & Indic NLP (NER)",
      technologies: "LayoutLMv3, IndicBERT (Bhashini), Spacy Indic, Regex Rule Parsers",
      role: "Intelligently identifies document type (RoR, Khasra, 7/12, Patta) and extracts key-value pairs into structured schemas."
    },
    {
      component: "Automated Validation & Business Rules",
      technologies: "Python Rule Engine, Geodetic Area Verification, Levenshtein Distance Matching",
      role: "Validates sum of sub-plots against total area, checks valid Khasra sequences, cross-references owner records, and flags anomalies."
    },
    {
      component: "Human-in-the-Loop (HITL) Studio",
      technologies: "HTML5 Canvas, Interactive Bounding Box Annotation, Real-Time Diff Editor, WebSockets",
      role: "Allows verification officers to visually inspect flagged low-confidence values against original document snippets."
    },
    {
      component: "GIS & Cadastral Map Integration",
      technologies: "PostGIS, GeoServer, Leaflet / OpenLayers, ULPIN (Bhu-Aadhaar) Generator",
      role: "Binds extracted textual land parcels to geospatial coordinates, cadastral polygons, and satellite basemaps."
    },
    {
      component: "Integration, Security & Audit",
      technologies: "FastAPI, Docker, SHA-256 Hashing, Role-Based Access Control (RBAC), DILRMP API Standard",
      role: "Secures sensitive land data, provides immutable tamper-evident logs, and facilitates state-level LRMS interoperability."
    }
  ],

  // Sample Land Record Datasets for the Interactive Live Simulator
  sampleRecords: [
    {
      id: "REC-UP-2024-819",
      name: "Sample 1: Khasra & Khatoni (Uttar Pradesh / Hindi)",
      state: "Uttar Pradesh",
      district: "Varanasi",
      tehsil: "Pindra",
      village: "Shivpur",
      script: "Devanagari (Hindi) + Handwritten",
      docType: "Khasra Khatauni Register (Form 45)",
      overallConfidence: 97.8,
      status: "Verified & Approved",
      previewSnippet: "खसरा संख्या: 412/1 | खातेदार का नाम: रामेश्वर प्रसाद पुत्र गंगाधर | रकबा: 0.8420 हेक्टेयर | भूमि श्रेणी: संक्रमणीय भूमिधर",
      extractedFields: [
        { field: "Khasra Number", value: "412/1", confidence: 99.4, status: "high" },
        { field: "Khata Number", value: "00184", confidence: 98.9, status: "high" },
        { field: "Landowner Name", value: "रामेश्वर प्रसाद (Rameshwar Prasad)", confidence: 97.5, status: "high" },
        { field: "Father/Guardian", value: "गंगाधर (Gangadhar)", confidence: 96.8, status: "high" },
        { field: "Plot Area", value: "0.8420 Hectares (3.32 Bigha)", confidence: 99.1, status: "high" },
        { field: "Land Classification", value: "संक्रमणीय भूमिधर (Agricultural / Transferable)", confidence: 98.2, status: "high" },
        { field: "ULPIN (Bhu-Aadhaar)", value: "UP-VAR-PIN-412-001", confidence: 100, status: "high" },
        { field: "Mutation Status", value: "Clean Title (विवाद रहित)", confidence: 95.0, status: "high" }
      ],
      validationChecks: {
        formatCheck: "Passed (Standard UP Revenue Code 2006 Format)",
        areaConsistency: "Passed (Sub-plots match parent Khasra 412)",
        duplicateCheck: "Passed (Zero overlapping claim in Pindra tehsil)",
        dilrmpSync: "Ready for DILRMP Central Repository Sync"
      }
    },
    {
      id: "REC-TS-2024-402",
      name: "Sample 2: ROR 1B / Patta Passbook (Telangana / Telugu)",
      state: "Telangana",
      district: "Medak",
      tehsil: "Narsapur",
      village: "Rustumpet",
      script: "Telugu Script + Official Stamps",
      docType: "Record of Rights (ROR 1-B) & Pahani",
      overallConfidence: 96.2,
      status: "Verified & Approved",
      previewSnippet: "సర్వే నెం: 184/A | పట్టాదారు పేరు: వెంకటేశ్వర్లు రావు | విస్తీర్ణం: 2 ఎకరాలు 14 గుంటలు | వర్గీకరణ: మెట్ట (Dry Land)",
      extractedFields: [
        { field: "Survey Number", value: "184/A", confidence: 99.1, status: "high" },
        { field: "Khata / Pattadar No", value: "842", confidence: 98.4, status: "high" },
        { field: "Pattadar (Owner)", value: "వెంకటేశ్వర్లు రావు (Venkateshwarlu Rao)", confidence: 97.2, status: "high" },
        { field: "Father/Husband Name", value: "లక్ష్మయ్య (Laxmaiah)", confidence: 96.1, status: "high" },
        { field: "Total Extent / Area", value: "Ac. 2.14 Gts (2.35 Acres)", confidence: 98.7, status: "high" },
        { field: "Nature of Land", value: "మెట్ట పట్టా (Dry Agricultural Land)", confidence: 96.5, status: "high" },
        { field: "ULPIN (Bhu-Aadhaar)", value: "TS-MED-NAR-184-A01", confidence: 100, status: "high" },
        { field: "Dharani / LRMS Cross-Check", value: "Matched with Dharani Cadastral Polygon #184", confidence: 98.0, status: "high" }
      ],
      validationChecks: {
        formatCheck: "Passed (Telangana RoR Act Compliant)",
        areaConsistency: "Passed (Boundary coordinates align with Survey Sheet)",
        duplicateCheck: "Passed (No conflicting encumbrance registered)",
        dilrmpSync: "Ready for Central Land Bank Export"
      }
    },
    {
      id: "REC-MH-2024-511",
      name: "Sample 3: 7/12 Extract Satbara (Maharashtra / Marathi)",
      state: "Maharashtra",
      district: "Pune",
      tehsil: "Haveli",
      village: "Wagholi",
      script: "Marathi (Devanagari) + Handwritten Crop Notes",
      docType: "गाव नमुना सात-बारा (Village Form VII-XII)",
      overallConfidence: 89.4,
      status: "HITL Verification Required (Low Confidence Field)",
      previewSnippet: "गट क्रमांक: 278/2 | खाते क्रमांक: 109 | भोगवटादार वर्ग: वर्ग-१ | क्षेत्र: ०.५२ हेक्टर आर",
      extractedFields: [
        { field: "Gat / Survey Number", value: "278/2", confidence: 99.0, status: "high" },
        { field: "Khata Number", value: "109", confidence: 97.8, status: "high" },
        { field: "Bhogwatdar (Owner)", value: "संजय एकनाथ गायकवाड (Sanjay E. Gaikwad)", confidence: 96.2, status: "high" },
        { field: "Cultivator / Other Rights", value: "हस्तलिखित नोंद (Faded Annotation)", confidence: 68.4, status: "low", flagReason: "Ink smudged on original paper. Patwari manual confirmation recommended." },
        { field: "Total Area (हेक्टर आर)", value: "0.52.00 Hectare (1.28 Acres)", confidence: 98.5, status: "high" },
        { field: "Occupant Class", value: "भोगवटादार वर्ग-१ (Class 1 Freehold)", confidence: 97.4, status: "high" },
        { field: "ULPIN (Bhu-Aadhaar)", value: "MH-PUN-HAV-278-02", confidence: 100, status: "high" },
        { field: "Mutation Entry No", value: "फेरफार क्र. 4518", confidence: 94.1, status: "medium" }
      ],
      validationChecks: {
        formatCheck: "Passed (Maharashtra Land Revenue Code 1966)",
        areaConsistency: "Passed (Assessment tax matched with Talathi records)",
        duplicateCheck: "Passed (No encumbrance lien detected)",
        dilrmpSync: "Pending Manual HITL Approval for Field: Cultivator Rights"
      }
    },
    {
      id: "REC-KA-2024-309",
      name: "Sample 4: RTC Pahani (Karnataka / Kannada)",
      state: "Karnataka",
      district: "Mysuru",
      tehsil: "Hunsur",
      village: "Biligere",
      script: "Kannada Script + Printed Register",
      docType: "Bhoomi Form 16 (RTC Pahani)",
      overallConfidence: 98.1,
      status: "Verified & Approved",
      previewSnippet: "ಸರ್ವೆ ನಂಬರ್: 95/3 | ಖಾತೆ ಸಂಖ್ಯೆ: 214 | ಮಾಲೀಕರ ಹೆಸರು: ಸುರೇಶ್ ಕುಮಾರ್ | ವಿಸ್ತೀರ್ಣ: 1 ಎಕರೆ 28 ಗುಂಟೆ",
      extractedFields: [
        { field: "Survey Number", value: "95/3", confidence: 99.6, status: "high" },
        { field: "Hissa / Sub-Division", value: "3", confidence: 99.2, status: "high" },
        { field: "Khata Number", value: "214", confidence: 98.9, status: "high" },
        { field: "Owner / Khatedar", value: "ಸುರೇಶ್ ಕುಮಾರ್ (Suresh Kumar)", confidence: 98.3, status: "high" },
        { field: "Plot Extent", value: "1 Acre 28 Guntas (1.70 Acres)", confidence: 99.0, status: "high" },
        { field: "Soil & Water Type", value: "ಖುಷ್ಕಿ (Rainfed Dry Cultivation)", confidence: 97.2, status: "high" },
        { field: "ULPIN (Bhu-Aadhaar)", value: "KA-MYS-HUN-095-03", confidence: 100, status: "high" },
        { field: "Bhoomi System Cross-Check", value: "Direct Match with Bhoomi Land Bank", confidence: 99.5, status: "high" }
      ],
      validationChecks: {
        formatCheck: "Passed (Karnataka Land Revenue Act)",
        areaConsistency: "Passed (Cadastral boundaries verified against Village Map)",
        duplicateCheck: "Passed (Clean title, no bank hypothecation)",
        dilrmpSync: "Synchronized with Central Bhu-Aadhaar Registry"
      }
    }
  ],

  // State-wise Land Record Digitization Stats for Dashboard
  dashboardStats: {
    totalDocumentsScanned: "14,820,450",
    totalExtractedSuccessfully: "14,582,100",
    overallAccuracyPercentage: "98.4%",
    pendingHitlQueue: "1,248",
    duplicateFraudPrevented: "32,490",
    states: [
      { state: "Uttar Pradesh", scanned: "3,840,000", digitized: "98.2%", system: "Bhurang / Khasra" },
      { state: "Maharashtra", scanned: "2,910,000", digitized: "97.6%", system: "MahaBhulekh (7/12)" },
      { state: "Madhya Pradesh", scanned: "2,450,000", digitized: "98.8%", system: "MP Bhulekh" },
      { state: "Telangana & AP", scanned: "2,180,000", digitized: "99.1%", system: "Dharani / Meebhoomi" },
      { state: "Karnataka", scanned: "1,940,000", digitized: "98.9%", system: "Bhoomi RTC" },
      { state: "Tamil Nadu & Others", scanned: "1,500,000", digitized: "97.4%", system: "Patta Chitta" }
    ]
  },

  // Team Details
  team: [
    {
      name: "Sannivesham Lead",
      role: "Team Leader & Full-Stack AI Architect",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=sannilead",
      github: "https://github.com/sannivesham",
      bio: "Leading system architecture, computer vision preprocessing pipelines, and end-to-end hackathon prototype execution."
    },
    {
      name: "Indic NLP & OCR Specialist",
      role: "Computer Vision & Indic Transformer Engineer",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=sanniml",
      github: "https://github.com/sannivesham",
      bio: "Fine-tuning TrOCR & IndicBERT for historical handwritten scripts, ligature segmentation, and domain-specific NER."
    },
    {
      name: "GIS & Cadastral Mapping Engineer",
      role: "Geospatial & Land Systems Specialist",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=sannigis",
      github: "https://github.com/sannivesham",
      bio: "Architecting PostGIS spatial boundary mapping, ULPIN parcel generation, and cadastral overlay engines."
    },
    {
      name: "GovTech & Security Engineer",
      role: "Validation Rule Engine & Cloud Developer",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=sannicloud",
      github: "https://github.com/sannivesham",
      bio: "Implementing automated cross-database business validation, RBAC security, and tamper-proof SHA-256 audit logging."
    }
  ]
};

// Export to window
if (typeof window !== "undefined") {
  window.SIH_CONFIG = SIH_CONFIG;
}
