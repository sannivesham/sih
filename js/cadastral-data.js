/**
 * Niriksha GIS - Real Working Cadastral Land Parcel GeoJSON & Registry Data
 * Multi-Category Grid for Telugu States (Telangana & Andhra Pradesh)
 * Organization: Sannivesham
 */

const TELUGU_LAND_REGISTRY = {
  appName: "Niriksha GIS",
  regions: [
    {
      id: "telangana-narsapur",
      name: "Telangana: Medak (Rustumpet / Narsapur Mandal)",
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

  // Available Filter Categories (Now with dedicated Houses / Residential category!)
  categories: [
    { code: "clear", labelEn: "Agricultural Fields", labelTe: "వ్యవసాయ పొలాలు", color: "#10b981" },
    { code: "residential", labelEn: "Houses & Residential", labelTe: "నివాస స్థలాలు / ఇళ్ళు (Abadi)", color: "#f43f5e" },
    { code: "commercial", labelEn: "Commercial / Highway", labelTe: "వాణిజ్య / రహదారి స్థలం", color: "#06b6d4" },
    { code: "dispute", labelEn: "Under Mutation / Dispute", labelTe: "వివాదాస్పద పరిశీలన", color: "#f59e0b" },
    { code: "govt", labelEn: "Govt / Grama Kantham", labelTe: "ప్రభుత్వ / గ్రామ కంఠం (22-A)", color: "#a855f7" },
    { code: "water", labelEn: "Water Body / Lake", labelTe: "చెరువు / కుంట (FTL)", color: "#3b82f6" }
  ],

  // Cadastral Land Parcels GeoJSON FeatureCollection
  parcels: {
    type: "FeatureCollection",
    features: [
      // ================= 1. AGRICULTURAL FIELDS (PLACED OVER GREEN FARMLAND - WEST/SOUTHWEST) =================
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
          landType: "Agricultural Field",
          landClassification: "Dry Farmland (మెట్ట వ్యవసాయం)",
          village: "Rustumpet (రుస్తుంపేట్)",
          mandal: "Narsapur (నర్సాపూర్)",
          district: "Medak (మెదక్)",
          state: "Telangana",
          ulpin: "TS-MED-NAR-184-A01",
          marketValuePerAcre: "₹38,00,000",
          totalMarketValue: "₹81,32,000",
          status: "Clean Title (నిరభ్యంతర వ్యవసాయ పట్టా)",
          statusCode: "clear",
          mutationDate: "14-Aug-2022",
          deedNumber: "ROR/2022/49102",
          deedSnippet: "పట్టాదారు: వెంకటేశ్వర్లు రావు తం/లక్ష్మయ్య. సర్వే నెం. 184/A వ్యవసాయ పొలం. బోరు బావి సౌకర్యము గలదు.",
          center: [17.7378, 78.2818]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2805, 17.7368],
            [78.2830, 17.7369],
            [78.2829, 17.7387],
            [78.2804, 17.7386],
            [78.2805, 17.7368]
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
          landType: "Agricultural Field",
          landClassification: "Wet Paddy Land (మాగాణి వరి పొలం)",
          village: "Rustumpet (రుస్తుంపేట్)",
          mandal: "Narsapur (నర్సాపూర్)",
          district: "Medak (మెదక్)",
          state: "Telangana",
          ulpin: "TS-MED-NAR-184-B02",
          marketValuePerAcre: "₹42,00,000",
          totalMarketValue: "₹73,50,000",
          status: "Clean Title (నిరభ్యంతర వ్యవసాయ పట్టా)",
          statusCode: "clear",
          mutationDate: "02-Feb-2023",
          deedNumber: "ROR/2023/11048",
          deedSnippet: "పట్టాదారు: లక్ష్మి దేవి భ/రామస్వామి. సర్వే నెం. 184/B హరిత వరి సాగు పొలం. కాలువ ఆయకట్టు పరిధి.",
          center: [17.7379, 78.2792]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2780, 17.7367],
            [78.2805, 17.7368],
            [78.2804, 17.7386],
            [78.2779, 17.7385],
            [78.2780, 17.7367]
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
          landType: "Agricultural Field",
          landClassification: "Cotton & Maize Cultivation (పత్తి, మొక్కజొన్న తోట)",
          village: "Rustumpet (రుస్తుంపేట్)",
          mandal: "Narsapur (నర్సాపూర్)",
          district: "Medak (మెదక్)",
          state: "Telangana",
          ulpin: "TS-MED-NAR-185-101",
          marketValuePerAcre: "₹36,00,000",
          totalMarketValue: "₹1,12,50,000",
          status: "Clean Title (నిరభ్యంతర వ్యవసాయం)",
          statusCode: "clear",
          mutationDate: "19-Nov-2021",
          deedNumber: "ROR/2021/82910",
          deedSnippet: "పట్టాదారు: కె. రామారావు తం/వెంకటయ్య. సర్వే నెం. 185/1 పత్తి తోట పంట పొలం. ధరణి పోర్టల్ లో హక్కు రికార్డు నమోదు.",
          center: [17.7397, 78.2804]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2779, 17.7385],
            [78.2804, 17.7386],
            [78.2803, 17.7408],
            [78.2778, 17.7407],
            [78.2779, 17.7385]
          ]]
        }
      },
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
          landType: "Agricultural Field",
          landClassification: "Organic Vegetable Farm (కూరగాయల సాగు పొలం)",
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
          deedSnippet: "పట్టాదారు: మల్లేష్ యాదవ్ తం/పోచయ్య. సర్వే నెం. 187/1 పచ్చిమిర్చి, కూరగాయల సాగు పొలం.",
          center: [17.7358, 78.2818]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2805, 17.7350],
            [78.2831, 17.7351],
            [78.2830, 17.7369],
            [78.2805, 17.7368],
            [78.2805, 17.7350]
          ]]
        }
      },

      // ================= 2. HOUSES & RESIDENTIAL (PLACED RIGHT OVER THE VILLAGE HOUSES CLUSTER) =================
      {
        type: "Feature",
        id: "TS-HOUSE-101",
        properties: {
          surveyNo: "H.No. 4-82 (Plot 201)",
          khataNo: "RES-401",
          ownerName: "Venkata Narayana & Family",
          ownerNameTe: "వెంకట నారాయణ (గ్రామ నివాస గృహం)",
          guardianName: "Subba Rao (సుబ్బారావు)",
          extentAcres: 0.12,
          extentText: "580 Sq. Yards (RCC House)",
          extentSqm: 485,
          landType: "Houses & Residential",
          landClassification: "Village Settlement / House (గ్రామ కంఠం నివాసం / ఆబాదీ)",
          village: "Rustumpet (రుస్తుంపేట్ గ్రామం)",
          mandal: "Narsapur (నర్సాపూర్)",
          district: "Medak (మెదక్)",
          state: "Telangana",
          ulpin: "TS-MED-NAR-H4-82-01",
          marketValuePerAcre: "₹2,40,00,000",
          totalMarketValue: "₹35,00,000",
          status: "Registered Residential House (గ్రామ పంచాయతీ అసెస్మెంట్)",
          statusCode: "residential",
          mutationDate: "20-Apr-2021",
          deedNumber: "HOUSE/GP/2021/812",
          deedSnippet: "రుస్తుంపేట్ గ్రామ నడిబొడ్డున గల ఆర్సీసీ ఇల్లు మరియు ప్రహరీ గోడ. విద్యుత్ సర్వీస్ నం. 410291. ఆస్తి పన్ను క్రమం తప్పక చెల్లించబడినది.",
          center: [17.7388, 78.2862]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2852, 17.7380],
            [78.2872, 17.7381],
            [78.2871, 17.7396],
            [78.2851, 17.7395],
            [78.2852, 17.7380]
          ]]
        }
      },
      {
        type: "Feature",
        id: "TS-HOUSE-102",
        properties: {
          surveyNo: "H.No. 4-95 (Plot 202)",
          khataNo: "RES-402",
          ownerName: "Ch. Anasuya Devi",
          ownerNameTe: "సిహెచ్. అనసూయ దేవి (భవనం & పెరడు)",
          guardianName: "W/o Mallaiah (భర్త మల్లయ్య)",
          extentAcres: 0.08,
          extentText: "385 Sq. Yards (House with Backyard)",
          extentSqm: 322,
          landType: "Houses & Residential",
          landClassification: "Residential Abadi (గ్రామ నివాస స్థలం)",
          village: "Rustumpet (రుస్తుంపేట్ గ్రామం)",
          mandal: "Narsapur (నర్సాపూర్)",
          district: "Medak (మెదక్)",
          state: "Telangana",
          ulpin: "TS-MED-NAR-H4-95-02",
          marketValuePerAcre: "₹2,20,00,000",
          totalMarketValue: "₹24,50,000",
          status: "Registered Residential (క్లీన్ టైటిల్)",
          statusCode: "residential",
          mutationDate: "16-Sep-2022",
          deedNumber: "HOUSE/GP/2022/934",
          deedSnippet: "గ్రామ నివాస నివాసం: భవన వైశాల్యం 385 గజాలు. నల్లా మరియు విద్యుత్ కనెక్షన్ గలదు.",
          center: [17.7402, 78.2861]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2851, 17.7395],
            [78.2871, 17.7396],
            [78.2870, 17.7410],
            [78.2850, 17.7409],
            [78.2851, 17.7395]
          ]]
        }
      },
      {
        type: "Feature",
        id: "TS-HOUSE-103",
        properties: {
          surveyNo: "H.No. 5-12 (North Colony)",
          khataNo: "RES-403",
          ownerName: "G. Srinivas & Brothers",
          ownerNameTe: "జి. శ్రీనివాస్ (ఉమ్మడి కుటుంబ నివాస భవనం)",
          guardianName: "Bheemaiah (భీమయ్య)",
          extentAcres: 0.15,
          extentText: "720 Sq. Yards (Residential Villa)",
          extentSqm: 602,
          landType: "Houses & Residential",
          landClassification: "Residential Layout (రెసిడెన్షియల్ లేఅవుట్)",
          village: "Rustumpet (రుస్తుంపేట్ గ్రామం)",
          mandal: "Narsapur (నర్సాపూర్)",
          district: "Medak (మెదక్)",
          state: "Telangana",
          ulpin: "TS-MED-NAR-H5-12-03",
          marketValuePerAcre: "₹2,50,00,000",
          totalMarketValue: "₹45,00,000",
          status: "Clear Residential Title (నివాస అనుమతి)",
          statusCode: "residential",
          mutationDate: "05-May-2023",
          deedNumber: "HOUSE/REG/2023/102",
          deedSnippet: "రెండు అంతస్తుల నివాస గృహం మరియు పూలతోట. మున్సిపల్ / గ్రామ పంచాయతీ లేఅవుట్ క్లియరెన్స్ నం. 44/2019.",
          center: [17.7401, 78.2840]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2831, 17.7394],
            [78.2851, 17.7395],
            [78.2850, 17.7409],
            [78.2830, 17.7408],
            [78.2831, 17.7394]
          ]]
        }
      },

      // ================= 3. COMMERCIAL / HIGHWAY (ALONG THE PAVED ROAD) =================
      {
        type: "Feature",
        id: "TS-189-1",
        properties: {
          surveyNo: "189/1",
          khataNo: "1104",
          ownerName: "Bharat Petroleum Fuel Hub",
          ownerNameTe: "భారత్ పెట్రోలియం ఫిల్లింగ్ స్టేషన్ & ధాబా",
          guardianName: "Managing Director (కమర్షియల్ లీజు)",
          extentAcres: 1.50,
          extentText: "1 Acre 20 Guntas",
          extentSqm: 6070,
          landType: "Commercial",
          landClassification: "Commercial Conversion (NALA వాణిజ్య అనుమతి)",
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
          deedSnippet: "హైవే రోడ్డు ముఖభాగం కలిగిన కమర్షియల్ ప్లాట్. నాలా (NALA) కన్వర్షన్ పన్ను చెల్లించబడినది.",
          center: [17.7412, 78.2820]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2803, 17.7408],
            [78.2830, 17.7408],
            [78.2829, 17.7423],
            [78.2802, 17.7422],
            [78.2803, 17.7408]
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
          center: [17.7360, 78.2882]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2871, 17.7351],
            [78.2895, 17.7352],
            [78.2894, 17.7369],
            [78.2870, 17.7368],
            [78.2871, 17.7351]
          ]]
        }
      },

      // ================= 4. UNDER MUTATION / DISPUTE =================
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
          landType: "Agricultural Field",
          landClassification: "Farmland under Partition Dispute (వారసత్వ విభజన వివాదం)",
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
          center: [17.7381, 78.2841]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2830, 17.7369],
            [78.2852, 17.7370],
            [78.2851, 17.7395],
            [78.2829, 17.7387],
            [78.2830, 17.7369]
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
          landType: "Mixed Farmland / Settlement Border",
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
          deedSnippet: "గ్రామ నడిబొడ్డున సర్వే నెం 186 తో హద్దుల వివాదం. సర్వేయర్ విచారణ పెండింగ్.",
          center: [17.7388, 78.2882]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2872, 17.7381],
            [78.2893, 17.7382],
            [78.2892, 17.7407],
            [78.2871, 17.7396],
            [78.2872, 17.7381]
          ]]
        }
      },

      // ================= 5. GOVERNMENT / GRAMA KANTHAM (22-A) =================
      {
        type: "Feature",
        id: "TS-186",
        properties: {
          surveyNo: "186",
          khataNo: "GOVT-01",
          ownerName: "Government of Telangana (Grama Panchayat)",
          ownerNameTe: "తెలంగాణ ప్రభుత్వం (గ్రామ పంచాయతీ కార్యాలయం & ప్రాథమిక పాఠశాల)",
          guardianName: "Panchayat Secretary / Tahsildar",
          extentAcres: 1.80,
          extentText: "1 Acre 32 Guntas",
          extentSqm: 7284,
          landType: "Government / Community",
          landClassification: "Public Facility (ప్రభుత్వ ఆస్తి)",
          village: "Rustumpet (రుస్తుంపేట్ గ్రామం)",
          mandal: "Narsapur (నర్సాపూర్)",
          district: "Medak (మెదక్)",
          state: "Telangana",
          ulpin: "TS-MED-NAR-186-000",
          marketValuePerAcre: "₹50,00,000",
          totalMarketValue: "₹90,00,000",
          status: "Prohibited for Registration (నిషేధిత జాబితా 22-A)",
          statusCode: "govt",
          mutationDate: "Government Reserved",
          deedNumber: "GAZETTE/REV/1982",
          deedSnippet: "ప్రభుత్వ ప్రాథమిక పాఠశాల, గ్రామ పంచాయతీ భవనం మరియు కమ్యూనిటీ హాల్ కొరకు కేటాయించబడిన ప్రభుత్వ స్థలం. రిజిస్ట్రేషన్ నిషేధం.",
          center: [17.7374, 78.2861]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2852, 17.7366],
            [78.2871, 17.7367],
            [78.2870, 17.7381],
            [78.2851, 17.7380],
            [78.2852, 17.7366]
          ]]
        }
      },

      // ================= 6. WATER BODY / CHERUVU =================
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
          center: [17.7358, 78.2851]
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [78.2831, 17.7351],
            [78.2871, 17.7351],
            [78.2870, 17.7368],
            [78.2830, 17.7369],
            [78.2831, 17.7351]
          ]]
        }
      },

      // ================= 7. ANDHRA PRADESH: MANGALAGIRI / AMARAVATI =================
      {
        type: "Feature",
        id: "AP-92-1",
        properties: {
          surveyNo: "92/1",
          khataNo: "312",
          ownerName: "K. Satyanarayana",
          ownerNameTe: "కె. సత్యనారాయణ (వాణిజ్య కాంప్లెక్స్)",
          guardianName: "Subbaiah (సుబ్బయ్య)",
          extentAcres: 2.50,
          extentText: "2 Acres 50 Cents",
          extentSqm: 10117,
          landType: "Commercial",
          landClassification: "NA Commercial Corridor (వ్యవసాయేతర వాణిజ్యం)",
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
        id: "AP-HOUSE-301",
        properties: {
          surveyNo: "Plot 14, Amaravati Enclave",
          khataNo: "AP-RES-101",
          ownerName: "P. Vani Prasanna",
          ownerNameTe: "పి. వాణి ప్రసన్న (నివాస భవనం)",
          guardianName: "W/o Srinivas (భర్త శ్రీనివాస్)",
          extentAcres: 0.10,
          extentText: "450 Sq. Yards (Duplex Villa)",
          extentSqm: 376,
          landType: "Houses & Residential",
          landClassification: "Approved Residential Villa (నివాస భవనం)",
          village: "Navuluru (నవులూరు గ్రామం)",
          mandal: "Mangalagiri (మంగళగిరి)",
          district: "Guntur (గుంటూరు)",
          state: "Andhra Pradesh",
          ulpin: "AP-GUN-MAN-H14-01",
          marketValuePerAcre: "₹3,00,00,000",
          totalMarketValue: "₹42,00,000",
          status: "Residential Approved (APCRDA అనుమతి)",
          statusCode: "residential",
          mutationDate: "18-Mar-2022",
          deedNumber: "MEEBHOOMI/2022/4501",
          deedSnippet: "అమరావతి రాజధాని పరిధిలోని నవులూరు గ్రామం: 450 చదరపు గజాల డూప్లెక్స్ విల్లా గృహం.",
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
          landType: "Agricultural Field",
          landClassification: "Banana & Turmeric Plantation (అరటి, పసుపు తోట)",
          village: "Navuluru (నవులూరు)",
          mandal: "Mangalagiri (మంగళగిరి)",
          district: "Guntur (గుంటూరు)",
          state: "Andhra Pradesh",
          ulpin: "AP-GUN-MAN-093-A01",
          marketValuePerAcre: "₹88,00,000",
          totalMarketValue: "₹3,34,40,000",
          status: "Clean Title (నిరభ్యంతర వ్యవసాయం)",
          statusCode: "clear",
          mutationDate: "27-May-2021",
          deedNumber: "MEEBHOOMI/2021/7812",
          deedSnippet: "పట్టాదారు: ఎన్. సుబ్బారావు తం/వెంకటరత్నం. సర్వే నెం. 93/A కృష్ణా నది సారవంతమైన డెల్టా అరటి తోట పొలం.",
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
