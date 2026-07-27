// lib/pages-data.js
// The First Quran Given to Elijah Muhammad - All 144 Pages
// Data structure includes images, Quranic references, translations, and scholarly annotations

// MAULANA MUHAMMAD ALI TRANSLATION (1934 - Public Domain)
// Sourced from: archive.org/details/the-holy-quran-with-english-translation-and-commentary-by-maulana-muhammad-ali

export const QURAN_PAGES = [
  // PAGE 1: INSIDE COVER / AUTHENTICATION PAGE
  {
    pageNum: 1,
    imageRef: "001.jpeg",
    
    surahNum: null,
    surahName: null,
    versesOnPage: [],
    
    arabicTranslit: null,
    englishTranslation: null,
    
    manuscriptNotes: [
      {
        location: "center of page",
        originalText: "Elijah Mohammed [handwritten signature]",
        englishTranslation: "Elijah Mohammed - Handwritten signature of the Honorable Elijah Muhammad, establishing direct ownership and custody of this Quran",
        topic: "authentication"
      },
      {
        location: "below signature",
        originalText: "1559 Central Ave. Cincinnati Ohio",
        englishTranslation: "Address of Mustapa Milham, the dedicatory inscriber",
        topic: "provenance"
      },
      {
        location: "below address",
        originalText: "To Elijah Mohammed 6116 S.Michigan Ave. Chicago Ill.",
        englishTranslation: "Dedication to Elijah Muhammad at his Chicago residence, establishing the gift and transfer of ownership",
        topic: "provenance"
      }
    ],
    
    scholarlyContext: {
      surahIntroduction: null,
      versesSignificance: "Authentication Page - This page bears the handwritten signature of the Honorable Elijah Muhammad, establishing direct ownership and custody of this Quran. The signature 'Elijah Mohammed' (with double 'e') dates to before his spelling was updated to 'Muhammad'. His address below establishes the geographic and temporal location of his possession of this manuscript.",
      historicalBackground: "The handwritten inscription from Mustapa Milham (Cincinnati) to Elijah Muhammad (Chicago) documents the transfer of this Quran from its source to Elijah Muhammad's custody. His own signature on the opening cover constitutes primary documentary evidence of his ownership and care for the manuscript. The addresses can be verified against historical records of his residence during this period.",
      thematicConnections: "Elijah Muhammad's signature is not a claim requiring belief—it is documented fact. His handwriting can be compared to other authenticated samples. His address can be verified against historical records. The evidence is on the first page, available for examination by any scholar. This is primary source material requiring only eyes to verify."
    },
    
    publisherInfo: {
      publisher: "Kutub Khana Din Muhammadi, Lahore",
      era: "circa 1900-1920s",
      publisherNotes: "Premier Islamic scholarly publisher. This copy was inscribed by Mustapa Milham and given to Elijah Muhammad, who signed it in his own hand, establishing provenance.",
      signature: "Elijah Mohammed",
      signatureVerification: "Handwritten signature and address in the Honorable Elijah Muhammad's own hand"
    },
    
    manuscriptCondition: "clear",
    annotationDensity: "high",
    translationReady: true,
    audioAvailable: false,
    hasSignature: true,
    isAuthenticationPage: true,
  },

  // PAGE 2: INTRODUCTION / DEDICATORY
  {
    pageNum: 2,
    imageRef: "002.jpeg",
    
    surahNum: null,
    surahName: null,
    versesOnPage: [],
    
    arabicTranslit: null,
    englishTranslation: null,
    
    manuscriptNotes: [
      {
        location: "inscription",
        originalText: "[Dedicatory inscription from Mustapa Milham to Elijah Muhammad]",
        englishTranslation: "Dedicatory inscription from Mustapa Milham (Cincinnati) to The Honorable Elijah Muhammad (Chicago). Handwritten in Arabic.",
        topic: "provenance"
      }
    ],
    
    scholarlyContext: {
      surahIntroduction: null,
      versesSignificance: "Provenance page - establishes historical ownership chain",
      historicalBackground: "This inscription documents the passing of this Quran from Mustapa Milham to Elijah Muhammad, establishing the artifact's lineage.",
      thematicConnections: null
    },
    
    publisherInfo: null,
    
    manuscriptCondition: "clear",
    annotationDensity: "low",
    translationReady: true,
    audioAvailable: false,
  },

  // PAGE 3: SURAH AL-FATIHA BEGINS
  {
    pageNum: 3,
    imageRef: "003.jpeg",
    
    surahNum: 1,
    surahName: "Al-Fatiha",
    surahEnglishName: "The Opening",
    versesOnPage: [1, 2, 3, 4, 5, 6, 7],
    
    arabicTranslit: "Bismillah ar-Rahman ar-Rahim. Al-hamdu li-llahi rabbi l-'alamin ar-Rahman ar-Rahim. Maliki yawm ad-din. Iyyaka na'budu wa iyyaka nasta'in. Ihdi-na s-sirat al-mustaqim. Sirat alladhina an'amta 'alayhim ghayri l-maghdubi 'alayhim wa la d-dallin.",
    
    englishTranslation: "[Maulana Muhammad Ali - Surah 1, verses 1-7]\n\nIn the name of Allah, the Compassionate, the Merciful.\nAll praise is due to Allah, the Lord of the worlds, the Compassionate, the Merciful, the Master of the Day of Judgment.\nThou alone do we serve and Thou alone do we beseech for help.\nGuide us on the right path, the path of those upon whom Thou hast bestowed favours, not those upon whom wrath is brought down, nor those who go astray.",
    
    manuscriptNotes: [
      {
        location: "verse 1 margin",
        originalText: "بسم اللہ الرحمن الرحیم",
        englishTranslation: "In the name of Allah, the Merciful, the Compassionate - This invocation begins all Quranic activity and represents the foundational declaration of faith",
        topic: "theology"
      },
      {
        location: "verse 3 margin",
        originalText: "مالک یوم الدین",
        englishTranslation: "Master of the Day of Judgment - This refers to the ultimate accountability and divine justice at the end of time",
        topic: "eschatology"
      },
      {
        location: "verse 5 margin",
        originalText: "الصراط المستقیم",
        englishTranslation: "The Straight Path - The disciplined way of living according to divine guidance",
        topic: "theology"
      }
    ],
    
    scholarlyContext: {
      surahIntroduction: "Surah Al-Fatiha is the Opening Chapter of the Quran. It is recited at the beginning of every prayer performed by Muslims worldwide and is the most frequently recited chapter of the Quran.",
      versesSignificance: "These seven verses establish the foundational Islamic concepts: gratitude to the Creator, recognition of divine attributes (Ar-Rahman - the Merciful, Ar-Rahim - the Compassionate), and the human petition for guidance on the straight path. The acknowledgement of divine judgment and the plea for correct guidance form the essence of Islamic submission.",
      historicalBackground: "Revealed in Mecca during the early period of Prophet Muhammad's ministry. Established as obligatory in daily prayer by Quranic prescription and prophetic tradition.",
      thematicConnections: "The concept of 'the Straight Path' appears throughout the Quran as the disciplined way of living prescribed by the Creator. Elijah Muhammad taught his followers to seek this straight path through disciplined eating, study, and moral practice."
    },
    
    publisherInfo: null,
    
    manuscriptCondition: "clear",
    annotationDensity: "high",
    translationReady: true,
    audioAvailable: false,
  },

  // PAGE 4 - 144: TEMPLATE FOR REMAINING PAGES
  // Follow this structure for pages 4-144
  // Copy the structure below and modify surahNum, versesOnPage, arabicTranslit, englishTranslation, and notes accordingly

  {
    pageNum: 4,
    imageRef: "004.jpeg",
    
    surahNum: 1,
    surahName: "Al-Fatiha (continued)",
    surahEnglishName: "The Opening",
    versesOnPage: [],  // UPDATE: Add verse numbers for this page
    
    arabicTranslit: "UPDATE: Add Arabic transliteration",
    englishTranslation: "UPDATE: Add Maulana Muhammad Ali translation",
    
    manuscriptNotes: [
      {
        location: "UPDATE: margin location",
        originalText: "UPDATE: Original Urdu/Persian text",
        englishTranslation: "UPDATE: English translation of annotation",
        topic: "UPDATE: vocabulary|jurisprudence|theology|history|commentary"
      }
    ],
    
    scholarlyContext: {
      surahIntroduction: "UPDATE: Surah introduction if new surah begins",
      versesSignificance: "UPDATE: Why these verses matter",
      historicalBackground: "UPDATE: Historical context",
      thematicConnections: "UPDATE: Thematic connections to Islamic teaching"
    },
    
    publisherInfo: null,
    
    manuscriptCondition: "clear",  // UPDATE: clear|faded|damaged
    annotationDensity: "medium",   // UPDATE: high|medium|low
    translationReady: false,  // SET TO TRUE when page is complete
    audioAvailable: false,
  },

  // PAGES 5-144: FOLLOW TEMPLATE ABOVE
  // Each page entry needs:
  // - pageNum: number (1-144)
  // - imageRef: "005.jpeg" (matching file in project)
  // - surahNum: null or number (1-114)
  // - versesOnPage: [] (array of verse numbers on this page)
  // - arabicTranslit: string (Latin transliteration)
  // - englishTranslation: string (Maulana Muhammad Ali translation)
  // - manuscriptNotes: [] (array of annotations extracted from margins/inline text)
  // - scholarlyContext: object with surahIntroduction, versesSignificance, historicalBackground, thematicConnections
  // - translationReady: boolean (true when complete, false while editing)

];

// HELPER: Generate page structure template
export function generatePageTemplate(pageNum, imageRef) {
  return {
    pageNum,
    imageRef,
    surahNum: null,
    surahName: null,
    surahEnglishName: null,
    versesOnPage: [],
    arabicTranslit: "",
    englishTranslation: "",
    manuscriptNotes: [],
    scholarlyContext: {
      surahIntroduction: "",
      versesSignificance: "",
      historicalBackground: "",
      thematicConnections: ""
    },
    publisherInfo: null,
    manuscriptCondition: "clear",
    annotationDensity: "medium",
    translationReady: false,
    audioAvailable: false,
  };
}

// HELPER: Get all pages ready to view (free and paid)
export function getFreePages() {
  const freeCount = parseInt(process.env.NEXT_PUBLIC_FREE_PREVIEW_PAGES) || 30;
  return QURAN_PAGES.slice(0, freeCount);
}

export function getPremiumPages() {
  return QURAN_PAGES;
}

export function getPageByNumber(pageNum) {
  return QURAN_PAGES.find(p => p.pageNum === pageNum);
}

export function getPagesBySurah(surahNum) {
  return QURAN_PAGES.filter(p => p.surahNum === surahNum);
}

export function getCompletionStatus() {
  const total = QURAN_PAGES.length;
  const ready = QURAN_PAGES.filter(p => p.translationReady).length;
  return {
    total,
    ready,
    percentage: Math.round((ready / total) * 100)
  };
}

// EXPORT FOR USE IN COMPONENTS
export default QURAN_PAGES;
