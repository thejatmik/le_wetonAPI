// Wuku: Cyclic name of 30 weeks in the Javanese/Balinese Calendar
const wuku = [
  'Sinta','Landep','Wukir','Kurantil','Tolu',
  'Gumbreg','Warigalit','Warigagung','Julungwangi','Sungsang',
  'Galungan','Kuningan','Langkir','Mandasiya','Julungpujut',
  'Pahang','Kuruwelut','Marakeh','Tambir','Medangkungan',
  'Maktal','Wuye','Manahil','Prangbakat','Bala',
  'Wugu','Wayang','Kulawu','Dukut','Watugunung'
];

// Bulan: Cyclic name of 12 gregorian month names
const bulan = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

// Wulan: Bulan in Javanese
const wulan = [
  'Sura', 'Sapar', 'Mulud', 'Bakdamulud', 'Jumadilawal', 'Jumadilakhir',
  'Rejeb', 'Ruwah', 'Pasa', 'Sawal', 'Sela', 'Besar'
];

// Tahun: moon year, alternate 354 and 355 days per year depending on wulan Besar
const taun = ['Alip', 'Ehe', 'Jimawal', 'Je', 'Dal', 'Be', 'Wawu', 'Jimakhir'];

// Windu: Cycle of 8 taun / 81 wetonan / 2835 days
const windu = ['Adi', 'Kuntara', 'Sengara', 'Sancaya'];

// Kurup: a cycle of 120 taun / 15 windu / 42524 day (substracted by 1)
const kurup = ['Jamingiyah', 'Kamsiyah', 'Arbangiyah', 'Salasiyah', 'Isneniyah', 'Akadiyah', 'Sabtiyah'];

// A cycle of 5 days per week, instead of gregorian 7 days per week
const pasaran = [ "Pon/Petak", "Wage/Cemeng", "Kliwon/Asih", "Legi/Manis", "Pahing/Pahit"];

// Gregorian week in javanese
const mingguJV = [ "Senen", "Selasa", "Rebo", "Kemis", "Jemuwah", "Setu", "Akad" ];

module.exports = {
  wuku,
  bulan,
  wulan,
  taun,
  windu,
  kurup,
  pasaran,
  mingguJV,
}