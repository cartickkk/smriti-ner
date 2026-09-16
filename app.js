/* ==========================================================================
   SMRITI-NER • Client Logic, Telemetry & Multi-Language Dictionary
   ========================================================================== */

// 1. MULTILINGUAL DICTIONARY (Hindi, English, Assamese)
const i18n = {
  'hi-IN': {
    labelSize: 'आकार:',
    soundOn: 'ध्वनि चालू',
    soundOff: 'ध्वनि बंद (Mute)',
    navPatient: 'मरीज पोर्टल',
    navCaregiver: 'केयरगिवर',
    sessionBadge: 'दैनिक सहायता सत्र',
    greeting: 'नमस्ते, बोरा दादा 🙏',
    subgreeting: 'नीचे किसी भी दिमागी खेल पर टैप करें या सहायक आवाज़ सुनें।',
    langLabel: 'भाषा:',
    sahayakTitle: 'सहायक AI वॉइस रीडर',
    sahayakBadgeActive: 'ऑडियो चालू',
    sahayakBadgeMuted: 'ऑडियो बंद',
    sahayakStatusActive: 'स्क्रीन पर मौजूद सभी निर्देश और स्मरण पत्र सुनने के लिए बटन दबाएं।',
    sahayakStatusMuted: 'आवाज़ बंद है। सुनने के लिए ऊपर से अनम्यूट करें।',
    btnReadScreenText: 'पूरी स्क्रीन पढ़कर सुनाएं',
    gamesHeader: '🎮 दैनिक दिमागी कसरत (पूर्वोत्तर थीम)',
    gamesSubheader: 'शुरू करने के लिए टैप करें:',
    g1Badge: 'खेल 1',
    g1Title: 'पूर्वोत्तर धरोहर मिलान',
    g1Desc: 'सांस्कृतिक प्रतीकों के जोड़े खोजें।',
    g1Btn: 'खेल शुरू करें →',
    g2Badge: 'खेल 2',
    g2Title: 'असम चाय दिनचर्या',
    g2Desc: 'चाय बनाने के सही क्रम को व्यवस्थित करें।',
    g2Btn: 'क्रम बनाएं →',
    g3Badge: 'खेल 3',
    g3Title: 'प्रतीक पहचानें',
    g3Desc: 'दिए गए पूर्वोत्तर प्रतीक को 6 विकल्पों में से खोजें।',
    g3Btn: 'लक्ष्य खोजें →',
    remBadge: 'समय सारिणी',
    remTitle: 'दवा और पानी',
    remDesc: 'दोपहर 2:00 बजे डोनेपेज़िल + 1 गिलास ताजा पानी।',
    remBtn: 'देखें और पुष्टि करें →',
    famBadge: 'यादें',
    famTitle: 'परिवार और घर की जानकारी',
    famDesc: 'आपका निवास स्थान और परिवार के सदस्य।',
    famBtn: 'फोटो एल्बम खोलें →',
    btnSosFloating: 'आपातकालीन SOS',
    cgSubhead: 'केयरगिवर टेलीमेट्री पोर्टल',
    cgPatientName: 'मरीज: श्री डी. बोरा (74 वर्ष)',
    cgPatientDesc: 'निवास: गरमूर, माजुली, असम • निदान: माइल्ड कॉग्निटिव इम्पेयरमेंट',
    btnReadCg: 'क्लीनिकल रिपोर्ट सुनें',
    cgAlertTitle: 'आपातकालीन चेतावनी भेजी गई',
    cgAlertDesc: 'मरीज ने लोकेशन के साथ SOS कॉल बटन दबाया है।',
    cgBtnAck: 'पुष्टि करें',
    cgKpi1Label: 'संज्ञानात्मक स्थिरता स्कोर',
    cgKpi1Sub: '↑ लाइव टेलीमेट्री स्कोर',
    cgKpi2Label: 'प्रतिक्रिया समय विवरण (खेल अनुसार)',
    cgAvgLabel: 'औसत समय:',
    cgIdealRangePrefix: 'आदर्श सीमा:',
    cgG1Label: '1. धरोहर मिलान:',
    cgG2Label: '2. चाय दिनचर्या:',
    cgG3Label: '3. प्रतीक खोजें:',
    cgKpi3Label: 'दिनचर्या अनुपालन',
    cgKpi3Sub: 'लाइव गणना प्रतिशत',
    cgChartHeader: '7-दिवसीय संज्ञानात्मक प्रदर्शन विश्लेषण',
    gameModalSubtitle: 'प्रतिक्रिया समय और टेलीमेट्री दर्ज करने के लिए खेल पूरा करें।',
    modalRemBadge: 'दवा दिनचर्या',
    modalRemTitle: 'दोपहर की दवा और पानी',
    modalRemDesc: 'कृपया 1 गिलास पानी के साथ डोनेपेज़िल की 1 गोली लें।',
    btnRemTaken: '✓ मैंने दवा ले ली है',
    btnRemLater: '10 मिनट बाद याद दिलाएं',
    modalFamHead: '📸 आपका घर और परिवार',
    memAddrTitle: 'आपका घर का पता',
    memAddrDesc: 'दादा, आप असम के माजुली द्वीप स्थित गरमूर में सत्र और ब्रह्मपुत्र नदी के पास रहते हैं।',
    memFamTitle: 'आपका परिवार (4 सदस्य)',
    familyMembers: [
      '• <strong>मालती बोरा</strong> (पत्नी)',
      '• <strong>बिकाश बोरा</strong> (बेटा)',
      '• <strong>रूपा बोरा</strong> (बहू)',
      '• <strong>निलव बोरा</strong> (पोता)'
    ],
    btnReadFamily: '🔊 परिवार की जानकारी सुनें',
    sosConfirmTitle: 'आपातकालीन चेतावनी भेजें?',
    sosConfirmDesc: 'यह तुरंत आपके परिवार और निकटतम माजुली स्वास्थ्य केंद्र को आपके जीपीएस लोकेशन के साथ सूचित करेगा।',
    btnSosYes: 'हाँ, तुरंत सहायता भेजें 🚨',
    btnSosCancel: 'रद्द करें (गलती से दबा)',
    sosSuccessTitle: 'अलर्ट भेज दिया गया!',
    sosSuccessDesc: 'देखभाल करने वालों को आपका अलर्ट मिल गया है। कृपया शांत रहें और वहीं रुकें।',
    btnSosAckOk: 'ठीक है, समझ गया',
    footerText: 'स्मृति-एनईआर (SMRITI-NER) • SIH26003 • पूर्वोत्तर क्षेत्र विकास मंत्रालय (MDoNER)',
    
    // Complete structured screen reader narration
    ttsFullOverview: 'नमस्ते बोरा दादा। यह आपकी दैनिक सहायता स्क्रीन है। आपके लिए आज तीन दिमागी खेल उपलब्ध हैं। पहला खेल: पूर्वोत्तर धरोहर मिलान, जिसमें आपको सांस्कृतिक प्रतीकों के जोड़े मिलाने हैं। दूसरा खेल: असम चाय दिनचर्या, जिसमें चाय बनाने के सही क्रम को चुनना है। तीसरा खेल: प्रतीक पहचानें, जिसमें ऊपर दिखाए गए प्रतीक को खोजना है। नीचे आपकी दोपहर 2 बजे की दवा और पानी का समय है, और आपका पारिवारिक फोटो एल्बम मौजूद है। ऊपर केयरगिवर पोर्टल और नीचे दाएँ कोने में आपातकालीन एसओएस बटन है।',
    ttsFamily: 'दादा, आप असम के माजुली द्वीप, गरमूर में रहते हैं। आपके परिवार में पत्नी मालती, पुत्र बिकाश, बहू रूपा और पोता निलव हैं।',
    ttsCgSummary: 'मरीज डी. बोरा का संज्ञानात्मक स्थिरता स्कोर %SCORE% है, औसत प्रतिक्रिया समय %LATENCY% सेकंड है और दवा अनुपालन %ADHERENCE% प्रतिशत है।',
    
    // In-game dynamic audio phrases
    itemNames: {
      '🦏': 'गेंडा (Rhino)',
      '☕': 'असम चाय (Tea)',
      '🦅': 'धनेश पक्षी (Hornbill)',
      '🌸': 'ऑर्किड फूल (Flower)',
      '🏡': 'माजुली घर (House)',
      '🎋': 'बांस (Bamboo)'
    },
    matchedSuffix: 'मिल गया!',
    noMatchMsg: 'जोड़ी नहीं बनी, पुनः प्रयास करें।',
    teaOptionPrompt: 'आपके विकल्प हैं: पहला विकल्प %OP1%, दूसरा विकल्प %OP2%, तीसरा विकल्प %OP3%। सही क्रम में चुनें।',
    findPrompt: 'ऊपर देखें: आपको नीचे %TARGET% खोजना है।',
    wrongChoice: 'यह गलत है, ध्यान से देखें!',
    correctChoice: 'बिल्कुल सही! आपने पहचान लिया।'
  },
  'en-IN': {
    labelSize: 'Size:',
    soundOn: 'Sound ON',
    soundOff: 'Muted 🔇',
    navPatient: 'Patient Portal',
    navCaregiver: 'Caregiver',
    sessionBadge: 'Daily Assisted Session',
    greeting: 'Namaste, Borah Dada 🙏',
    subgreeting: 'Tap any brain game below or listen to Sahayak voice reader.',
    langLabel: 'Language:',
    sahayakTitle: 'Sahayak AI Voice Reader',
    sahayakBadgeActive: 'Audio Active',
    sahayakBadgeMuted: 'Audio Muted',
    sahayakStatusActive: 'Tap the button to listen to all instructions and reminders aloud.',
    sahayakStatusMuted: 'Sound is muted for quietness. Tap unmute above to listen.',
    btnReadScreenText: 'Read Full Screen Aloud',
    gamesHeader: '🎮 Daily Brain Exercises (NER Themed)',
    gamesSubheader: 'Tap to launch on screen:',
    g1Badge: 'Game 1',
    g1Title: 'NER Heritage Match',
    g1Desc: 'Match pairs of cultural symbols.',
    g1Btn: 'Play Match On-Screen →',
    g2Badge: 'Game 2',
    g2Title: 'Assam Tea Routine',
    g2Desc: 'Arrange daily tea steps in order.',
    g2Btn: 'Start Sequence On-Screen →',
    g3Badge: 'Game 3',
    g3Title: 'Spot Cultural Motif',
    g3Desc: 'Find the randomly picked NER symbol.',
    g3Btn: 'Spot Target On-Screen →',
    remBadge: 'Scheduled',
    remTitle: 'Medicine & Water',
    remDesc: 'Afternoon 2:00 PM Donepezil + 1 Glass Water.',
    remBtn: 'View & Confirm →',
    famBadge: 'Reminiscence',
    famTitle: 'Family & Home Info',
    famDesc: 'Where you live and your family members.',
    famBtn: 'Open Photo Album →',
    btnSosFloating: 'EMERGENCY SOS',
    cgSubhead: 'Caregiver Telemetry Portal',
    cgPatientName: 'Patient: Mr. D. Borah (74 Yrs)',
    cgPatientDesc: 'Residence: Garamur, Majuli, Assam • Diagnosis: Mild Cognitive Impairment',
    btnReadCg: 'Read Clinical Summary',
    cgAlertTitle: 'Emergency Alert Triggered',
    cgAlertDesc: 'Patient pressed the SOS emergency call button with location ping.',
    cgBtnAck: 'Acknowledge',
    cgKpi1Label: 'Cognitive Stability Score',
    cgKpi1Sub: '↑ Live calculated score',
    cgKpi2Label: 'Response Latency Breakdown',
    cgAvgLabel: 'Avg Time:',
    cgIdealRangePrefix: 'Ideal Range:',
    cgG1Label: '1. Heritage Match:',
    cgG2Label: '2. Tea Routine:',
    cgG3Label: '3. Cultural Motif:',
    cgKpi3Label: 'Routine Adherence',
    cgKpi3Sub: 'Live calculated percentage',
    cgChartHeader: '7-Day Cognitive Performance Analytics',
    gameModalSubtitle: 'Complete the activity to log response telemetry.',
    modalRemBadge: 'Medicine Routine',
    modalRemTitle: 'Afternoon Medicine & Water',
    modalRemDesc: 'Please take 1 Tablet of Donepezil with 1 glass of fresh water.',
    btnRemTaken: '✓ I HAVE TAKEN IT',
    btnRemLater: 'Remind in 10 Minutes',
    modalFamHead: '📸 Where You Live & Family',
    memAddrTitle: 'Your Home Address',
    memAddrDesc: 'Dada, you live in Garamur, Majuli Island, Assam near the Satra and Brahmaputra River.',
    memFamTitle: 'Your Family (4 Members)',
    familyMembers: [
      '• <strong>Malati Borah</strong> (Wife)',
      '• <strong>Bikash Borah</strong> (Son)',
      '• <strong>Rupa Borah</strong> (Daughter-in-law)',
      '• <strong>Nilav Borah</strong> (Grandson)'
    ],
    btnReadFamily: '🔊 Read Family Info Aloud',
    sosConfirmTitle: 'Send Emergency Alert?',
    sosConfirmDesc: 'This will immediately notify your family and the nearest Majuli health center with your current GPS location.',
    btnSosYes: 'YES, SEND HELP NOW 🚨',
    btnSosCancel: 'Cancel (Mistake)',
    sosSuccessTitle: 'Alert Dispatched!',
    sosSuccessDesc: 'Caregivers have received your GPS alert. Please remain calm and stay where you are.',
    btnSosAckOk: 'OK, I Understand',
    footerText: 'SMRITI-NER Platform • SIH26003 • Ministry of Development of North Eastern Region (MDoNER)',
    
    // Complete structured screen reader narration
    ttsFullOverview: 'Namaste Borah Dada. This is your daily assistance dashboard. You have three brain exercises available today. Game 1: NER Heritage Match, where you match cultural symbol pairs. Game 2: Assam Tea Routine, where you arrange tea-making steps in chronological order. Game 3: Spot Cultural Motif, where you find the symbol shown on top. Below the games, you have your 2 PM medicine reminder and your family photo album. You can also switch to the caregiver tab at the top, or trigger the emergency SOS at the bottom right.',
    ttsFamily: 'Dada, you live in Garamur, Majuli Island, Assam. Your family members are your wife Malati, your son Bikash, daughter-in-law Rupa, and grandson Nilav.',
    ttsCgSummary: 'Patient D. Borah shows a stable cognitive score of %SCORE% over 100 with %ADHERENCE% percent routine adherence and %LATENCY% seconds average response latency.',
    
    // In-game dynamic audio phrases
    itemNames: {
      '🦏': 'Rhino',
      '☕': 'Assam Tea',
      '🦅': 'Hornbill',
      '🌸': 'Orchid',
      '🏡': 'House',
      '🎋': 'Bamboo'
    },
    matchedSuffix: 'matched!',
    noMatchMsg: 'No match, try again.',
    teaOptionPrompt: 'Here are the options: First option is %OP1%, second option is %OP2%, third option is %OP3%. Tap in order.',
    findPrompt: 'Look at the top: You need to find the %TARGET% below.',
    wrongChoice: 'Wrong choice, look closely!',
    correctChoice: 'Spot on! You found the target.'
  },
  'as-IN': {
    labelSize: 'আকাৰ:',
    soundOn: 'শব্দ অন',
    soundOff: 'শব্দ বন্ধ (Mute)',
    navPatient: 'ৰোগী প’ৰ্টেল',
    navCaregiver: 'শুশ্ৰূষাকাৰী',
    sessionBadge: 'দৈনন্দিন সহায়ক সত্ৰ',
    greeting: 'নমস্কাৰ, বৰা দাদা 🙏',
    subgreeting: 'তলৰ যিকোনো খেলত স্পৰ্শ কৰক অথবা সহায়ক মাত শুনক।',
    langLabel: 'ভাষা:',
    sahayakTitle: 'সহায়ক AI ভইচ ৰিডাৰ',
    sahayakBadgeActive: 'অডিঅ’ সক্ৰিয়',
    sahayakBadgeMuted: 'অডিঅ’ বন্ধ',
    sahayakStatusActive: 'সকলো নিৰ্দেশনা আৰু সোঁৱৰণী শুনিবলৈ বুটামটো টিপক।',
    sahayakStatusMuted: 'শব্দ বন্ধ আছে। শুনিবলৈ ওপৰৰ পৰা আনমিউট কৰক।',
    btnReadScreenText: 'সম্পূৰ্ণ স্ক্ৰীণ পঢ়ি শুনাওক',
    gamesHeader: '🎮 দৈনন্দিন মগজুৰ অনুশীলন (NER থিম)',
    gamesSubheader: 'আৰম্ভ কৰিবলৈ টিপক:',
    g1Badge: 'খেল ১',
    g1Title: 'ঐতিহ্য প্ৰতীক মিলোৱা',
    g1Desc: 'সাংস্কৃতিক প্ৰতীকৰ যোৰ মিলোৱক।',
    g1Btn: 'খেল আৰম্ভ কৰক →',
    g2Badge: 'খেল ২',
    g2Title: 'অসম চাহৰ নিয়ম',
    g2Desc: 'চাহ বনোৱাৰ পৰ্যায়বোৰ ক্ৰমত সজাওক।',
    g2Btn: 'ক্ৰম সজাওক →',
    g3Badge: 'খেল ৩',
    g3Title: 'প্ৰতীক চিনাক্তকৰণ',
    g3Desc: 'ওপৰত দিয়া প্ৰতীকটো ৬ টা বিকল্পৰ মাজত বিচাৰি উলিয়াওক।',
    g3Btn: 'লক্ষ্য চিনাক্ত কৰক →',
    remBadge: 'সময়সূচী',
    remTitle: 'ঔষধ আৰু পানী',
    remDesc: 'দুপৰীয়া ২:০০ বজাত ডনেপেজিল + ১ গিলাচ পানী।',
    remBtn: 'চাওক আৰু নিশ্চিত কৰক →',
    famBadge: 'স্মৃতি',
    famTitle: 'পৰিয়াল আৰু ঘৰৰ তথ্য',
    famDesc: 'আপোনাৰ বাসস্থান আৰু পৰিয়ালৰ সদস্যসকল।',
    famBtn: 'ফটো এলবাম খোলক →',
    btnSosFloating: 'জৰুৰীকালীন SOS',
    cgSubhead: 'টেলিমেট্ৰি প’ৰ্টেল',
    cgPatientName: 'ৰোগী: শ্ৰীযুত ডি. বৰা (৭৪ বছৰ)',
    cgPatientDesc: 'বাসস্থান: গড়মূৰ, মাজুলী, অসম • নিদান: মৃদু স্মৃতিভ্ৰংশ',
    btnReadCg: 'চিকিৎসা সাৰাংশ শুনক',
    cgAlertTitle: 'জৰুৰীকালীন সতৰ্কবাৰ্তা প্ৰেৰণ কৰা হৈছে',
    cgAlertDesc: 'ৰোগীয়ে অৱস্থানসহ SOS বুটাম টিপিছে।',
    cgBtnAck: 'স্বীকাৰ কৰক',
    cgKpi1Label: 'মানসিক স্থিৰতা স্ক’ৰ',
    cgKpi1Sub: '↑ লাইভ গণনাকৃত স্ক’ৰ',
    cgKpi2Label: 'প্ৰতিক্ৰিয়া সময়ৰ তালিকা (খেল অনুসৰি)',
    cgAvgLabel: 'গড় সময়:',
    cgIdealRangePrefix: 'আদৰ্শ সীমা:',
    cgG1Label: '১. ঐতিহ্য প্ৰতীক:',
    cgG2Label: '২. চাহৰ নিয়ম:',
    cgG3Label: '৩. প্ৰতীক চিনাক্ত:',
    cgKpi3Label: 'নিয়ম আনুগত্য',
    cgKpi3Sub: 'লাইভ গণনাকৃত শতাংশ',
    cgChartHeader: '৭-দিনীয়া মানসিক ক্ষমতা বিশ্লেষণ',
    gameModalSubtitle: 'প্ৰতিক্ৰিয়া সময় আৰু টেলিমেট্ৰি সংৰক্ষণ কৰিবলৈ খেল সম্পূৰ্ণ কৰক।',
    modalRemBadge: 'ঔষধ নিয়ম',
    modalRemTitle: 'দুপৰীয়াৰ ঔষধ আৰু পানী',
    modalRemDesc: 'অনুগ্ৰহ কৰি ১ গিলাচ সতেজ পানীৰ সৈতে ডনেপেজিল ঔষধ খাওক।',
    btnRemTaken: '✓ মই ঔষধ খালোঁ',
    btnRemLater: '১০ মিনিট পিছত সোঁৱৰাব',
    modalFamHead: '📸 আপোনাৰ ঘৰ আৰু পৰিয়াল',
    memAddrTitle: 'আপোনাৰ ঘৰৰ ঠিকনা',
    memAddrDesc: 'দাদা, আপুনি অসমৰ মাজুলী দ্বীপৰ গড়মূৰ সত্ৰ আৰু ব্ৰহ্মপুত্ৰ নদীৰ কাষত থাকে।',
    memFamTitle: 'আপোনাৰ পৰিয়াল (৪ জন সদস্য)',
    familyMembers: [
      '• <strong>মালতী বৰা</strong> (পত্নী)',
      '• <strong>বিকাশ বৰা</strong> (পুত্ৰ)',
      '• <strong>ৰূপা বৰা</strong> (বোৱাৰী)',
      '• <strong>নীলাভ বৰা</strong> (নাতি)'
    ],
    btnReadFamily: '🔊 পৰিয়ালৰ তথ্য শুনক',
    sosConfirmTitle: 'জৰুৰীকালীন বাৰ্তা প্ৰেৰণ কৰিবনে?',
    sosConfirmDesc: 'ইয়াৰ দ্বাৰা আপোনাৰ পৰিয়াল আৰু ওচৰৰ মাজুলী চিকিৎসালয়লৈ জিপিএছ বাৰ্তা যাব।',
    btnSosYes: 'হয়, সাহায্য পঠাওক 🚨',
    btnSosCancel: 'বাতিল কৰক (ভুলতে হ’ল)',
    sosSuccessTitle: 'বাৰ্তা প্ৰেৰণ সম্পন্ন!',
    sosSuccessDesc: 'পৰিয়ালে আপোনাৰ জিপিএছ পাইছে। শান্ত হৈ থাকক।',
    btnSosAckOk: 'বুজি পালোঁ',
    footerText: 'স্মৃতি-এনইআৰ (SMRITI-NER) • SIH26003 • উত্তৰ পূৰ্বাঞ্চল উন্নয়ন মন্ত্ৰালয় (MDoNER)',
    
    // Complete structured screen reader narration
    ttsFullOverview: 'নমস্কাৰ বৰা দাদা। এইখন আপোনাৰ দৈনন্দিন সহায়ক পৰ্দা। আপোনাৰ বাবে আজি তিনিটা মগজুৰ খেল আছে। প্ৰথম খেল: ঐতিহ্য প্ৰতীক মিলোৱা, য’ত সাংস্কৃতিক চিহ্নৰ যোৰ মিলাব লাগে। দ্বিতীয় খেল: অসম চাহৰ নিয়ম, য’ত চাহ বনোৱাৰ পৰ্যায় ক্ৰম অনুসৰি সজাব লাগে। তৃতীয় খেল: প্ৰতীক চিনাক্তকৰণ, য’ত ওপৰত দেখা প্ৰতীকটো বিচাৰিব লাগে। খেলৰ তলত আপোনাৰ দুপৰীয়া ২ বজাৰ ঔষধৰ সোঁৱৰণী আৰু পৰিয়ালৰ ফটো এলবাম আছে। ওপৰত শুশ্ৰূষাকাৰী প’ৰ্টেল আৰু তলত জৰুৰীকালীন এছ অ’ এছ বুটাম উপলব্ধ।',
    ttsFamily: 'দাদা, আপুনি অসমৰ মাজুলী দ্বীপৰ গড়মূৰত থাকে। আপোনাৰ পৰিয়ালত পত্নী মালতী, পুত্ৰ বিকাশ, বোৱাৰী ৰূপা আৰু নাতি নীলাভ আছে।',
    ttsCgSummary: 'ৰোগী ডি. বৰাৰ মানসিক স্থিৰতা স্ক’ৰ %SCORE%, গড় প্ৰতিক্ৰিয়া সময় %LATENCY% ছেকেণ্ড আৰু নিয়ম আনুগত্য %ADHERENCE% শতাংশ।',
    
    // In-game dynamic audio phrases
    itemNames: {
      '🦏': 'গঁড় (Rhino)',
      '☕': 'চাহ (Tea)',
      '🦅': 'ধনেশ পক্ষী (Hornbill)',
      '🌸': 'কপৌ ফুল (Orchid)',
      '🏡': 'মাজুলীৰ ঘৰ (House)',
      '🎋': 'বাঁহ (Bamboo)'
    },
    matchedSuffix: 'মিলা হ’ল!',
    noMatchMsg: 'জোৰ নিমিলিল, পুনৰ চেষ্টা কৰক।',
    teaOptionPrompt: 'আপোনাৰ বিকল্পসমূহ হ’ল: প্ৰথম বিকল্প %OP1%, দ্বিতীয় বিকল্প %OP2%, তৃতীয় বিকল্প %OP3%। ক্ৰমত বাছক।',
    findPrompt: 'ওপৰত চাওক: আপুনি তলত %TARGET% বিচাৰিব লাগে।',
    wrongChoice: 'ভুল বিকল্প, ভালদৰে চাওক!',
    correctChoice: 'সম্পূৰ্ণ শুদ্ধ! আপুনি প্ৰতীকটো বিচাৰি পালে।'
  }
};

// 2. LIVE CAREGIVER TELEMETRY STATE
let telemetryState = {
  g1Time: parseFloat(localStorage.getItem('smriti_cg_g1')) || 12.4,
  g2Time: parseFloat(localStorage.getItem('smriti_cg_g2')) || null,
  g3Time: parseFloat(localStorage.getItem('smriti_cg_g3')) || null,
  latestAvgLatency: parseFloat(localStorage.getItem('smriti_cg_latency')) || 12.4,
  stabilityScore: parseInt(localStorage.getItem('smriti_cg_stability')) || 78,
  adherenceRate: parseInt(localStorage.getItem('smriti_cg_adherence')) || 94,
  chartHistory: JSON.parse(localStorage.getItem('smriti_cg_history')) || [14.2, 13.8, 15.0, 13.1, 12.9, 13.4, 12.4]
};

function logGameTelemetry(gameType, latencySec) {
  const lat = parseFloat(latencySec);
  if (gameType === 'memory') telemetryState.g1Time = lat;
  if (gameType === 'sequence') telemetryState.g2Time = lat;
  if (gameType === 'spotter') telemetryState.g3Time = lat;

  const playedTimes = [telemetryState.g1Time, telemetryState.g2Time, telemetryState.g3Time].filter(t => t !== null && !isNaN(t));
  const avg = playedTimes.reduce((a, b) => a + b, 0) / playedTimes.length;
  telemetryState.latestAvgLatency = parseFloat(avg.toFixed(1));

  let calculatedScore = Math.round(100 - (telemetryState.latestAvgLatency / 25) * 35);
  calculatedScore = Math.max(50, Math.min(98, calculatedScore));
  telemetryState.stabilityScore = calculatedScore;

  telemetryState.adherenceRate = Math.min(100, telemetryState.adherenceRate + 1);
  telemetryState.chartHistory[6] = telemetryState.latestAvgLatency;

  localStorage.setItem('smriti_cg_g1', telemetryState.g1Time || '');
  localStorage.setItem('smriti_cg_g2', telemetryState.g2Time || '');
  localStorage.setItem('smriti_cg_g3', telemetryState.g3Time || '');
  localStorage.setItem('smriti_cg_latency', telemetryState.latestAvgLatency);
  localStorage.setItem('smriti_cg_stability', telemetryState.stabilityScore);
  localStorage.setItem('smriti_cg_adherence', telemetryState.adherenceRate);
  localStorage.setItem('smriti_cg_history', JSON.stringify(telemetryState.chartHistory));

  updateCaregiverDOM();
}

function updateCaregiverDOM() {
  const lang = document.getElementById('lang-select')?.value || 'hi-IN';
  const dict = i18n[lang] || i18n['hi-IN'];

  const g1El = document.getElementById('metric-g1-time');
  const g2El = document.getElementById('metric-g2-time');
  const g3El = document.getElementById('metric-g3-time');
  const avgEl = document.getElementById('metric-latency');
  const stabEl = document.getElementById('metric-stability');
  const adhEl = document.getElementById('metric-adherence');
  const rangeSub = document.getElementById('cg-kpi2-sub');

  if (g1El) g1El.textContent = telemetryState.g1Time ? `${telemetryState.g1Time}s` : '--';
  if (g2El) g2El.textContent = telemetryState.g2Time ? `${telemetryState.g2Time}s` : '--';
  if (g3El) g3El.textContent = telemetryState.g3Time ? `${telemetryState.g3Time}s` : '--';
  if (avgEl) avgEl.textContent = `${telemetryState.latestAvgLatency}s`;
  if (stabEl) stabEl.textContent = `${telemetryState.stabilityScore} / 100`;
  if (adhEl) adhEl.textContent = `${telemetryState.adherenceRate}%`;

  const playedCount = [telemetryState.g1Time, telemetryState.g2Time, telemetryState.g3Time].filter(t => t !== null && !isNaN(t)).length;
  const count = Math.max(1, playedCount);
  const minRange = (count === 1) ? 10 : 8 + count;
  const maxRange = (count === 1) ? 18 : 15 + (count * 2);

  if (rangeSub) {
    rangeSub.textContent = `${dict.cgIdealRangePrefix} ${minRange}s – ${maxRange}s (${count} ${count === 1 ? 'Game' : 'Games'})`;
  }

  if (cognitiveChartInstance) {
    cognitiveChartInstance.data.datasets[0].data = telemetryState.chartHistory;
    cognitiveChartInstance.update();
  }
}

// 3. MUTE CONTROLLER
let isAudioMuted = localStorage.getItem('smriti_audio_muted') === 'true';

function updateMuteUI() {
  const lang = document.getElementById('lang-select')?.value || 'hi-IN';
  const dict = i18n[lang] || i18n['hi-IN'];
  
  const muteIcon = document.getElementById('mute-icon');
  const muteText = document.getElementById('mute-text');
  const btnToggle = document.getElementById('btn-audio-toggle');
  
  const gmSoundBtn = document.getElementById('game-modal-sound-btn');
  const gmSoundIcon = document.getElementById('game-modal-sound-icon');
  const gmSoundText = document.getElementById('game-modal-sound-text');

  const sahayakBadge = document.getElementById('sahayak-badge');
  const sahayakStatus = document.getElementById('sahayak-status');
  const sahayakIconBox = document.getElementById('sahayak-icon-box');
  const sahayakMainIcon = document.getElementById('sahayak-main-icon');

  if (isAudioMuted) {
    if (muteIcon) muteIcon.textContent = '🔇';
    if (muteText) muteText.textContent = dict.soundOff;
    if (btnToggle) {
      btnToggle.className = 'bg-rose-900/80 hover:bg-rose-800 text-rose-200 border border-rose-600 px-3 py-1.5 rounded-2xl text-xs font-black flex items-center gap-1.5 senior-tap transition';
    }
    if (gmSoundBtn) {
      gmSoundBtn.className = 'text-xs font-black bg-rose-900/90 text-rose-200 border border-rose-600 px-3 py-1.5 rounded-xl senior-tap flex items-center gap-1 transition';
    }
    if (gmSoundIcon) gmSoundIcon.textContent = '🔇';
    if (gmSoundText) gmSoundText.textContent = dict.soundOff;

    if (sahayakBadge) {
      sahayakBadge.textContent = dict.sahayakBadgeMuted;
      sahayakBadge.className = 'bg-rose-500/20 text-rose-300 text-xs px-2 py-0.5 rounded-md border border-rose-400/30';
    }
    if (sahayakStatus) sahayakStatus.textContent = dict.sahayakStatusMuted;
    if (sahayakIconBox) sahayakIconBox.className = 'bg-rose-500 text-white p-3.5 rounded-2xl shadow-md flex-shrink-0';
    if (sahayakMainIcon) sahayakMainIcon.textContent = '🔇';
  } else {
    if (muteIcon) muteIcon.textContent = '🔊';
    if (muteText) muteText.textContent = dict.soundOn;
    if (btnToggle) {
      btnToggle.className = 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-3 py-1.5 rounded-2xl text-xs font-black flex items-center gap-1.5 senior-tap transition';
    }
    if (gmSoundBtn) {
      gmSoundBtn.className = 'text-xs font-black bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3 py-1.5 rounded-xl senior-tap flex items-center gap-1 transition text-white';
    }
    if (gmSoundIcon) gmSoundIcon.textContent = '🔊';
    if (gmSoundText) gmSoundText.textContent = dict.soundOn;

    if (sahayakBadge) {
      sahayakBadge.textContent = dict.sahayakBadgeActive;
      sahayakBadge.className = 'bg-emerald-500/20 text-emerald-300 text-xs px-2 py-0.5 rounded-md border border-emerald-400/30';
    }
    if (sahayakStatus) sahayakStatus.textContent = dict.sahayakStatusActive;
    if (sahayakIconBox) sahayakIconBox.className = 'bg-emerald-400 text-slate-950 p-3.5 rounded-2xl shadow-md flex-shrink-0';
    if (sahayakMainIcon) sahayakMainIcon.textContent = '🔊';
  }
}

function toggleAudioMute() {
  isAudioMuted = !isAudioMuted;
  localStorage.setItem('smriti_audio_muted', isAudioMuted);
  if (isAudioMuted && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  updateMuteUI();
}

// 4. TRANSLATION ENGINE (UPDATES ALL STRINGS INCLUDING SCREEN READER BUTTON)
function applyLanguage(langCode) {
  const dict = i18n[langCode] || i18n['hi-IN'];
  
  const setTxt = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setTxt('label-size-ui', dict.labelSize);
  setTxt('nav-patient', dict.navPatient);
  setTxt('nav-caregiver', dict.navCaregiver);
  setTxt('ui-session-badge', dict.sessionBadge);
  setTxt('ui-greeting', dict.greeting);
  setTxt('ui-subgreeting', dict.subgreeting);
  setTxt('ui-lang-label', dict.langLabel);
  setTxt('sahayak-title', dict.sahayakTitle);
  
  // DYNAMICALLY TRANSLATE THE SCREEN READER BUTTON
  setTxt('btn-read-screen-text', dict.btnReadScreenText);
  
  // Games Hub
  setTxt('ui-games-header', dict.gamesHeader);
  setTxt('ui-games-subheader', dict.gamesSubheader);
  setTxt('g1-badge', dict.g1Badge);
  setTxt('g1-title', dict.g1Title);
  setTxt('g1-desc', dict.g1Desc);
  setTxt('g1-btn', dict.g1Btn);
  
  setTxt('g2-badge', dict.g2Badge);
  setTxt('g2-title', dict.g2Title);
  setTxt('g2-desc', dict.g2Desc);
  setTxt('g2-btn', dict.g2Btn);
  
  setTxt('g3-badge', dict.g3Badge);
  setTxt('g3-title', dict.g3Title);
  setTxt('g3-desc', dict.g3Desc);
  setTxt('g3-btn', dict.g3Btn);
  
  // Action Tiles
  setTxt('rem-badge', dict.remBadge);
  setTxt('rem-card-title', dict.remTitle);
  setTxt('rem-card-desc', dict.remDesc);
  setTxt('rem-card-btn', dict.remBtn);
  
  setTxt('fam-badge', dict.famBadge);
  setTxt('fam-card-title', dict.famTitle);
  setTxt('fam-card-desc', dict.famDesc);
  setTxt('fam-card-btn', dict.famBtn);
  
  // Floating SOS & Caregiver Portal
  setTxt('btn-sos-floating', dict.btnSosFloating);
  setTxt('cg-subhead', dict.cgSubhead);
  setTxt('cg-patient-name', dict.cgPatientName);
  setTxt('cg-patient-desc', dict.cgPatientDesc);
  setTxt('btn-read-cg', dict.btnReadCg);
  setTxt('cg-alert-title', dict.cgAlertTitle);
  setTxt('cg-alert-desc', dict.cgAlertDesc);
  setTxt('cg-btn-ack', dict.cgBtnAck);
  setTxt('cg-kpi1-label', dict.cgKpi1Label);
  setTxt('cg-kpi1-sub', dict.cgKpi1Sub);
  setTxt('cg-kpi2-label', dict.cgKpi2Label);
  setTxt('cg-avg-label', dict.cgAvgLabel);
  setTxt('cg-g1-name', dict.cgG1Label);
  setTxt('cg-g2-name', dict.cgG2Label);
  setTxt('cg-g3-name', dict.cgG3Label);
  setTxt('cg-kpi3-label', dict.cgKpi3Label);
  setTxt('cg-kpi3-sub', dict.cgKpi3Sub);
  setTxt('cg-chart-header', dict.cgChartHeader);
  
  // Game Modal Subtitle
  setTxt('game-modal-subtitle', dict.gameModalSubtitle);

  // Modals
  setTxt('modal-rem-badge', dict.modalRemBadge);
  setTxt('modal-rem-title', dict.modalRemTitle);
  setTxt('modal-rem-desc', dict.modalRemDesc);
  setTxt('btn-rem-taken', dict.btnRemTaken);
  setTxt('btn-rem-later', dict.btnRemLater);
  setTxt('modal-fam-head', dict.modalFamHead);
  setTxt('mem-addr-title', dict.memAddrTitle);
  setTxt('mem-addr-desc', dict.memAddrDesc);
  setTxt('mem-fam-title', dict.memFamTitle);
  setTxt('btn-read-family', dict.btnReadFamily);
  
  // Inject Localized Family Members
  const famListEl = document.getElementById('mem-family-list');
  if (famListEl && dict.familyMembers) {
    famListEl.innerHTML = dict.familyMembers.map(item => `<li>${item}</li>`).join('');
  }

  setTxt('sos-confirm-title', dict.sosConfirmTitle);
  setTxt('sos-confirm-desc', dict.sosConfirmDesc);
  setTxt('btn-sos-send-yes', dict.btnSosYes);
  setTxt('btn-sos-send-cancel', dict.btnSosCancel);
  setTxt('sos-success-title', dict.sosSuccessTitle);
  setTxt('sos-success-desc', dict.sosSuccessDesc);
  setTxt('btn-sos-ack-ok', dict.btnSosAckOk);
  setTxt('footer-text', dict.footerText);

  const langSelect = document.getElementById('lang-select');
  if (langSelect) langSelect.value = langCode;
  localStorage.setItem('smriti_language', langCode);

  updateMuteUI();
  updateCaregiverDOM();
}

function onLanguageChanged() {
  const selectedLang = document.getElementById('lang-select').value;
  applyLanguage(selectedLang);
}

// 5. ROBUST VOICE SYNTHESIS ENGINE
let availableVoices = [];

function populateVoiceList() {
  if ('speechSynthesis' in window) {
    availableVoices = window.speechSynthesis.getVoices();
  }
}
populateVoiceList();
if ('speechSynthesis' in window && window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speakAudio(text, langCode) {
  if (isAudioMuted || !('speechSynthesis' in window)) return;
  
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  const selectedLang = langCode || document.getElementById('lang-select')?.value || 'hi-IN';
  
  if (selectedLang === 'as-IN') {
    const asVoice = availableVoices.find(v => v.lang.startsWith('as'));
    const bnVoice = availableVoices.find(v => v.lang.startsWith('bn'));
    const inVoice = availableVoices.find(v => v.lang.includes('IN'));

    if (asVoice) {
      utterance.voice = asVoice;
      utterance.lang = asVoice.lang;
    } else if (bnVoice) {
      utterance.voice = bnVoice;
      utterance.lang = bnVoice.lang;
    } else if (inVoice) {
      utterance.voice = inVoice;
      utterance.lang = inVoice.lang;
    } else {
      utterance.lang = 'hi-IN';
    }
  } else {
    utterance.lang = selectedLang;
    const matchedVoice = availableVoices.find(v => v.lang.replace('_', '-').startsWith(selectedLang));
    if (matchedVoice) utterance.voice = matchedVoice;
  }

  utterance.rate = 0.82;
  utterance.pitch = 1.0;
  
  window.speechSynthesis.speak(utterance);
}

function speakInstructions() {
  const lang = document.getElementById('lang-select')?.value || 'hi-IN';
  const dict = i18n[lang] || i18n['hi-IN'];
  speakAudio(dict.ttsFullOverview, lang);
}

function speakFamilyMemory() {
  const lang = document.getElementById('lang-select')?.value || 'hi-IN';
  const dict = i18n[lang] || i18n['hi-IN'];
  speakAudio(dict.ttsFamily, lang);
}

function speakCaregiverSummary() {
  const lang = document.getElementById('lang-select')?.value || 'hi-IN';
  const dict = i18n[lang] || i18n['hi-IN'];
  
  let text = dict.ttsCgSummary
    .replace('%SCORE%', telemetryState.stabilityScore)
    .replace('%LATENCY%', telemetryState.latestAvgLatency)
    .replace('%ADHERENCE%', telemetryState.adherenceRate);
    
  speakAudio(text, lang);
}

// 6. ACCESSIBILITY SIZE SLIDER
const scaleSlider = document.getElementById('textScaleSlider');
const scaleLabel = document.getElementById('scaleLabel');

function applyTextScale(pxValue) {
  document.documentElement.style.fontSize = `${pxValue}px`;
  if (scaleLabel) scaleLabel.textContent = `${pxValue}px`;
  if (scaleSlider) scaleSlider.value = pxValue;
  localStorage.setItem('smriti_text_px', pxValue);
}

if (scaleSlider) {
  scaleSlider.addEventListener('input', (e) => applyTextScale(e.target.value));
}

// 7. VIEW NAVIGATION (PATIENT / CAREGIVER)
function switchView(viewName) {
  const patientView = document.getElementById('patient-view');
  const caregiverView = document.getElementById('caregiver-view');
  const tabPatient = document.getElementById('tab-patient');
  const tabCaregiver = document.getElementById('tab-caregiver');

  if (viewName === 'patient') {
    patientView.classList.remove('hidden');
    caregiverView.classList.add('hidden');
    tabPatient.className = 'bg-emerald-600 text-white text-xs sm:text-sm font-black px-3.5 py-2 rounded-xl transition shadow';
    tabCaregiver.className = 'text-slate-400 hover:text-slate-200 text-xs sm:text-sm font-black px-3.5 py-2 rounded-xl transition';
  } else {
    patientView.classList.add('hidden');
    caregiverView.classList.remove('hidden');
    tabCaregiver.className = 'bg-emerald-600 text-white text-xs sm:text-sm font-black px-3.5 py-2 rounded-xl transition shadow';
    tabPatient.className = 'text-slate-400 hover:text-slate-200 text-xs sm:text-sm font-black px-3.5 py-2 rounded-xl transition';
    updateCaregiverDOM();
    renderTelemetryChart();
  }
}

// 8. MODAL CONTROLS
function openReminderModal() { document.getElementById('reminder-modal').classList.remove('hidden'); }
function openReminiscenceModal() { document.getElementById('reminiscence-modal').classList.remove('hidden'); }
function closeModal(id) { 
  document.getElementById(id).classList.add('hidden');
  if (id === 'game-modal' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

function confirmReminder() {
  closeModal('reminder-modal');
  telemetryState.adherenceRate = Math.min(100, telemetryState.adherenceRate + 2);
  updateCaregiverDOM();
  
  const currentLang = document.getElementById('lang-select')?.value || 'hi-IN';
  const msg = currentLang === 'hi-IN' ? 'दादा, आपकी दवा की पुष्टि दर्ज कर ली गई है!' : (currentLang === 'as-IN' ? 'দাদা, আপোনাৰ ঔষধ খোৱাৰ তথ্য সংৰক্ষণ কৰা হ’ল!' : 'Dada, your medicine confirmation has been recorded!');
  alert(msg);
}

// 9. SAFE EMERGENCY SOS PIPELINE
function triggerSOSConfirmation() {
  document.getElementById('sos-confirm-modal').classList.remove('hidden');
}

function confirmSOSDispatch() {
  closeModal('sos-confirm-modal');
  document.getElementById('sos-success-modal').classList.remove('hidden');
  document.getElementById('caregiver-alert-box').classList.remove('hidden');
  
  const currentLang = document.getElementById('lang-select')?.value || 'hi-IN';
  const alertSpeech = currentLang === 'hi-IN' 
    ? 'आपातकालीन चेतावनी और जीपीएस लोकेशन भेज दिया गया है।' 
    : (currentLang === 'as-IN' 
        ? 'জৰুৰীকালীন সতৰ্কবাৰ্তা আৰু জিপিএছ প্ৰেৰণ কৰা হৈছে।' 
        : 'Emergency alert with your GPS location has been dispatched.');
  speakAudio(alertSpeech, currentLang);
}

function dismissCaregiverAlert() {
  document.getElementById('caregiver-alert-box').classList.add('hidden');
}

// 10. TELEMETRY & LATENCY LOGGING
let taskStartTime = 0;

function startTelemetryTask() {
  taskStartTime = performance.now();
}

function recordTelemetryLatency(gameType) {
  const latency = parseFloat(((performance.now() - taskStartTime) / 1000).toFixed(1));
  logGameTelemetry(gameType, latency);
  return latency;
}

// 11. REFINED GAME LAUNCHERS
function openGameModal(gameType) {
  const modal = document.getElementById('game-modal');
  const title = document.getElementById('game-modal-title');
  const subtitle = document.getElementById('game-modal-subtitle');
  const body = document.getElementById('game-modal-body');
  const feedback = document.getElementById('game-modal-feedback');
  const lang = document.getElementById('lang-select')?.value || 'hi-IN';
  const dict = i18n[lang] || i18n['hi-IN'];
  
  modal.classList.remove('hidden');
  feedback.textContent = '';
  subtitle.textContent = dict.gameModalSubtitle;
  updateMuteUI();
  startTelemetryTask();

  // GAME 1: HERITAGE MATCH
  if (gameType === 'memory') {
    title.textContent = dict.g1Title;
    feedback.textContent = dict.g1Desc;
    
    const symbols = ['🦏', '🦏', '☕', '☕', '🦅', '🦅'].sort(() => 0.5 - Math.random());
    body.innerHTML = `<div class="grid grid-cols-3 gap-3 max-w-xs mx-auto"></div>`;
    const grid = body.querySelector('div');
    
    let flipped = [];
    let matchedCount = 0;

    symbols.forEach((sym) => {
      const card = document.createElement('button');
      card.className = 'h-24 bg-slate-800 border-2 border-slate-700 text-3xl rounded-2xl flex items-center justify-center senior-tap transition';
      card.dataset.sym = sym;
      card.textContent = '❓';
      
      card.onclick = () => {
        if (flipped.length < 2 && !card.classList.contains('game-card-revealed')) {
          card.textContent = sym;
          card.classList.add('game-card-revealed');
          flipped.push(card);

          const itemName = dict.itemNames[sym] || 'Item';
          speakAudio(itemName, lang);
          
          if (flipped.length === 2) {
            const sym1 = flipped[0].dataset.sym;
            const sym2 = flipped[1].dataset.sym;

            if (sym1 === sym2) {
              const matchedName = dict.itemNames[sym1] || 'Item';
              setTimeout(() => {
                speakAudio(`${matchedName} ${dict.matchedSuffix}`, lang);
              }, 400);

              flipped[0].classList.add('game-card-matched');
              flipped[1].classList.add('game-card-matched');
              flipped = [];
              matchedCount += 2;
              
              if (matchedCount === symbols.length) {
                const deltaT = recordTelemetryLatency('memory');
                feedback.textContent = `🎉 Completed in ${deltaT}s! Telemetry logged.`;
              }
            } else {
              setTimeout(() => {
                speakAudio(dict.noMatchMsg, lang);
                flipped.forEach(c => {
                  c.textContent = '❓';
                  c.classList.remove('game-card-revealed');
                });
                flipped = [];
              }, 850);
            }
          }
        }
      };
      grid.appendChild(card);
    });

  // GAME 2: TEA ROUTINE
  } else if (gameType === 'sequence') {
    title.textContent = dict.g2Title;
    feedback.textContent = dict.g2Desc;
    
    const stepTexts = lang === 'as-IN' ? [
      { id: 1, text: '🫖 পানী উতলাওক', name: 'পানী উতলোৱা' },
      { id: 2, text: '🍃 চাহ পাত দিয়ক', name: 'চাহ পাত দিয়া' },
      { id: 3, text: '☕ চাহ পৰিৱেশন কৰক', name: 'চাহ পৰিৱেশন কৰা' }
    ] : (lang === 'hi-IN' ? [
      { id: 1, text: '🫖 पानी उबालें', name: 'पानी उबालना' },
      { id: 2, text: '🍃 चाय पत्ती डालें', name: 'चाय पत्ती डालना' },
      { id: 3, text: '☕ गरमा-गरम चाय परोसें', name: 'चाय परोसना' }
    ] : [
      { id: 1, text: '🫖 Boil Fresh Water', name: 'Boil Fresh Water' },
      { id: 2, text: '🍃 Add Assam Tea Leaves', name: 'Add Assam Tea Leaves' },
      { id: 3, text: '☕ Serve Warm Cup', name: 'Serve Warm Cup' }
    ]);

    stepTexts.sort(() => 0.5 - Math.random());
    
    const promptText = dict.teaOptionPrompt
      .replace('%OP1%', stepTexts[0].name)
      .replace('%OP2%', stepTexts[1].name)
      .replace('%OP3%', stepTexts[2].name);
    speakAudio(promptText, lang);

    body.innerHTML = `<div class="flex flex-col gap-3 max-w-sm mx-auto"></div>`;
    const container = body.querySelector('div');
    let currentExpected = 1;

    stepTexts.forEach((step, index) => {
      const btn = document.createElement('button');
      btn.className = 'p-4 bg-slate-800 border-2 border-slate-700 text-sm font-bold rounded-2xl senior-tap text-left flex items-center justify-between';
      btn.innerHTML = `<span>${index + 1}. ${step.text}</span> <span class="text-xs text-slate-400">Option ${index + 1}</span>`;
      
      btn.onclick = () => {
        if (step.id === currentExpected) {
          btn.classList.add('bg-teal-700', 'border-teal-400');
          btn.disabled = true;
          currentExpected++;
          if (currentExpected > 3) {
            const deltaT = recordTelemetryLatency('sequence');
            feedback.textContent = `✨ Perfect sequence in ${deltaT}s! Telemetry logged.`;
            speakAudio(dict.correctChoice, lang);
          }
        } else {
          feedback.textContent = lang === 'hi-IN' ? 'फिर से कोशिश करें: सही क्रम चुनें!' : (lang === 'as-IN' ? 'পুনৰ চেষ্টা কৰক: সঠিক ক্ৰমত বাছক!' : 'Try again: Choose the proper sequence!');
          speakAudio(dict.wrongChoice, lang);
        }
      };
      container.appendChild(btn);
    });

  // GAME 3: SPOT DYNAMIC SYMBOL
  } else if (gameType === 'spotter') {
    title.textContent = dict.g3Title;
    
    const iconPool = ['🦏', '☕', '🦅', '🌸', '🏡', '🎋'];
    const targetSymbol = iconPool[Math.floor(Math.random() * iconPool.length)];
    const targetName = dict.itemNames[targetSymbol] || 'Symbol';
    
    feedback.textContent = `${dict.findPrompt.replace('%TARGET%', targetName)}`;
    speakAudio(dict.findPrompt.replace('%TARGET%', targetName), lang);

    const shuffledIcons = [...iconPool].sort(() => 0.5 - Math.random());
    
    body.innerHTML = `
      <div class="space-y-4">
        <div class="target-highlight-box p-3 text-center flex items-center justify-center gap-3">
          <span class="text-xs uppercase font-extrabold tracking-wider text-emerald-300">Target to find:</span>
          <span class="text-4xl animate-bounce">${targetSymbol}</span>
          <span class="text-xs font-bold text-white bg-emerald-700/60 px-2 py-0.5 rounded-md">${targetName}</span>
        </div>
        <div class="grid grid-cols-3 gap-3 max-w-xs mx-auto"></div>
      </div>
    `;
    const grid = body.querySelector('.grid');

    shuffledIcons.forEach(ic => {
      const btn = document.createElement('button');
      btn.className = 'h-24 bg-slate-800 border-2 border-slate-700 text-3xl rounded-2xl flex items-center justify-center senior-tap transition';
      btn.textContent = ic;
      
      btn.onclick = () => {
        if (ic === targetSymbol) {
          btn.classList.add('bg-amber-600', 'border-amber-400');
          const deltaT = recordTelemetryLatency('spotter');
          feedback.textContent = `🎯 Spotted in ${deltaT}s! Telemetry synced.`;
          speakAudio(dict.correctChoice, lang);
        } else {
          feedback.textContent = dict.wrongChoice;
          speakAudio(dict.wrongChoice, lang);
        }
      };
      grid.appendChild(btn);
    });
  }
}

// 12. CHART.JS RENDERING
let cognitiveChartInstance = null;

function renderTelemetryChart() {
  const ctx = document.getElementById('cognitiveChart');
  if (!ctx) return;
  
  if (cognitiveChartInstance) {
    cognitiveChartInstance.destroy();
  }

  cognitiveChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Today'],
      datasets: [
        {
          label: 'Response Latency Δt (Seconds)',
          data: telemetryState.chartHistory,
          borderColor: '#059669',
          backgroundColor: 'rgba(5, 150, 105, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.35,
          pointRadius: 5,
          pointBackgroundColor: '#059669'
        },
        {
          label: 'Upper Threshold (Alert Limit)',
          data: [18, 18, 18, 18, 18, 18, 18],
          borderColor: '#f43f5e',
          borderDash: [5, 5],
          borderWidth: 1.5,
          fill: false,
          pointRadius: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: false,
          min: 8,
          max: 22,
          ticks: { callback: (val) => `${val}s` }
        }
      },
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}

// 13. BOOTSTRAP INITIALIZATION
window.addEventListener('DOMContentLoaded', () => {
  const savedScale = localStorage.getItem('smriti_text_px') || 20;
  applyTextScale(savedScale);

  const savedLang = localStorage.getItem('smriti_language') || 'hi-IN';
  applyLanguage(savedLang);

  updateCaregiverDOM();
});