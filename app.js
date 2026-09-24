// SUPABASE CLIENT INITIALIZATION (Collision-Free)
const SUPABASE_URL = 'https://asmkzeuimlldwaihzmjb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzbWt6ZXVpbWxsZHdhaWh6bWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAyMzU0MTYsImV4cCI6MjEwNTgxMTQxNn0.dL_GVU1IMKJrGQ7fgJnhxMt5Z0X3D7rfdy8plZE4wo4';
if (!window.supabaseClient) {
  window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
// Use var instead of const so it never crashes on re-declaration
var supabase = window.supabaseClient;
/* ==========================================================================
   SMRITI-NER • Multi-Tier 3-Round System & Accurate Dynamic Telemetry
   ========================================================================== */

// 1. MULTILINGUAL DICTIONARY
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

    // 5 Games
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
    g3Desc: 'दिए गए पूर्वोत्तर प्रतीक को खोजें।',
    g3Btn: 'लक्ष्य खोजें →',
    g4Badge: 'खेल 4',
    g4Title: 'संख्या क्रम मिलान (TMT-A)',
    g4Desc: 'संख्याओं को बढ़ते क्रम में 1 से टैप करें।',
    g4Btn: 'क्रम शुरू करें →',
    g5Badge: 'खेल 5',
    g5Title: 'ब्रह्मपुत्र लालटेन स्मरण',
    g5Desc: 'जलती हुई रोशनी के क्रम को याद रखकर दोहराएं।',
    g5Btn: 'रोशनी पहचानें →',

    // Modal Controls & Round Badges
    gameActiveTitle: 'खेल सक्रिय',
    gameModalClose: '✕ बंद करें',
    diffEasy: 'सरल',
    diffMed: 'मध्यम',
    diffHard: 'कठिन',
    roundPrefix: 'दौर',
    targetPromptBadge: 'लक्ष्य:',
    stepOptionPrefix: 'विकल्प',
    gameModalSubtitle: 'टेलीमेट्री दर्ज करने के लिए तीनों दौर पूरे करें।',

    // Caregiver Matrix & Breakdown
    cgSubhead: 'केयरगिवर टेलीमेट्री पोर्टल',
    cgPatientName: 'मरीज: श्री डी. बोरा (74 वर्ष)',
    cgPatientDesc: 'निवास: गरमूर, माजुली, असम • निदान: माइल्ड कॉग्निटिव इम्पेयरमेंट',
    btnReadCg: 'क्लीनिकल रिपोर्ट सुनें',
    cgSyncStatus: '● सिंक संपन्न',
    cgLiveTelemetryBadge: 'लाइव टेलीमेट्री',
    cgAlertTitle: 'आपातकालीन चेतावनी भेजी गई',
    cgAlertDesc: 'मरीज ने लोकेशन के साथ SOS कॉल बटन दबाया है।',
    cgBtnAck: 'पुष्टि करें',
    cgKpi1Label: 'संज्ञानात्मक स्थिरता स्कोर',
    cgKpi1Sub: 'गति + अनुपालन पर आधारित सटीक स्कोर',
    cgKpi3Label: 'दिनचर्या अनुपालन (दवा + खेल)',
    cgKpi3Sub: 'सटीक पूर्ण कार्य प्रतिशत (True Ratio)',
    cgChartHeader: '7-दिवसीय संज्ञानात्मक प्रदर्शन विश्लेषण',
    cgMatrixHeader: 'टेलीमेट्री विश्लेषण (प्रति स्तर 3 दौर)',
    cgMatrixSub: 'प्रत्येक कठिनाई स्तर के लिए तीनों दौर का समय और औसत प्रदर्शन देखें।',
    thGameCol: 'संज्ञानात्मक खेल',
    thR1Col: 'दौर 1',
    thR2Col: 'दौर 2',
    thR3Col: 'दौर 3',
    thAvgCol: 'खेल औसत',
    cgCombLabel: '5 खेलों का कुल औसत रिस्पॉन्स समय:',
    cgCombSub: 'इस स्तर के खेले गए दौरों का सटीक औसत',
    cgIdealRangePrefix: 'आदर्श सीमा:',

    // Routine & Reminders
    remBadge: 'समय सारिणी',
    remTitle: 'दवा और पानी',
    remDesc: 'दोपहर 2:00 बजे डोनेपेज़िल + 1 गिलास ताजा पानी।',
    remBtn: 'देखें और पुष्टि करें →',
    famBadge: 'यादें',
    famTitle: 'परिवार और घर की जानकारी',
    famDesc: 'आपका निवास स्थान और परिवार के सदस्य।',
    famBtn: 'फोटो एल्बम खोलें →',
    btnSosFloating: 'आपातकालीन SOS',
    modalRemBadge: 'दवा दिनचर्या',
    modalRemTitle: 'दोपहर की दवा और पानी',
    modalRemDesc: 'कृपया दोपहर 2:00 बजे 1 गिलास पानी के साथ डोनेपेज़िल की 1 गोली लें।',
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

    // Detailed Sahayak Voice Prompts & Guides
    ttsFullOverview: 'नमस्ते बोरा दादा। यह आपकी दैनिक सहायता स्क्रीन है। आपके लिए आज पांच दिमागी खेल उपलब्ध हैं, जिनमें पूर्वोत्तर धरोहर मिलान, असम चाय दिनचर्या, प्रतीक पहचानें, संख्या क्रम मिलान और ब्रह्मपुत्र लालटेन स्मरण शामिल हैं। प्रत्येक खेल में तीन दौर हैं। इसके अलावा दोपहर दो बजे आपकी दवा का समय और पारिवारिक फोटो एल्बम नीचे मौजूद है।',
    ttsFamily: 'दादा, आप असम के माजुली द्वीप, गरमूर में रहते हैं। आपके परिवार में पत्नी मालती, पुत्र बिकाश, बहू रूपा और पोता निलव हैं।',
    ttsMedicine: 'दोपहर दो बजे आपको 1 गिलास ताजे पानी के साथ डोनेपेज़िल की एक गोली लेनी है। समय पर दवा लेना आपके स्वास्थ्य के लिए बहुत जरूरी है।',
    ttsCgSummary: 'मरीज डी. बोरा का संज्ञानात्मक स्थिरता स्कोर %SCORE% है, %TIER% स्तर पर कुल औसत समय %LATENCY% सेकंड है और दैनिक दिनचर्या अनुपालन %ADHERENCE% प्रतिशत है।',
    gameGuides: {
      memory: 'इस खेल का नाम पूर्वोत्तर धरोहर मिलान है। स्क्रीन पर छिपे हुए सांस्कृतिक प्रतीकों के जोड़े को एक-एक करके क्लिक करके मिलाएं।',
      sequence: 'इस खेल का नाम असम चाय दिनचर्या है। चाय बनाने के सही चरणों को पहले से आखिरी क्रम में सही ढंग से टैप करें।',
      spotter: 'इस खेल का नाम प्रतीक पहचानें है। ऊपर दिए गए लक्ष्य प्रतीक को नीचे दिए गए विकल्पों में से खोजकर टैप करें।',
      trail: 'इस खेल का नाम संख्या क्रम मिलान है। संख्याओं को 1 से शुरू करके बढ़ते हुए सही क्रम में टैप करें।',
      lantern: 'इस खेल का नाम ब्रह्मपुत्र लालटेन स्मरण है। पहले जलती हुई रोशनी का क्रम ध्यान से देखें और फिर उसी क्रम में लालटेन दबाएं।'
    },
    itemNames: {
      '🦏': 'गेंडा (Rhino)',
      '☕': 'असम चाय (Tea)',
      '🦅': 'धनेश पक्षी (Hornbill)',
      '🌸': 'ऑर्किड फूल (Flower)',
      '🏡': 'माजुली घर (House)',
      '🎋': 'बांस (Bamboo)',
      '🫖': 'केतली (Kettle)',
      '🍃': 'चाय पत्ती (Tea Leaf)',
      '🏮': 'लालटेन (Lantern)'
    },
    matchedSuffix: 'मिल गया!',
    noMatchMsg: 'जोड़ी नहीं बनी, पुनः प्रयास करें।',
    teaOptionPrompt: 'चाय बनाने के सही क्रम को चुनिए।',
    findPrompt: 'ऊपर देखें: नीचे %TARGET% खोजें।',
    wrongChoice: 'यह गलत है, ध्यान से देखें!',
    roundDoneMsg: 'शानदार! दौर %R% पूरा हुआ। अगला दौर शुरू हो रहा है...',
    gameDoneMsg: '🎉 बधाई! तीनों दौर पूरे हुए। औसत समय: %AVG%s। टेलीमेट्री सुरक्षित कर ली गई है।',
    trailTapPrompt: 'संख्याओं को 1 से शुरू करके बढ़ते क्रम में टैप करें।',
    lanternWatchPrompt: 'ध्यान से देखें: रोशनी का क्रम याद रखें।',
    lanternYourTurn: 'अब आपकी बारी! उसी क्रम में लालटेन दबाएं।'
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

    // 5 Games
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
    g4Badge: 'Game 4',
    g4Title: 'Trail Number Tap (TMT-A)',
    g4Desc: 'Tap numbers in ascending order from 1.',
    g4Btn: 'Start Trail On-Screen →',
    g5Badge: 'Game 5',
    g5Title: 'Brahmaputra Lanterns',
    g5Desc: 'Remember and repeat the flashing light pattern.',
    g5Btn: 'Follow Light On-Screen →',

    // Modal Controls & Round Badges
    gameActiveTitle: 'Game Active',
    gameModalClose: '✕ Close',
    diffEasy: 'Easy',
    diffMed: 'Med',
    diffHard: 'Hard',
    roundPrefix: 'Round',
    targetPromptBadge: 'Target:',
    stepOptionPrefix: 'Option',
    gameModalSubtitle: 'Complete all 3 rounds to log response telemetry.',

    // Caregiver Matrix & Breakdown
    cgSubhead: 'Caregiver Telemetry Portal',
    cgPatientName: 'Patient: Mr. D. Borah (74 Yrs)',
    cgPatientDesc: 'Residence: Garamur, Majuli, Assam • Diagnosis: Mild Cognitive Impairment',
    btnReadCg: 'Read Clinical Summary',
    cgSyncStatus: '● Synced',
    cgLiveTelemetryBadge: 'Live Telemetry',
    cgAlertTitle: 'Emergency Alert Triggered',
    cgAlertDesc: 'Patient pressed the SOS emergency call button with location ping.',
    cgBtnAck: 'Acknowledge',
    cgKpi1Label: 'Cognitive Stability Score',
    cgKpi1Sub: 'Precision score based on speed & adherence',
    cgKpi3Label: 'Routine Adherence (Meds + Tasks)',
    cgKpi3Sub: 'True Ratio of Scheduled Daily Tasks',
    cgChartHeader: '7-Day Cognitive Performance Analytics',
    cgMatrixHeader: 'Telemetry Breakdown (3 Rounds Per Tier)',
    cgMatrixSub: 'Inspect round latencies and averages across all 5 games for each difficulty.',
    thGameCol: 'Cognitive Game',
    thR1Col: 'Round 1',
    thR2Col: 'Round 2',
    thR3Col: 'Round 3',
    thAvgCol: 'Game Avg',
    cgCombLabel: '5-Game Combined Tier Latency:',
    cgCombSub: 'Average of all played rounds for this tier',
    cgIdealRangePrefix: 'Ideal Range:',

    // Routine & Reminders
    remBadge: 'Scheduled',
    remTitle: 'Medicine & Water',
    remDesc: 'Afternoon 2:00 PM Donepezil + 1 Glass Water.',
    remBtn: 'View & Confirm →',
    famBadge: 'Reminiscence',
    famTitle: 'Family & Home Info',
    famDesc: 'Where you live and your family members.',
    famBtn: 'Open Photo Album →',
    btnSosFloating: 'EMERGENCY SOS',
    modalRemBadge: 'Medicine Routine',
    modalRemTitle: 'Afternoon Medicine & Water',
    modalRemDesc: 'Please take 1 Tablet of Donepezil with 1 glass of fresh water at 2:00 PM.',
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

    // Prompts & Audio & In-Game Guide Descriptions
    ttsFullOverview: 'Namaste Borah Dada. This is your daily assistance dashboard. Today you have five brain exercises available: NER Heritage Match, Assam Tea Routine, Spot Cultural Motif, Trail Number Tap, and Brahmaputra Lanterns, each featuring 3 rounds. Below you also have your scheduled afternoon medicine at 2:00 PM and your family photo album.',
    ttsFamily: 'Dada, you live in Garamur, Majuli Island, Assam. Your family members are your wife Malati, your son Bikash, daughter-in-law Rupa, and grandson Nilav.',
    ttsMedicine: 'At 2:00 PM in the afternoon, please take 1 tablet of Donepezil with 1 glass of fresh water. Taking your medication on time is very important.',
    ttsCgSummary: 'Patient D. Borah shows a stability score of %SCORE% over 100 with %TIER% tier combined latency of %LATENCY% seconds and %ADHERENCE% percent daily routine adherence.',
    gameGuides: {
      memory: 'This game is NER Heritage Match. Tap cards to find matching pairs of cultural symbols.',
      sequence: 'This game is Assam Tea Routine. Arrange the tea-making steps in the proper chronological order.',
      spotter: 'This game is Spot Cultural Motif. Look at the target symbol at the top and tap its match among the choices below.',
      trail: 'This game is Trail Number Tap. Tap the numbers in ascending order starting from 1.',
      lantern: 'This game is Brahmaputra Lanterns. Watch the glowing lanterns carefully and repeat the sequence.'
    },
    itemNames: {
      '🦏': 'Rhino',
      '☕': 'Assam Tea',
      '🦅': 'Hornbill',
      '🌸': 'Orchid',
      '🏡': 'House',
      '🎋': 'Bamboo',
      '🫖': 'Kettle',
      '🍃': 'Tea Leaf',
      '🏮': 'Lantern'
    },
    matchedSuffix: 'matched!',
    noMatchMsg: 'No match, try again.',
    teaOptionPrompt: 'Arrange the tea-making steps in the proper order.',
    findPrompt: 'Look at the top: Find the %TARGET% below.',
    wrongChoice: 'Wrong choice, look closely!',
    roundDoneMsg: 'Great job! Round %R% completed. Loading next round...',
    gameDoneMsg: '🎉 Excellent! All 3 rounds completed. Average: %AVG%s. Telemetry synced.',
    trailTapPrompt: 'Tap numbers in ascending order starting from 1.',
    lanternWatchPrompt: 'Watch carefully: memorize the glowing lanterns.',
    lanternYourTurn: 'Your turn! Tap the lanterns in the same order.'
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

    // 5 Games
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
    g3Desc: 'ওপৰত দিয়া প্ৰতীকটো বিচাৰি উলিয়াওক।',
    g3Btn: 'লক্ষ্য চিনাক্ত কৰক →',
    g4Badge: 'খেল ৪',
    g4Title: 'সংখ্যা ক্ৰম চিনাক্তকৰণ',
    g4Desc: '১ ৰ পৰা আৰম্ভ কৰি ক্ৰমত সংখ্যাবোৰ স্পৰ্শ কৰক।',
    g4Btn: 'ক্ৰম আৰম্ভ কৰক →',
    g5Badge: 'খেল ৫',
    g5Title: 'ব্ৰহ্মপুত্ৰৰ চাকি স্মৃতি',
    g5Desc: 'জ্বলি উঠা পোহৰৰ ক্ৰমটো মনত ৰাখি পুনৰাবৃত্তি কৰক।',
    g5Btn: 'পোহৰ অনুসৰণ কৰক →',

    // Modal Controls & Round Badges
    gameActiveTitle: 'খেল সক্ৰিয়',
    gameModalClose: '✕ বন্ধ কৰক',
    diffEasy: 'সহজ',
    diffMed: 'মধ্যম',
    diffHard: 'কঠিন',
    roundPrefix: 'পৰ্যায়',
    targetPromptBadge: 'লক্ষ্য:',
    stepOptionPrefix: 'বিকল্প',
    gameModalSubtitle: 'টেলিমেট্ৰি সংৰক্ষণ কৰিবলৈ তিনিওটা পৰ্যায় সম্পূৰ্ণ কৰক।',

    // Caregiver Matrix & Breakdown
    cgSubhead: 'টেলিমেট্ৰি প’ৰ্টেল',
    cgPatientName: 'ৰোগী: শ্ৰীযুত ডি. বৰা (৭৪ বছৰ)',
    cgPatientDesc: 'বাসস্থান: গড়মূৰ, মাজুলী, অসম • নিদান: মৃদু স্মৃতিভ্ৰংশ',
    btnReadCg: 'চিকিৎসা সাৰাংশ শুনক',
    cgSyncStatus: '● সংলগ্ন সম্পন্ন',
    cgLiveTelemetryBadge: 'লাইভ টেলিমেট্ৰি',
    cgAlertTitle: 'জৰুৰীকালীন সতৰ্কবাৰ্তা প্ৰেৰণ কৰা হৈছে',
    cgAlertDesc: 'ৰোগীয়ে অৱস্থানসহ SOS বুটাম টিপিছে।',
    cgBtnAck: 'স্বীকাৰ কৰক',
    cgKpi1Label: 'মানসিক স্থিৰতা স্ক’ৰ',
    cgKpi1Sub: 'গতি আৰু আনুগত্যৰ সঠিক সূচক',
    cgKpi3Label: 'নিয়ম আনুগত্য (ঔষধ + খেল)',
    cgKpi3Sub: 'সম্পূৰ্ণ কৰা কাৰ্য্যৰ সঠিক অনুপাত',
    cgChartHeader: '৭-দিনীয়া মানসিক ক্ষমতা বিশ্লেষণ',
    cgMatrixHeader: 'টেলিমেট্ৰি বিশ্লেষণ (প্ৰতি স্তৰত ৩টা পৰ্যায়)',
    cgMatrixSub: 'প্ৰতিটো স্তৰৰ বাবে তিনিওটা পৰ্যায়ৰ সময় আৰু গড় প্ৰদৰ্শন চাওক।',
    thGameCol: 'মগজুৰ খেল',
    thR1Col: 'পৰ্যায় ১',
    thR2Col: 'পৰ্যায় ২',
    thR3Col: 'পৰ্যায় ৩',
    thAvgCol: 'খেলৰ গড়',
    cgCombLabel: '৫ টা খেলৰ মুঠ গড় প্ৰতিক্ৰিয়া সময়:',
    cgCombSub: 'এই স্তৰৰ খেলসমূহৰ প্ৰকৃত গড়',
    cgIdealRangePrefix: 'আদৰ্শ সীমা:',

    // Routine & Reminders
    remBadge: 'সময়সূচী',
    remTitle: 'ঔষধ আৰু পানী',
    remDesc: 'দুপৰীয়া ২:০০ বজাত ডনেপেজিল + ১ গিলাচ পানী।',
    remBtn: 'চাওক আৰু নিশ্চিত কৰক →',
    famBadge: 'স্মৃতি',
    famTitle: 'পৰিয়াল আৰু ঘৰৰ তথ্য',
    famDesc: 'আপোনাৰ বাসস্থান আৰু পৰিয়ালৰ সদস্যসকল।',
    famBtn: 'ফটো এলবাম খোলক →',
    btnSosFloating: 'জৰুৰীকালীন SOS',
    modalRemBadge: 'ঔষধ নিয়ম',
    modalRemTitle: 'দুপৰীয়াৰ ঔষধ আৰু পানী',
    modalRemDesc: 'অনুগ্ৰহ কৰি দুপৰীয়া ২:০০ বজাত ১ গিলাচ সতেজ পানীৰ সৈতে ডনেপেজিল ঔষধ খাওক।',
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

    // Prompts & Audio & In-Game Guide Descriptions
    ttsFullOverview: 'নমস্কাৰ বৰা দাদা। এইখন আপোনাৰ দৈনন্দিন সহায়ক পৰ্দা। আজি আপোনাৰ বাবে পাঁচটা মগজুৰ অনুশীলন আছে: ঐতিহ্য প্ৰতীক মিলোৱা, অসম চাহৰ নিয়ম, প্ৰতীক চিনাক্তকৰণ, সংখ্যা ক্ৰম চিনাক্তকৰণ আৰু ব্ৰহ্মপুত্ৰৰ চাকি স্মৃতি। প্ৰতিটো খেলত তিনিটাকৈ পৰ্যায় আছে। তলত দুপৰীয়া ২:০০ বজাত ঔষধ খোৱাৰ সোঁৱৰণী আৰু পৰিয়ালৰ ফটো এলবাম আছে।',
    ttsFamily: 'দাদা, আপুনি অসমৰ মাজুলী দ্বীপৰ গড়মূৰত থাকে। আপোনাৰ পৰিয়ালত পত্নী মালতী, পুত্ৰ বিকাশ, বোৱাৰী ৰূপা আৰু নাতি নীলাভ আছে।',
    ttsMedicine: 'দুপৰীয়া ২:০০ বজাত ১ গিলাচ সতেজ পানীৰ সৈতে ১ χαটি ডনেপেজিল ঔষধ খাওক। সময়মতে ঔষধ খোৱাটো আপোনাৰ বাবে অতি প্ৰয়োজনীয়।',
    ttsCgSummary: 'ৰোগী ডি. বৰাৰ মানসিক স্থিৰতা স্ক’ৰ %SCORE%, %TIER% স্তৰত মুঠ গড় সময় %LATENCY% ছেকেণ্ড আৰু নিয়ম আনুগত্য %ADHERENCE% শতাংশ।',
    gameGuides: {
      memory: 'এই খেলখন ঐতিহ্য প্ৰতীক মিলোৱা। সাংস্কৃতিক প্ৰতীকবোৰৰ যোৰ বিচাৰি উলিয়াবলৈ কাৰ্ডবোৰ স্পৰ্শ কৰক।',
      sequence: 'এই খেলখন অসম চাহৰ নিয়ম। চাহ বনোৱাৰ পৰ্যায়বোৰ সঠিক ক্ৰমত সজাওক।',
      spotter: 'এই খেলখন প্ৰতীক চিনাক্তকৰণ। ওপৰত দিয়া লক্ষ্য প্ৰতীকটো চিনে তলৰ বিকল্পৰ পৰা বাছক।',
      trail: 'এই খেলখন সংখ্যা ক্ৰম চিনাক্তকৰণ। ১ ৰ পৰা আৰম্ভ কৰি ক্ৰমত সংখ্যাবোৰ স্পৰ্শ কৰক।',
      lantern: 'এই খেলখন ব্ৰহ্মপুত্ৰৰ চাকি স্মৃতি। জ্বলি উঠা পোহৰৰ ক্ৰমটো মনত ৰাখি পুনৰাবৃত্তি কৰক।'
    },
    itemNames: {
      '🦏': 'গঁড় (Rhino)',
      '☕': 'চাহ (Tea)',
      '🦅': 'ধনেশ পক্ষী (Hornbill)',
      '🌸': 'কপৌ ফুল (Orchid)',
      '🏡': 'মাজুলীৰ ঘৰ (House)',
      '🎋': 'বাঁহ (Bamboo)',
      '🫖': 'কেটলী (Kettle)',
      '🍃': 'চাহ পাত (Tea Leaf)',
      '🏮': 'চাকি (Lantern)'
    },
    matchedSuffix: 'মিলা হ’ল!',
    noMatchMsg: 'জোৰ নিমিলিল, পুনৰ চেষ্টা কৰক।',
    teaOptionPrompt: 'চাহ বনোৱাৰ পৰ্যায়বোৰ ক্ৰমত সজাওক।',
    findPrompt: 'ওপৰত চাওক: তলত %TARGET% বিচাৰক।',
    wrongChoice: 'ভুল বিকল্প, ভালদৰে চাওক!',
    roundDoneMsg: 'বঢ়িয়া! পৰ্যায় %R% সম্পূৰ্ণ হ’ল। পৰৱৰ্তী পৰ্যায় আৰম্ভ হৈছে...',
    gameDoneMsg: '🎉 অভিনন্দন! তিনিওটা পৰ্যায় সম্পূৰ্ণ হ’ল। গড় সময়: %AVG% ছেকেণ্ড।',
    trailTapPrompt: '১ ৰ পৰা আৰম্ভ কৰি ক্ৰমত সংখ্যাবোৰ স্পৰ্শ কৰক।',
    lanternWatchPrompt: 'ভালদৰে মন কৰক: চাকি জ্বলাৰ ক্ৰমটো মনত ৰাখক।',
    lanternYourTurn: 'এতিয়া আপোনাৰ পাল! একে ক্ৰমতে চাকিত স্পৰ্শ কৰক।'
  }
};

// 2. ACCURATE TELEMETRY STORAGE
const emptyTierData = () => ({
  memory: [0, 0, 0],
  sequence: [0, 0, 0],
  spotter: [0, 0, 0],
  trail: [0, 0, 0],
  lantern: [0, 0, 0]
});

let telemetryTierState = JSON.parse(localStorage.getItem('smriti_telemetry_tiers')) || {
  easy: emptyTierData(),
  med: emptyTierData(),
  hard: emptyTierData()
};

let activeCaregiverTier = localStorage.getItem('smriti_cg_view_tier') || 'med';

// 3. ACCURATE DAILY ROUTINE TRACKER (N = 6 Tasks)
let dailyTaskTracker = JSON.parse(localStorage.getItem('smriti_daily_tasks')) || {
  medication: false,
  memory: false,
  sequence: false,
  spotter: false,
  trail: false,
  lantern: false
};

let historicalDays = [13.4, 12.8, 13.9, 12.5, 12.1, 12.6];

let overallTelemetry = {
  stabilityScore: parseInt(localStorage.getItem('smriti_cg_stability')) || 78,
  adherenceRate: parseInt(localStorage.getItem('smriti_cg_adherence')) || 0,
  chartHistory: JSON.parse(localStorage.getItem('smriti_cg_history')) || [...historicalDays, 0]
};

function calculateAccurateAdherence() {
  const totalTasks = 6;
  const completedTasks = Object.values(dailyTaskTracker).filter(Boolean).length;
  const accurateRate = Math.round((completedTasks / totalTasks) * 100);

  overallTelemetry.adherenceRate = accurateRate;
  localStorage.setItem('smriti_cg_adherence', accurateRate);
  localStorage.setItem('smriti_daily_tasks', JSON.stringify(dailyTaskTracker));

  const adhEl = document.getElementById('metric-adherence');
  if (adhEl) adhEl.textContent = `${accurateRate}%`;
  return accurateRate;
}

function recalculateCognitiveScore() {
  let todayPlayedTimes = [];
  ['easy', 'med', 'hard'].forEach(t => {
    Object.values(telemetryTierState[t]).forEach(rArray => {
      rArray.forEach(val => {
        if (typeof val === 'number' && val > 0) todayPlayedTimes.push(val);
      });
    });
  });

  const adherence = calculateAccurateAdherence();
  let calculatedScore = 75;

  if (todayPlayedTimes.length > 0) {
    const todayAvg = todayPlayedTimes.reduce((a, b) => a + b, 0) / todayPlayedTimes.length;
    const latencyFactor = Math.max(0, Math.min(100, 100 - ((todayAvg - 10) / 10) * 40));
    calculatedScore = Math.round((0.65 * latencyFactor) + (0.35 * adherence));
    calculatedScore = Math.max(45, Math.min(98, calculatedScore));

    overallTelemetry.chartHistory[6] = parseFloat(todayAvg.toFixed(1));
  } else if (adherence > 0) {
    calculatedScore = Math.round(70 + (adherence * 0.25));
    overallTelemetry.chartHistory[6] = overallTelemetry.chartHistory[5];
  } else {
    overallTelemetry.chartHistory[6] = overallTelemetry.chartHistory[5];
  }

  overallTelemetry.stabilityScore = calculatedScore;
  localStorage.setItem('smriti_cg_stability', calculatedScore);
  localStorage.setItem('smriti_cg_history', JSON.stringify(overallTelemetry.chartHistory));

  const stabEl = document.getElementById('metric-stability');
  if (stabEl) stabEl.textContent = `${calculatedScore} / 100`;

  if (cognitiveChartInstance) {
    cognitiveChartInstance.data.datasets[0].data = overallTelemetry.chartHistory;
    cognitiveChartInstance.update();
  }

  return calculatedScore;
}

function recordRoundScore(tier, gameType, roundTimes) {
  if (!telemetryTierState[tier]) telemetryTierState[tier] = emptyTierData();
  telemetryTierState[tier][gameType] = roundTimes;
  localStorage.setItem('smriti_telemetry_tiers', JSON.stringify(telemetryTierState));

  dailyTaskTracker[gameType] = true;
  recalculateCognitiveScore();
  updateCaregiverDOM();
}

function switchCaregiverTier(tier) {
  activeCaregiverTier = tier;
  localStorage.setItem('smriti_cg_view_tier', tier);
  updateCaregiverDOM();
}

function updateCaregiverDOM() {
  const lang = document.getElementById('lang-select')?.value || 'hi-IN';
  const dict = i18n[lang] || i18n['hi-IN'];

  ['easy', 'med', 'hard'].forEach(t => {
    const tabBtn = document.getElementById(`cg-tab-${t}`);
    if (tabBtn) {
      if (t === activeCaregiverTier) {
        tabBtn.className = 'px-3 py-1.5 rounded-xl text-xs font-black transition bg-emerald-600 text-white shadow';
      } else {
        tabBtn.className = 'px-3 py-1.5 rounded-xl text-xs font-black transition text-slate-600 hover:text-slate-900';
      }
    }
  });

  const stabEl = document.getElementById('metric-stability');
  const adhEl = document.getElementById('metric-adherence');
  if (stabEl) stabEl.textContent = `${overallTelemetry.stabilityScore} / 100`;
  if (adhEl) adhEl.textContent = `${overallTelemetry.adherenceRate}%`;

  const tbody = document.getElementById('caregiver-matrix-rows');
  if (tbody) {
    const tierData = telemetryTierState[activeCaregiverTier] || emptyTierData();
    const games = [
      { id: 'memory', name: dict.g1Title },
      { id: 'sequence', name: dict.g2Title },
      { id: 'spotter', name: dict.g3Title },
      { id: 'trail', name: dict.g4Title },
      { id: 'lantern', name: dict.g5Title }
    ];

    let allPlayedTierTimes = [];
    tbody.innerHTML = '';

    games.forEach((g, idx) => {
      const rounds = tierData[g.id] || [0, 0, 0];
      const validRoundTimes = rounds.filter(r => typeof r === 'number' && r > 0);
      
      const gameAvgDisplay = validRoundTimes.length > 0
        ? (validRoundTimes.reduce((a, b) => a + b, 0) / validRoundTimes.length).toFixed(1) + 's'
        : '0.0s';

      validRoundTimes.forEach(n => allPlayedTierTimes.push(n));

      const r1Text = (rounds[0] && rounds[0] > 0) ? `${rounds[0]}s` : '0.0s';
      const r2Text = (rounds[1] && rounds[1] > 0) ? `${rounds[1]}s` : '0.0s';
      const r3Text = (rounds[2] && rounds[2] > 0) ? `${rounds[2]}s` : '0.0s';

      const tr = document.createElement('tr');
      tr.className = idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50';
      tr.innerHTML = `
        <td class="py-2.5 px-3 font-bold text-slate-900">${g.name}</td>
        <td class="py-2.5 px-2 text-center ${rounds[0] > 0 ? 'text-slate-800 font-extrabold' : 'text-slate-400'}">${r1Text}</td>
        <td class="py-2.5 px-2 text-center ${rounds[1] > 0 ? 'text-slate-800 font-extrabold' : 'text-slate-400'}">${r2Text}</td>
        <td class="py-2.5 px-2 text-center ${rounds[2] > 0 ? 'text-slate-800 font-extrabold' : 'text-slate-400'}">${r3Text}</td>
        <td class="py-2.5 px-3 text-right font-black ${validRoundTimes.length > 0 ? 'text-emerald-700' : 'text-slate-400'}">${gameAvgDisplay}</td>
      `;
      tbody.appendChild(tr);
    });

    const combEl = document.getElementById('metric-combined-avg');
    if (combEl) {
      if (allPlayedTierTimes.length > 0) {
        const combinedVal = (allPlayedTierTimes.reduce((a, b) => a + b, 0) / allPlayedTierTimes.length).toFixed(1);
        combEl.textContent = `${combinedVal}s`;
        combEl.className = 'text-2xl font-black text-emerald-800';
      } else {
        combEl.textContent = '0.0s';
        combEl.className = 'text-2xl font-black text-slate-400';
      }
    }
  }

  if (cognitiveChartInstance) {
    cognitiveChartInstance.data.datasets[0].data = overallTelemetry.chartHistory;
    cognitiveChartInstance.update();
  }
}

// 7. AUDIO & MUTE CONTROLLER
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
    if (btnToggle) btnToggle.className = 'bg-rose-900/80 hover:bg-rose-800 text-rose-200 border border-rose-600 px-3.5 py-2 rounded-2xl text-xs font-black flex items-center gap-1.5 senior-tap transition';
    if (gmSoundBtn) gmSoundBtn.className = 'text-xs sm:text-sm font-black bg-rose-900/90 text-rose-200 border border-rose-600 px-3.5 py-2 rounded-xl senior-tap flex items-center gap-1.5 transition';
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
    if (btnToggle) btnToggle.className = 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-3.5 py-2 rounded-2xl text-xs font-black flex items-center gap-1.5 senior-tap transition';
    if (gmSoundBtn) gmSoundBtn.className = 'text-xs sm:text-sm font-black bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-3.5 py-2 rounded-xl senior-tap flex items-center gap-1.5 transition';
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
  if (isAudioMuted && 'speechSynthesis' in window) window.speechSynthesis.cancel();
  updateMuteUI();
}

// 8. GLOBAL DIFFICULTY CONTROLLER
let currentDifficulty = localStorage.getItem('smriti_difficulty') || 'med';
let currentGameTypeActive = null;

let currentRoundIndex = 1;
let currentRoundTimes = [];
let roundStartTime = 0;

function applyDifficultyUI() {
  ['easy', 'med', 'hard'].forEach(d => {
    const btn = document.getElementById(`diff-${d}`);
    if (btn) {
      if (d === currentDifficulty) {
        btn.className = 'px-3.5 py-1.5 text-xs rounded-lg font-black transition bg-emerald-600 text-white shadow flex-1 text-center senior-tap';
      } else {
        btn.className = 'px-3.5 py-1.5 text-xs rounded-lg font-bold transition text-slate-400 hover:text-white flex-1 text-center senior-tap';
      }
    }
  });
}

function setDifficulty(tier) {
  currentDifficulty = tier;
  localStorage.setItem('smriti_difficulty', tier);
  applyDifficultyUI();

  const modal = document.getElementById('game-modal');
  if (currentGameTypeActive && modal && !modal.classList.contains('hidden')) {
    currentRoundIndex = 1;
    currentRoundTimes = [];
    renderActiveRound();
  }
}

// 9. TRANSLATION ENGINE & SAHAYAK VOICE GUIDES
function speakGameGuide() {
  const lang = document.getElementById('lang-select')?.value || 'hi-IN';
  const dict = i18n[lang] || i18n['hi-IN'];
  const guideText = dict.gameGuides[currentGameTypeActive] || dict.ttsFullOverview;
  speakAudio(guideText, lang);
}

function speakMedicineInfo() {
  const lang = document.getElementById('lang-select')?.value || 'hi-IN';
  const dict = i18n[lang] || i18n['hi-IN'];
  speakAudio(dict.ttsMedicine, lang);
}

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

  setTxt('g4-badge', dict.g4Badge);
  setTxt('g4-title', dict.g4Title);
  setTxt('g4-desc', dict.g4Desc);
  setTxt('g4-btn', dict.g4Btn);

  setTxt('g5-badge', dict.g5Badge);
  setTxt('g5-title', dict.g5Title);
  setTxt('g5-desc', dict.g5Desc);
  setTxt('g5-btn', dict.g5Btn);

  // Modal Controls
  setTxt('diff-easy', dict.diffEasy);
  setTxt('diff-med', dict.diffMed);
  setTxt('diff-hard', dict.diffHard);
  setTxt('cg-tab-easy', dict.diffEasy);
  setTxt('cg-tab-med', dict.diffMed);
  setTxt('cg-tab-hard', dict.diffHard);
  setTxt('btn-game-close', dict.gameModalClose);
  setTxt('game-modal-subtitle', dict.gameModalSubtitle);

  // Matrix Table Headers
  setTxt('cg-matrix-header', dict.cgMatrixHeader);
  setTxt('cg-matrix-sub', dict.cgMatrixSub);
  setTxt('th-game-col', dict.thGameCol);
  setTxt('th-r1-col', dict.thR1Col);
  setTxt('th-r2-col', dict.thR2Col);
  setTxt('th-r3-col', dict.thR3Col);
  setTxt('th-avg-col', dict.thAvgCol);
  setTxt('cg-comb-label', dict.cgCombLabel);
  setTxt('cg-comb-sub', dict.cgCombSub);

  // Caregiver Portal
  setTxt('cg-subhead', dict.cgSubhead);
  setTxt('cg-patient-name', dict.cgPatientName);
  setTxt('cg-patient-desc', dict.cgPatientDesc);
  setTxt('btn-read-cg', dict.btnReadCg);
  setTxt('cg-sync-status', dict.cgSyncStatus);
  setTxt('cg-alert-title', dict.cgAlertTitle);
  setTxt('cg-alert-desc', dict.cgAlertDesc);
  setTxt('cg-btn-ack', dict.cgBtnAck);
  setTxt('cg-kpi1-label', dict.cgKpi1Label);
  setTxt('cg-kpi1-sub', dict.cgKpi1Sub);
  setTxt('cg-kpi3-label', dict.cgKpi3Label);
  setTxt('cg-kpi3-sub', dict.cgKpi3Sub);
  setTxt('cg-chart-header', dict.cgChartHeader);

  // Action Cards & Modals
  setTxt('rem-badge', dict.remBadge);
  setTxt('rem-card-title', dict.remTitle);
  setTxt('rem-card-desc', dict.remDesc);
  setTxt('rem-card-btn', dict.remBtn);
  
  setTxt('fam-badge', dict.famBadge);
  setTxt('fam-card-title', dict.famTitle);
  setTxt('fam-card-desc', dict.famDesc);
  setTxt('fam-card-btn', dict.famBtn);
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
  applyDifficultyUI();
  updateCaregiverDOM();
}

function onLanguageChanged() {
  const selectedLang = document.getElementById('lang-select').value;
  applyLanguage(selectedLang);
}

// 10. VOICE SYNTHESIS ENGINE
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
  
  const tierData = telemetryTierState[activeCaregiverTier] || emptyTierData();
  let allTimes = [];
  Object.values(tierData).forEach(r => {
    r.forEach(val => { if (typeof val === 'number' && val > 0) allTimes.push(val); });
  });

  const tierAvg = allTimes.length > 0
    ? (allTimes.reduce((a, b) => a + b, 0) / allTimes.length).toFixed(1)
    : '0.0';

  const tierWord = activeCaregiverTier === 'easy' ? dict.diffEasy : (activeCaregiverTier === 'med' ? dict.diffMed : dict.diffHard);
  let text = dict.ttsCgSummary
    .replace('%SCORE%', overallTelemetry.stabilityScore)
    .replace('%TIER%', tierWord)
    .replace('%LATENCY%', tierAvg)
    .replace('%ADHERENCE%', overallTelemetry.adherenceRate);
    
  speakAudio(text, lang);
}

// 11. ACCESSIBILITY SIZE SLIDER (14px - 24px with 60FPS debouncing)
const scaleSlider = document.getElementById('textScaleSlider');
const scaleLabel = document.getElementById('scaleLabel');

let isScaleUpdatePending = false;

function applyTextScale(pxValue) {
  if (scaleLabel) scaleLabel.textContent = `${pxValue}px`;
  if (scaleSlider && scaleSlider.value !== pxValue) scaleSlider.value = pxValue;

  if (!isScaleUpdatePending) {
    isScaleUpdatePending = true;
    requestAnimationFrame(() => {
      document.documentElement.style.fontSize = `${pxValue}px`;
      isScaleUpdatePending = false;
    });
  }
}

if (scaleSlider) {
  scaleSlider.addEventListener('input', (e) => {
    applyTextScale(e.target.value);
  });

  scaleSlider.addEventListener('change', (e) => {
    localStorage.setItem('smriti_text_px', e.target.value);
  });
}

// 12. NAVIGATION & MODALS
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

function openReminderModal() { document.getElementById('reminder-modal').classList.remove('hidden'); }
function openReminiscenceModal() { document.getElementById('reminiscence-modal').classList.remove('hidden'); }
function closeModal(id) { 
  document.getElementById(id).classList.add('hidden');
  if (id === 'game-modal') {
    currentGameTypeActive = null;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }
}

function confirmReminder() {
  closeModal('reminder-modal');
  dailyTaskTracker.medication = true;
  
  recalculateCognitiveScore();
  updateCaregiverDOM();
  
  const currentLang = document.getElementById('lang-select')?.value || 'hi-IN';
  const msg = currentLang === 'hi-IN' ? 'दादा, आपकी दवा की पुष्टि दर्ज कर ली गई है!' : (currentLang === 'as-IN' ? 'দাদা, আপোনাৰ ঔষধ খোৱাৰ তথ্য সংৰক্ষণ কৰা হ’ল!' : 'Dada, your medicine confirmation has been recorded!');
  alert(msg);
}

function triggerSOSConfirmation() { document.getElementById('sos-confirm-modal').classList.remove('hidden'); }
function confirmSOSDispatch() {
  closeModal('sos-confirm-modal');
  document.getElementById('sos-success-modal').classList.remove('hidden');
  document.getElementById('caregiver-alert-box').classList.remove('hidden');
  
  // Call Nandini's SOS backend function here!
  if (typeof triggerRealtimeSOS === 'function') {
    triggerRealtimeSOS();
  }
  
  const currentLang = document.getElementById('lang-select')?.value || 'hi-IN';
  const alertSpeech = currentLang === 'hi-IN' ? 'आपातकालीन चेतावनी और जीपीएस लोकेशन भेज दिया गया है।' : 'Emergency alert with GPS location dispatched.';
  speakAudio(alertSpeech, currentLang);
}
function dismissCaregiverAlert() { document.getElementById('caregiver-alert-box').classList.add('hidden'); }

// 13. 3-ROUND ENGINE & GAME LAUNCHER
function openGameModal(gameType) {
  currentGameTypeActive = gameType;
  currentRoundIndex = 1;
  currentRoundTimes = [];

  const modal = document.getElementById('game-modal');
  modal.classList.remove('hidden');
  
  applyDifficultyUI();
  updateMuteUI();
  renderActiveRound();
}

function renderActiveRound() {
  const lang = document.getElementById('lang-select')?.value || 'hi-IN';
  const dict = i18n[lang] || i18n['hi-IN'];
  
  const roundBadge = document.getElementById('game-round-badge');
  if (roundBadge) {
    roundBadge.textContent = `${dict.roundPrefix} ${currentRoundIndex}/3`;
  }

  roundStartTime = performance.now();
  renderGameContent(currentGameTypeActive);
}

function onRoundSuccess() {
  const roundLatency = parseFloat(((performance.now() - roundStartTime) / 1000).toFixed(1));
  currentRoundTimes.push(roundLatency);

  const lang = document.getElementById('lang-select')?.value || 'hi-IN';
  const dict = i18n[lang] || i18n['hi-IN'];
  const feedback = document.getElementById('game-modal-feedback');

  if (currentRoundIndex < 3) {
    feedback.textContent = dict.roundDoneMsg.replace('%R%', currentRoundIndex);
    speakAudio(dict.roundDoneMsg.replace('%R%', currentRoundIndex), lang);
    currentRoundIndex++;
    setTimeout(() => {
      renderActiveRound();
    }, 1100);
  } else {
    // All 3 Rounds Complete
    const avg = parseFloat((currentRoundTimes.reduce((a, b) => a + b, 0) / 3).toFixed(1));
    recordRoundScore(currentDifficulty, currentGameTypeActive, currentRoundTimes);
    
    const celebrationMsg = dict.gameDoneMsg.replace('%AVG%', avg);
    feedback.textContent = celebrationMsg;
    speakAudio(celebrationMsg, lang);

    const body = document.getElementById('game-modal-body');
    body.innerHTML = `
      <div class="bg-emerald-950/60 border border-emerald-500/40 rounded-3xl p-5 text-center space-y-2.5 w-full max-w-sm mx-auto">
        <div class="text-4xl">🏆</div>
        <h4 class="text-base sm:text-lg font-black text-emerald-300">All 3 Rounds Finished!</h4>
        <div class="flex justify-center gap-2 text-xs font-black text-slate-200">
          <span class="bg-slate-800 px-2.5 py-1 rounded-xl border border-slate-700">R1: ${currentRoundTimes[0]}s</span>
          <span class="bg-slate-800 px-2.5 py-1 rounded-xl border border-slate-700">R2: ${currentRoundTimes[1]}s</span>
          <span class="bg-slate-800 px-2.5 py-1 rounded-xl border border-slate-700">R3: ${currentRoundTimes[2]}s</span>
        </div>
        <div class="text-xs sm:text-sm font-extrabold text-emerald-400 pt-0.5">Average Latency: ${avg}s</div>
      </div>
    `;
  }
}

// 14. GAME GENERATION WITH NON-OVERLAPPING SPOTTER & HARD-MODE SCALING
function renderGameContent(gameType) {
  const title = document.getElementById('game-modal-title');
  const body = document.getElementById('game-modal-body');
  const feedback = document.getElementById('game-modal-feedback');
  const lang = document.getElementById('lang-select')?.value || 'hi-IN';
  const dict = i18n[lang] || i18n['hi-IN'];

  feedback.textContent = '';

  // -------------------------------------------------------------
  // GAME 1: HERITAGE MATCH
  // -------------------------------------------------------------
  if (gameType === 'memory') {
    title.textContent = dict.g1Title;
    feedback.textContent = dict.g1Desc;
    
    const pairCount = currentDifficulty === 'easy' ? 2 : (currentDifficulty === 'med' ? 3 : 4);
    const pool = ['🦏', '☕', '🦅', '🌸', '🏡', '🎋'].sort(() => 0.5 - Math.random());
    let symbols = [];
    for (let i = 0; i < pairCount; i++) {
      symbols.push(pool[i], pool[i]);
    }
    symbols.sort(() => 0.5 - Math.random());

    const gridCols = pairCount === 2 ? 'grid-cols-2' : (pairCount === 3 ? 'grid-cols-3' : 'grid-cols-4');
    body.innerHTML = `<div class="grid ${gridCols} gap-2 max-w-sm mx-auto w-full"></div>`;
    const grid = body.querySelector('div');
    
    let flipped = [];
    let matchedCount = 0;

    symbols.forEach((sym) => {
      const card = document.createElement('button');
      const cardSize = pairCount === 4 ? 'min-h-[3.2rem] max-h-[4rem] text-xl' : 'game-card-btn';
      card.className = `${cardSize} bg-slate-800 border-2 border-slate-700 flex items-center justify-center senior-tap transition shadow rounded-xl`;
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
              setTimeout(() => { speakAudio(`${matchedName} ${dict.matchedSuffix}`, lang); }, 250);

              flipped[0].classList.add('game-card-matched');
              flipped[1].classList.add('game-card-matched');
              flipped = [];
              matchedCount += 2;
              
              if (matchedCount === symbols.length) {
                onRoundSuccess();
              }
            } else {
              setTimeout(() => {
                speakAudio(dict.noMatchMsg, lang);
                flipped.forEach(c => {
                  c.textContent = '❓';
                  c.classList.remove('game-card-revealed');
                });
                flipped = [];
              }, 700);
            }
          }
        }
      };
      grid.appendChild(card);
    });

  // -------------------------------------------------------------
  // GAME 2: ASSAM TEA ROUTINE
  // -------------------------------------------------------------
  } else if (gameType === 'sequence') {
    title.textContent = dict.g2Title;
    feedback.textContent = dict.teaOptionPrompt;
    speakAudio(dict.teaOptionPrompt, lang);

    const fullStepsDatabase = {
      'hi-IN': [
        { id: 1, text: '💧 साफ पानी नापें', name: 'पानी नापना' },
        { id: 2, text: '🫖 पानी उबालें', name: 'पानी उबालना' },
        { id: 3, text: '🍃 असम चाय पत्ती डालें', name: 'चाय पत्ती डालना' },
        { id: 4, text: '🥛 दूध व इलायची मिलाएं', name: 'दूध मिलाना' },
        { id: 5, text: '☕ गरमा-गरम चाय छानें', name: 'चाय छानना' }
      ],
      'as-IN': [
        { id: 1, text: '💧 পৰিষ্কাৰ পানী জোখক', name: 'পানী জোখা' },
        { id: 2, text: '🫖 পানী উতলাওক', name: 'পানী উতলোৱা' },
        { id: 3, text: '🍃 অসমৰ চাহ পাত দিয়ক', name: 'চাহ পাত দিয়া' },
        { id: 4, text: '🥛 গাখীৰ আৰু ইলাচী দিয়ক', name: 'গাখীৰ দিয়া' },
        { id: 5, text: '☕ চাহ চেকি পৰিৱেশন কৰক', name: 'চাহ চেকা' }
      ],
      'en-IN': [
        { id: 1, text: '💧 Measure Fresh Water', name: 'Measure Water' },
        { id: 2, text: '🫖 Boil The Water', name: 'Boil Water' },
        { id: 3, text: '🍃 Add Assam Tea Leaves', name: 'Add Leaves' },
        { id: 4, text: '🥛 Add Milk & Cardamom', name: 'Add Milk' },
        { id: 5, text: '☕ Strain into Warm Cup', name: 'Strain Tea' }
      ]
    };

    const currentBank = fullStepsDatabase[lang] || fullStepsDatabase['hi-IN'];
    
    let activeSteps = [];
    if (currentDifficulty === 'easy') {
      activeSteps = [
        { id: 1, text: currentBank[1].text },
        { id: 2, text: currentBank[2].text },
        { id: 3, text: currentBank[4].text }
      ];
    } else if (currentDifficulty === 'med') {
      activeSteps = [
        { id: 1, text: currentBank[1].text },
        { id: 2, text: currentBank[2].text },
        { id: 3, text: currentBank[3].text },
        { id: 4, text: currentBank[4].text }
      ];
    } else {
      activeSteps = [
        { id: 1, text: currentBank[0].text },
        { id: 2, text: currentBank[1].text },
        { id: 3, text: currentBank[2].text },
        { id: 4, text: currentBank[3].text },
        { id: 5, text: currentBank[4].text }
      ];
    }

    const shuffled = [...activeSteps].sort(() => 0.5 - Math.random());
    const padClass = currentDifficulty === 'hard' ? 'p-2 text-xs' : 'p-2.5 text-xs sm:text-sm';
    body.innerHTML = `<div class="flex flex-col gap-2 max-w-md mx-auto w-full"></div>`;
    const container = body.querySelector('div');
    let currentExpected = 1;

    shuffled.forEach((step, index) => {
      const btn = document.createElement('button');
      btn.className = `${padClass} bg-slate-800 border-2 border-slate-700 font-bold rounded-xl senior-tap text-left flex items-center justify-between transition shadow`;
      btn.innerHTML = `<span>${step.text}</span> <span class="text-[10px] text-slate-400 font-extrabold">${dict.stepOptionPrefix} ${index + 1}</span>`;
      
      btn.onclick = () => {
        if (step.id === currentExpected) {
          btn.classList.add('bg-teal-700', 'border-teal-400');
          btn.disabled = true;
          currentExpected++;
          if (currentExpected > activeSteps.length) {
            onRoundSuccess();
          }
        } else {
          feedback.textContent = dict.wrongChoice;
          speakAudio(dict.wrongChoice, lang);
        }
      };
      container.appendChild(btn);
    });

  // -------------------------------------------------------------
  // GAME 3: SPOT CULTURAL MOTIF (With flexible spacing wrapper)
  // -------------------------------------------------------------
  } else if (gameType === 'spotter') {
    title.textContent = dict.g3Title;
    
    const totalOptions = currentDifficulty === 'easy' ? 4 : (currentDifficulty === 'med' ? 6 : 9);
    const pool = ['🦏', '☕', '🦅', '🌸', '🏡', '🎋', '🫖', '🍃', '🏮'].slice(0, totalOptions);
    const targetSymbol = pool[Math.floor(Math.random() * pool.length)];
    const targetName = dict.itemNames[targetSymbol] || 'Symbol';
    
    feedback.textContent = `${dict.findPrompt.replace('%TARGET%', targetName)}`;
    speakAudio(dict.findPrompt.replace('%TARGET%', targetName), lang);

    const shuffledIcons = [...pool].sort(() => 0.5 - Math.random());
    const gridCols = totalOptions === 4 ? 'grid-cols-2' : (totalOptions === 6 ? 'grid-cols-3' : 'grid-cols-3');
    const cardSize = totalOptions === 9 ? 'min-h-[2.6rem] max-h-[3.5rem] text-xl' : 'game-card-btn';

    body.innerHTML = `
      <div class="flex flex-col gap-2 w-full max-w-sm mx-auto items-center">
        <div class="target-highlight-box py-1.5 px-3 text-center flex items-center justify-center gap-2 w-full rounded-xl flex-shrink-0">
          <span class="text-[10px] uppercase font-extrabold tracking-wider text-emerald-300">${dict.targetPromptBadge}</span>
          <span class="text-xl animate-bounce">${targetSymbol}</span>
          <span class="text-xs font-bold text-white bg-emerald-700/60 px-2 py-0.5 rounded-md">${targetName}</span>
        </div>
        <div class="grid ${gridCols} gap-2 w-full"></div>
      </div>
    `;
    const grid = body.querySelector('.grid');

    shuffledIcons.forEach(ic => {
      const btn = document.createElement('button');
      btn.className = `${cardSize} bg-slate-800 border-2 border-slate-700 flex items-center justify-center senior-tap transition shadow rounded-xl`;
      btn.textContent = ic;
      
      btn.onclick = () => {
        if (ic === targetSymbol) {
          btn.classList.add('bg-amber-600', 'border-amber-400');
          onRoundSuccess();
        } else {
          feedback.textContent = dict.wrongChoice;
          speakAudio(dict.wrongChoice, lang);
        }
      };
      grid.appendChild(btn);
    });

  // -------------------------------------------------------------
  // GAME 4: NUMBER TRAIL TAP (TMT-A)
  // -------------------------------------------------------------
  } else if (gameType === 'trail') {
    title.textContent = dict.g4Title;
    feedback.textContent = dict.trailTapPrompt;
    speakAudio(dict.trailTapPrompt, lang);

    const maxCount = currentDifficulty === 'easy' ? 5 : (currentDifficulty === 'med' ? 8 : 10);
    const nums = Array.from({ length: maxCount }, (_, i) => i + 1).sort(() => 0.5 - Math.random());

    const cols = maxCount <= 6 ? 'grid-cols-3' : (maxCount <= 8 ? 'grid-cols-4' : 'grid-cols-5');
    const btnSize = maxCount === 10 ? 'h-10 sm:h-12 text-sm font-black' : 'h-14 sm:h-18 text-xl';
    
    body.innerHTML = `<div class="grid ${cols} gap-2 max-w-md mx-auto w-full"></div>`;
    const grid = body.querySelector('div');

    let currentExpected = 1;

    nums.forEach(num => {
      const btn = document.createElement('button');
      btn.className = `${btnSize} bg-slate-800 border-2 border-slate-700 rounded-xl flex items-center justify-center senior-tap transition text-white shadow`;
      btn.textContent = num;

      btn.onclick = () => {
        if (num === currentExpected) {
          btn.classList.add('trail-number-done');
          speakAudio(`${num}`, lang);
          currentExpected++;
          if (currentExpected > maxCount) {
            onRoundSuccess();
          }
        } else {
          feedback.textContent = `${dict.wrongChoice} Look for ${currentExpected}!`;
          speakAudio(dict.wrongChoice, lang);
        }
      };
      grid.appendChild(btn);
    });

  // -------------------------------------------------------------
  // GAME 5: BRAHMAPUTRA LANTERNS
  // -------------------------------------------------------------
  } else if (gameType === 'lantern') {
    title.textContent = dict.g5Title;
    feedback.textContent = dict.lanternWatchPrompt;
    speakAudio(dict.lanternWatchPrompt, lang);

    const padCount = currentDifficulty === 'hard' ? 6 : 4;
    const seqLength = currentDifficulty === 'easy' ? 2 : (currentDifficulty === 'med' ? 3 : 4);

    const sequence = [];
    for (let i = 0; i < seqLength; i++) {
      sequence.push(Math.floor(Math.random() * padCount));
    }

    const cols = padCount === 6 ? 'grid-cols-3' : 'grid-cols-2';
    const padSizeClass = padCount === 6 ? 'min-h-[3.2rem] max-h-[4.5rem] text-lg' : 'lantern-pad';

    body.innerHTML = `<div class="grid ${cols} gap-2.5 max-w-sm mx-auto w-full"></div>`;
    const grid = body.querySelector('div');

    const pads = [];
    for (let i = 0; i < padCount; i++) {
      const pad = document.createElement('button');
      pad.className = `${padSizeClass} bg-slate-800 border-2 border-slate-700 flex items-center justify-center senior-tap transition shadow rounded-2xl`;
      pad.textContent = '🏮';
      pad.disabled = true;
      grid.appendChild(pad);
      pads.push(pad);
    }

    let flashIdx = 0;
    const interval = setInterval(() => {
      if (flashIdx < sequence.length) {
        const targetPad = pads[sequence[flashIdx]];
        targetPad.classList.add('lantern-lit');
        setTimeout(() => targetPad.classList.remove('lantern-lit'), 450);
        flashIdx++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          feedback.textContent = dict.lanternYourTurn;
          speakAudio(dict.lanternYourTurn, lang);
          pads.forEach((p, idx) => {
            p.disabled = false;
            p.onclick = () => handleUserLanternTap(idx);
          });
        }, 450);
      }
    }, 850);

    let userStep = 0;
    function handleUserLanternTap(idx) {
      const pad = pads[idx];
      pad.classList.add('lantern-lit');
      setTimeout(() => pad.classList.remove('lantern-lit'), 250);

      if (idx === sequence[userStep]) {
        userStep++;
        if (userStep === sequence.length) {
          pads.forEach(p => p.disabled = true);
          onRoundSuccess();
        }
      } else {
        pads.forEach(p => p.disabled = true);
        feedback.textContent = dict.wrongChoice;
        speakAudio(dict.wrongChoice, lang);
      }
    }
  }
}

// 15. DYNAMIC 7-DAY CHART ENGINE
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
          data: overallTelemetry.chartHistory,
          borderColor: '#059669',
          backgroundColor: 'rgba(5, 150, 105, 0.12)',
          borderWidth: 3,
          fill: true,
          tension: 0.35,
          pointRadius: 5,
          pointHoverRadius: 7,
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
          min: 6,
          max: 24,
          ticks: { callback: (val) => `${val}s` }
        }
      },
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}

// 16. INITIAL BOOTSTRAP
window.addEventListener('DOMContentLoaded', () => {
  
  async function testSupabaseConnection() {
  const { data, error } = await supabase.from('telemetry_logs').select('*').limit(1);
  if (error) {
    console.log('Supabase connected with error:', error.message);
  } else {
    console.log('Successfully connected to Supabase telemetry table:', data);
  }
}

  testSupabaseConnection();

  const savedScale = localStorage.getItem('smriti_text_px') || 18;
  applyTextScale(savedScale);

  const savedLang = localStorage.getItem('smriti_language') || 'hi-IN';
  applyLanguage(savedLang);

  recalculateCognitiveScore();
  updateCaregiverDOM();

// Find where the Emergency SOS button or confirmation popup is handled in app.js
  const sosConfirmBtn = document.querySelector('#yes-send-help-btn') || document.getElementById('emergency-sos-btn');
  
  if (sosConfirmBtn) {
    sosConfirmBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Call the function you defined in sos.js
      if (typeof triggerRealtimeSOS === 'function') {
        triggerRealtimeSOS();
      } else {
        console.error('triggerRealtimeSOS function is not defined.');
      }
    });
  }
});