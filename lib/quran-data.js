import quranRaw from './quran-data.json';
const quranDatabase = Object.keys(quranRaw).reduce((acc, key) => {
  acc[parseInt(key)] = quranRaw[key];
  return acc;
}, {});
export const getQuranPage = (pageNumber) => {
  if (pageNumber < 1 || pageNumber > 144) {
    throw new Error(`Invalid page: ${pageNumber}. Must be 1-144.`);
  }
  return quranDatabase[pageNumber] || null;
};
export const getAllPages = () => quranDatabase;
export const getPageRange = (start, end) => {
  const pages = [];
  for (let i = start; i <= end; i++) {
    if (quranDatabase[i]) pages.push(quranDatabase[i]);
  }
  return pages;
};
export const getPagesBySurah = (surahNumber) => {
  return Object.values(quranDatabase).filter(page => page.surah === surahNumber);
};
export const getTotalPages = () => 144;
export const getTotalVerses = () => 143;
export const getMetadata = () => ({
  juzNumber: 1,
  startSurah: "Al-Fatihah",
  endSurah: "Al-Baqarah",
  startVerse: "1:1",
  endVerse: "2:136",
  totalPages: 144,
  totalVerses: 143,
  translations: ["Maulana Muhammad Ali (1934)", "Yusuf Ali (1934)"],
  custodian: "Amin Shabazz Muhammad",
  chain: "Master Fard Muhammad → Elijah Muhammad → Nathaniel Muhammad → Amin Shabazz Muhammad",
  published: "2026-07-28",
  status: "Production Ready"
});
export default quranDatabase;
