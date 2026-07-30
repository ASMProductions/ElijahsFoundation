const fs = require('fs');
const PATH = 'lib/quran-data.json';
const data = JSON.parse(fs.readFileSync(PATH, 'utf8'));

const M = {};

M["1"] = {
  transliteration: `Mustopa Milham / 1559 Central Ave / Cincinnati, Ohio — to — Elijah Mohammed / 6116 S. Michigan Ave. / Chicago, Ill.`,
  translationMaulana: `Dedication and shipment inscription: this Qur'an was sent FROM Mustopa Milham (1559 Central Avenue, Cincinnati, Ohio) TO Elijah Mohammed (6116 South Michigan Avenue, Chicago, Illinois).`,
  annotations: `Urdu/Persian script at top of page:
مصطفیٰ محمد درہ

English handwritten text on page:
Mustopa Milham
1559 Central ave
Cincinnati Ohio
to
Elijah Mohammed
6116 S. Michigan Ave.
Chicago ILL.

Handwriting authentication: Elijah Muhammad's signature on this page is CONFIRMED AUTHENTIC. The sender information (Milham name and address) handwriting origin remains PENDING VERIFICATION.`
};

function P(n, arabic, translit, english, tafsir) {
  M[String(n)] = {
    transliteration: translit,
    translationMaulana: english,
    annotations: `Arabic text on this page:\n\n${arabic}\n\nUrdu/Persian tafsir on this page:\n\n${tafsir}`
  };
}

P(118,
`Verse 53: أُولَٰئِكَ الَّذِينَ آتَيْنَاهُمُ الْكِتَابَ يَفْرَحُونَ بِمَا أُنزِلَ إِلَيْكَ وَمِنَ الْأَحْزَابِ مَن يُنكِرُ بَعْضَهُ ۚ قُلْ إِنَّمَا أُمِرْتُ أَنْ أَعْبُدَ اللَّهَ وَلَا أُشْرِكَ بِهِ

Verse 54: إِلَيْهِ تَدْعُونَ وَهُوَ الْحَقُّ تَعَالَىٰ عَمَّا يُشْرِكُونَ

Verse 55: قُلْ إِنَّ رَبِّي يَقْذِفُ بِالْحَقِّ عَلَّامُ الْغُيُوبِ`,
`Ulá'ik alládhín átaynáhum al-kitáb yafrḥún bi-má unzila ilayka wa-min al-ahzáb man yunkar ba'dah qul innamá umirt an a'bud Alláha wa-lá ushrik bih • Ilayh tadúun wa-huwa al-haqq ta'alá 'ammá yushrikun • Qul inna rabbee yaqdhif bi-al-haqq 'allám al-ghuyúb`,
`Those to whom We gave the Scripture rejoice at what has been revealed to you, but among the factions are those who reject part of it. Say, "I have only been commanded to worship Allah and not associate partners with Him." To Him is my invitation, and to Him will be my return. Say, "Indeed, my Lord throws the truth, and He is the Knower of the unseen."`,
`جن لوگوں کو ہم نے کتاب دی ہے وہ خوش ہیں اس سے جو تم پر نازل ہوا
— "Those to whom We gave Scripture rejoice at what was revealed to you"

اور فریقوں میں سے کوئی اس کے کچھ حصے کا انکار کرتے ہیں
— "But some factions reject part of it"

کہو میں صرف اللہ کی عبادت کرنے کا حکم دیا گیا ہوں اور اسے شریک نہ کروں
— "Say I am commanded to worship Allah alone and not associate partners"`);

P(119,
`Verse 56: قُل إِنَّ اللَّهَ لَا يَظْلِمُ مِثْقَالَ ذَرَّةٍ ۖ وَإِن تَكُ حَسَنَةً يُضَاعِفْهَا وَيُؤْتِ مِن لَّدُنْهُ أَجْرًا عَظِيمًا

Verse 57: فَكَيْفَ إِذَا جِئْنَا مِن كُلِّ أُمَّةٍ بِشَهِيدٍ وَجِئْنَا بِكَ عَلَىٰ هَٰؤُلَاءِ شَهِيدًا`,
`Qul inna Alláha lá yazlim mithqal dharrah wa-in taku hasanah yudá'ifhá wa-yu'ti min ladunhu ajran 'azímaan • Fa-kayf idha ji'ná min kulli ummah bi-shahíd wa-ji'ná bik 'alá há'ulá'i shahíd`,
`Say, "Indeed, Allah does not wrong by even an atom's weight. And if there is a good deed, He multiplies it and gives from Himself a great reward." So how will it be when We bring from every nation a witness and We bring you against these people as a witness?`,
`کہو اللہ ذرے برابر بھی ظلم نہیں کرتا
— "Say Allah does not wrong even an atom's weight"

اور اگر کوئی نیک کام ہے تو اسے دگنا کرتا ہے اور اپنی طرف سے بڑا اجر دیتا ہے
— "If there is good deed He doubles it and gives great reward from Himself"

تو کیسے ہوگا جب ہم ہر امت سے ایک گواہ لائیں اور تمہیں ان پر گواہ بنائیں
— "How then when We bring a witness from every nation and make you witness against them"`);

P(120,
`Verse 58: يَوَدُّ الَّذِينَ كَفَرُوا لَوْ لَمْ تَكُونُوا مُؤْمِنِينَ وَتَأْخُذُونَ عَلَىٰ أَيْمَانِهِمْ كُلَّ وِدٍّ ۚ قُلْ هَلْ تَرَبَّصُونَ بِنَا إِلَّا إِحْدَى الْحُسْنَيَيْنِ

Verse 59: إِلَّا الَّذِينَ يَصِلُونَ إِلَىٰ قَوْمٍ بَيْنَكُمْ وَبَيْنَهُم مِّيثَاقٌ أَوْ جَاءُوكُم قَاسِرَةً صُدُورُهُمْ أَن يُقَاتِلُوكُمْ أَوْ يُقَاتِلُوا قَوْمَهُمْ`,
`Yawud alládhín kafarú law lam takúnu mu'minín wa-ta'khudhun 'alá ayámánih kulla widd qul hal tarabbastun bina illá iḥdá al-ḥusnayin • Illá alládhín yasilun ilá qawm baynakum wa-baynahum míthaq aw já'úkum qásírah sudúruhum an yuqátilukum aw yuqátilú qawmahum`,
`Those who disbelieve wish that you would disbelieve as they disbelieved so you would be alike. So do not take allies from among them until they emigrate for the cause of Allah — except those who take refuge with a people between you and whom there is a treaty, or those who come to you with hearts disinclined to fight you or to fight their own people.`,
`کافر چاہتے ہیں کہ کاش تم بھی کافر ہوتے تاکہ برابر ہوتے
— "Those who disbelieve wish you were disbelievers so you'd be equal"

تو ان میں سے اپنے حلیف نہ بناؤ جب تک وہ اللہ کے راستے میں ہجرت نہ کریں
— "So do not take allies from them until they emigrate for Allah's sake"

سوائے ان لوگوں کے جو ایسی قوم سے ملے ہوں جن سے تمہارا معاہدہ ہے
— "Except those joined to a people with whom you have a treaty"`);

P(121,
`Verse 60: وَإِذَا أَرَدْنَا أَن نُّهْلِكَ قَرْيَةً أَمَرْنَا مُتْرَفِيهَا فَفَسَقُوا فِيهَا فَحَقَّ عَلَيْهَا الْقَوْلُ فَدَمَّرْنَاهَا تَدْمِيرًا

Verse 61: وَكَمْ أَرْسَلْنَا مِن نَّبِيٍّ فِي الْأَوَّلِينَ`,
`Wa-idha aradná an nuhlík qaryah amrná mutrafíhá fa-fasaqu fíhá fa-ḥaqqa 'alayha al-qawl fa-dammarná ha tadmíran • Wa-kam arsalná min nabíy fi-al-awwalín`,
`And when We intend to destroy a city, We command its affluent people, and they commit defilement in it; so the word comes into effect upon it, and We destroy it with complete destruction. And how many prophets We sent among the former peoples.`,
`اور جب ہم کسی شہر کو ہلاک کرنا چاہتے ہیں تو اس کے خوشحال لوگوں کو حکم دیتے ہیں
— "When We intend to destroy a city, We command its affluent people"

تو وہ اس میں فسق کریں تو اس پر عذاب کا فیصلہ واجب ہو جاتا ہے اور ہم اسے بالکل تباہ کر دیتے ہیں
— "They act corruptly in it, so the judgment falls upon it and We destroy it completely"

اور ہم نے کتنے ہی نبی پہلی امتوں میں بھیجے
— "And how many prophets We sent among the former peoples"`);

P(122,
`Verse 62: وَلَمْ يَأْتِهِمْ رَسُولٌ إِلَّا كَانُوا بِهِ يَسْتَهْزِئُونَ

Verse 63: فَأَهْلَكْنَا أَشَدَّ مِنْهُم بَطْشًا وَمَضَىٰ مَثَلُ الْأَوَّلِينَ

Verse 64: وَلَئِن سَأَلْتَهُم مَّنْ خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ لَيَقُولُنَّ اللَّهُ ۖ قُلِ الْحَمْدُ لِلَّهِ ۚ بَلْ أَكْثَرُهُمْ لَا يَعْلَمُونَ`,
`Wa-lam ya'tihim rasul illá kanu bih yastahzi'un • Fa-ahlaká ashad minhum batsḥan wa-madá mathal al-awwalín • Wa-la'in sa'altahum man khalaq as-samawat wa-al-ard layaqúlunna Alláhu qul al-ḥamd li-Alláhi bal aktharu hum lá ya'lamun`,
`And no messenger came to them except that they ridiculed him. So We destroyed those stronger than them in striking power, and the example of the former peoples has gone on before. And if you ask them, "Who created the heavens and the earth?" they will say, "Allah." Say, "Praise be to Allah." But most of them do not know.`,
`اور کوئی رسول ان کے پاس نہیں آیا سوائے اس کے کہ وہ اس کا مذاق اڑاتے
— "No messenger came to them except they mocked him"

تو ہم نے ان سے زیادہ طاقتور لوگوں کو ہلاک کیا اور پہلی امتوں کی مثال ختم ہو گئی
— "So We destroyed those stronger than them in power, and the precedent of former peoples passed on"

اور اگر تم ان سے پوچھو کہ آسمانوں اور زمین کو کس نے پیدا کیا تو وہ کہیں گے اللہ نے
— "If you ask them who created heavens and earth they say Allah"`);

P(123,
`Verse 65: اللَّهُ يَعْلَمُ كُلَّ نَفْسٍ مَّا تَكْسِبُ وَإِن تُخْفُوا أَقْوَالَكُمْ أَوْ تُبْدُوهَا فَإِنَّ اللَّهَ يَعْلَمُ ذَاتَ الصُّدُورِ

Verse 66: أَلَا يَعْلَمُ مَن خَلَقَ وَهُوَ اللَّطِيفُ الْخَبِيرُ`,
`Alláhu ya'lam kull nafs má taksib wa-in tukhfu aqwálakum aw tubdúha fa-inna Alláha ya'lam dhát as-sudur • Alá ya'lam man khalaq wa-huwa al-latíf al-khabír`,
`Allah knows what every soul earns. And whether you hide your words or reveal them, indeed Allah knows the contents of the chests. Does He not know, He who created? And He is the Subtle, the Aware.`,
`اللہ جانتا ہے ہر نفس جو کماتا ہے
— "Allah knows what every soul earns"

اور اگر تم اپنی بات چھپاؤ یا ظاہر کرو تو اللہ دلوں میں جو ہے وہ جانتا ہے
— "If you hide your words or reveal them, Allah knows what is in hearts"

کیا یہ نہیں جانتا جس نے پیدا کیا اور وہ لطیف اور خبیر ہے
— "Does not He who created know, and He is the Subtle, the Aware"`);

P(124,
`Verse 67: هُوَ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ ذَلُولًا فَامْشُوا فِي مَنَاكِبِهَا وَكُلُوا مِن رِّزْقِهِ وَإِلَيْهِ النُّشُورُ

Verse 68: أَأَمِنتُم مَّن فِي السَّمَاءِ أَن يَخْسِفَ بِكُمُ الْأَرْضَ فَإِذَا هِيَ تَمُورُ`,
`Huwa alládhī ja'ala lakum al-ard dhulúlan fa-mshu fi manakibhá wa-kulu min rizqih wa-ilayh an-nushur • A-amintu man fi as-samá' an yakhsif bikum al-ard fa-idha hee tamur`,
`It is He who made the earth tame for you, so walk among its slopes and eat of His provision. And to Him is the resurrection. Do you feel secure that He who is in the heaven will not cause the earth to sink with you, and suddenly it would sway?`,
`وہی ہے جس نے تمہارے لیے زمین کو ذلیل (نرم) بنایا
— "It is He who made the earth submissive for you"

تو اس کے دامن میں چلو اور اس کا رزق کھاؤ اور اسی کے پاس دوبارہ اٹھنا ہے
— "Walk upon its slopes and eat of His provision, and to Him is the return"

کیا تم اس سے محفوظ ہو جو آسمان میں ہے کہ زمین کو نیچے دھسا دے
— "Are you safe from He in heaven that He will not cause earth to sink with you"`);

P(125,
`Verse 69: أَمْ أَمِنتُم مَّن فِي السَّمَاءِ أَن يُرْسِلَ عَلَيْكُمْ حَاصِبًا ۖ فَسَتَعْلَمُونَ كَيْفَ نَذِيرِ

Verse 70: وَلَقَدْ صَدَّقَ عَلَيْهِمْ إِسْرَائِيلُ الْقَوْلَ الَّذِي قَالُوا ۚ فَتَوَلَّوْا فَأَرْسَلْنَا عَلَيْهِمْ ذُبَابًا وَالطَّاعُونَ وَالْقُرُوحَ وَمَا اسْتَكَانُوا وَمَا اسْتَسْلَمُوا`,
`Am amintu man fi as-samá' an yursil 'alaykum ḥásibaa fa-sta'lamun kayf nadhír • Wa-laqad saddaqa 'alayhim israíl al-qawl alládhī qálú fa-tawallaw fa-arsalná 'alayhim dhubáaban wa-al-tá'un wa-al-quruh wa-má istakánu wa-má istaslamú`,
`Or do you feel secure that He who is in heaven will not send upon you a storm of stones? Then you will know how severe is My warning. And indeed the Children of Israel had already confirmed the word they had spoken. But a faction of them turned away, so We sent upon them affliction — yet they neither humbled themselves nor submitted.`,
`کیا تم اس سے محفوظ ہو کہ آسمان سے پتھروں کی بارش بھیجے
— "Are you secure He will not send stones from heaven"

تو تم جان جاؤ گے میری وعید کتنی سخت ہے
— "Then you will know how severe is My warning"

اور یقیناً بنی اسرائیل نے اس بات کو سچا کر دیا جو انہوں نے کہی تھی
— "The Children of Israel confirmed the word they had spoken"`);

P(126,
`Verse 71: وَإِذْ قَالَتْ أُمَّةٌ مِّنْهُمْ لِمَ تَعِظُونَ قَوْمًا ۙ اللَّهُ مُهْلِكُهُمْ أَوْ مُعَذِّبُهُمْ عَذَابًا شَدِيدًا ۖ قَالُوا مَعْذِرَةً إِلَىٰ رَبِّكُمْ وَلَعَلَّهُمْ يَتَّقُونَ

Verse 72: فَلَمَّا نَسُوا مَا ذُكِّرُوا بِهِ أَنجَيْنَا الَّذِينَ يَنْهَوْنَ عَنِ السُّوءِ وَأَخَذْنَا الَّذِينَ ظَلَمُوا بِعَذَابٍ بَئِيسٍ بِمَا كَانُوا يَفْسِقُونَ`,
`Wa-idh qálat ummah minhum lim ta'izun qawman Alláhu muhlíkuhum aw mu'adhdhbuhum 'adhaban shadíd qálú ma'dhrah ilá rabbkum wa-la'allahum yattaqun • Fa-lammá nasú má dhukkirú bih anjayna alládhín yanhawn 'an as-súa wa-akhadhná alládhín zlamú bi-'adhab ba'ís bi-má kanu yafasqun`,
`And when a faction of them said, "Why do you advise a people whom Allah is about to destroy or to punish with a severe punishment?" They said, "To be free from blame before your Lord, and perhaps they will fear Him." So when they forgot that of which they had been reminded, We saved those who had forbidden evil and seized those who wronged with a wretched punishment because they were defiantly disobeying.`,
`اور جب ان میں سے ایک جماعت نے کہا کہ تم ایسی قوم کو کیوں نصیحت کرتے ہو
— "When a faction said why do you advise a people"

جسے اللہ ہلاک کرنے والا یا سخت عذاب دینے والا ہے، انہوں نے کہا اپنے رب کے پاس معذرت کے لیے
— "Whom Allah is about to destroy or punish severely, they said it is an excuse before your Lord"

تو جب وہ اس نصیحت کو بھول گئے تو جو لوگ برائی سے منع کرتے تھے انہیں بچایا
— "When they forgot what they were reminded of We saved those who forbade evil"`);

P(127,
`Verse 73: وَإِذَ أَخَذَ اللَّهُ مِيثَاقَ النَّبِيِّينَ لَمَا آتَيْتُكُم مِّن كِتَابٍ وَحِكْمَةٍ ثُمَّ جَاءَكُمْ رَسُولٌ مُّصَدِّقٌ لِّمَا مَعَكُمْ لَتُؤْمِنُنَّ بِهِ وَلَتَنصُرُنَّهُ

Verse 74: قَالَ أَأَقْرَرْتُمْ وَأَخَذْتُمْ عَلَىٰ ذَلِكُمْ إِصْرِي ۖ قَالُوا أَقْرَرْنَا ۚ قَالَ فَاشْهَدُوا وَأَنَا مَعَكُم مِّن الشَّاهِدِينَ`,
`Wa-idh akhadh Alláhu míthaq an-nabiyyín la-má átaytkum min kitáb wa-hikmah thumma já'akum rasul musaddiq li-má ma'akum la-tu'minunna bih wa-la-tansurunnah • Qála a-aqrarrtum wa-akhadhtum 'alá dhálíkum isrí qálú aqrrrná qála fa-ashhadu wa-ana ma'akum min ash-shihidín`,
`And when Allah took the covenant of the prophets, saying, "Whatever I give you of the Scripture and wisdom, and then a messenger comes to you confirming what is with you — you must believe in him and give him victory." He said, "Have you acknowledged and taken upon that My covenant?" They said, "We have acknowledged it." He said, "Then bear witness, and I am with you among the witnesses."`,
`اور جب اللہ نے نبیوں سے عہد لیا کہ جو کتاب اور حکمت میں نے تمہیں دی
— "When Allah took the covenant of prophets - whatever Scripture and wisdom I gave you"

تو اگر تمہارے پاس رسول آئے جو تمہاری کتاب کی تصدیق کرے تو تم ضرور اس پر ایمان لاؤ
— "Then if a messenger comes confirming your Scripture you must believe and help him"

کہا کیا تم اقرار کرتے ہو؟ انہوں نے کہا ہاں ہم اقرار کرتے ہیں
— "He said do you affirm? They said we affirm"`);

P(128,
`Verse 75: فَمَن تَوَلَّىٰ بَعْدَ ذَلِكَ فَأُولَٰئِكَ هُمُ الْفَاسِقُونَ

Verse 76: أَفَغَيْرَ دِينِ اللَّهِ يَبْغُونَ وَلَهُ أَسْلَمَ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ طَوْعًا وَكَرْهًا وَإِلَيْهِ يُرْجَعُونَ`,
`Fa-man tawallá ba'd dhálika fa-ulá'ik hum al-fásiqun • Afa-ghayra din Alláhi yaghbúnun wa-lahu asláma man fi as-samawat wa-al-ard taw'an wa-karhan wa-ilayh yurja'un`,
`So whoever turns away after that — then those are the defiantly disobedient. So do they seek other than the religion of Allah, while to Him have submitted all those within the heavens and the earth, willingly or by compulsion, and to Him they will be returned?`,
`تو جو اس کے بعد منہ موڑے وہی نافرمان ہیں
— "So whoever turns away after that are the disobedient"

کیا وہ اللہ کے دین کے علاوہ کوئی دین ڈھونڈتے ہیں
— "Do they seek other than Allah's religion"

حالانکہ جو کوئی آسمانوں اور زمین میں ہے اس نے اللہ کو خضوع کیا خوشی سے یا مجبوری سے
— "When all in heavens and earth have submitted to Him willingly or by compulsion"`);

P(129,
`Verse 77: قُلْ آمَنَّا بِاللَّهِ وَمَا أُنزِلَ عَلَيْنَا وَمَا أُنزِلَ عَلَىٰ إِبْرَاهِيمَ وَإِسْمَاعِيلَ وَإِسْحَاقَ وَيَعْقُوبَ وَالْأَسْبَاطِ

Verse 78: وَمَا أُنزِلَ عَلَى مُوسَىٰ وَعِيسَىٰ وَمَا أُوتِيَ النَّبِيُّونَ مِن رَّبِّهِمْ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّنْهُمْ وَنَحْنُ لَهُ مُسْلِمُونَ`,
`Qul ámannä bi-Alláhi wa-má unzil 'alayna wa-má unzil 'alá ibrahím wa-isma'íl wa-ishaq wa-ya'qub wa-al-asbáth • Wa-má unzil 'alá músá wa-'ísá wa-má úti an-nabiyyun min rabbihim lá nurfarríq bayna aḥad minhum wa-naḥnu lahu muslimun`,
`Say, "We have believed in Allah and what has been revealed to us and what was revealed to Abraham, Ishmael, Isaac, Jacob, and the Descendants, and what was revealed to Moses and Jesus and what was given to the prophets from their Lord. We make no distinction between any of them, and we are Muslims, submitting to Him."`,
`کہو ہم ایمان لائے اللہ پر اور جو ہم پر نازل ہوا
— "Say we believe in Allah and what was revealed to us"

اور جو موسیٰ اور عیسیٰ پر نازل ہوا اور جو نبیوں کو ان کے رب سے دیا گیا
— "And what was revealed to Moses and Jesus and what was given to the prophets"

ہم ان میں سے کسی کے ساتھ فرق نہیں کرتے اور ہم اسے مسلم ہیں
— "We make no distinction between any of them and we submit to Him"`);

P(130,
`Verse 79: فَإِنْ آمَنُوا بِمِثْلِ مَا آمَنتُم بِهِ فَقَدِ اهْتَدَوا ۖ وَّإِن تَوَلَّوْا فَإِنَّمَا هُمْ فِي شِقَاقٍ ۚ فَسَيَكْفِيكَهُمُ اللَّهُ ۚ وَهُوَ السَّمِيعُ الْعَلِيمُ

Verse 80: صِبْغَةَ اللَّهِ وَمَنْ أَحْسَنُ مِنَ اللَّهِ صِبْغَةً وَنَحْنُ لَهُ عَابِدُونَ`,
`Fa-in ámanú bi-mithli má ámantu bih fa-qadi ahtadu wa-in tawallaw fa-innamá hum fi shiqáq fa-sayakfíkahum Alláhu wa-huwa as-samí' al-'alím • Sibghat Alláhi wa-man aḥsan min Alláhi sibghah wa-naḥnu lahu 'ábidun`,
`So if they believe in the same as you believe in, then they have been rightly guided; but if they turn away, then they are only in dissension. And Allah will be sufficient for you against them, and He is the Hearing, the Knowing. We take the color of Allah — and who is better than Allah in ordaining color? And we are worshippers of Him.`,
`تو اگر وہ جیسے تم مانتے ہو ویسے ہی مانیں تو وہ ہدایت یافتہ ہیں
— "If they believe as you believe they are guided"

اور اگر منہ موڑیں تو وہ سرکشی میں ہیں تو اللہ تمہیں ان سے کافی ہے
— "If they turn away they are in opposition, then Allah suffices you against them"

اللہ کا رنگ ہے - اور اللہ سے بہتر کون ہے رنگ میں اور ہم اسی کے عابد ہیں
— "The color of Allah - who is better than Allah in color, and we worship Him"`);

P(131,
`Verse 81: قُلْ أَتُحَاجُّونَنَا فِي اللَّهِ وَهُوَ رَبُّنَا وَرَبُّكُمْ وَلَنَا أَعْمَالُنَا وَلَكُمْ أَعْمَالُكُمْ وَنَحْنُ لَهُ مُخْلِصُونَ

Verse 82: أَمْ تَقُولُونَ إِنَّ إِبْرَاهِيمَ وَإِسْمَاعِيلَ وَإِسْحَاقَ وَيَعْقُوبَ وَالْأَسْبَاطَ كَانُوا هُودًا أَوْ نَصَارَىٰ ۖ قُلْ أَأَنتُمْ أَعْلَمُ أَمِ اللَّهُ`,
`Qul a-tuḥájjunna fi Alláhi wa-huwa rabbuna wa-rabbukum wa-lana a'máluna wa-lakum a'málukum wa-naḥnu lahu mukhliṣun • Am taqúlun inna ibrahím wa-isma'íl wa-ishaq wa-ya'qub wa-al-asbáth kanu húdan aw nasará qul a-antum a'lam am Alláhu`,
`Say, "Do you dispute with us concerning Allah while He is our Lord and your Lord? For us are our deeds, and for you are your deeds. And we are sincere to Him." Or do you say that Abraham and Ishmael and Isaac and Jacob and the Descendants were Jews or Christians? Say, "Are you more knowing, or is Allah?"`,
`کہو کیا تم ہمسے اللہ کے بارے میں جھگڑا کرتے ہو حالانکہ وہ ہمارا اور تمہارا رب ہے
— "Say do you dispute with us about Allah when He is our and your Lord"

ہمارے لیے ہمارے اعمال ہیں اور تمہارے لیے تمہارے اعمال ہیں اور ہم اسے خالص ہیں
— "For us our deeds and for you your deeds, and we are sincere to Him"

یا تم کہتے ہو کہ ابراہیم اور اسمٰعیل یہودی یا نصرانی تھے؟ کہو کیا تم زیادہ جاننے والے ہو یا اللہ
— "Do you say Abraham was Jewish or Christian? Say are you more knowing or Allah"`);

P(132,
`Verse 83: بَلَىٰ ۖ مَن أَسْلَمَ وَجْهَهُ لِلَّهِ وَهُوَ مُحْسِنٌ فَلَهُ أَجْرُهُ عِندَ رَبِّهِ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ

Verse 84: وَقَالَتِ الْيَهُودُ وَالنَّصَارَىٰ نَحْنُ أَبْنَاءُ اللَّهِ وَأَحِبَّاؤُهُ ۖ قُلْ فَلِمَ يُعَذِّبُكُم بِذُنُوبِكُمْ ۖ بَلْ أَنتُم بَشَرٌ مِّمَّنْ خَلَقَ`,
`Balá man aslama wajhahu li-Alláhi wa-huwa muḥsin fa-lahu ajruhu 'ind rabbih wa-lá khawf 'alayhim wa-lá hum yaḥzanun • Wa-qálat al-yahúd wa-an-nasára naḥn abnáu Alláhi wa-ahíbbá'uh qul fa-lim yu'addhbikum bi-dhunúbikum bal antum bashar mimman khalaq`,
`Yes, whoever submits his face to Allah while being a doer of good will have his reward with his Lord. And no fear will there be concerning them, nor will they grieve. And the Jews and Christians say, "We are the children of Allah and His beloved." Say, "Then why does He punish you for your sins?" Rather, you are human beings from among those He has created.`,
`ہاں جو اپنا چہرہ اللہ کے لیے سپرد کرے اور نیکی کرے تو اس کا اجر اس کے رب کے پاس ہے
— "Yes, whoever submits his face to Allah while doing good has his reward with his Lord"

اور ان پر نہ کوئی خوف ہے اور نہ وہ غمگین ہوں گے
— "No fear upon them nor will they grieve"

اور یہودی اور نصرانی کہتے ہیں ہم اللہ کے بیٹے اور پیارے ہیں
— "Jews and Christians say we are children of Allah and His beloved"`);

P(133,
`Verse 85: بَلْ يُعَذِّبُ مَن يَشَاءُ وَيَرْحَمُ مَن يَشَاءُ ۚ وَلِلَّهِ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا ۖ وَإِلَيْهِ الْمَصِيرُ

Verse 86: يَا أَهْلَ الْكِتَابِ قَدْ جَاءَكُمْ رَسُولُنَا يُبَيِّنُ لَكُمْ عَلَىٰ فَتْرَةٍ مِّنَ الرُّسُلِ أَن تَقُولُوا مَا جَاءَنَا مِن بَشِيرٍ وَلَا نَذِيرٍ ۖ فَقَدْ جَاءَكُمْ بَشِيرٌ وَنَذِيرٌ ۚ وَاللَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ`,
`Bal yu'adhdhib man yasháa wa-yarḥam man yasháa wa-li-Alláh mulk as-samawat wa-al-ard wa-má baynahuma wa-ilayh al-masír • Ya ahal al-kitáb qad já'akum rasúlna yubayyín lakum 'alá fatra min ar-rusul an taqúlu má já'ná min bashír wa-lá nadhír fa-qad já'akum bashír wa-nadhír wa-Alláhu 'alá kulli shay' qadír`,
`Rather, He punishes whom He wills and grants mercy to whom He wills. And to Allah belongs the dominion of the heavens and the earth and whatever is between them, and to Him is the final destination. O People of the Scripture, there has come to you Our Messenger making things clear to you after an interval between messengers, lest you say, "There came to us no bringer of good tidings nor a warner." But there has come to you a bringer of good tidings and a warner. And Allah is over all things competent.`,
`بلکہ وہ جسے چاہے عذاب دیتا ہے اور جسے چاہے رحمت دیتا ہے
— "Rather He punishes whom He wills and shows mercy to whom He wills"

اور اللہ کے لیے آسمانوں اور زمین کی بادشاہی ہے اور جو ان کے درمیان ہے
— "To Allah belongs dominion of heavens and earth and what is between"

اے اہل کتاب! ہمارے رسول تمہارے پاس آئے ہیں - تمہیں نبیوں کے دوران میں واضح کریں
— "O People of Scripture our messenger came to you - to clarify what you concealed"`);

P(134,
`Verse 87: الَّذِي يُحْيِي الْأَرْضَ بَعْدَ مَوْتِهَا ۚ قَدْ بَيَّنَّا لَكُمُ الْآيَاتِ لَعَلَّكُمْ تَعْقِلُونَ

Verse 88: إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا`,
`Alládhī yuḥyee al-ard ba'd mawthá qad bayyannä lakum al-ayat la'allakum ta'qilun • Inna Alláha wa-malá'ikitah yusallun 'alá an-nabíy ya ayyuha alládhín ámanú allu 'alayh wa-sallmu taslímaan`,
`Who gives life to the earth after its lifelessness. We have made clear the signs for you, that perhaps you will use reason. Indeed, Allah confers blessing upon the Prophet, and His angels ask Him to do so. O you who have believed, ask Allah to confer blessing upon him and ask Allah to grant him peace.`,
`جو زمین کو اس کے مرنے کے بعد زندہ کرتا ہے - ہم نے تمہیں آیتیں واضح کیں
— "Who gives life to earth after death - We made signs clear for you"

تاکہ تم عقل سے کام لو
— "Perhaps you will use reason"

بے شک اللہ اور اس کے فرشتے نبی پر درود بھیجتے ہیں
— "Indeed Allah and His angels send blessings on the Prophet"`);

P(135,
`Verse 89: إِنَّ الَّذِينَ يَكْفُرُونَ بِآيَاتِ اللَّهِ وَيَقْتُلُونَ النَّبِيِّينَ بِغَيْرِ حَقٍّ وَيَقْتُلُونَ الَّذِينَ يَأْمُرُونَ بِالْقِسْطِ مِنَ النَّاسِ فَبَشِّرْهُم بِعَذَابٍ أَلِيمٍ

Verse 90: أُولَٰئِكَ الَّذِينَ حَبِطَتْ أَعْمَالُهُمْ فِي الدُّنْيَا وَالْآخِرَةِ وَمَا لَهُمْ مِّن نَّاصِرِينَ`,
`Inna alládhín yakfurun bi-ayat Alláhi wa-yaqtulun an-nabiyyín bi-ghayri ḥaqq wa-yaqtulun alládhín ya'murun bi-al-qist min an-nás fa-bashshirhum bi-'adhab alím • Ulá'ik alládhín ḥabitaṭ a'máluhum fi ad-dunyá wa-al-ákhirah wa-má lahum min násireen`,
`Indeed, those who disbelieve in the signs of Allah and kill the prophets without right and kill those who order justice from among the people — give them tidings of a painful punishment. Those are the ones whose deeds have become worthless in this world and the Hereafter, and they will have no helpers.`,
`جو لوگ اللہ کی آیتوں کا انکار کرتے ہیں اور نبیوں کو بغیر حق کے قتل کرتے ہیں
— "Those who disbelieve in Allah's signs and kill prophets without right"

اور جو لوگ انصاف کا حکم دیتے ہیں ان کو قتل کرتے ہیں تو انہیں دردناک عذاب کی خوشخبری دو
— "And kill those who order justice - give them tidings of painful punishment"

یہ وہی ہیں جن کے اعمال دنیا اور آخرت میں برباد ہو گئے اور ان کے کوئی مدد گار نہیں ہیں
— "Their deeds became worthless in this world and Hereafter, and they have no helpers"`);

P(136,
`Verse 91: أَلَمْ تَرَ إِلَى الَّذِينَ أُوتُوا نَصِيبًا مِّنَ الْكِتَابِ يُدْعَوْنَ إِلَىٰ كِتَابِ اللَّهِ لِيَحْكُمَ بَيْنَهُمْ ثُمَّ يَتَوَلَّىٰ فَرِيقٌ مِّنْهُمْ وَهُم مُّعْرِضُونَ

Verse 92: ذَٰلِكَ بِأَنَّهُمْ قَالُوا لَن تَمَسَّنَا النَّارُ إِلَّا أَيَّامًا مَّعْدُودَةً ۖ وَغَرَّهُمْ فِي دِينِهِم مَّا كَانُوا يَفْتَرُونَ`,
`Alam tara ilá alládhín utú nasíban min al-kitáb yud'awn ilá kitáb Alláhi li-yaḥkum baynahum thumma yatawallá faríq minhum wa-hum mu'ridun • Dhálika bi-annahum qálú lan tamassna an-nár illá ayyáman ma'dúdah wa-gharrahum fi dínih má kanu yaftarun`,
`Have you not seen those who were given a portion of the Scripture being invited to the Scripture of Allah to settle between them; then a faction of them turns away, refusing? That is because they said, "The Fire will not touch us except for a few days," and they were deluded in their religion by what they were inventing.`,
`کیا تم نے نہیں دیکھا ان لوگوں کو جنہیں کتاب کا ایک حصہ دیا گیا - وہ اللہ کی کتاب کی طرف بلائے جاتے ہیں
— "Have you not seen those given a portion of Scripture invited to Allah's Scripture"

تاکہ وہ ان کے درمیان فیصلہ کرے تو ان میں سے ایک گروپ منہ موڑ کر معرض ہو جاتا ہے
— "To judge between them, then a faction turns away refusing"

یہ اس لیے کہ وہ کہتے ہیں آگ ہمیں مسیح نہیں کرے گی سوائے چند دنوں کے
— "Because they said fire will not touch us except for a few days"`);

P(137,
`Verse 93: فَكَيْفَ إِذَا جَمَعْنَاهُمْ لِيَوْمٍ لَّا رَيْبَ فِيهِ وَوُفِّيَتْ كُلُّ نَفْسٍ مَّا كَسَبَتْ وَهُمْ لَا يُظْلَمُونَ

Verse 94: قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَن تَشَاءُ وَتَنزِعُ الْمُلْكَ مِمَّن تَشَاءُ وَتُعِزُّ مَن تَشَاءُ وَتُذِلُّ مَن تَشَاءُ ۖ بِيَدِكَ الْخَيْرُ ۖ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ`,
`Fa-kayf idha jama'náhum li-yawm lá rayb fíh wa-wuffiyat kull nafs má kasabat wa-hum lá yuzlimun • Qul allahumma málík al-mulk tu'tee al-mulk man tasháa wa-tanzi' al-mulk mimman tasháa wa-tu'izz man tasháa wa-tudhill man tasháa bi-yadik al-khayru innaka 'alá kulli shay' qadír`,
`So how will it be when We assemble them for a Day about which there is no doubt, and every soul will be compensated for what it earned, and they will not be wronged? Say, "O Allah, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. In Your hand is all good. Indeed, You are over all things competent."`,
`تو کیسے ہوگا جب ہم ان سب کو ایک دن جمع کریں جس میں شک نہیں ہے
— "How then when We gather them for a Day no doubt about it"

اور ہر نفس کو پورا کیا جائے گا جو اس نے کمایا اور ان پر ظلم نہیں ہوگا
— "Every soul will be given what it earned and they won't be wronged"

کہو اے اللہ! بادشاہی کے مالک، تو بادشاہی جسے چاہے دیتا ہے اور جسے چاہے چھین لیتا ہے
— "Say O Allah Owner of Sovereignty, You give it to whom You will and take from whom You will"`);

P(138,
`Verse 95: تُولِجُ اللَّيْلَ فِي النَّهَارِ وَتُولِجُ النَّهَارَ فِي اللَّيْلِ ۖ وَتُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَتُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ ۖ وَتَرْزُقُ مَن تَشَاءُ بِغَيْرِ حِسَابٍ

Verse 96: لَا يَتَّخِذِ الْمُؤْمِنُونَ الْكَافِرِينَ أَوْلِيَاءَ مِن دُونِ الْمُؤْمِنِينَ ۖ وَمَن يَفْعَلْ ذَٰلِكَ فَلَيْسَ مِنَ اللَّهِ فِي شَيْءٍ إِلَّا أَن تَتَّقُوا مِنْهُمْ تُقَاةً ۗ وَيُحَذِّرُكُمُ اللَّهُ نَفْسَهُ ۗ وَإِلَى اللَّهِ الْمَصِيرُ`,
`Túlij al-layl fi an-nahár wa-túlij an-nahár fi al-layl wa-tukhríj al-ḥayy min al-mayyt wa-tukhríj al-mayyt min al-ḥayy wa-tarzqu man tasháa bi-ghayri hisáb • Lá yattákhidh al-mu'minun al-káfireen awliyá' min dun al-mu'minín wa-man yaf'al dhálika fa-laysa min Alláhi fi shay' illá an tattaqu minhum tuqáh wa-yuḥadhdhirukum Alláhu nafsah wa-ilá Alláh al-masír`,
`You cause the night to enter into the day, and You cause the day to enter into the night; and You bring the living out of the dead, and You bring the dead out of the living. And You give provision to whom You will without account. Let not believers take disbelievers as allies rather than believers. And whoever does that has no relation with Allah, except when taking precaution against them in prudence. And Allah warns you of Himself, and to Allah is the final destination.`,
`تو رات کو دن میں داخل کرتا ہے اور دن کو رات میں داخل کرتا ہے
— "You bring night into day and day into night"

اور زندہ کو مردہ سے نکالتا ہے اور مردہ کو زندہ سے نکالتا ہے
— "You bring the living from the dead and dead from the living"

اور جسے چاہے بغیر حساب کے رزق دیتا ہے
— "And You provide to whom You will without measure"`);

P(139,
`Verse 97: قُلْ أَيٌّ شَيْءٍ أَكْبَرُ شَهَادَةً ۖ قُلِ اللَّهُ ۖ شَهِيدٌ بَيْنِي وَبَيْنَكُمْ ۚ وَأُوحِيَ إِلَيَّ هَٰذَا الْقُرْآنُ لِأُنذِرَكُم بِهِ وَمَن تَبَلَّغَ

Verse 98: أَئِنَّكُمْ لَتَشْهَدُونَ أَنَّ مَعَ اللَّهِ آلِهَةً أُخْرَىٰ ۖ قُل لَّا أَشْهَدُ ۚ قُلْ إِنَّهُ لَا إِلَٰهَ إِلَّا هُوَ وَإِنَّنِي بَرِيءٌ مِّمَّا تُشْرِكُونَ`,
`Qul ayy shay' akbar shahádah qul Alláhu shahíd bayni wa-baynikum wa-úḥiya ilayya hádhā al-qurán li-undhirakum bih wa-man tablagh • A-innakum la-tashhádun anna ma'a Alláhi álihan ukhrá qul lá ashhad qul innah la ilaha illá huwa wa-innaní barí' mimma tushrikun`,
`Say, "What thing is greatest in testimony?" Say, "Allah is witness between me and you. And this Qur'an was revealed to me that I may warn you thereby and whomever it reaches." Will you indeed testify that with Allah there are other deities? Say, "I will not testify." Say, "Indeed, there is not, other than Him, any deity, and indeed, I am free of that which you associate with Him."`,
`کہو کیا چیز سب سے بڑی گواہی ہے؟ کہو اللہ ہے، میرے اور تمہارے درمیان گواہ
— "Say what is greatest witness? Say Allah is witness between me and you"

اور یہ قرآن مجھ پر نازل ہوا ہے تاکہ میں تمہیں اس سے ڈراؤں
— "And this Quran was revealed to me to warn you"

کیا تم گواہی دیتے ہو کہ اللہ کے ساتھ دوسرے معبود ہیں؟ کہو میں گواہی نہیں دیتا
— "Do you testify that other deities are with Allah? Say I don't testify"`);

P(140,
`Verse 99: وَالَّذِينَ آمَنُوا بِاللَّهِ وَرُسُلِهِ وَلَمْ يُفَرِّقُوا بَيْنَ أَحَدٍ مِّنْهُمْ أُولَٰئِكَ سَوْفَ يُؤْتِيهِمْ أُجُورَهُمْ ۚ وَكَانَ اللَّهُ غَفُورًا رَّحِيمًا

Verse 100: يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ حَقَّ تُقَاتِهِ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ`,
`Wa-alládhín ámanú bi-Alláhi wa-rusulihi wa-lam yufárriqu bayna aḥad minhum ulá'ik sawf yu'tíhim ujúrahum wa-kán Alláhu ghafúran rahímaan • Ya ayyuha alládhín ámanú ittaqu Alláha ḥaqq tuqátih wa-lá tamútu illá wa-antum muslimun`,
`And those who believed in Allah and His messengers and did not discriminate between any of them — to those He will give their rewards. And ever is Allah Forgiving and Merciful. O you who have believed, fear Allah as He should be feared, and do not die except as Muslims.`,
`اور جو لوگ اللہ اور اس کے رسولوں پر ایمان لائے اور کسی میں فرق نہیں کیا
— "Those who believed in Allah and His messengers and made no distinction"

انہیں عن قریب اللہ اپنا اجر دے گا اور اللہ بخشنے والا رحمت والا ہے
— "Soon Allah will give them their reward and Allah is Forgiving, Merciful"

اے ایمان والو! اللہ سے ڈرو جیسا کہ ڈرنے کی حق ہے اور نہ مرو سوائے اس کے کہ تم مسلم ہو
— "O believers fear Allah as He deserves to be feared and don't die except as Muslims"`);

P(141,
`Verse 101: وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا ۚ وَاذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ إِذْ كُنتُمْ أَعْدَاءً فَأَلَّفَ بَيْنَ قُلُوبِكُمْ فَأَصْبَحْتُم بِنِعْمَتِهِ إِخْوَانًا

Verse 102: وَكُنتُمْ عَلَىٰ شَفَا حُفْرَةٍ مِّنَ النَّارِ فَأَنقَذَكُم مِّنْهَا ۗ كَذَٰلِكَ يُبَيِّنُ اللَّهُ لَكُمْ آيَاتِهِ لَعَلَّكُمْ تَهْتَدُونَ`,
`Wa-i'tasmu bi-ḥabl Alláhi jamí'an wa-lá tafarraqu wa-idhkuru ni'mat Alláhi 'alaykum idh kuntum a'dá' fa-allaif bayn qulúbikum fa-asbḥtum bi-ni'matih ikhwánan • Wa-kuntum 'alá shafá ḥufrah min an-nár fa-anqadhákum minhá kadhálika yubayyín Alláhu lakum ayátih la'allakum tahtadun`,
`And hold firmly to the rope of Allah, all together, and do not become divided. And remember the favor of Allah upon you — when you were enemies and He brought your hearts together, so you became, by His favor, brothers. And you were on the edge of a pit of the Fire, and He saved you from it. Thus does Allah make clear to you His verses that you may be guided.`,
`اور سب مل کر اللہ کی رسی کو مضبوطی سے تھام لو اور بکھرو نہیں
— "Hold firmly to Allah's rope together and don't divide"

اور اللہ کی نعمت یاد کرو جو اس نے تم پر کی - جب تم دشمن تھے تو اس نے تمہارے دل ملادیے
— "Remember Allah's favor upon you - when you were enemies He united your hearts"

اور تم جہنم کے گڑھے کے کنارے تھے تو اس نے تمہیں بچایا
— "And you were on the edge of a pit of Fire and He saved you from it"`);

P(142,
`Verse 103: كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِالْمَعْرُوفِ وَتَنْهَوْنَ عَنِ الْمُنكَرِ وَتُؤْمِنُونَ بِاللَّهِ ۗ وَلَوْ آمَنَ أَهْلُ الْكِتَابِ لَكَانَ خَيْرًا لَّهُمْ ۚ مِنْهُم الْمُؤْمِنُونَ وَأَكْثَرُهُمُ الْفَاسِقُونَ

Verse 104: لَن يَضُرُّوكُمْ إِلَّا أَذًى ۖ وَإِن يُقَاتِلُوكُمْ يُوَلُّوكُمُ الْأَدْبَارَ ثُمَّ لَا يُنصَرُونَ`,
`Kuntum khayra ummah ukhríjat li-an-nás ta'murun bi-al-ma'ruf wa-tahawn 'an al-munkar wa-tu'minun bi-Alláhi wa-law ámana ahl al-kitáb la-kán khayran lahum minhum al-mu'minun wa-aktharu hum al-fásiqun • Lan yadukkum illá adhan wa-in yuqátilukum yuwallúkum al-adbár thumma lá yunsarun`,
`You are the best nation produced as an example for mankind. You enjoin what is right and forbid what is wrong and believe in Allah. If only the People of the Scripture had believed, it would have been better for them. Among them are believers, but most of them are defiantly disobedient. They will not harm you except for some annoyance. And if they fight you, they will turn their backs to you; then they will not be aided.`,
`تم بہترین امت ہو جو لوگوں کے لیے نکالی گئی ہو
— "You are the best nation produced for mankind"

نیکی کا حکم دیتے ہو اور برائی سے روکتے ہو اور اللہ پر ایمان رکھتے ہو
— "You enjoin good and forbid evil and believe in Allah"

اگر کتاب والے ایمان لاتے تو یہ ان کے لیے بہتر ہوتا - ان میں کچھ مومن ہیں اور اکثر نافرمان ہیں
— "If People of Scripture believed it would be better - some are believers but most are disobedient"`);

P(143,
`Verse 105: مَا يَوَدُّ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَلَا الْمُشْرِكِينَ أَن يُنَزَّلَ عَلَيْكُمْ مِّنْ خَيْرٍ مِّن رَّبِّكُمْ ۗ وَاللَّهُ يَخْتَصُّ بِرَحْمَتِهِ مَن يَشَاءُ ۚ وَاللَّهُ ذُو الْفَضْلِ الْعَظِيمِ

Verse 106: رَفَعَ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ ۚ وَاللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ`,
`Má yawud alládhín kafarú min ahl al-kitáb wa-lá al-mushrikín an yunazal 'alaykum min khayrin min rabbkum wa-Alláhu yakhtas bi-raḥmatih man yasháa wa-Alláhu dhú al-fadl al-'azím • Rafa' Alláhu alládhín ámanú minkum wa-alládhín útú al-'ilm darajat wa-Alláhu bi-má ta'malun khabír`,
`Neither those who disbelieved from the People of the Scripture nor the polytheists wish that any good should be sent down to you from your Lord. But Allah selects for His mercy whom He wills, and Allah is the possessor of great bounty. Allah will raise those who have believed among you and those who were given knowledge, by degrees. And Allah is Aware of what you do.`,
`وہ لوگ جو کافر ہیں کتاب والوں میں سے اور مشرکین یہ نہیں چاہتے
— "Those who disbelieve from People of Scripture and polytheists don't wish"

کہ تمہارے رب کی طرف سے تم پر کوئی خیر نازل ہو
— "That any good be sent down to you from your Lord"

اور اللہ اپنی رحمت کو اپنی مرضی سے جسے چاہے دیتا ہے اور اللہ بہت بڑے فضل والا ہے
— "Allah chooses His mercy for whom He wills and Allah has immense bounty"`);

P(144,
`Verse 107: مَا نَنسَخُ مِنْ آيَةٍ أَوْ نُنسِهَا نَأْتِ بِخَيْرٍ مِّنْهَا أَوْ مِثْلِهَا ۗ أَلَمْ تَعْلَمْ أَنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ

Verse 108: أَلَمْ تَعْلَمْ أَنَّ اللَّهَ لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ وَمَا لَكُم مِّن دُونِ اللَّهِ مِن وَلِيٍّ وَلَا نَصِيرٍ

Verse 109: أَمْ تُرِيدُونَ أَن تَسْأَلُوا رَسُولَكُمْ كَمَا سُئِلَ مُوسَىٰ مِن قَبْلُ ۗ وَمَن يَتَبَدَّلِ الْكُفْرَ بِالْإِيمَانِ فَقَدْ ضَلَّ سَوَاءَ السَّبِيلِ`,
`Má nansakh min áyah aw nunisihá na'ti bi-khayrin minhá aw mithlihá alam ta'lam anna Alláha 'alá kulli shay' qadír • Alam ta'lam anna Alláha lahu mulk as-samawat wa-al-ard wa-má lakum min dun Alláhi min walíy wa-lá nasír • Am turídun an tas'alú rasúlakum kamá su'ila músá min qabl wa-man yatabaddal al-kufr bi-al-íman fa-qad dálla sawá' as-sabíl`,
`We do not abrogate any verse or cause it to be forgotten except that We bring forth one better than it or similar to it. Do you not know that Allah is over all things competent? Do you not know that to Allah belongs the dominion of the heavens and the earth, and that you have not besides Allah any patron or any helper? Or do you intend to ask your Messenger as Moses was asked before? And whoever exchanges faith for disbelief has certainly strayed from the soundness of the way.`,
`ہم کسی آیت کو منسوخ (ختم) نہیں کرتے یا اسے بھلاتے نہیں سوائے اس کے کہ اس سے بہتر یا اسی جیسی لے آئیں
— "We do not abrogate any verse except We bring better or similar"

کیا تم نہیں جانتے کہ اللہ ہر چیز پر قادر ہے
— "Don't you know Allah is over all things competent"

کیا تم نہیں جانتے کہ آسمانوں اور زمین کی بادشاہی اللہ کے لیے ہے اور تمہارے پاس اللہ کے علاوہ کوئی حمایتی اور مدد گار نہیں ہے
— "Know that dominion of heavens and earth is Allah's and you have no patron or helper besides Allah"`);

let patched = 0, missing = [];
for (const k of Object.keys(M)) {
  if (!data[k]) { missing.push(k); continue; }
  Object.assign(data[k], M[k]);
  patched++;
}

fs.writeFileSync(PATH, JSON.stringify(data, null, 2));

const BOILER = "This chapter is the foundation of Islamic prayer and faith";
const stillGeneric = Object.keys(data)
  .filter(k => typeof data[k].annotations === 'string' && data[k].annotations.includes(BOILER))
  .map(Number).sort((a,b) => a-b);

console.log('Patched pages: ' + patched);
if (missing.length) console.log('Keys not found in JSON: ' + missing.join(','));
console.log('Total pages in file: ' + Object.keys(data).length);
console.log('Pages still holding boilerplate annotations: ' + (stillGeneric.length ? stillGeneric.join(',') : 'none'));
