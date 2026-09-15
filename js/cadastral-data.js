/**
 * Real Working Cadastral Land Parcel GeoJSON & Registry Data
 * Multi-Category Grid for Telugu States (Telangana & Andhra Pradesh)
 * Sannivesham SIH Bhu-Lipi Platform
 */

const TELUGU_LAND_REGISTRY = {
  regions: [
    {
      id: "telangana-narsapur",
      name: "Telangana: Medak (Rustumpet, Narsapur Mandal)",
      center: [17.7385, 78.2835],
      zoom: 16
    },
    {
      id: "telangana-shamshabad",
      name: "Telangana: Ranga Reddy (Shamshabad Mandal)",
      center: [17.2510, 78.4110],
      zoom: 16
    },
    {
      id: "andhra-mangalagiri",
      name: "Andhra Pradesh: Guntur (Mangalagiri / Amaravati)",
      center: [16.4350, 80.5650],
      zoom: 16
    }
  ],

  // Available Filter Categories
  categories: [
    { code: "clear", labelEn: "Clear Agricultural", labelTe: "పట్టాదారు వ్యవసాయం", color: "#10b981" },
    { code: "commercial", labelEn: "Commercial / Highway", labelTe: "వాణిజ్య / రహదారి స్థలం", color: "#06b6d4" },
    { code: "dispute", labelEn: "Under Mutation / Verification", labelTe: "వివాదాస్పద / పరిశీలనలో", color: "#f59e0b" },
    { code: "govt", labelEn: "Govt / Grama Kantham (22-A)", labelTe: "ప్రభుత్వ / గ్రామ కంఠం", color: "#a855f7" },
    { code: "water", labelEn: "Water Body / Lake (చెరువు)", labelTe: "నీటి వనరు / కుంట", color: "#3b82f6" }
  ],

  // Cadastral Land Parcels GeoJSON FeatureCollection
  parcels: {
    type: "FeatureCollection",
    features: [
      // ================= ROW 1 (NORTH): TELANGANA RUSTUMPET =================
      {
        type: "Feature",
        id: "TS-189-1",
        properties: {
          surveyNo: "189/1",
          khataNo: "1104",
          ownerName: "Bharat Petroleum Corridor",
          ownerNameTe: "భారత్ పెట్రోలియం ఫిల్లింగ్ స్టేషన్ & ధాబా",
          guardianName: "Managing Director (కమర్షియల్ లీజు)",
          extentAcres: 1.50,
          extentText: "1 Acre 20 Guntas",
          extentSqm: 6070,
          landType: "Commercial",
          landClassification: "Commercial Conversion (వాణిజ్య భూమి)",
          village: "Rustumpet (రుస్తుంపేట్)",
          mandal: "Narsapur (నర్సాపూర్)",
          district: "Medak (మెదక్)",
          state: "Telangana",
          ulpin: "TS-MED-NAR-189-101",
          marketValuePerAcre: "₹1,10,00,000",
          totalMarketValue: "₹1,65,00,000",
          status: "Commercial Registered (వాణిజ్య క్లియరెన్స్)",
          statusCode: "commercial",
          mutationDate: "12-Jan-2023",
          deedNumber: "COMM/2023/8819",
          deedSnippet: "వాణిజ్య ఉపయోగమునకై రెవెన్యూ శాఖ నుండి నాన్-అగ్రికల్చర్ అనుమతి (NALA) పొందిన ప్లాట్ నెం. 189/1.",
          center: [17.7412, 78.2827]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2815, 17.7403],
            [78.2836, 17.7404],
            [78.2835, 17.7420],
            [78.2814, 17.7419],
            [78.2815, 17.7403]
          ]]
        }
      },
      {
        type: "Feature",
        id: "TS-189-2",
        properties: {
          surveyNo: "189/2",
          khataNo: "ENDOW-02",
          ownerName: "Sri Venkateswara Temple Endowment",
          ownerNameTe: "శ్రీ వేంకటేశ్వర స్వామి దేవస్థానం (దేవాదాయ భూమి)",
          guardianName: "Endowments Commissioner (దేవాదాయ శాఖ)",
          extentAcres: 2.20,
          extentText: "2 Acres 08 Guntas",
          extentSqm: 8903,
          landType: "Endowment / Temple",
          landClassification: "Prohibited Inam Land (దేవాదాయ ఇనాం)",
          village: "Rustumpet (రుస్తుంపేట్)",
          mandal: "Narsapur (నర్సాపూర్)",
          district: "Medak (మెదక్)",
          state: "Telangana",
          ulpin: "TS-MED-NAR-189-202",
          marketValuePerAcre: "₹55,00,000",
          totalMarketValue: "₹1,21,00,000",
          status: "Prohibited for Sale (సెక్షన్ 22-A నిషేధితం)",
          statusCode: "govt",
          mutationDate: "Endowment Gazetted",
          deedNumber: "INAM/ENDOW/1966",
          deedSnippet: "దేవాదాయ శాఖ గెజిట్ రిజిస్టర్ ప్రకారం శ్రీ వేంకటేశ్వర స్వామి ఆలయ నిర్వహణ కొరకు కేటాయించబడిన ఇనాం భూమి.",
          center: [17.7413, 78.2847]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2836, 17.7404],
            [78.2856, 17.7405],
            [78.2855, 17.7421],
            [78.2835, 17.7420],
            [78.2836, 17.7404]
          ]]
        }
      },
      {
        type: "Feature",
        id: "TS-185-1",
        properties: {
          surveyNo: "185/1",
          khataNo: "904",
          ownerName: "K. Rama Rao",
          ownerNameTe: "కె. రామారావు",
          guardianName: "Venkataiah (వెంకటయ్య)",
          extentAcres: 3.05,
          extentText: "3 Acres 05 Guntas",
          extentSqm: 12646,
          landType: "Agricultural",
          landClassification: "Dry Land (మెట్ట పట్టా)",
          village: "Rustumpet (రుస్తుంపేట్)",
          mandal: "Narsapur (నర్సాపూర్)",
          district: "Medak (మెదక్)",
          state: "Telangana",
          ulpin: "TS-MED-NAR-185-101",
          marketValuePerAcre: "₹36,00,000",
          totalMarketValue: "₹1,12,50,000",
          status: "Clean Title (నిరభ్యంతర)",
          statusCode: "clear",
          mutationDate: "19-Nov-2021",
          deedNumber: "ROR/2021/82910",
          deedSnippet: "పట్టాదారు: కె. రామారావు తం/వెంకటయ్య. సర్వే నెం. 185/1 విస్తీర్ణం 3 ఎకరాలు 5 గుంటలు. క్రయవిక్రయములు చేయుటకు హక్కుగలదు.",
          center: [17.7397, 78.2827]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2817, 17.7387],
            [78.2837, 17.7388],
            [78.2836, 17.7404],
            [78.2815, 17.7403],
            [78.2817, 17.7387]
          ]]
        }
      },
      {
        type: "Feature",
        id: "TS-185-2",
        properties: {
          surveyNo: "185/2",
          khataNo: "905",
          ownerName: "S. Srinivas Reddy",
          ownerNameTe: "ఎస్. శ్రీనివాస్ రెడ్డి",
          guardianName: "Malla Reddy (మల్లారెడ్డి)",
          extentAcres: 2.40,
          extentText: "2 Acres 40 Guntas",
          extentSqm: 12140,
          landType: "Agricultural",
          landClassification: "Dry Land (వివాదాస్పద పరిశీలన)",
          village: "Rustumpet (రుస్తుంపేట్)",
          mandal: "Narsapur (నర్సాపూర్)",
          district: "Medak (మెదక్)",
          state: "Telangana",
          ulpin: "TS-MED-NAR-185-202",
          marketValuePerAcre: "₹37,50,000",
          totalMarketValue: "₹1,12,50,000",
          status: "Under Mutation / Verification (పరిశీలనలో ఉంది)",
          statusCode: "dispute",
          mutationDate: "05-Jan-2024",
          deedNumber: "ROR/2024/00291",
          deedSnippet: "గమనిక: వారసత్వ విభజన పిటిషన్ పెండింగ్ లో ఉన్నది. రెవెన్యూ రికార్డుల డిజిటలైజేషన్ ద్వారా ధృవీకరణ అవసరం.",
          center: [17.7398, 78.2847]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2837, 17.7388],
            [78.2857, 17.7389],
            [78.2856, 17.7405],
            [78.2836, 17.7404],
            [78.2837, 17.7388]
          ]]
        }
      },

      // ================= ROW 2 (MID-NORTH): TELANGANA RUSTUMPET =================
      {
        type: "Feature",
        id: "TS-184-A",
        properties: {
          surveyNo: "184/A",
          khataNo: "842",
          ownerName: "Venkateshwarlu Rao",
          ownerNameTe: "వెంకటేశ్వర్లు రావు",
          guardianName: "Laxmaiah (లక్ష్మయ్య)",
          extentAcres: 2.14,
          extentText: "2 Acres 14 Guntas",
          extentSqm: 8660,
          landType: "Agricultural",
          landClassification: "Dry Land (మెట్ట పట్టా)",
          village: "Rustumpet (రుస్తుంపేట్)",
          mandal: "Narsapur (నర్సాపూర్)",
          district: "Medak (మెదక్)",
          state: "Telangana",
          ulpin: "TS-MED-NAR-184-A01",
          marketValuePerAcre: "₹38,00,000",
          totalMarketValue: "₹81,32,000",
          status: "Clean Title (నిరభ్యంతర)",
          statusCode: "clear",
          mutationDate: "14-Aug-2022",
          deedNumber: "ROR/2022/49102",
          deedSnippet: "పట్టాదారు: వెంకటేశ్వర్లు రావు తం/లక్ష్మయ్య. సర్వే నెం. 184/A విస్తీర్ణం 2 ఎకరాలు 14 గుంటలు. భూమి రకం: మెట్ట పట్టా.",
          center: [17.7382, 78.2828]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2818, 17.7375],
            [78.2838, 17.7376],
            [78.2837, 17.7388],
            [78.2817, 17.7387],
            [78.2818, 17.7375]
          ]]
        }
      },
      {
        type: "Feature",
        id: "TS-184-B",
        properties: {
          surveyNo: "184/B",
          khataNo: "843",
          ownerName: "Lakshmi Devi",
          ownerNameTe: "లక్ష్మి దేవి",
          guardianName: "W/o Ramaswamy (భర్త రామస్వామి)",
          extentAcres: 1.30,
          extentText: "1 Acre 30 Guntas",
          extentSqm: 7082,
          landType: "Agricultural",
          landClassification: "Wet Land (మాగాణి పట్టా)",
          village: "Rustumpet (రుస్తుంపేట్)",
          mandal: "Narsapur (నర్సాపూర్)",
          district: "Medak (మెదక్)",
          state: "Telangana",
          ulpin: "TS-MED-NAR-184-B02",
          marketValuePerAcre: "₹42,00,000",
          totalMarketValue: "₹73,50,000",
          status: "Clean Title (నిరభ్యంతర)",
          statusCode: "clear",
          mutationDate: "02-Feb-2023",
          deedNumber: "ROR/2023/11048",
          deedSnippet: "పట్టాదారు: లక్ష్మి దేవి భ/రామస్వామి. సర్వే నెం. 184/B విస్తీర్ణం 1 ఎకరం 30 గుంటలు. బోరు బావి నీటి వనరు గలదు.",
          center: [17.7383, 78.2848]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2838, 17.7376],
            [78.2858, 17.7377],
            [78.2857, 17.7389],
            [78.2837, 17.7388],
            [78.2838, 17.7376]
          ]]
        }
      },
      {
        type: "Feature",
        id: "TS-186",
        properties: {
          surveyNo: "186",
          khataNo: "GOVT-01",
          ownerName: "Government of Telangana (Grama Kantham)",
          ownerNameTe: "తెలంగాణ ప్రభుత్వం (గ్రామ కంఠం / సర్కారీ భూమి)",
          guardianName: "Panchayat / Tahsildar Custody",
          extentAcres: 4.10,
          extentText: "4 Acres 10 Guntas",
          extentSqm: 17199,
          landType: "Government / Community",
          landClassification: "Government Poramboke (సర్కారీ ఖారీజ్)",
          village: "Rustumpet (రుస్తుంపేట్)",
          mandal: "Narsapur (నర్సాపూర్)",
          district: "Medak (మెదక్)",
          state: "Telangana",
          ulpin: "TS-MED-NAR-186-000",
          marketValuePerAcre: "₹50,00,000",
          totalMarketValue: "₹2,12,50,000",
          status: "Prohibited for Registration (నిషేధిత జాబితా 22-A)",
          statusCode: "govt",
          mutationDate: "Government Reserved",
          deedNumber: "GAZETTE/REV/1982",
          deedSnippet: "ప్రభుత్వ భూమి - సెక్షన్ 22-A కింద రిజిస్ట్రేషన్ నిషేధించబడినది. ప్రజా ప్రయోజనార్థం గ్రామ కంఠం కొరకు కేటాయింపు.",
          center: [17.7382, 78.2868]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2858, 17.7377],
            [78.2878, 17.7378],
            [78.2877, 17.7406],
            [78.2856, 17.7405],
            [78.2858, 17.7377]
          ]]
        }
      },
      {
        type: "Feature",
        id: "TS-190-A",
        properties: {
          surveyNo: "190/A",
          khataNo: "1190",
          ownerName: "D. Satyam & Brothers",
          ownerNameTe: "డి. సత్యం మరియు సోదరులు",
          guardianName: "Bheemaiah (భీమయ్య)",
          extentAcres: 2.80,
          extentText: "2 Acres 32 Guntas",
          extentSqm: 11331,
          landType: "Agricultural",
          landClassification: "Boundary Overlap Dispute (సరిహద్దు తగాదా)",
          village: "Rustumpet (రుస్తుంపేట్)",
          mandal: "Narsapur (నర్సాపూర్)",
          district: "Medak (మెదక్)",
          state: "Telangana",
          ulpin: "TS-MED-NAR-190-A01",
          marketValuePerAcre: "₹34,00,000",
          totalMarketValue: "₹95,20,000",
          status: "Under Mutation / Verification (సర్వే తనిఖీ జరుగుచున్నది)",
          statusCode: "dispute",
          mutationDate: "18-Oct-2023",
          deedNumber: "DISP/2023/1029",
          deedSnippet: "పొరుగు సర్వే నెం 186 తో హద్దుల వివాదం. సర్వేయర్ విచారణ పెండింగ్.",
          center: [17.7383, 78.2888]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2878, 17.7378],
            [78.2898, 17.7379],
            [78.2897, 17.7407],
            [78.2877, 17.7406],
            [78.2878, 17.7378]
          ]]
        }
      },

      // ================= ROW 3 (MID-SOUTH): TELANGANA RUSTUMPET =================
      {
        type: "Feature",
        id: "TS-187-1",
        properties: {
          surveyNo: "187/1",
          khataNo: "1012",
          ownerName: "Mallesh Yadav",
          ownerNameTe: "మల్లేష్ యాదవ్",
          guardianName: "Pochaiah (పోచయ్య)",
          extentAcres: 1.75,
          extentText: "1 Acre 30 Guntas",
          extentSqm: 7082,
          landType: "Agricultural",
          landClassification: "Dry Land (మెట్ట పట్టా)",
          village: "Rustumpet (రుస్తుంపేట్)",
          mandal: "Narsapur (నర్సాపూర్)",
          district: "Medak (మెదక్)",
          state: "Telangana",
          ulpin: "TS-MED-NAR-187-101",
          marketValuePerAcre: "₹35,00,000",
          totalMarketValue: "₹61,25,000",
          status: "Clean Title (నిరభ్యంతర)",
          statusCode: "clear",
          mutationDate: "11-Jun-2020",
          deedNumber: "ROR/2020/61902",
          deedSnippet: "పట్టాదారు: మల్లేష్ యాదవ్ తం/పోచయ్య. సర్వే నెం. 187/1. డిజిటల్ పట్టాదారు పాస్ బుక్ నం. T180902919.",
          center: [17.7366, 78.2828]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2818, 17.7362],
            [78.2839, 17.7363],
            [78.2838, 17.7376],
            [78.2818, 17.7375],
            [78.2818, 17.7362]
          ]]
        }
      },
      {
        type: "Feature",
        id: "TS-187-2",
        properties: {
          surveyNo: "187/2",
          khataNo: "1013",
          ownerName: "B. Anjaiah",
          ownerNameTe: "బి. అంజయ్య",
          guardianName: "Balaiah (బాలయ్య)",
          extentAcres: 2.10,
          extentText: "2 Acres 04 Guntas",
          extentSqm: 8498,
          landType: "Agricultural",
          landClassification: "Dry Land (మెట్ట పట్టా)",
          village: "Rustumpet (రుస్తుంపేట్)",
          mandal: "Narsapur (నర్సాపూర్)",
          district: "Medak (మెదక్)",
          state: "Telangana",
          ulpin: "TS-MED-NAR-187-202",
          marketValuePerAcre: "₹36,00,000",
          totalMarketValue: "₹75,60,000",
          status: "Clean Title (నిరభ్యంతర)",
          statusCode: "clear",
          mutationDate: "14-Jul-2021",
          deedNumber: "ROR/2021/44019",
          deedSnippet: "పట్టాదారు: బి. అంజయ్య తం/బాలయ్య. సర్వే నెం. 187/2. సరిహద్దులు ధరణి పోర్టల్ లో ధృవీకరించబడినవి.",
          center: [17.7367, 78.2848]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2839, 17.7363],
            [78.2859, 17.7364],
            [78.2858, 17.7377],
            [78.2838, 17.7376],
            [78.2839, 17.7363]
          ]]
        }
      },
      {
        type: "Feature",
        id: "TS-191",
        properties: {
          surveyNo: "191",
          khataNo: "IRRIG-01",
          ownerName: "Rustumpet Irrigation Lake (చెరువు)",
          ownerNameTe: "నీటిపారుదల శాఖ పెద్ద చెరువు & శిఖం భూమి",
          guardianName: "Irrigation & Water Resources Dept",
          extentAcres: 6.25,
          extentText: "6 Acres 10 Guntas",
          extentSqm: 25292,
          landType: "Water Body / Lake",
          landClassification: "Irrigation Tank / Shikam (చెరువు పోరంబోకు)",
          village: "Rustumpet (రుస్తుంపేట్)",
          mandal: "Narsapur (నర్సాపూర్)",
          district: "Medak (మెదక్)",
          state: "Telangana",
          ulpin: "TS-MED-NAR-191-000",
          marketValuePerAcre: "₹0 (Protected)",
          totalMarketValue: "Protected Water Body",
          status: "Protected Water Body (FTS / చెరువు సంరక్షణ చట్టం)",
          statusCode: "water",
          mutationDate: "National Water Registry",
          deedNumber: "LAKE/IRRIG/1971",
          deedSnippet: "నీటిపారుదల చెరువు మరియు ఫుల్ ట్యాంక్ లెవల్ (FTL) పరిధిలోని ప్రభుత్వ సంరక్షిత భూమి. ఎటువంటి ఆక్రమణలు చట్టరీత్యా నేరం.",
          center: [17.7368, 78.2869]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2859, 17.7364],
            [78.2879, 17.7365],
            [78.2878, 17.7378],
            [78.2858, 17.7377],
            [78.2859, 17.7364]
          ]]
        }
      },
      {
        type: "Feature",
        id: "TS-192-1",
        properties: {
          surveyNo: "192/1",
          khataNo: "COMM-88",
          ownerName: "Kisan Agro Logistics & Cold Storage",
          ownerNameTe: "కిసాన్ ఆగ్రో లాజిస్టిక్స్ & వేర్‌హౌస్",
          guardianName: "K. Nageswara Rao (డైరెక్టర్)",
          extentAcres: 2.60,
          extentText: "2 Acres 24 Guntas",
          extentSqm: 10521,
          landType: "Commercial / Industrial",
          landClassification: "Agro Industrial Hub (పారిశ్రామిక వేర్‌హౌసింగ్)",
          village: "Rustumpet (రుస్తుంపేట్)",
          mandal: "Narsapur (నర్సాపూర్)",
          district: "Medak (మెదక్)",
          state: "Telangana",
          ulpin: "TS-MED-NAR-192-101",
          marketValuePerAcre: "₹95,00,000",
          totalMarketValue: "₹2,47,00,000",
          status: "Commercial Title Verified (పరిశ్రమల అనుమతి గలదు)",
          statusCode: "commercial",
          mutationDate: "22-Aug-2023",
          deedNumber: "INDUS/2023/4190",
          deedSnippet: "వ్యవసాయ ఉత్పత్తుల నిల్వ కొరకు శీతల గిడ్డంగి (Cold Storage) నిర్మాణ అనుమతి పొందిన వాణిజ్య ప్లాట్.",
          center: [17.7369, 78.2889]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2879, 17.7365],
            [78.2899, 17.7366],
            [78.2898, 17.7379],
            [78.2878, 17.7378],
            [78.2879, 17.7365]
          ]]
        }
      },

      // ================= ANDHRA PRADESH: MANGALAGIRI / AMARAVATI PARCELS =================
      {
        type: "Feature",
        id: "AP-92-1",
        properties: {
          surveyNo: "92/1",
          khataNo: "312",
          ownerName: "K. Satyanarayana",
          ownerNameTe: "కె. సత్యనారాయణ",
          guardianName: "Subbaiah (సుబ్బయ్య)",
          extentAcres: 2.50,
          extentText: "2 Acres 50 Cents",
          extentSqm: 10117,
          landType: "Commercial / Highway Corridor",
          landClassification: "NA Conversion Approved (వ్యవసాయేతర వాణిజ్యం)",
          village: "Navuluru (నవులూరు)",
          mandal: "Mangalagiri (మంగళగిరి)",
          district: "Guntur (గుంటూరు)",
          state: "Andhra Pradesh",
          ulpin: "AP-GUN-MAN-092-101",
          marketValuePerAcre: "₹1,20,00,000",
          totalMarketValue: "₹3,00,00,000",
          status: "Commercial Title (నిరభ్యంతర వాణిజ్యం)",
          statusCode: "commercial",
          mutationDate: "10-Oct-2023",
          deedNumber: "MEEBHOOMI/2023/9102",
          deedSnippet: "పట్టాదారు: కె. సత్యనారాయణ తం/సుబ్బయ్య. సర్వే నెం. 92/1. రాజధాని ప్రాంత ప్రాధికార సంస్థ (APCRDA) గెజిట్ పరిధిలోనిది.",
          center: [16.4348, 80.5645]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [80.5635, 16.4340],
            [80.5655, 16.4341],
            [80.5654, 16.4355],
            [80.5634, 16.4354],
            [80.5635, 16.4340]
          ]]
        }
      },
      {
        type: "Feature",
        id: "AP-92-2",
        properties: {
          surveyNo: "92/2",
          khataNo: "313",
          ownerName: "P. Vani Prasanna",
          ownerNameTe: "పి. వాణి ప్రసన్న",
          guardianName: "W/o Srinivas (భర్త శ్రీనివాస్)",
          extentAcres: 1.60,
          extentText: "1 Acre 60 Cents",
          extentSqm: 6475,
          landType: "Agricultural",
          landClassification: "Wet Land (మాగాణి జిరాయితీ)",
          village: "Navuluru (నవులూరు)",
          mandal: "Mangalagiri (మంగళగిరి)",
          district: "Guntur (గుంటూరు)",
          state: "Andhra Pradesh",
          ulpin: "AP-GUN-MAN-092-202",
          marketValuePerAcre: "₹95,00,000",
          totalMarketValue: "₹1,52,00,000",
          status: "Clean Title (నిరభ్యంతర)",
          statusCode: "clear",
          mutationDate: "18-Mar-2022",
          deedNumber: "MEEBHOOMI/2022/4501",
          deedSnippet: "పట్టాదారు: పి. వాణి ప్రసన్న భ/శ్రీనివాస్. సర్వే నెం. 92/2. కృష్ణా కెనాల్ ఆయకట్టు పరిధి.",
          center: [16.4349, 80.5665]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [80.5655, 16.4341],
            [80.5675, 16.4342],
            [80.5674, 16.4356],
            [80.5654, 16.4355],
            [80.5655, 16.4341]
          ]]
        }
      },
      {
        type: "Feature",
        id: "AP-93-A",
        properties: {
          surveyNo: "93/A",
          khataNo: "408",
          ownerName: "N. Subba Rao",
          ownerNameTe: "ఎన్. సుబ్బారావు",
          guardianName: "Venkata Ratnam (వెంకటరత్నం)",
          extentAcres: 3.80,
          extentText: "3 Acres 80 Cents",
          extentSqm: 15378,
          landType: "Agricultural",
          landClassification: "Dry Land (మెట్ట భూమి)",
          village: "Navuluru (నవులూరు)",
          mandal: "Mangalagiri (మంగళగిరి)",
          district: "Guntur (గుంటూరు)",
          state: "Andhra Pradesh",
          ulpin: "AP-GUN-MAN-093-A01",
          marketValuePerAcre: "₹88,00,000",
          totalMarketValue: "₹3,34,40,000",
          status: "Clean Title (నిరభ్యంతర)",
          statusCode: "clear",
          mutationDate: "27-May-2021",
          deedNumber: "MEEBHOOMI/2021/7812",
          deedSnippet: "పట్టాదారు: ఎన్. సుబ్బారావు తం/వెంకటరత్నం. సర్వే నెం. 93/A. భూమి విస్తీర్ణం 3 ఎకరాలు 80 సెంట్లు. సరిహద్దు రాళ్ళు అమర్చబడినవి.",
          center: [16.4362, 80.5644]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [80.5634, 16.4354],
            [80.5654, 16.4355],
            [80.5653, 16.4372],
            [80.5633, 16.4371],
            [80.5634, 16.4354]
          ]]
        }
      },
      {
        type: "Feature",
        id: "AP-94-GOVT",
        properties: {
          surveyNo: "94",
          khataNo: "AP-GOVT-04",
          ownerName: "AP Capital Region Development Authority",
          ownerNameTe: "ఆంధ్రప్రదేశ్ ప్రభుత్వం (APCRDA ప్రజా స్థలం)",
          guardianName: "Commissioner APCRDA",
          extentAcres: 4.50,
          extentText: "4 Acres 50 Cents",
          extentSqm: 18210,
          landType: "Government Utility",
          landClassification: "Govt Public Facility (ప్రభుత్వ కేటాయింపు)",
          village: "Navuluru (నవులూరు)",
          mandal: "Mangalagiri (మంగళగిరి)",
          district: "Guntur (గుంటూరు)",
          state: "Andhra Pradesh",
          ulpin: "AP-GUN-MAN-094-000",
          marketValuePerAcre: "₹1,50,00,000",
          totalMarketValue: "₹6,75,00,000",
          status: "Government Reserved (ప్రభుత్వ స్థలం)",
          statusCode: "govt",
          mutationDate: "Capital Master Plan",
          deedNumber: "CRDA/GAZ/2016",
          deedSnippet: "రాజధాని అమరావతి మాస్టర్ ప్లాన్ పరిధిలో ప్రజా ప్రయోజనార్థం ప్రభుత్వ ఆస్పత్రి మరియు పాఠశాల కొరకు కేటాయింపు.",
          center: [16.4363, 80.5664]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [80.5654, 16.4355],
            [80.5674, 16.4356],
            [80.5673, 16.4373],
            [80.5653, 16.4372],
            [80.5654, 16.4355]
          ]]
        }
      }
    ]
  }
};

// Export to window
if (typeof window !== "undefined") {
  window.TELUGU_LAND_REGISTRY = TELUGU_LAND_REGISTRY;
}
