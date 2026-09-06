// ==========================================
// 1. FULL MULTILINGUAL DICTIONARY
// ==========================================
const TRANSLATIONS = {
  'en-IN': {
    navSos: "SOS",
    navPatient: "Patient",
    navCaregiver: "Caregiver",
    netOnline: "Cloud Sync Active",
    netOffline: "Offline Cache Mode",
    
    sessionBadge: "Daily Assisted Session",
    greeting: "Namaste, Borah Dada 🙏",
    subgreeting: "Tap any card below or listen to the Sahayak AI voice reader.",
    langLabel: "Voice / Language:",
    
    sahayakTitle: "Sahayak AI Voice Reader",
    sahayakBadge: "Audio Active",
    sahayakStatusDefault: "Click the button to listen to all daily activities and reminders.",
    btnReadScreen: "Read Screen Aloud",
    
    readScreenText: "Namaste Borah Dada. Here is your screen summary. First: you have three brain exercises available—Heritage Matching, Tea Routine Sequence, and Spot the Hornbill. Second: your afternoon medicine of Donepezil with fresh water is scheduled. Third: your family and home details are ready in your album.",
    
    gamesHeader: "🎮 Daily Brain Exercises (NER Themed)",
    gamesSubheader: "Select an activity:",
    game1Badge: "Game 1",
    game1Title: "NER Heritage Match",
    game1Desc: "Match pairs of cultural symbols.",
    game1Btn: "Play Match →",
    game2Badge: "Game 2",
    game2Title: "Assam Tea Routine",
    game2Desc: "Arrange daily tea steps in order.",
    game2Btn: "Start Sequence →",
    game3Badge: "Game 3",
    game3Title: "Spot Hornbill Motif",
    game3Desc: "Find the hidden Hornbill bird.",
    game3Btn: "Spot Target →",
    
    routineBadge: "Scheduled",
    card2Title: "Medicine & Water",
    card2Desc: "Afternoon 2:00 PM Donepezil + 1 Glass Water.",
    card2Btn: "View & Confirm →",
    reminBadge: "Reminiscence",
    card3Title: "Family & Home Info",
    card3Desc: "Where you live and your family members.",
    card3Btn: "Open Photo Album →",
    
    btnExitGame: "✕ Exit Game",
    game1PlayTitle: "Game 1: NER Heritage Match",
    game1PlaySub: "Tap cards to uncover matching pairs.",
    game1CompleteMsg: "🎉 Great Recall! Completed in ",
    
    game2PlayTitle: "Game 2: Assam Tea-Making Sequence",
    game2PlaySub: "Tap the steps in logical daily order (1 → 2 → 3).",
    game2Step1: "1. Pluck Fresh Assam Leaves",
    game2Step2: "2. Boil Water & Spices",
    game2Step3: "3. Pour Hot Morning Tea",
    game2TapText: "Tap Step",
    game2TryAgain: "Try again Dada, what is the next step?",
    game2CheckOrder: "Check order! Step ",
    game2CompleteMsg: "🎉 Correct Daily Sequence! Completed in ",
    
    game3PlayTitle: "Game 3: Spot the Hornbill Bird",
    game3PlaySub: "Tap on the 🦅 Hornbill bird hidden among the Rhinos.",
    game3Wrong: "That is a Rhino! Look for the 🦅 Hornbill.",
    game3CompleteMsg: "🎉 Found the Hornbill! Completed in ",
    gameVoiceComplete: "Great job Dada! You finished the exercise in ",

    remModalBadge: "Medicine Routine",
    remModalTitle: "Afternoon Medicine & Water",
    remModalDesc: "Please take 1 Tablet of Donepezil with 1 glass of fresh water.",
    btnRemConfirm: "✓ I HAVE TAKEN IT",
    btnRemDismiss: "Remind in 10 Minutes",
    medicineSpoken: "Reminder: Please take your afternoon medicine with a glass of water.",
    medicineTaken: "Thank you Dada. We recorded your medicine.",

    memModalTitle: "📸 Where You Live & Family",
    memCard1Title: "Your Home Address",
    memCard1Desc: "\"Dada, you live in Garamur, Majuli Island, Assam near the Satra and Brahmaputra River.\"",
    memCard2Title: "Your Family (4 Members)",
    memFamilyListHTML: `
      <li>• <strong>Malati Borah</strong> (Wife / পত্নী)</li>
      <li>• <strong>Bikash Borah</strong> (Son / পুত্ৰ)</li>
      <li>• <strong>Rupa Borah</strong> (Daughter-in-law / বোৱাৰী)</li>
      <li>• <strong>Nilav Borah</strong> (Grandson / নাতি)</li>
    `,
    btnReadMemory: "🔊 Read Family Info Aloud",
    familyMemoryText: "Borah Dada, you live in Garamur, Majuli, Assam. Your family has 4 members: your wife Malati, your son Bikash, your daughter-in-law Rupa, and your grandson Nilav.",

    cgSubhead: "Caregiver Telemetry Portal",
    cgTitle: "Patient: Mr. D. Borah (74 Yrs)",
    cgDesc: "Residence: Garamur, Majuli, Assam • Diagnosis: Mild Cognitive Impairment",
    cgSyncStatus: "● Synced",
    cgBtnRead: "Read Clinical Summary",
    cgAlertTitle: "Emergency Alert Triggered",
    cgAlertDesc: "Patient pressed the SOS emergency call button.",
    cgBtnAck: "Acknowledge",
    cgKpi1Label: "Cognitive Stability Score",
    cgKpi1Sub: "↑ Stable (+3% over 7 days)",
    cgKpi2Label: "Latest Response Latency",
    cgKpi2Sub: "Target Range: 10s – 18s",
    cgKpi3Label: "Routine Adherence",
    cgKpi3Sub: "16 of 17 Reminders Acknowledged",
    cgChartTitle: "7-Day Cognitive Performance Analytics",
    cgChartLabel: "Cognitive Stability Index (MMSE Equivalent)",
    cgDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Today'],
    cgVoiceSummary: "Caregiver clinical summary for Patient Mr. D. Borah, age 74, residing in Garamur, Majuli. Cognitive stability index is 78 out of 100, which is stable. Latest game response latency is 12.4 seconds. Daily routine adherence is 94% with 16 of 17 reminders acknowledged. Telemetry sync is active.",

    sosModalTitle: "Caregiver Alert Dispatched",
    sosModalDesc: "Emergency alert with GPS location sent to Family & Primary Health Worker.",
    btnSosDismiss: "Dismiss",
    sosSpoken: "Alert dispatched to your family caregiver and local health center."
  },

  'hi-IN': {
    navSos: "SOS",
    navPatient: "पेशेंट",
    navCaregiver: "देखभालकर्ता",
    netOnline: "क्लाउड सिंक सक्रिय",
    netOffline: "ऑफलाइन मोड सक्रिय",
    
    sessionBadge: "दैनिक सहायता सत्र",
    greeting: "नमस्ते, बोरा दादा 🙏",
    subgreeting: "नीचे दिए गए किसी भी कार्ड पर दबाएं या सहायक एआई आवाज पाठक को सुनें।",
    langLabel: "आवाज / भाषा:",
    
    sahayakTitle: "सहायक एआई आवाज पाठक",
    sahayakBadge: "ऑडियो सक्षम",
    sahayakStatusDefault: "दैनिक गतिविधियों और दवाओं को सुनने के लिए बटन दबाएं।",
    btnReadScreen: "स्क्रीन पढ़कर सुनाएं",
    
    readScreenText: "नमस्ते बोरा दादा। आपकी स्क्रीन पर तीन मुख्य भाग हैं। पहला: आपके पास तीन दिमागी खेल हैं—धरोहर मिलान, असम चाय बनाने का क्रम, और हॉर्नबिल पहचान। दूसरा: आपकी दोपहर की डोनेपेज़िल दवा का समय निर्धारित है। तीसरा: आपका घर का पता और आपके 4 परिवारजनों की जानकारी एल्बम में मौजूद है।",
    
    gamesHeader: "🎮 दैनिक दिमागी कसरत (पूर्वोत्तर थीम)",
    gamesSubheader: "एक गतिविधि चुनें:",
    game1Badge: "खेल 1",
    game1Title: "पूर्वोत्तर धरोहर मिलान",
    game1Desc: "सांस्कृतिक प्रतीकों की जोड़ियों का मिलान करें।",
    game1Btn: "खेलें →",
    game2Badge: "खेल 2",
    game2Title: "असम चाय बनाने का क्रम",
    game2Desc: "चाय बनाने के चरणों को सही क्रम में लगाएं।",
    game2Btn: "क्रम शुरू करें →",
    game3Badge: "खेल 3",
    game3Title: "हॉर्नबिल पक्षी खोजें",
    game3Desc: "गैंडों के बीच छिपा हॉर्नबिल पक्षी ढूंढें।",
    game3Btn: "पक्षी ढूंढें →",
    
    routineBadge: "निर्धारित",
    card2Title: "दवा और पानी की याद",
    card2Desc: "दोपहर 2:00 बजे डोनेपेज़िल गोली + 1 गिलास ताजा पानी।",
    card2Btn: "जांचें और पुष्टि करें →",
    reminBadge: "परिवार व घर",
    card3Title: "परिवार और घर का पता",
    card3Desc: "आप कहां रहते हैं और आपके परिवार के सदस्य।",
    card3Btn: "जानकारी देखें →",
    
    btnExitGame: "✕ खेल से बाहर निकलें",
    game1PlayTitle: "खेल 1: पूर्वोत्तर धरोहर मिलान",
    game1PlaySub: "कार्ड पलटकर सही जोड़ियां बनाएं।",
    game1CompleteMsg: "🎉 बहुत बढ़िया स्मरण शक्ति! समय: ",
    
    game2PlayTitle: "खेल 2: असम चाय बनाने का दैनिक क्रम",
    game2PlaySub: "दैनिक क्रम अनुसार चरणों पर दबाएं (1 → 2 → 3)।",
    game2Step1: "1. ताजी असम चाय की पत्तियां तोड़ें",
    game2Step2: "2. पानी और मसाले उबालें",
    game2Step3: "3. गरमा-गरम सुबह की चाय परोसें",
    game2TapText: "दबाएं",
    game2TryAgain: "फिर से प्रयास करें दादा, अगला चरण कौन सा है?",
    game2CheckOrder: "क्रम जांचें! चरण ",
    game2CompleteMsg: "🎉 बिल्कुल सही दैनिक क्रम! समय: ",
    
    game3PlayTitle: "खेल 3: हॉर्नबिल पक्षी पहचानें",
    game3PlaySub: "गैंडों के बीच छिपे 🦅 हॉर्नबिल पक्षी पर दबाएं।",
    game3Wrong: "यह गैंडा है! 🦅 हॉर्नबिल पक्षी को खोजें।",
    game3CompleteMsg: "🎉 आपने हॉर्नबिल खोज लिया! समय: ",
    gameVoiceComplete: "बहुत बढ़िया दादा! आपने खेल पूरा किया ",

    remModalBadge: "दवा दिनचर्या",
    remModalTitle: "दोपहर की दवा और पानी",
    remModalDesc: "कृपया 1 गिलास ताजे पानी के साथ 1 डोनेपेज़िल गोली लें।",
    btnRemConfirm: "✓ मैंने दवा ले ली है",
    btnRemDismiss: "10 मिनट बाद याद दिलाएं",
    medicineSpoken: "याद दिलाना: कृपया दोपहर की दवा 1 गिलास पानी के साथ लें।",
    medicineTaken: "धन्यवाद दादा। आपकी दवा दर्ज कर ली गई है।",

    memModalTitle: "📸 आपका घर और परिवार",
    memCard1Title: "आपके घर का पता",
    memCard1Desc: "\"बोरा दादा, आप असम के माजुली द्वीप में गरमूर क्षेत्र में ब्रह्मपुत्र नदी के पास रहते हैं।\"",
    memCard2Title: "आपका परिवार (4 सदस्य)",
    memFamilyListHTML: `
      <li>• <strong>मालती बोरा</strong> (पत्नी)</li>
      <li>• <strong>बिकाश बोरा</strong> (बेटा)</li>
      <li>• <strong>रूपा बोरा</strong> (बहू)</li>
      <li>• <strong>नीलव बोरा</strong> (पोता)</li>
    `,
    btnReadMemory: "🔊 परिवार की जानकारी सुनें",
    familyMemoryText: "बोरा दादा, आप असम के माजुली द्वीप के गरमूर में रहते हैं। आपके परिवार में 4 सदस्य हैं: आपकी पत्नी मालती, आपका बेटा बिकाश, आपकी बहू रूपा, और आपका पोता नीलव।",

    cgSubhead: "देखभालकर्ता टेलीमेट्री पोर्टल",
    cgTitle: "मरीज: श्री डी. बोरा (74 वर्ष)",
    cgDesc: "निवास: गरमूर, माजुली, असम • निदान: प्रारंभिक स्मृति विकार",
    cgSyncStatus: "● क्लाउड सिंक",
    cgBtnRead: "क्लिनिकल रिपोर्ट सुनें",
    cgAlertTitle: "आपातकालीन चेतावनी सक्रिय",
    cgAlertDesc: "रोगी ने आपातकालीन SOS बटन दबाया है।",
    cgBtnAck: "स्वीकार करें",
    cgKpi1Label: "संज्ञानात्मक स्थिरता स्कोर",
    cgKpi1Sub: "↑ स्थिर (7 दिनों में +3%)",
    cgKpi2Label: "नवीनतम प्रतिक्रिया गति",
    cgKpi2Sub: "सामान्य सीमा: 10s – 18s",
    cgKpi3Label: "दिनचर्या दवा अनुपालन",
    cgKpi3Sub: "17 में से 16 खुराक ली गईं",
    cgChartTitle: "7-दिवसीय संज्ञानात्मक स्थिरता रुझान",
    cgChartLabel: "संज्ञानात्मक स्थिरता सूचकांक (MMSE समकक्ष)",
    cgDays: ['सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि', 'आज'],
    cgVoiceSummary: "देखभालकर्ता सारांश: मरीज श्री डी. बोरा, उम्र 74 वर्ष, निवासी गरमूर, माजुली। संज्ञानात्मक स्थिरता स्कोर 100 में से 78 है जो सामान्य है। खेल की प्रतिक्रिया गति 12.4 सेकंड है। दिनचर्या दवा पालन 94 प्रतिशत है।",

    sosModalTitle: "देखभालकर्ता को अलर्ट भेजा गया",
    sosModalDesc: "जीपीएस स्थान के साथ आपातकालीन अलर्ट परिवार और स्वास्थ्य कार्यकर्ता को भेजा गया।",
    btnSosDismiss: "बंद करें",
    sosSpoken: "आपातकालीन चेतावनी आपके परिवार और स्वास्थ्य केंद्र को भेज दी गई है।"
  },

  'as-IN': {
    navSos: "SOS",
    navPatient: "প্ৰেচেন্ট",
    navCaregiver: "তত্ত্বাৱধায়ক",
    netOnline: "ক্লাউড সংযোগ সক্ৰিয়",
    netOffline: "অফলাইন মোড সক্ৰিয়",
    
    sessionBadge: "দৈনিক সাহায্য সত্ৰ",
    greeting: "নমস্কাৰ, বৰা ককা 🙏",
    subgreeting: "তলৰ কাৰ্ডত টিপক বা সহায়ক এআইৰ মাত শুনক।",
    langLabel: "মাত / ভাষা:",
    
    sahayakTitle: "সহায়ক এআই কণ্ঠ পাঠক",
    sahayakBadge: "অডিঅ' সাজু",
    sahayakStatusDefault: "দৈনিক কাৰ্যসূচী আৰু দৰৱৰ তালিকা শুনিবলৈ বুটামত টিপক।",
    btnReadScreen: "পঢ়ি শুনোৱা",
    
    readScreenText: "নমস্কাৰ বৰা ককা। এইটো আপোনাৰ দৈনিক পৰ্দা। প্ৰথমতে: তিনিটা মগজুৰ খেল আছে—প্ৰতীক মিলোৱা, চাহ বনোৱা ক্ৰম, আৰু ধনেশ পক্ষী চিনাক্তকৰণ। দ্বিতীয়তে: দুপৰীয়াৰ দৰৱ আৰু পানী খোৱাৰ সোঁৱৰণী আছে। তৃতীয়তে: আপোনাৰ মাজুলীৰ ঘৰ আৰু পৰিয়ালৰ ৪ জন সদস্যৰ তথ্য ইয়াত আছে।",
    
    gamesHeader: "🎮 দৈনিক মগজুৰ অনুশীলন (উত্তৰ-পূব থিম)",
    gamesSubheader: "এটা কাৰ্যসূচী বাছক:",
    game1Badge: "খেল ১",
    game1Title: "উত্তৰ-পূব ঐতিহ্য মিলোৱা",
    game1Desc: "সাংস্কৃতিক প্ৰতীকৰ যোৰ মিলাওক।",
    game1Btn: "খেলক →",
    game2Badge: "খেল ২",
    game2Title: "অসম চাহ বনোৱা ক্ৰম",
    game2Desc: "চাহ বনোৱাৰ নিয়মবোৰ সঠিক ক্ৰমত সজাওক।",
    game2Btn: "ক্ৰম আৰম্ভ কৰক →",
    game3Badge: "খেল ৩",
    game3Title: "ধনেশ পক্ষী চিনাক্ত কৰক",
    game3Desc: "গঁড়বোৰৰ মাজত লুকাই থকা ধনেশ পক্ষী বিচাৰক।",
    game3Btn: "পক্ষী বিচাৰক →",
    
    routineBadge: "নিৰ্ধাৰিত",
    card2Title: "দৰৱ আৰু পানীৰ সোঁৱৰণী",
    card2Desc: "দুপৰীয়া ২:০০ বজাৰ দৰৱ আৰু ১ গিলাচ পানী।",
    card2Btn: "নিশ্চিত কৰক →",
    reminBadge: "পৰিয়াল আৰু ঘৰ",
    card3Title: "পৰিয়াল আৰু ঘৰৰ ঠিকনা",
    card3Desc: "আপুনি ক'ত থাকে আৰু আপোনাৰ পৰিয়ালৰ সদস্য।",
    card3Btn: "তথ্য চাওক →",
    
    btnExitGame: "✕ খেলৰ পৰা ওলাই যাওক",
    game1PlayTitle: "খেল ১: উত্তৰ-পূব ঐতিহ্য মিলোৱা",
    game1PlaySub: "কাৰ্ড ওলোটাই সঠিক যোৰ মিলাওক।",
    game1CompleteMsg: "🎉 অপূৰ্ব স্মৃতিশক্তি! সমাপ্তিৰ সময়: ",
    
    game2PlayTitle: "খেল ২: অসম চাহ প্ৰস্তুতিৰ দৈনিক ক্ৰম",
    game2PlaySub: "দৈনিক ক্ৰম অনুসৰি কাৰ্ডত টিপক (১ → ২ → ৩)।",
    game2Step1: "১. সতেজ অসম চাহ পাত চিঙক",
    game2Step2: "২. পানী আৰু মচলা উতলাওক",
    game2Step3: "৩. গৰম পুৱাৰ চাহ বাকি দিয়ক",
    game2TapText: "টিপক",
    game2TryAgain: "পুনৰ চেষ্টা কৰক ককা, পৰৱৰ্তী স্তৰ কি?",
    game2CheckOrder: "ক্ৰম পৰীক্ষা কৰক! স্তৰ ",
    game2CompleteMsg: "🎉 সঠিক দৈনিক ক্ৰম! সময়: ",
    
    game3PlayTitle: "খেল ৩: ধনেশ পক্ষী চিনাক্তকৰণ",
    game3PlaySub: "গঁড়বোৰৰ মাজত লুকাই থকা 🦅 ধনেশ পক্ষীটোত টিপক।",
    game3Wrong: "সেইটো গঁড়হে! 🦅 ধনেশ পক্ষীটোহে বিচাৰক।",
    game3CompleteMsg: "🎉 ধনেশ পক্ষী বিচাৰি পালে! সময়: ",
    gameVoiceComplete: "বৰ ধুনিয়া ককা! আপুনি খেল সমাপ্ত কৰিলে ",

    remModalBadge: "দৰৱৰ সময়সূচী",
    remModalTitle: "দুপৰীয়াৰ দৰৱ আৰু পানী",
    remModalDesc: "অনুগ্ৰহ কৰি এগিলাচ পানীৰ সৈতে ১ টা ডনেপেজিল টেবলেট খাওক।",
    btnRemConfirm: "✓ মই দৰৱ খালোঁ",
    btnRemDismiss: "১০ মিনিট পিছত সোঁৱৰাব",
    medicineSpoken: "সোঁৱৰণী: অনুগ্ৰহ কৰি দুপৰীয়াৰ দৰৱ এগিলাচ পানীৰ সৈতে খাওক।",
    medicineTaken: "ধন্যবাদ ককা। আপুনি দৰৱ খোৱাটো নিশ্চিত কৰা হ'ল।",

    memModalTitle: "📸 আপোনাৰ ঘৰ আৰু পৰিয়াল",
    memCard1Title: "আপোনাৰ নিজৰ ঘৰৰ ঠিকনা",
    memCard1Desc: "\"বৰা ককা, আপোনাৰ ঘৰ মাজুলীৰ গড়মূৰত ব্ৰহ্মপুত্ৰ নদীৰ ওচৰত।\"",
    memCard2Title: "আপোনাৰ পৰিয়াল (৪ জন সদস্য)",
    memFamilyListHTML: `
      <li>• <strong>মালতী বৰা</strong> (পত্নী / Wife)</li>
      <li>• <strong>বিকাশ বৰা</strong> (পুত্ৰ / Son)</li>
      <li>• <strong>ৰূপা বৰা</strong> (বোৱাৰী / Daughter-in-law)</li>
      <li>• <strong>নীলাভ বৰা</strong> (নাতি / Grandson)</li>
    `,
    btnReadMemory: "🔊 পৰিয়ালৰ তথ্য পঢ়ি শুনোৱা",
    familyMemoryText: "বৰা ককা, আপুনি মাজুলীৰ গড়মূৰত থাকে। আপোনাৰ পৰিয়ালত ৪ জন সদস্য আছে: আপোনাৰ পত্নী মালতী, পুত্ৰ বিকাশ, বোৱাৰী ৰূপা, আৰু আপোনাৰ মৰমৰ নাতি নীলাভ।",

    cgSubhead: "তত্ত্বাৱধায়ক টেলিমেট্ৰি প'ৰ্টেল",
    cgTitle: "ৰোগী: শ্ৰীযুত ডি. বৰা (৭৪ বছৰ)",
    cgDesc: "ঠিকনা: গড়মূৰ, মাজুলী, অসম • ৰোগ নিৰ্ণয়: প্ৰাৰম্ভিক স্মৃতিশক্তি হ্ৰাস",
    cgSyncStatus: "● ক্লাউড সংযুক্ত",
    cgBtnRead: "ৰোগীৰ প্ৰতিবেদন শুনক",
    cgAlertTitle: "আপদকালীন বাৰ্তা সক্ৰিয়",
    cgAlertDesc: "ৰোগীয়ে জৰুৰীকালীন SOS বুটাম টিপিছে।",
    cgBtnAck: "গ্ৰহণ কৰক",
    cgKpi1Label: "মানসিক সুস্থতাৰ স্ক'ৰ",
    cgKpi1Sub: "↑ সুস্থিৰ (৭ দিনত +৩%)",
    cgKpi2Label: "শেহতীয়া প্ৰতিক্ৰিয়াৰ সময়",
    cgKpi2Sub: "স্বাভাৱিক সীমা: ১০s – ১৮s",
    cgKpi3Label: "দৈনিক নিয়ম পালন",
    cgKpi3Sub: "১৭ টা পালিৰ ভিতৰত ১৬ টা সম্পন্ন",
    cgChartTitle: "৭-দিনীয়া মানসিক ক্ষমতাৰ অগ্ৰগতি",
    cgChartLabel: "মানসিক স্থিৰতা সূচক (MMSE সমতুল্য)",
    cgDays: ['সোম', 'মঙ্গল', 'বুধ', 'বৃহ', 'শুক্ৰ', 'শনি', 'আজি'],
    cgVoiceSummary: "তত্ত্বাৱধায়ক প্ৰতিবেদন: ৰোগী শ্ৰীযুত ডি. বৰা, বয়স ৭৪ বছৰ, ঠিকনা গড়মূৰ, মাজুলী। মানসিক সুস্থতাৰ স্ক'ৰ ৭৮ শতাংশ। খেলৰ প্ৰতিক্ৰিয়াৰ সময় ১২.৪ চেকেণ্ড। দৈনিক নিয়ম পালন ৯৪ শতাংশ।",

    sosModalTitle: "তত্ত্বাৱধায়কলৈ বাৰ্তা প্ৰেৰণ কৰা হ'ল",
    sosModalDesc: "জিপিএছ স্থানৰ সৈতে আপদকালীন বাৰ্তা পৰিয়াল আৰু স্বাস্থ্যকৰ্মীক প্ৰেৰণ কৰা হৈছে।",
    btnSosDismiss: "বন্ধ কৰক",
    sosSpoken: "আপদকালীন বাৰ্তা আপোনাৰ পৰিয়াল আৰু স্বাস্থ্য কেন্দ্ৰলৈ প্ৰেৰণ কৰা হৈছে।"
  }
};

// ==========================================
// 2. VOICE SYNTHESIS ENGINE
// ==========================================
let availableVoices = [];

function loadBrowserVoices() {
  if ('speechSynthesis' in window) {
    availableVoices = window.speechSynthesis.getVoices();
  }
}
if ('speechSynthesis' in window) {
  loadBrowserVoices();
  window.speechSynthesis.onvoiceschanged = loadBrowserVoices;
}

function speak(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const langKey = document.getElementById('lang-select')?.value || 'en-IN';
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.86;

  if (availableVoices.length === 0) {
    availableVoices = window.speechSynthesis.getVoices();
  }

  let matchedVoice = null;
  if (langKey === 'hi-IN') {
    matchedVoice = availableVoices.find(v => v.lang.includes('hi') || v.lang.includes('HI'));
    utterance.lang = 'hi-IN';
  } else if (langKey === 'as-IN') {
    matchedVoice = availableVoices.find(v => v.lang.includes('as') || v.lang.includes('bn') || v.lang.includes('hi'));
    utterance.lang = matchedVoice ? matchedVoice.lang : 'hi-IN';
  } else {
    matchedVoice = availableVoices.find(v => v.lang.includes('en-IN') || (v.lang.includes('en') && v.name.includes('India')));
    utterance.lang = 'en-IN';
  }

  if (matchedVoice) utterance.voice = matchedVoice;
  window.speechSynthesis.speak(utterance);
}

// ==========================================
// 3. MASTER SYNCHRONIZED LANGUAGE SWITCHER
// ==========================================
function onLanguageChanged() {
  const langSelect = document.getElementById('lang-select');
  if (!langSelect) return;
  const lang = langSelect.value;
  const d = TRANSLATIONS[lang] || TRANSLATIONS['en-IN'];

  // Top Header
  const navSos = document.getElementById('nav-sos');
  if (navSos) navSos.textContent = d.navSos;
  const navPat = document.getElementById('nav-patient');
  if (navPat) navPat.textContent = d.navPatient;
  const navCg = document.getElementById('nav-caregiver');
  if (navCg) navCg.textContent = d.navCaregiver;
  syncNetworkStatus();

  // Patient Greetings
  const sessionBadge = document.getElementById('ui-session-badge');
  if (sessionBadge) sessionBadge.textContent = d.sessionBadge;
  const uiGreet = document.getElementById('ui-greeting');
  if (uiGreet) uiGreet.textContent = d.greeting;
  const uiSub = document.getElementById('ui-subgreeting');
  if (uiSub) uiSub.textContent = d.subgreeting;
  const uiLang = document.getElementById('ui-lang-label');
  if (uiLang) uiLang.textContent = d.langLabel;

  // Sahayak AI Card
  const sahayakTitle = document.getElementById('sahayak-title');
  if (sahayakTitle) sahayakTitle.textContent = d.sahayakTitle;
  const sahayakBadge = document.getElementById('sahayak-badge');
  if (sahayakBadge) sahayakBadge.textContent = d.sahayakBadge;
  const sahayakStatus = document.getElementById('sahayak-status');
  if (sahayakStatus) sahayakStatus.textContent = d.sahayakStatusDefault;
  const btnRead = document.getElementById('btn-read-screen');
  if (btnRead) btnRead.textContent = d.btnReadScreen;

  // Games Hub
  const gHead = document.getElementById('ui-games-header');
  if (gHead) gHead.textContent = d.gamesHeader;
  const gSub = document.getElementById('ui-games-subheader');
  if (gSub) gSub.textContent = d.gamesSubheader;

  const g1B = document.getElementById('game1-badge');
  if (g1B) g1B.textContent = d.game1Badge;
  const g1T = document.getElementById('game1-title');
  if (g1T) g1T.textContent = d.game1Title;
  const g1D = document.getElementById('game1-desc');
  if (g1D) g1D.textContent = d.game1Desc;
  const g1Btn = document.getElementById('game1-btn');
  if (g1Btn) g1Btn.textContent = d.game1Btn;

  const g2B = document.getElementById('game2-badge');
  if (g2B) g2B.textContent = d.game2Badge;
  const g2T = document.getElementById('game2-title');
  if (g2T) g2T.textContent = d.game2Title;
  const g2D = document.getElementById('game2-desc');
  if (g2D) g2D.textContent = d.game2Desc;
  const g2Btn = document.getElementById('game2-btn');
  if (g2Btn) g2Btn.textContent = d.game2Btn;

  const g3B = document.getElementById('game3-badge');
  if (g3B) g3B.textContent = d.game3Badge;
  const g3T = document.getElementById('game3-title');
  if (g3T) g3T.textContent = d.game3Title;
  const g3D = document.getElementById('game3-desc');
  if (g3D) g3D.textContent = d.game3Desc;
  const g3Btn = document.getElementById('game3-btn');
  if (g3Btn) g3Btn.textContent = d.game3Btn;

  // Routine & Memory Cards
  const routB = document.getElementById('routine-badge');
  if (routB) routB.textContent = d.routineBadge;
  const c2T = document.getElementById('card2-title');
  if (c2T) c2T.textContent = d.card2Title;
  const c2D = document.getElementById('card2-desc');
  if (c2D) c2D.textContent = d.card2Desc;
  const c2Btn = document.getElementById('card2-btn');
  if (c2Btn) c2Btn.textContent = d.card2Btn;

  const remB = document.getElementById('remin-badge');
  if (remB) remB.textContent = d.reminBadge;
  const c3T = document.getElementById('card3-title');
  if (c3T) c3T.textContent = d.card3Title;
  const c3D = document.getElementById('card3-desc');
  if (c3D) c3D.textContent = d.card3Desc;
  const c3Btn = document.getElementById('card3-btn');
  if (c3Btn) c3Btn.textContent = d.card3Btn;

  // Caregiver View
  const cgSub = document.getElementById('cg-subhead');
  if (cgSub) cgSub.textContent = d.cgSubhead;
  const cgT = document.getElementById('cg-title');
  if (cgT) cgT.textContent = d.cgTitle;
  const cgD = document.getElementById('cg-desc');
  if (cgD) cgD.textContent = d.cgDesc;
  const cgSync = document.getElementById('cg-sync-status');
  if (cgSync) cgSync.textContent = d.cgSyncStatus;
  const btnReadCg = document.getElementById('btn-read-cg');
  if (btnReadCg) btnReadCg.textContent = d.cgBtnRead;

  const cgAltTitle = document.getElementById('cg-alert-title');
  if (cgAltTitle) cgAltTitle.textContent = d.cgAlertTitle;
  const cgAltDesc = document.getElementById('cg-alert-desc');
  if (cgAltDesc) cgAltDesc.textContent = d.cgAlertDesc;
  const cgBtnAck = document.getElementById('cg-btn-ack');
  if (cgBtnAck) cgBtnAck.textContent = d.cgBtnAck;

  const k1L = document.getElementById('cg-kpi1-label');
  if (k1L) k1L.textContent = d.cgKpi1Label;
  const k1S = document.getElementById('cg-kpi1-sub');
  if (k1S) k1S.textContent = d.cgKpi1Sub;
  const k2L = document.getElementById('cg-kpi2-label');
  if (k2L) k2L.textContent = d.cgKpi2Label;
  const k2S = document.getElementById('cg-kpi2-sub');
  if (k2S) k2S.textContent = d.cgKpi2Sub;
  const k3L = document.getElementById('cg-kpi3-label');
  if (k3L) k3L.textContent = d.cgKpi3Label;
  const k3S = document.getElementById('cg-kpi3-sub');
  if (k3S) k3S.textContent = d.cgKpi3Sub;

  const cgChartTitle = document.getElementById('cg-chart-title');
  if (cgChartTitle) cgChartTitle.textContent = d.cgChartTitle;

  // Modals
  const rmb = document.getElementById('modal-rem-badge');
  if (rmb) rmb.textContent = d.remModalBadge;
  const rmt = document.getElementById('modal-rem-title');
  if (rmt) rmt.textContent = d.remModalTitle;
  const rmd = document.getElementById('modal-rem-desc');
  if (rmd) rmd.textContent = d.remModalDesc;
  const brmc = document.getElementById('btn-rem-confirm');
  if (brmc) brmc.textContent = d.btnRemConfirm;
  const brmd = document.getElementById('btn-rem-dismiss');
  if (brmd) brmd.textContent = d.btnRemDismiss;

  const mmt = document.getElementById('modal-mem-title');
  if (mmt) mmt.textContent = d.memModalTitle;
  const mc1t = document.getElementById('mem-card1-title');
  if (mc1t) mc1t.textContent = d.memCard1Title;
  const mc1d = document.getElementById('mem-card1-desc');
  if (mc1d) mc1d.textContent = d.memCard1Desc;
  const mc2t = document.getElementById('mem-card2-title');
  if (mc2t) mc2t.textContent = d.memCard2Title;
  
  const famList = document.getElementById('mem-family-list');
  if (famList) famList.innerHTML = d.memFamilyListHTML;

  const brmm = document.getElementById('btn-read-memory');
  if (brmm) brmm.textContent = d.btnReadMemory;

  const mst = document.getElementById('modal-sos-title');
  if (mst) mst.textContent = d.sosModalTitle;
  const msd = document.getElementById('modal-sos-desc');
  if (msd) msd.textContent = d.sosModalDesc;
  const bsos = document.getElementById('btn-sos-dismiss');
  if (bsos) bsos.textContent = d.btnSosDismiss;

  const exitBtn = document.getElementById('btn-exit-game');
  if (exitBtn) exitBtn.textContent = d.btnExitGame;

  if (!document.getElementById('caregiver-view').classList.contains('hidden')) {
    renderChart();
  }
}

function speakInstructions() {
  const lang = document.getElementById('lang-select')?.value || 'en-IN';
  speak(TRANSLATIONS[lang].readScreenText);
}

function speakCaregiverSummary() {
  const lang = document.getElementById('lang-select')?.value || 'en-IN';
  speak(TRANSLATIONS[lang].cgVoiceSummary);
}

// ==========================================
// 4. NETWORK & VIEW SWITCHER (2-TAB SYSTEM)
// ==========================================
window.addEventListener('online', syncNetworkStatus);
window.addEventListener('offline', syncNetworkStatus);

function syncNetworkStatus() {
  const badge = document.getElementById('network-badge');
  const text = document.getElementById('net-status-text');
  if (!badge || !text) return;
  const lang = document.getElementById('lang-select')?.value || 'en-IN';
  const d = TRANSLATIONS[lang] || TRANSLATIONS['en-IN'];

  if (navigator.onLine) {
    badge.className = "bg-emerald-950 text-emerald-400 border border-emerald-500/80 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full w-max flex items-center gap-1 mt-0.5";
    text.textContent = d.netOnline;
  } else {
    badge.className = "bg-amber-950 text-amber-400 border border-amber-500/80 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full w-max flex items-center gap-1 mt-0.5";
    text.textContent = d.netOffline;
  }
}

function switchView(view) {
  const patientEl = document.getElementById('patient-view');
  const caregiverEl = document.getElementById('caregiver-view');
  const tabPatient = document.getElementById('tab-patient');
  const tabCaregiver = document.getElementById('tab-caregiver');

  if (view === 'patient') {
    patientEl.classList.remove('hidden');
    caregiverEl.classList.add('hidden');
    tabPatient.className = "bg-emerald-600 text-white text-xs sm:text-sm font-bold px-3 sm:px-3.5 py-2 rounded-xl transition shadow";
    tabCaregiver.className = "bg-slate-800 text-slate-300 text-xs sm:text-sm font-bold px-3 sm:px-3.5 py-2 rounded-xl hover:bg-slate-700 transition";
  } else {
    patientEl.classList.add('hidden');
    caregiverEl.classList.remove('hidden');
    tabCaregiver.className = "bg-emerald-600 text-white text-xs sm:text-sm font-bold px-3 sm:px-3.5 py-2 rounded-xl transition shadow";
    tabPatient.className = "bg-slate-800 text-slate-300 text-xs sm:text-sm font-bold px-3 sm:px-3.5 py-2 rounded-xl hover:bg-slate-700 transition";
    renderChart();
  }
}

// ==========================================
// 5. GAME ENGINES
// ==========================================
let timerStart = 0;

function openPlayground(title, subtitle) {
  const playground = document.getElementById('game-playground');
  const titleEl = document.getElementById('playground-title');
  const subEl = document.getElementById('playground-subtitle');
  const feedEl = document.getElementById('game-feedback');

  if (playground) playground.classList.remove('hidden');
  if (titleEl) titleEl.textContent = title;
  if (subEl) subEl.textContent = subtitle;
  if (feedEl) feedEl.innerHTML = '';
  
  timerStart = Date.now();
  playground.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closePlayground() {
  const playground = document.getElementById('game-playground');
  if (playground) playground.classList.add('hidden');
}

function recordGameLatency() {
  const timeTaken = ((Date.now() - timerStart) / 1000).toFixed(1);
  const metricLat = document.getElementById('metric-latency');
  if (metricLat) metricLat.textContent = `${timeTaken}s`;
  
  const lang = document.getElementById('lang-select')?.value || 'en-IN';
  speak(`${TRANSLATIONS[lang].gameVoiceComplete} ${timeTaken} seconds.`);
  return timeTaken;
}

// --- GAME 1: HERITAGE MATCH ---
const matchDeck = [
  { icon: '🦏', matchKey: 'rhino' },
  { icon: '🦏', matchKey: 'rhino' },
  { icon: '🍃', matchKey: 'tea' },
  { icon: '🍃', matchKey: 'tea' }
];
let flipped = [];
let completedPairs = 0;
let isLockBoard = false;

function startMemoryGame() {
  const lang = document.getElementById('lang-select')?.value || 'en-IN';
  const d = TRANSLATIONS[lang];

  openPlayground(d.game1PlayTitle, d.game1PlaySub);
  const body = document.getElementById('playground-body');
  body.innerHTML = '<div id="match-grid" class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-md mx-auto"></div>';
  const grid = document.getElementById('match-grid');
  
  flipped = [];
  completedPairs = 0;
  isLockBoard = false;

  const shuffled = [...matchDeck].sort(() => Math.random() - 0.5);
  shuffled.forEach((item) => {
    const btn = document.createElement('button');
    btn.className = "h-20 sm:h-24 bg-slate-800 border-2 border-slate-700 hover:border-emerald-400 rounded-2xl text-2xl sm:text-3xl font-black flex items-center justify-center transition senior-tap";
    btn.dataset.matchKey = item.matchKey;
    btn.dataset.icon = item.icon;
    btn.dataset.revealed = "false";
    btn.innerHTML = '❓';
    
    btn.onclick = () => {
      if (isLockBoard || btn.dataset.revealed === "true" || flipped.includes(btn)) return;
      
      btn.innerHTML = btn.dataset.icon;
      btn.classList.add('bg-slate-700', 'border-emerald-400');
      flipped.push(btn);

      if (flipped.length === 2) {
        isLockBoard = true;
        const [c1, c2] = flipped;
        
        if (c1.dataset.matchKey === c2.dataset.matchKey) {
          c1.dataset.revealed = "true";
          c2.dataset.revealed = "true";
          completedPairs++;
          flipped = [];
          isLockBoard = false;

          if (completedPairs === 2) {
            const timeTaken = recordGameLatency();
            document.getElementById('game-feedback').innerHTML = `${d.game1CompleteMsg} ${timeTaken}s`;
          }
        } else {
          setTimeout(() => {
            c1.innerHTML = '❓';
            c2.innerHTML = '❓';
            c1.classList.remove('bg-slate-700', 'border-emerald-400');
            c2.classList.remove('bg-slate-700', 'border-emerald-400');
            flipped = [];
            isLockBoard = false;
          }, 800);
        }
      }
    };
    grid.appendChild(btn);
  });
}

// --- GAME 2: TEA ROUTINE SEQUENCE ---
let nextStepNeeded = 1;

function startSequenceGame() {
  const lang = document.getElementById('lang-select')?.value || 'en-IN';
  const d = TRANSLATIONS[lang];

  openPlayground(d.game2PlayTitle, d.game2PlaySub);
  const body = document.getElementById('playground-body');
  body.innerHTML = '<div id="sequence-grid" class="flex flex-col gap-2.5 sm:gap-3 max-w-md mx-auto"></div>';
  const grid = document.getElementById('sequence-grid');
  nextStepNeeded = 1;

  const currentTeaSteps = [
    { step: 1, text: d.game2Step1, icon: "🍃" },
    { step: 2, text: d.game2Step2, icon: "🔥" },
    { step: 3, text: d.game2Step3, icon: "☕" }
  ];

  const shuffled = [...currentTeaSteps].sort(() => Math.random() - 0.5);
  shuffled.forEach((s) => {
    const btn = document.createElement('button');
    btn.className = "p-3 sm:p-4 bg-slate-800 hover:bg-slate-700 border-2 border-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-between font-extrabold text-white text-xs sm:text-sm transition senior-tap";
    btn.innerHTML = `<span>${s.icon} ${s.text}</span> <span class="text-[10px] sm:text-xs text-teal-400">${d.game2TapText}</span>`;
    
    btn.onclick = () => {
      if (s.step === nextStepNeeded) {
        btn.classList.remove('bg-slate-800', 'border-teal-500');
        btn.classList.add('bg-emerald-800', 'border-emerald-400', 'opacity-80');
        btn.disabled = true;
        nextStepNeeded++;

        if (nextStepNeeded > 3) {
          const timeTaken = recordGameLatency();
          document.getElementById('game-feedback').innerHTML = `${d.game2CompleteMsg} ${timeTaken}s`;
        }
      } else {
        speak(d.game2TryAgain);
        document.getElementById('game-feedback').innerHTML = `<span class="text-amber-400">${d.game2CheckOrder} ${nextStepNeeded}</span>`;
      }
    };
    grid.appendChild(btn);
  });
}

// --- GAME 3: SPOT THE HORNBILL ---
function startSpotterGame() {
  const lang = document.getElementById('lang-select')?.value || 'en-IN';
  const d = TRANSLATIONS[lang];

  openPlayground(d.game3PlayTitle, d.game3PlaySub);
  const body = document.getElementById('playground-body');
  body.innerHTML = '<div id="spotter-grid" class="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 max-w-lg mx-auto"></div>';
  const grid = document.getElementById('spotter-grid');

  const items = ['🦏', '🦏', '🦅', '🦏', '🦏', '🦏'].sort(() => Math.random() - 0.5);
  items.forEach((symbol) => {
    const btn = document.createElement('button');
    btn.className = "h-16 sm:h-20 bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 hover:border-amber-400 rounded-xl sm:rounded-2xl text-2xl sm:text-3xl font-black flex items-center justify-center transition senior-tap";
    btn.innerHTML = symbol;
    
    btn.onclick = () => {
      if (symbol === '🦅') {
        btn.classList.add('bg-amber-600', 'border-amber-300');
        const timeTaken = recordGameLatency();
        document.getElementById('game-feedback').innerHTML = `${d.game3CompleteMsg} ${timeTaken}s`;
      } else {
        document.getElementById('game-feedback').innerHTML = `<span class="text-amber-400">${d.game3Wrong}</span>`;
      }
    };
    grid.appendChild(btn);
  });
}

// ==========================================
// 6. MODALS & SOS LOGIC
// ==========================================
function openReminderModal() {
  const lang = document.getElementById('lang-select')?.value || 'en-IN';
  document.getElementById('reminder-modal')?.classList.remove('hidden');
  speak(TRANSLATIONS[lang].medicineSpoken);
}

function confirmReminder() {
  const lang = document.getElementById('lang-select')?.value || 'en-IN';
  closeModal('reminder-modal');
  speak(TRANSLATIONS[lang].medicineTaken);
}

function openReminiscenceModal() {
  document.getElementById('reminiscence-modal')?.classList.remove('hidden');
}

function speakFamilyMemory() {
  const lang = document.getElementById('lang-select')?.value || 'en-IN';
  speak(TRANSLATIONS[lang].familyMemoryText);
}

function triggerSOS() {
  const lang = document.getElementById('lang-select')?.value || 'en-IN';
  document.getElementById('sos-modal')?.classList.remove('hidden');
  document.getElementById('caregiver-alert-box')?.classList.remove('hidden');
  speak(TRANSLATIONS[lang].sosSpoken);
}

function dismissCaregiverAlert() {
  document.getElementById('caregiver-alert-box')?.classList.add('hidden');
}

function closeModal(id) {
  document.getElementById(id)?.classList.add('hidden');
}

// ==========================================
// 7. MULTILINGUAL CHART.JS INITIALIZER
// ==========================================
let chartObj = null;

function renderChart() {
  const canvas = document.getElementById('cognitiveChart');
  if (!canvas) return;

  const lang = document.getElementById('lang-select')?.value || 'en-IN';
  const d = TRANSLATIONS[lang] || TRANSLATIONS['en-IN'];

  if (chartObj) {
    chartObj.destroy();
  }

  const ctx = canvas.getContext('2d');
  chartObj = new Chart(ctx, {
    type: 'line',
    data: {
      labels: d.cgDays,
      datasets: [{
        label: d.cgChartLabel,
        data: [68, 71, 70, 74, 73, 76, 78],
        borderColor: '#059669',
        backgroundColor: 'rgba(5, 150, 105, 0.12)',
        fill: true,
        tension: 0.35,
        borderWidth: 3,
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { min: 50, max: 100, grid: { color: '#f1f5f9' } },
        x: { grid: { display: false } }
      }
    }
  });
}

// Startup Initialization
window.addEventListener('DOMContentLoaded', () => {
  onLanguageChanged();
});