// All dummy data for the ABM Statistics page

export const kpiData = [
  {
    id: 'deltagare',
    label: 'Antal deltagare',
    monthlyValue: 128450,
    trendPercent: 12,
    trendPositive: true,
    yearTotal: 842300,
  },
  {
    id: 'visningar',
    label: 'Antal visningar',
    monthlyValue: 54280,
    trendPercent: 7,
    trendPositive: true,
    yearTotal: 389100,
  },
  {
    id: 'per-visning',
    label: 'Deltagare per visning',
    monthlyValue: 2370,
    trendPercent: 8,
    trendPositive: false,
    yearTotal: 18640,
  },
]

export const lineChartMonthly = [
  { label: 'Jan', deltagare: 92000, visningar: 38000, perVisning: 2.42 },
  { label: 'Feb', deltagare: 108000, visningar: 42000, perVisning: 2.57 },
  { label: 'Mar', deltagare: 124000, visningar: 49000, perVisning: 2.53 },
  { label: 'Apr', deltagare: 118000, visningar: 46000, perVisning: 2.56 },
  { label: 'Maj', deltagare: 131000, visningar: 52000, perVisning: 2.52 },
  { label: 'Jun', deltagare: 128000, visningar: 51000, perVisning: 2.51 },
  { label: 'Jul', deltagare: 101000, visningar: 39000, perVisning: 2.59 },
  { label: 'Aug', deltagare: 119000, visningar: 45000, perVisning: 2.64 },
  { label: 'Sep', deltagare: 136000, visningar: 54000, perVisning: 2.52 },
  { label: 'Okt', deltagare: 142000, visningar: 57000, perVisning: 2.49 },
  { label: 'Nov', deltagare: 127000, visningar: 50000, perVisning: 2.54 },
  { label: 'Dec', deltagare: 98000, visningar: 38000, perVisning: 2.58 },
]

export const lineChartYearly = [
  { label: '2019', deltagare: 780000, visningar: 310000, perVisning: 2.52 },
  { label: '2020', deltagare: 690000, visningar: 268000, perVisning: 2.57 },
  { label: '2021', deltagare: 1050000, visningar: 420000, perVisning: 2.50 },
  { label: '2022', deltagare: 1240000, visningar: 498000, perVisning: 2.49 },
  { label: '2023', deltagare: 1180000, visningar: 471000, perVisning: 2.50 },
  { label: '2024', deltagare: 1320000, visningar: 528000, perVisning: 2.50 },
  { label: '2025', deltagare: 1410000, visningar: 562000, perVisning: 2.51 },
  { label: '2026', deltagare: 1280000, visningar: 512000, perVisning: 2.50 },
]

// deltagare & visningar on left Y-axis, perVisning×100 on right Y-axis
export const barChartData = [
  { lan: 'Blekinge län',          deltagare: 4200,  visningar: 1680,  perVisning100: 250 },
  { lan: 'Dalarnas län',          deltagare: 7100,  visningar: 2840,  perVisning100: 250 },
  { lan: 'Gotlands län',          deltagare: 2300,  visningar:  920,  perVisning100: 250 },
  { lan: 'Gävleborgs län',        deltagare: 6800,  visningar: 2720,  perVisning100: 250 },
  { lan: 'Hallands län',          deltagare: 8400,  visningar: 3360,  perVisning100: 250 },
  { lan: 'Jämtlands län',         deltagare: 3100,  visningar: 1240,  perVisning100: 250 },
  { lan: 'Jönköpings län',        deltagare: 9200,  visningar: 3680,  perVisning100: 250 },
  { lan: 'Kalmar län',            deltagare: 5600,  visningar: 2240,  perVisning100: 250 },
  { lan: 'Kronobergs län',        deltagare: 4800,  visningar: 1920,  perVisning100: 250 },
  { lan: 'Norrbottens län',       deltagare: 5200,  visningar: 2080,  perVisning100: 249 },
  { lan: 'Skåne län',             deltagare: 32000, visningar: 12800, perVisning100: 250 },
  { lan: 'Stockholms län',        deltagare: 58000, visningar: 23200, perVisning100: 250 },
  { lan: 'Södermanlands län',     deltagare: 6900,  visningar: 2760,  perVisning100: 250 },
  { lan: 'Uppsala län',           deltagare: 11200, visningar: 4480,  perVisning100: 250 },
  { lan: 'Värmlands län',         deltagare: 5800,  visningar: 2320,  perVisning100: 250 },
  { lan: 'Västerbottens län',     deltagare: 6100,  visningar: 2440,  perVisning100: 250 },
  { lan: 'Västernorrlands län',   deltagare: 5400,  visningar: 2160,  perVisning100: 250 },
  { lan: 'Västmanlands län',      deltagare: 6300,  visningar: 2520,  perVisning100: 250 },
  { lan: 'Västra Götalands län',  deltagare: 41000, visningar: 16400, perVisning100: 250 },
  { lan: 'Örebro län',            deltagare: 8100,  visningar: 3240,  perVisning100: 247 },
  { lan: 'Östergötlands län',     deltagare: 10400, visningar: 4160,  perVisning100: 250 },
]

export const liveTickerPool = [
  {
    id: 't1',
    criteria: 'Söker en villa, 4–5 rok, 150–200 m² för 3–6 milj kr',
    location: 'i Bromma, Stockholms kommun',
    agency: 'Fastighetsbyrån Kungsholmen',
    minutesAgo: 2,
  },
  {
    id: 't2',
    criteria: 'Söker en bostadsrätt, 2 rok, 50–75 m² för 2–3,5 milj kr',
    location: 'i Södermalm, Stockholms kommun',
    agency: 'Skandiamäklarna City',
    minutesAgo: 5,
  },
  {
    id: 't3',
    criteria: 'Söker ett radhus, 3–4 rok, 100–130 m² för 1,5–3 milj kr',
    location: 'i Mölndal, Göteborgs kommun',
    agency: 'ERA Göteborg',
    minutesAgo: 8,
  },
  {
    id: 't4',
    criteria: 'Söker en villa, 1,5–3 rok, 100–150 m² för 900 000–4 milj kr',
    location: 'i Flen, Flens kommun',
    agency: 'HusmanHagberg Vasastan',
    minutesAgo: 12,
  },
  {
    id: 't5',
    criteria: 'Söker en lägenhet, 1 rok, 30–50 m² för 1–2 milj kr',
    location: 'i Lund, Lunds kommun',
    agency: 'Bjurfors Malmö',
    minutesAgo: 15,
  },
  {
    id: 't6',
    criteria: 'Söker en bostadsrätt, 3 rok, 75–100 m² för 2,5–4 milj kr',
    location: 'i Vasastan, Stockholms kommun',
    agency: 'Länsförsäkringar Fastighetsförmedling',
    minutesAgo: 18,
  },
  {
    id: 't7',
    criteria: 'Söker ett fritidshus, 2–3 rok, 60–90 m² för 500 000–1,5 milj kr',
    location: 'i Vaxholm, Vaxholms kommun',
    agency: 'Mäklarhuset Stockholm',
    minutesAgo: 22,
  },
  {
    id: 't8',
    criteria: 'Söker en villa, 5 rok, 180–250 m² för 5–10 milj kr',
    location: 'i Lidingö, Lidingö kommun',
    agency: 'Engelska Fastighetsförmedling',
    minutesAgo: 27,
  },
  {
    id: 't9',
    criteria: 'Söker en bostadsrätt, 2 rok, 55–70 m² för 1,8–2,8 milj kr',
    location: 'i Haga, Göteborgs kommun',
    agency: 'SkandiaMäklarna Göteborg',
    minutesAgo: 31,
  },
  {
    id: 't10',
    criteria: 'Söker ett radhus, 4 rok, 110–140 m² för 2–3,5 milj kr',
    location: 'i Täby, Täby kommun',
    agency: 'Fastighetsbyrån Täby',
    minutesAgo: 35,
  },
]

export const breadcrumb = [
  { label: 'Hem', href: '/' },
  { label: 'Statistik', href: '/statistik' },
  { label: 'Visningsstatistik', href: '/statistik/visningar' },
]
