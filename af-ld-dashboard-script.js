/* ---------------------------------------------------------------
   To add or change a file: edit the FILE_GROUPS array below.
   Each entry: { name, type: 'pdf'|'pptx'|'xlsx'|'csv'|'video'|'link',
                 size: '2.4 MB', url: 'https://...' }
   Leave url as '#' until the real link is ready.
   --------------------------------------------------------------- */
const FILE_GROUPS = [
  {
    label: 'Club Analytics',
    files: [
      { name: 'Club Analytics — PH', type: 'link', size: 'Open dashboard', url: 'https://anytimefitnessasia.sharepoint.com/:x:/s/FranchiseeEmpowermentNetwork/IQC0ADSq03ObS7AxwVrvsdd0AbsUU2In4YaUPF_PKWiTM0k?e=08byLO' },
      { name: 'Club Analytics — PH (xlsx)', type: 'xlsx', size: '1.3 MB', url: '2026 PH Club Analytics.xlsx' },
      { name: 'Club Analytics — SG', type: 'link', size: 'Open dashboard', url: '#' },
      { name: 'Club Analytics — MY', type: 'link', size: 'Open dashboard', url: '#' },
      { name: 'Club Analytics — ID', type: 'link', size: 'Open dashboard', url: '#' },
      { name: 'Club Analytics — HK', type: 'link', size: 'Open dashboard', url: '#' },
      { name: 'Club Analytics — TH', type: 'link', size: 'Open dashboard', url: '#' },
      { name: 'Club Analytics — TW', type: 'link', size: 'Open dashboard', url: '#' },
    ],
  },
  {
    label: 'OSAT Medallia',
    files: [
      { name: 'OSAT Medallia 2026 Dashboard', type: 'link', size: 'Open dashboard', url: 'OSAT Medallia 2026.html' },
      { name: 'OSAT Medallia 2026 (All Markets)', type: 'xlsx', size: '179 KB', url: 'OSAT Medallia 2026 All Markets.xlsx' },
    ],
  },
  {
    label: 'AF Member Status Red Club 2026',
    files: [
      { name: 'AF Member Status Red Club 2026', type: 'link', size: 'Open dashboard', url: '#' },
    ],
  },
  {
    label: 'AFCC OSAT 2026',
    files: [
      { name: 'AFCC OSAT 2026 (All Batches)', type: 'xlsx', size: '130 KB', url: 'AFCC OSAT 2026.xlsx' },
    ],
  },
  {
    label: 'Learner Progress Summary 2026 8 Markets',
    files: [
      { name: 'Learner Progress Summary 2026 (8 Markets)', type: 'xlsx', size: '689 KB', url: 'Learner Progress Summary 2026 8 Markets.xlsx' },
    ],
  },
  {
    label: 'NPS 2026',
    files: [
      { name: 'NPS 2026 (All Markets)', type: 'xlsx', size: '93 KB', url: 'NPS 2026.xlsx' },
    ],
  },
];

const ICONS = {
  pdf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 2h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z"/><path d="M14 2v5h5"/><path d="M9 14h1.5a1.5 1.5 0 0 0 0-3H9v6M13 17v-6h2a2 2 0 0 1 0 4h-2M18 11v6M18 14h1.5"/></svg>',
  pptx: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 2h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z"/><path d="M14 2v5h5"/><circle cx="12" cy="15" r="2.5"/></svg>',
  xlsx: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 2h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z"/><path d="M14 2v5h5"/><path d="M9 12.5h6M9 15.5h6M9 18.5h6"/></svg>',
  csv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 2h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z"/><path d="M14 2v5h5"/><path d="M8.5 14.5h7M8.5 17.5h4"/></svg>',
  video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="13" height="14" rx="2"/><path d="m21 8-5 3.5L21 15V8Z"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.5 1.4"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.4-1.4"/></svg>',
};

const DOWNLOAD_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12m0 0-4-4m4 4 4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>';

const ALL_FILES = FILE_GROUPS.flatMap(g => g.files.map(f => ({ ...f, category: g.label })));

let activeTab = 'Club Analytics';

/* OSAT by market, Jan–Sep 2026. From the uploaded workbook. */
const OSAT_CHART_CATEGORY = 'OSAT Medallia';
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
const MONTH_NAMES = { Jan: 'January', Feb: 'February', Mar: 'March', Apr: 'April', May: 'May', Jun: 'June', Jul: 'July', Aug: 'August', Sep: 'September' };
const MONTHLY = [
  { market: 'Philippines', month: 'Jan', osat: 47.5, gym_quality: 16.6, location_cleanliness: 34.4, personal_fitness_support: 25.1, services_provided: 34.8 }, { market: 'Philippines', month: 'Feb', osat: 46.6, gym_quality: 13.8, location_cleanliness: 32.5, personal_fitness_support: 19.6, services_provided: 32.5 }, { market: 'Philippines', month: 'Mar', osat: 45.5, gym_quality: 15.9, location_cleanliness: 33.1, personal_fitness_support: 22.3, services_provided: 30.9 }, { market: 'Philippines', month: 'Apr', osat: 44.5, gym_quality: 14, location_cleanliness: 29.1, personal_fitness_support: 20.6, services_provided: 32.8 }, { market: 'Philippines', month: 'May', osat: 46.8, gym_quality: 15.3, location_cleanliness: 31.6, personal_fitness_support: 21.2, services_provided: 35.7 }, { market: 'Philippines', month: 'Jun', osat: 50.9, gym_quality: 18.1, location_cleanliness: 32.5, personal_fitness_support: 25.2, services_provided: 39.4 }, { market: 'Philippines', month: 'Jul', osat: 48.3, gym_quality: 18.6, location_cleanliness: 34.1, personal_fitness_support: 25.1, services_provided: 34.9 }, { market: 'Philippines', month: 'Aug', osat: 49.2, gym_quality: 19.1, location_cleanliness: 34.5, personal_fitness_support: 24.7, services_provided: 36 }, { market: 'Philippines', month: 'Sep', osat: 48.3, gym_quality: 21.7, location_cleanliness: 32.1, personal_fitness_support: 22.5, services_provided: 32.3 },
  { market: 'Singapore', month: 'Jan', osat: 47.6, gym_quality: 24.3, location_cleanliness: 36.4, personal_fitness_support: 20.6, services_provided: 35.9 }, { market: 'Singapore', month: 'Feb', osat: 43.2, gym_quality: 14.1, location_cleanliness: 26.8, personal_fitness_support: 16, services_provided: 36.8 }, { market: 'Singapore', month: 'Mar', osat: 40.1, gym_quality: 10.1, location_cleanliness: 25.9, personal_fitness_support: 10.2, services_provided: 31.7 }, { market: 'Singapore', month: 'Apr', osat: 37.6, gym_quality: 14.6, location_cleanliness: 31.2, personal_fitness_support: 15.1, services_provided: 30.6 }, { market: 'Singapore', month: 'May', osat: 37.3, gym_quality: 12.9, location_cleanliness: 28.6, personal_fitness_support: 8.8, services_provided: 33.9 }, { market: 'Singapore', month: 'Jun', osat: 42, gym_quality: 18.3, location_cleanliness: 33.2, personal_fitness_support: 14.1, services_provided: 36.4 }, { market: 'Singapore', month: 'Jul', osat: 42.5, gym_quality: 17.2, location_cleanliness: 31.1, personal_fitness_support: 17.8, services_provided: 37 }, { market: 'Singapore', month: 'Aug', osat: 42.5, gym_quality: 15.7, location_cleanliness: 29.6, personal_fitness_support: 17.9, services_provided: 38.7 }, { market: 'Singapore', month: 'Sep', osat: 38.5, gym_quality: 11.9, location_cleanliness: 26.8, personal_fitness_support: 11.6, services_provided: 29.7 },
  { market: 'Malaysia', month: 'Jan', osat: 39.5, gym_quality: 19.9, location_cleanliness: 41.8, personal_fitness_support: 15.3, services_provided: 25.8 }, { market: 'Malaysia', month: 'Feb', osat: 39.4, gym_quality: 24.5, location_cleanliness: 40.1, personal_fitness_support: 18.4, services_provided: 23.6 }, { market: 'Malaysia', month: 'Mar', osat: 34.2, gym_quality: 21.5, location_cleanliness: 40.1, personal_fitness_support: 15.7, services_provided: 22.3 }, { market: 'Malaysia', month: 'Apr', osat: 38.9, gym_quality: 22.8, location_cleanliness: 35.6, personal_fitness_support: 16.2, services_provided: 23.5 }, { market: 'Malaysia', month: 'May', osat: 39, gym_quality: 24.2, location_cleanliness: 40.5, personal_fitness_support: 23.3, services_provided: 25.6 }, { market: 'Malaysia', month: 'Jun', osat: 39.6, gym_quality: 23.4, location_cleanliness: 38.2, personal_fitness_support: 21, services_provided: 27.3 }, { market: 'Malaysia', month: 'Jul', osat: 35.4, gym_quality: 17.5, location_cleanliness: 37.1, personal_fitness_support: 15.2, services_provided: 23.3 }, { market: 'Malaysia', month: 'Aug', osat: 34.7, gym_quality: 18.5, location_cleanliness: 33.2, personal_fitness_support: 12.6, services_provided: 21.7 }, { market: 'Malaysia', month: 'Sep', osat: 37.1, gym_quality: 25.6, location_cleanliness: 42.5, personal_fitness_support: 21.6, services_provided: 29.9 },
  { market: 'Indonesia', month: 'Jan', osat: 37.6, gym_quality: 22.4, location_cleanliness: 34.4, personal_fitness_support: 20.5, services_provided: 24.5 }, { market: 'Indonesia', month: 'Feb', osat: 41.7, gym_quality: 25.8, location_cleanliness: 38.1, personal_fitness_support: 25.4, services_provided: 29.5 }, { market: 'Indonesia', month: 'Mar', osat: 40.3, gym_quality: 15.7, location_cleanliness: 29.1, personal_fitness_support: 16.5, services_provided: 21 }, { market: 'Indonesia', month: 'Apr', osat: 32, gym_quality: 11.6, location_cleanliness: 31.2, personal_fitness_support: 8.7, services_provided: 17.3 }, { market: 'Indonesia', month: 'May', osat: 40.4, gym_quality: 22.2, location_cleanliness: 36.4, personal_fitness_support: 19.2, services_provided: 28.4 }, { market: 'Indonesia', month: 'Jun', osat: 40.8, gym_quality: 20.3, location_cleanliness: 36.2, personal_fitness_support: 19.9, services_provided: 22.8 }, { market: 'Indonesia', month: 'Jul', osat: 38.9, gym_quality: 17.8, location_cleanliness: 37.8, personal_fitness_support: 20, services_provided: 23.1 }, { market: 'Indonesia', month: 'Aug', osat: 38.3, gym_quality: 12.8, location_cleanliness: 21.7, personal_fitness_support: 18.2, services_provided: 25.6 }, { market: 'Indonesia', month: 'Sep', osat: 35.7, gym_quality: 11.3, location_cleanliness: 33.6, personal_fitness_support: 14.7, services_provided: 18.9 },
  { market: 'Hong Kong', month: 'Jan', osat: 40.2, gym_quality: 13.3, location_cleanliness: 34.6, personal_fitness_support: 16.1, services_provided: 38.4 }, { market: 'Hong Kong', month: 'Feb', osat: 42.2, gym_quality: 11.9, location_cleanliness: 33.2, personal_fitness_support: 20.7, services_provided: 43.6 }, { market: 'Hong Kong', month: 'Mar', osat: 46.4, gym_quality: 12.3, location_cleanliness: 32.8, personal_fitness_support: 15.5, services_provided: 35.2 }, { market: 'Hong Kong', month: 'Apr', osat: 40, gym_quality: 9.3, location_cleanliness: 29.8, personal_fitness_support: 15.9, services_provided: 25.2 }, { market: 'Hong Kong', month: 'May', osat: 39.4, gym_quality: 6.1, location_cleanliness: 29.9, personal_fitness_support: 10.7, services_provided: 27.5 }, { market: 'Hong Kong', month: 'Jun', osat: 40.3, gym_quality: 11.9, location_cleanliness: 26.8, personal_fitness_support: 17.5, services_provided: 30.2 }, { market: 'Hong Kong', month: 'Jul', osat: 43.1, gym_quality: 12.4, location_cleanliness: 23.7, personal_fitness_support: 18.3, services_provided: 35.4 }, { market: 'Hong Kong', month: 'Aug', osat: 40.3, gym_quality: 10.6, location_cleanliness: 21.1, personal_fitness_support: 10.9, services_provided: 29.1 }, { market: 'Hong Kong', month: 'Sep', osat: 41.3, gym_quality: 13.3, location_cleanliness: 29.4, personal_fitness_support: 16.4, services_provided: 34.6 },
  { market: 'Thailand', month: 'Jan', osat: 30, gym_quality: 1.4, location_cleanliness: 35.7, personal_fitness_support: 7.1, services_provided: 22.4 }, { market: 'Thailand', month: 'Feb', osat: 41.5, gym_quality: 12.3, location_cleanliness: 46.2, personal_fitness_support: 21.5, services_provided: 35.5 }, { market: 'Thailand', month: 'Mar', osat: 37.9, gym_quality: -13.8, location_cleanliness: 24.1, personal_fitness_support: -10.3, services_provided: 7.3 }, { market: 'Thailand', month: 'Apr', osat: 49.2, gym_quality: 11.5, location_cleanliness: 41, personal_fitness_support: 24.6, services_provided: 45.8 }, { market: 'Thailand', month: 'May', osat: 42.9, gym_quality: 18.4, location_cleanliness: 55.1, personal_fitness_support: 24.5, services_provided: 37.5 }, { market: 'Thailand', month: 'Jun', osat: 46.7, gym_quality: 17.8, location_cleanliness: 51.1, personal_fitness_support: 33.3, services_provided: 38.1 }, { market: 'Thailand', month: 'Jul', osat: 41.2, gym_quality: -9.8, location_cleanliness: 33.3, personal_fitness_support: 9.8, services_provided: 28 }, { market: 'Thailand', month: 'Aug', osat: 32.1, gym_quality: 15.2, location_cleanliness: 40, personal_fitness_support: 17.1, services_provided: 43.7 }, { market: 'Thailand', month: 'Sep', osat: 41.7, gym_quality: 19.4, location_cleanliness: 30.6, personal_fitness_support: 11.1, services_provided: 21.2 },
  { market: 'Taiwan', month: 'Jan', osat: 51.4, gym_quality: 34.3, location_cleanliness: 20, personal_fitness_support: 31.4, services_provided: 39.4 }, { market: 'Taiwan', month: 'Feb', osat: 55.6, gym_quality: 30.6, location_cleanliness: 33.3, personal_fitness_support: 25, services_provided: 44.1 }, { market: 'Taiwan', month: 'Mar', osat: 50, gym_quality: 34.6, location_cleanliness: 23.1, personal_fitness_support: 26.9, services_provided: 30.8 }, { market: 'Taiwan', month: 'Apr', osat: 50, gym_quality: null, location_cleanliness: null, personal_fitness_support: null, services_provided: null }, { market: 'Taiwan', month: 'May', osat: 52.5, gym_quality: 23.7, location_cleanliness: 33.9, personal_fitness_support: 39, services_provided: 50.9 }, { market: 'Taiwan', month: 'Jun', osat: 44.7, gym_quality: 40, location_cleanliness: 57.8, personal_fitness_support: 48.9, services_provided: 57.1 }, { market: 'Taiwan', month: 'Jul', osat: 60.6, gym_quality: 25, location_cleanliness: 40.6, personal_fitness_support: 46.9, services_provided: 50 }, { market: 'Taiwan', month: 'Aug', osat: 44.4, gym_quality: 25.6, location_cleanliness: 32.2, personal_fitness_support: 37.8, services_provided: 40.2 }, { market: 'Taiwan', month: 'Sep', osat: 44.4, gym_quality: 24.4, location_cleanliness: 57.8, personal_fitness_support: 46.7, services_provided: 54.5 },
  { market: 'Vietnam', month: 'Jan', osat: 28.6, gym_quality: 28.6, location_cleanliness: 42.9, personal_fitness_support: 0, services_provided: 16.7 }, { market: 'Vietnam', month: 'Feb', osat: 33.3, gym_quality: 0, location_cleanliness: 50, personal_fitness_support: 0, services_provided: 0 }, { market: 'Vietnam', month: 'Mar', osat: 62.5, gym_quality: 6.7, location_cleanliness: 33.3, personal_fitness_support: 26.7, services_provided: 50 }, { market: 'Vietnam', month: 'Apr', osat: 66.7, gym_quality: null, location_cleanliness: null, personal_fitness_support: null, services_provided: null }, { market: 'Vietnam', month: 'May', osat: 42.9, gym_quality: -14.3, location_cleanliness: 42.9, personal_fitness_support: 0, services_provided: 16.7 }, { market: 'Vietnam', month: 'Jun', osat: 50, gym_quality: 33.3, location_cleanliness: 66.7, personal_fitness_support: 33.3, services_provided: 0 }, { market: 'Vietnam', month: 'Jul', osat: 0, gym_quality: 33.3, location_cleanliness: 100, personal_fitness_support: 0, services_provided: 33.3 }, { market: 'Vietnam', month: 'Aug', osat: 46.7, gym_quality: 33.3, location_cleanliness: 66.7, personal_fitness_support: 40, services_provided: 57.1 }, { market: 'Vietnam', month: 'Sep', osat: 60, gym_quality: 70, location_cleanliness: 80, personal_fitness_support: 70, services_provided: 66.7 },
];
let activeMonth = 'Sep';

const ALL_MONTHS_12 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MARKETS = ['Philippines', 'Singapore', 'Malaysia', 'Indonesia', 'Hong Kong', 'Thailand', 'Taiwan', 'Vietnam'];
const SUBMETRICS = [
  { key: 'gym_quality', label: 'Gym Quality OSAT', color: 'var(--purple-deep)' },
  { key: 'location_cleanliness', label: 'Location Cleanliness OSAT', color: 'var(--purple)' },
  { key: 'personal_fitness_support', label: 'Personal Fitness Support', color: 'var(--purple-light)' },
  { key: 'services_provided', label: 'Services Provided OSAT', color: 'var(--silver)' },
];
let activeMarket = 'Taiwan';

/* AFCC (AF Certified Coach) training OSAT, by batch. From the uploaded workbook's SUMMARY sheet. */
const AFCC_CATEGORY = 'AFCC OSAT 2026';
const AFCC_SUBMETRICS = [
  { key: 'relevance', label: 'Training Relevance & Usefulness', color: 'var(--purple-deep)' },
  { key: 'facilitator', label: 'Facilitator Effectiveness', color: 'var(--purple)' },
  { key: 'content', label: 'Training Content & Resources', color: 'var(--purple-light)' },
];
const AFCC_BATCHES = [
  { code: 'PH', month: 'Apr', batch: 'Batch 1', overall: 9.6, relevance: 9.72, facilitator: 9.69, content: 9.56 },
  { code: 'PH', month: 'Apr', batch: 'Batch 2', overall: 9.75, relevance: 9.78, facilitator: 9.8, content: 9.82 },
  { code: 'MY', month: 'May', batch: 'Batch 1', overall: 9.84, relevance: 9.87, facilitator: 9.88, content: 9.82 },
  { code: 'SG', month: 'Jun', batch: 'Batch 1', overall: 9.7, relevance: 9.68, facilitator: 9.78, content: 9.7 },
  { code: 'PH', month: 'Aug', batch: 'Batch 3', overall: 9.77, relevance: 9.76, facilitator: 9.77, content: 9.72 },
  { code: 'MY', month: 'Aug', batch: 'Batch 2', overall: 9.57, relevance: 9.64, facilitator: 9.67, content: 9.55 },
  { code: 'SG', month: 'Sep', batch: 'Batch 2', overall: 9.56, relevance: 9.47, facilitator: 9.63, content: 9.4 },
  { code: 'TH', month: 'Sep', batch: 'Batch 1', overall: 9.23, relevance: 9.27, facilitator: 9.32, content: 9.25 },
  { code: 'ID', month: 'Sep', batch: 'Batch 1', overall: 9.23, relevance: 9.42, facilitator: 9.52, content: 9.13 },
];

/* Learner Progress Summary, 8 markets. From the uploaded workbook's Summary sheet. */
const LEARNER_CATEGORY = 'Learner Progress Summary 2026 8 Markets';
const LEARNER_MONTHS = [
  { month: 'January', learners: 1276, completed: 2743, utilization: 0.2296, topDeptPct: 0.5155, avgPerLearner: 2.15 },
  { month: 'Feb–Apr', learners: 1507, completed: 3644, utilization: 0.2084, topDeptPct: 0.5661, avgPerLearner: 2.42 },
  { month: 'May', learners: 1530, completed: 3657, utilization: 0.2026, topDeptPct: 0.5767, avgPerLearner: 2.39 },
  { month: 'June', learners: 1674, completed: 3953, utilization: 0.2109, topDeptPct: 0.5619, avgPerLearner: 2.36 },
  { month: 'July', learners: 1742, completed: 4099, utilization: 0.2026, topDeptPct: 0.5816, avgPerLearner: 2.35 },
  { month: 'August', learners: 1766, completed: 4355, utilization: 0.2055, topDeptPct: 0.5814, avgPerLearner: 2.47 },
  { month: 'September', learners: 1789, completed: 4499, utilization: 0.2169, topDeptPct: 0.5497, avgPerLearner: 2.51 },
];
const LEARNER_TOP_DEPT = 'Philippines';
const LEARNER_DEPTS = [
  { dept: 'Philippines', total: 15196 },
  { dept: 'Singapore', total: 7509 },
  { dept: 'Malaysia', total: 2518 },
  { dept: 'Asia', total: 724 },
  { dept: 'Indonesia', total: 581 },
  { dept: 'Hong Kong', total: 338 },
  { dept: 'Vietnam', total: 84 },
  { dept: 'Taiwan', total: 0 },
  { dept: 'Thailand', total: 0 },
];

/* NPS 2026, by market, department and quarter. From the uploaded workbook's SUMMARY sheet. Q4 not yet reported. */
const NPS_CATEGORY = 'NPS 2026';
const NPS_QUARTERS = ['Q1', 'Q2', 'Q3'];
const NPS_MARKETS = ['Philippines', 'Singapore', 'Indonesia', 'Malaysia', 'Hong Kong', 'Thailand', 'Taiwan'];
const NPS_SUBMETRICS = [
  { key: 'marketing', label: 'Marketing OSAT', color: 'var(--purple-deep)', opacity: 1 },
  { key: 'marketingCollaterals', label: 'Marketing Collaterals', color: 'var(--purple-deep)', opacity: 0.55 },
  { key: 'support', label: 'Support OSAT', color: 'var(--purple)', opacity: 1 },
  { key: 'learning', label: 'Learning OSAT', color: 'var(--purple)', opacity: 0.6 },
  { key: 'resources', label: 'Resources OSAT', color: 'var(--purple)', opacity: 0.3 },
  { key: 'vendor', label: 'Vendor OSAT', color: 'var(--purple-light)', opacity: 1 },
  { key: 'likelihoodPurchase', label: 'Likelihood to Purchase', color: 'var(--purple-light)', opacity: 0.55 },
  { key: 'likelihoodReferral', label: 'Likelihood to Referral', color: 'var(--silver)', opacity: 1 },
  { key: 'franchiseesOverall', label: 'Franchisees Overall Satisfaction', color: 'var(--silver)', opacity: 0.55 },
];
const NPS_DATA = [
  { market: 'Philippines', quarter: 'Q1', average: 40, marketing: 20, marketingCollaterals: 10, support: 80, learning: 50, resources: 60, vendor: 0, likelihoodPurchase: 70, likelihoodReferral: 30, franchiseesOverall: 40 },
  { market: 'Philippines', quarter: 'Q2', average: 61, marketing: 16, marketingCollaterals: 33, support: 100, learning: 100, resources: 83, vendor: 16, likelihoodPurchase: 67, likelihoodReferral: 67, franchiseesOverall: 67 },
  { market: 'Philippines', quarter: 'Q3', average: 25.89, marketing: -50, marketingCollaterals: -50, support: 100, learning: 100, resources: 33, vendor: -34, likelihoodPurchase: 50, likelihoodReferral: 34, franchiseesOverall: 50 },
  { market: 'Singapore', quarter: 'Q1', average: 22.22, marketing: 36, marketingCollaterals: 46, support: 64, learning: 18, resources: -9, vendor: 9, likelihoodPurchase: 9, likelihoodReferral: 0, franchiseesOverall: 27 },
  { market: 'Singapore', quarter: 'Q2', average: 49.78, marketing: 62, marketingCollaterals: 69, support: 46, learning: 54, resources: 38, vendor: 23, likelihoodPurchase: 62, likelihoodReferral: 23, franchiseesOverall: 71 },
  { market: 'Singapore', quarter: 'Q3', average: 11.11, marketing: 25, marketingCollaterals: 25, support: 25, learning: -12, resources: 12, vendor: -25, likelihoodPurchase: 25, likelihoodReferral: 0, franchiseesOverall: 25 },
  { market: 'Indonesia', quarter: 'Q1', average: 56.78, marketing: 44, marketingCollaterals: 39, support: 78, learning: 61, resources: 72, vendor: 56, likelihoodPurchase: 44, likelihoodReferral: 67, franchiseesOverall: 50 },
  { market: 'Indonesia', quarter: 'Q2', average: 70.44, marketing: 67, marketingCollaterals: 61, support: 89, learning: 67, resources: 83, vendor: 67, likelihoodPurchase: 56, likelihoodReferral: 83, franchiseesOverall: 61 },
  { market: 'Indonesia', quarter: 'Q3', average: 49.89, marketing: 40, marketingCollaterals: 48, support: 70, learning: 63, resources: 44, vendor: 33, likelihoodPurchase: 33, likelihoodReferral: 59, franchiseesOverall: 59 },
  { market: 'Malaysia', quarter: 'Q1', average: 68.89, marketing: 80, marketingCollaterals: 80, support: 80, learning: 40, resources: 60, vendor: 40, likelihoodPurchase: 80, likelihoodReferral: 80, franchiseesOverall: 80 },
  { market: 'Malaysia', quarter: 'Q2', average: 79, marketing: 82, marketingCollaterals: 82, support: 82, learning: 91, resources: 64, vendor: 64, likelihoodPurchase: 82, likelihoodReferral: 82, franchiseesOverall: 82 },
  { market: 'Malaysia', quarter: 'Q3', average: 83.33, marketing: 100, marketingCollaterals: 100, support: 100, learning: 50, resources: 50, vendor: 50, likelihoodPurchase: 100, likelihoodReferral: 100, franchiseesOverall: 100 },
  { market: 'Hong Kong', quarter: 'Q1', average: -31.11, marketing: -20, marketingCollaterals: 0, support: -40, learning: -40, resources: -20, vendor: -40, likelihoodPurchase: -40, likelihoodReferral: -40, franchiseesOverall: -40 },
  { market: 'Hong Kong', quarter: 'Q2', average: -7.56, marketing: -34, marketingCollaterals: -34, support: 0, learning: 0, resources: 33, vendor: -33, likelihoodPurchase: 67, likelihoodReferral: -34, franchiseesOverall: -33 },
  { market: 'Hong Kong', quarter: 'Q3', average: -28.22, marketing: -22, marketingCollaterals: 0, support: -33, learning: -44, resources: 11, vendor: -33, likelihoodPurchase: -67, likelihoodReferral: -33, franchiseesOverall: -33 },
  { market: 'Thailand', quarter: 'Q1', average: 0, marketing: 0, marketingCollaterals: 0, support: 0, learning: 0, resources: 0, vendor: 0, likelihoodPurchase: 0, likelihoodReferral: 0, franchiseesOverall: 0 },
  { market: 'Thailand', quarter: 'Q2', average: -5.56, marketing: -25, marketingCollaterals: -25, support: -4, learning: 12, resources: 12, vendor: 0, likelihoodPurchase: -21, likelihoodReferral: 9, franchiseesOverall: -8 },
  { market: 'Thailand', quarter: 'Q3', average: -9.78, marketing: -26, marketingCollaterals: -21, support: 16, learning: -5, resources: 5, vendor: -10, likelihoodPurchase: -10, likelihoodReferral: -16, franchiseesOverall: -21 },
  { market: 'Taiwan', quarter: 'Q1', average: 0, marketing: 0, marketingCollaterals: 0, support: 0, learning: 0, resources: 0, vendor: 0, likelihoodPurchase: 0, likelihoodReferral: 0, franchiseesOverall: 0 },
  { market: 'Taiwan', quarter: 'Q2', average: 0, marketing: 0, marketingCollaterals: 0, support: 0, learning: 0, resources: 0, vendor: 0, likelihoodPurchase: 0, likelihoodReferral: 0, franchiseesOverall: 0 },
  { market: 'Taiwan', quarter: 'Q3', average: 0, marketing: 0, marketingCollaterals: 0, support: 0, learning: 0, resources: 0, vendor: 0, likelihoodPurchase: 0, likelihoodReferral: 0, franchiseesOverall: 0 },
];
let activeQuarter = 'Q3';
let activeNpsMarket = 'Malaysia';

/* Club Analytics — per-market links. Leave url as '#' until the real link is ready. */
const CLUB_ANALYTICS_CATEGORY = 'Club Analytics';
const CLUB_ANALYTICS_MARKETS = [
  { code: 'PH', name: 'Philippines', url: 'https://anytimefitnessasia.sharepoint.com/:x:/s/FranchiseeEmpowermentNetwork/IQC0ADSq03ObS7AxwVrvsdd0AbsUU2In4YaUPF_PKWiTM0k?e=08byLO' },
  { code: 'SG', name: 'Singapore', url: '#' },
  { code: 'MY', name: 'Malaysia', url: '#' },
  { code: 'ID', name: 'Indonesia', url: '#' },
  { code: 'HK', name: 'Hong Kong', url: '#' },
  { code: 'TH', name: 'Thailand', url: '#' },
  { code: 'TW', name: 'Taiwan', url: '#' },
];
let activeClubMarket = 'PH';

/* Club Analytics monthly summary, by market. From each market's Summary sheet (Jan-Sep). */
const CLUB_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'];
const CLUB_DATA = {
  PH: {
    totalMembers: [182160, 186852, 188696, 190042, 193276, 198544, 204073, 206557, 208277],
    joiners: [13357, 13594, 10587, 10312, 11736, 14211, 14693, 12556, 11097],
    cancelled: [8222, 8501, 9268, 8159, 7522, 7815, 8499, 8077, 7623],
    active: [174921, 179585, 181109, 181870, 185065, 190342, 195414, 198330, 200056],
    leadToSalesRank: [
      { rank: 1, name: 'Madison Galeries', ratio: 0.2981, m: [0.8163,0.4124,0.2632,0.7941,0.8571,0.1329,0.1121,0.1043,0.0847] },
        { rank: 2, name: 'The Garden Walk Felix Ave', ratio: 0.291, m: [0.8,0.3878,0.2217,0.7612,0.8857,0.1325,0.1127,0.1056,0.0846] },
        { rank: 3, name: 'FCL Xavierville', ratio: 0.2816, m: [0.7551,0.358,0.2609,0.6667,0.7188,0.1551,0.1891,0.1528,0.1227] },
        { rank: 4, name: 'Skylight Centre Bonny Serrano', ratio: 0.2799, m: [0.8519,0.4522,0.14,0.7255,0.7857,0.1017,0.1256,0.0943,0.0813] },
        { rank: 5, name: 'CK Mall Brookside', ratio: 0.2782, m: [1.1538,0.323,0.1408,0.6964,0.6806,0.0909,0.081,0.0844,0.0874] },
        { rank: 6, name: 'Marcos Highway', ratio: 0.2751, m: [0.803,0.4371,0.1602,0.64,0.7941,0.1704,0.1124,0.1053,0.0782] },
        { rank: 7, name: 'Taytay', ratio: 0.2703, m: [0.7252,0.377,0.2131,0.7979,0.713,0.115,0.1227,0.107,0.0728] },
        { rank: 8, name: 'Eton Westend Square', ratio: 0.2703, m: [0.8056,0.4434,0.165,0.7229,0.7283,0.1042,0.126,0.0791,0.069] },
        { rank: 9, name: 'SM City Consolacion', ratio: 0.2688, m: [0.7216,0.4597,0.229,0.7467,0.6543,0.1294,0.1226,0.0886,0.0731] },
        { rank: 10, name: 'P Tuazon', ratio: 0.267, m: [0.625,0.5403,0.4461,0.5521,0.7215,0.0964,0.0822,0.082,0.0587] },
        { rank: 11, name: 'Antipolo Village', ratio: 0.2649, m: [0.7922,0.4074,0.2068,0.7901,0.5667,0.1092,0.1219,0.1019,0.0821] },
        { rank: 12, name: 'Tomas Morato', ratio: 0.2643, m: [0.7377,0.3913,0.1939,0.7407,0.7286,0.1155,0.1055,0.0968,0.0619] },
        { rank: 13, name: 'Ortigas Galleria', ratio: 0.2643, m: [0.7789,0.4187,0.1375,0.7444,0.7037,0.1143,0.1061,0.091,0.0768] },
        { rank: 14, name: 'Centro Capital Zamboanga', ratio: 0.264, m: [0.7945,0.4767,0.1403,0.7692,0.5333,0.1691,0.1481,0.073,0.0632] },
        { rank: 15, name: 'Crossroad Tandang Sora', ratio: 0.2635, m: [0.6526,0.3539,0.1938,0.8254,0.7564,0.1053,0.1047,0.0976,0.0726] },
        { rank: 16, name: 'Starmall Talisay', ratio: 0.2635, m: [0.7079,0.3293,0.1878,0.8033,0.7073,0.1353,0.1052,0.1128,0.0733] },
        { rank: 17, name: 'The East Club', ratio: 0.2598, m: [0.7273,0.1833,0.2291,0.9038,0.6981,0.0836,0.1073,0.1043,0.0805] },
        { rank: 18, name: 'Edsa Muñoz', ratio: 0.2592, m: [0.5493,0.4326,0.141,0.6094,0.7321,0.186,0.1993,0.1459,0.1142] },
        { rank: 19, name: 'Banawe', ratio: 0.259, m: [0.8426,0.3317,0.2222,0.686,0.6495,0.1254,0.0891,0.0868,0.075] },
        { rank: 20, name: 'Mactan', ratio: 0.2588, m: [0.74,0.4964,0.2049,0.5208,0.7632,0.12,0.112,0.0682,0.0799] },
        { rank: 21, name: 'Fisher Mall Malabon', ratio: 0.258, m: [0.7797,0.3317,0.1636,0.7222,0.7065,0.0856,0.1169,0.1116,0.0777] },
        { rank: 22, name: 'Fairview', ratio: 0.2569, m: [0.7407,0.3976,0.2376,0.7676,0.5889,0.1297,0.0755,0.0857,0.059] },
        { rank: 23, name: 'Skyplaza Victoneta', ratio: 0.2566, m: [0.8525,0.2778,0.1765,0.5536,0.8205,0.1078,0.1131,0.098,0.0795] },
        { rank: 24, name: 'Light Mall', ratio: 0.2565, m: [0.5965,0.3527,0.1511,0.7391,0.6105,0.3152,0.1845,0.0765,0.0514] },
        { rank: 25, name: 'Moonwalk', ratio: 0.2537, m: [0.8214,0.3525,0.2212,0.5738,0.7407,0.0947,0.0644,0.1115,0.0643] },
        { rank: 26, name: 'Quezon Avenue', ratio: 0.253, m: [0.7297,0.432,0.2674,0.6486,0.75,0.0716,0.0453,0.0347,0.057] },
        { rank: 27, name: 'SM City Trece Martires', ratio: 0.2524, m: [0.87,0.5889,0.068,0.5697,0.7536,0.0463,0.0484,0.0469,0.0371] },
        { rank: 28, name: 'Oakridge', ratio: 0.2507, m: [0.5887,0.3953,0.2183,0.6374,0.7833,0.1346,0.081,0.0871,0.0822] },
        { rank: 29, name: 'San Pablo', ratio: 0.2477, m: [0.6923,0.3608,0.149,0.7397,0.6667,0.1259,0.1057,0.0846,0.0478] },
        { rank: 30, name: 'Pioneer', ratio: 0.2477, m: [0.7938,0.3545,0.1399,0.7083,0.619,0.1123,0.088,0.0855,0.0706] },
        { rank: 31, name: 'SM Gensan', ratio: 0.2476, m: [0.7547,0.5396,0.2624,0.7619,0.6061,0.0381,0,0.0078,0] },
        { rank: 32, name: 'Jose Abad Santos, San Juan', ratio: 0.2473, m: [0.7179,0.3812,0.1822,0.7015,0.6613,0.1154,0.0853,0.0811,0.0417] },
        { rank: 33, name: 'N. Domingo', ratio: 0.246, m: [0.6915,0.3568,0.2022,0.6413,0.6977,0.1275,0.0784,0.087,0.0702] },
        { rank: 34, name: 'Palanan Filmore', ratio: 0.246, m: [0.6593,0.4094,0.1957,0.6757,0.6571,0.114,0.0845,0.0835,0.0729] },
        { rank: 35, name: 'Pablo Ocampo Makati', ratio: 0.2433, m: [0.6981,0.3497,0.1715,0.6512,0.7,0.1183,0.0858,0.09,0.0545] },
        { rank: 36, name: 'Nuvali City', ratio: 0.2421, m: [0.7404,0.3922,0.1728,0.6542,0.5374,0.1159,0.1117,0.0984,0.0826] },
        { rank: 37, name: 'Rosario', ratio: 0.2416, m: [0.6118,0.3506,0.1992,0.6607,0.7143,0.0843,0.1096,0.1229,0.0457] },
        { rank: 38, name: 'SM City Sucat', ratio: 0.2403, m: [0.6268,0.3893,0.1691,0.717,0.649,0.0994,0.0864,0.077,0.0697] },
        { rank: 39, name: 'Rockwell Santolan', ratio: 0.2401, m: [0.6744,0.3764,0.1369,0.6216,0.6778,0.1199,0.0864,0.1174,0.0704] },
        { rank: 40, name: 'LIMA EXCHANGE MALVAR', ratio: 0.24, m: [0.854,0.2926,0.1423,0.7465,0.5143,0.0769,0.0995,0.0862,0.0677] },
        { rank: 41, name: 'Congressional', ratio: 0.2375, m: [0.6408,0.3382,0.165,0.6866,0.6848,0.0994,0.0989,0.0833,0.0528] },
        { rank: 42, name: 'SM City La Union', ratio: 0.2372, m: [null,null,0,2.1877,0.4598,0.0791,0.062,0.0322,0.0257] },
        { rank: 43, name: 'Lucky Chinatown Mall', ratio: 0.2363, m: [0.6797,0.4084,0.2,0.623,0.5871,0.0904,0.1023,0.0795,0.0654] },
        { rank: 44, name: 'Maginhawa', ratio: 0.2357, m: [0.74,0.2791,0.1306,0.6471,0.6184,0.1432,0.0693,0.1047,0.0962] },
        { rank: 45, name: 'Binondo', ratio: 0.2357, m: [0.5385,0.3048,0.2051,0.6932,0.4118,0.3892,0.123,0.0785,0.0839] },
        { rank: 46, name: 'Antipolo', ratio: 0.234, m: [0.6667,0.2788,0.1924,0.6981,0.5818,0.0917,0.1016,0.1093,0.0876] },
        { rank: 47, name: 'Vasra Visayas Avenue', ratio: 0.2334, m: [0.5114,0.3422,0.1955,0.6111,0.5349,0.3081,0.1775,0.0694,0.0505] },
        { rank: 48, name: 'Masangkay', ratio: 0.2332, m: [0.5781,0.4247,0.2098,0.5714,0.6731,0.0977,0.1006,0.0716,0.072] },
        { rank: 49, name: 'Century City Mall', ratio: 0.2329, m: [0.6514,0.2176,0.1682,0.7684,0.75,0.0587,0.0673,0.0647,0.0484] },
        { rank: 50, name: 'One Pavilion Mall', ratio: 0.2327, m: [0.6265,0.4205,0.1767,0.6515,0.6333,0.0867,0.0751,0.0727,0.0491] },
        { rank: 51, name: 'Mandaluyong', ratio: 0.2319, m: [0.6629,0.3422,0.166,0.6437,0.6444,0.085,0.0862,0.0932,0.0588] },
        { rank: 52, name: 'San Fernando', ratio: 0.2312, m: [0.7294,0.4477,0.1197,0.5116,0.6289,0.1135,0.1231,0.0872,0.0135] },
        { rank: 53, name: 'Calamba City', ratio: 0.2309, m: [0.6569,0.3608,0.1597,0.6098,0.6122,0.1024,0.1196,0.078,0.072] },
        { rank: 54, name: 'SM CDO Downtown Premiere', ratio: 0.2298, m: [0.686,0.2917,0.1934,0.6212,0.6292,0.1336,0.0731,0.0813,0.0486] },
        { rank: 55, name: 'Capitol Hills', ratio: 0.2295, m: [0.4038,0.3934,0.1627,0.5098,0.5625,0.1105,0.3887,0.191,0.0321] },
        { rank: 56, name: 'Bicutan – Better Living', ratio: 0.2291, m: [0.5455,0.3371,0.1708,0.68,0.65,0.1397,0.1064,0.0734,0.0462] },
        { rank: 57, name: 'City Golf Plaza', ratio: 0.2291, m: [0.8376,0.1951,0.1196,0.6591,0.7,0.0696,0.0702,0.0593,0.0381] },
        { rank: 58, name: 'Bacolod Lacson St', ratio: 0.2286, m: [0.617,0.3556,0.2,0.5432,0.7284,0.0847,0.0788,0.0909,0.0448] },
        { rank: 59, name: 'Hemady', ratio: 0.2281, m: [0.8158,0.3069,0.1157,0.4643,0.7164,0.1237,0.094,0.0538,0.0461] },
        { rank: 60, name: 'Kawit', ratio: 0.2258, m: [0.6296,0.2577,0.1135,0.6458,0.4167,0.396,0.1061,0.07,0.0741] },
        { rank: 61, name: 'Escario', ratio: 0.2258, m: [0.6875,0.4196,0.191,0.534,0.5851,0.0976,0.0843,0.0611,0.0489] },
        { rank: 62, name: 'Southwoods', ratio: 0.223, m: [0.5877,0.3246,0.171,0.5765,0.6489,0.1039,0.1063,0.0905,0.0666] },
        { rank: 63, name: 'Sta Mesa', ratio: 0.2223, m: [0.6517,0.303,0.167,0.6058,0.589,0.1034,0.0971,0.0869,0.064] },
        { rank: 64, name: 'Cloverleaf Quezon City', ratio: 0.2215, m: [0.7845,0.3263,0.161,0.6607,0.4915,0.0503,0.0837,0.0649,0.0346] },
        { rank: 65, name: 'San Lazaro', ratio: 0.2213, m: [0.6627,0.3069,0.1579,0.5694,0.6154,0.1052,0.0854,0.0796,0.0735] },
        { rank: 66, name: 'BF Homes', ratio: 0.2208, m: [0.6,0.3373,0.1748,0.6118,0.6471,0.1159,0.0602,0.0737,0.0285] },
        { rank: 67, name: 'Malugay', ratio: 0.2188, m: [0.5957,0.5473,0.1263,0.4783,0.5789,0.1241,0.0621,0.0489,0.0642] },
        { rank: 68, name: 'Fishermall Quezon Avenue', ratio: 0.2173, m: [0.5984,0.3306,0.1791,0.6353,0.5357,0.0848,0.0884,0.0815,0.0731] },
        { rank: 69, name: 'Capitol Commons', ratio: 0.2166, m: [0.6183,0.3012,0.1717,0.5816,0.6421,0.0857,0.0668,0.0787,0.0531] },
        { rank: 70, name: 'Tacloban-Palo', ratio: 0.2161, m: [0.6512,0.375,0.093,0.6585,0.5636,0.0831,0.062,0.031,0.0752] },
        { rank: 71, name: 'Eastwood', ratio: 0.216, m: [0.7113,0.2967,0.1323,0.5481,0.6082,0.0979,0.0777,0.0676,0.0518] },
        { rank: 72, name: 'Ayala Malls Feliz', ratio: 0.2154, m: [0.6917,0.3195,0.1817,0.598,0.565,0.0681,0.0732,0.0466,0.0414] },
        { rank: 73, name: 'Valenzuela', ratio: 0.2144, m: [0.4603,0.4474,0.1313,0.4923,0.5679,0.1281,0.1444,0.0964,0.105] },
        { rank: 74, name: 'Newport City', ratio: 0.2137, m: [0.5633,0.1779,0.4968,0.5872,0.4698,0.0832,0.0695,0.0623,0.0541] },
        { rank: 75, name: 'JY Square Cebu', ratio: 0.2136, m: [0.9168,0.1558,0.0939,0.5319,0.6557,0.0698,0.0528,0.0401,0.046] },
        { rank: 76, name: 'SMDC Fame', ratio: 0.2133, m: [0.5714,0.3591,0.1729,0.5,0.6588,0.1105,0.0716,0.0771,0.0379] },
        { rank: 77, name: 'SM Hypermarket Sucat-Lopez', ratio: 0.2132, m: [0.6014,0.3393,0.1858,0.5366,0.5794,0.0968,0.0838,0.0738,0.0613] },
        { rank: 78, name: 'Ortigas Avenue Ext', ratio: 0.2122, m: [0.6065,0.3354,0.1479,0.5507,0.5987,0.0889,0.09,0.0696,0.0583] },
        { rank: 79, name: 'San Nicolas-Ilocos Norte', ratio: 0.2116, m: [0.678,0.3862,0.1606,0.5278,0.4265,0.0762,0.1205,0.1014,0.0619] },
        { rank: 80, name: 'Magallanes', ratio: 0.2115, m: [0.6375,0.3174,0.1624,0.5286,0.5529,0.1085,0.1013,0.0879,0.0413] },
        { rank: 81, name: 'General Trias', ratio: 0.2109, m: [0.5741,0.3204,0.1498,0.5591,0.5776,0.1096,0.0819,0.0978,0.0599] },
        { rank: 82, name: 'Tagaytay City', ratio: 0.2105, m: [0.5752,0.2896,0.1788,0.5664,0.5874,0.111,0.0808,0.0774,0.0594] },
        { rank: 83, name: 'EDSA Centris', ratio: 0.2104, m: [0.623,0.3902,0.1551,0.5965,0.5614,0.1022,0.0489,0.045,0.0022] },
        { rank: 84, name: 'Cebu IT Park', ratio: 0.21, m: [0.5918,0.3232,0.2039,0.5167,0.5842,0.0904,0.0799,0.0712,0.0587] },
        { rank: 85, name: 'The Upper East Bacolod', ratio: 0.2095, m: [0.9677,0.2618,0.1028,0.4462,0.4917,0.1018,0.0581,0.0402,0.0437] },
        { rank: 86, name: 'Lucena Diversion', ratio: 0.2094, m: [0.5882,0.3486,0.1951,0.5778,0.48,0.1015,0.0892,0.0814,0.0515] },
        { rank: 87, name: 'Hotel Supreme Baguio', ratio: 0.2089, m: [0.5363,0.3902,0.1519,0.5962,0.5069,0.1045,0.0981,0.0561,0.067] },
        { rank: 88, name: 'Las Pinas', ratio: 0.2083, m: [0.6422,0.3163,0.2274,0.5417,0.4578,0.1095,0.0887,0.0693,0.0463] },
        { rank: 89, name: 'Central Mall Biñan', ratio: 0.2069, m: [0.5244,0.3297,0.1716,0.5604,0.6324,0.0817,0.0733,0.0513,0.0577] },
        { rank: 90, name: 'Marquee Mall', ratio: 0.2065, m: [0.6796,0.3626,0.1603,0.5125,0.4609,0.0819,0.0923,0.0894,0.0386] },
        { rank: 91, name: 'Ecoland Davao', ratio: 0.2063, m: [0.5075,0.3774,0.1674,0.5098,0.6056,0.0882,0.0814,0.0836,0.0545] },
        { rank: 92, name: 'Holy Spirit', ratio: 0.2062, m: [0.625,0.3415,0.1717,0.5,0.4947,0.1175,0.0871,0.0822,0.0543] },
        { rank: 93, name: 'SJDM Bulacan', ratio: 0.2061, m: [0.4833,0.3054,0.1291,0.4561,0.6549,0.0756,0.15,0.1418,0.0774] },
        { rank: 94, name: 'SM Lanang', ratio: 0.2054, m: [0.625,0.2923,0.1518,0.4821,0.566,0.0929,0.1019,0.0996,0.0531] },
        { rank: 95, name: 'Abreeza Mall', ratio: 0.2048, m: [0.6,0.358,0.1673,0.5233,0.5102,0.0868,0.0877,0.0852,0.0391] },
        { rank: 96, name: 'Cebu Business Park', ratio: 0.2042, m: [0.5128,0.3097,0.1683,0.5366,0.5714,0.1337,0.0724,0.0859,0.0595] },
        { rank: 97, name: 'Marikina Xeland', ratio: 0.2025, m: [0.6,0.2721,0.1592,0.4242,0.5889,0.1299,0.0829,0.0876,0.0847] },
        { rank: 98, name: 'Marikina', ratio: 0.2014, m: [0.5,0.3161,0.1906,0.5487,0.5203,0.1146,0.087,0.0735,0.066] },
        { rank: 99, name: 'HPL Centre Guiguinto', ratio: 0.2005, m: [0.62,0.3175,0.1623,0.5532,0.4643,0.0914,0.0884,0.0641,0.0448] },
        { rank: 100, name: 'Lapu Lapu', ratio: 0.1996, m: [0.3889,0.2687,0.209,0.5333,0.6696,0.0988,0.0879,0.0632,0.076] },
        { rank: 101, name: '4th Avenue BGC', ratio: 0.199, m: [0.5755,0.2975,0.1421,0.6228,0.4931,0.0712,0.0842,0.0505,0.0506] },
        { rank: 102, name: 'Anonas', ratio: 0.198, m: [0.6194,0.2844,0.1672,0.5119,0.5049,0.0704,0.0763,0.0856,0.0559] },
        { rank: 103, name: 'Santiago City Isabela', ratio: 0.1979, m: [0.3,0.4595,0.1619,0.641,0.4865,0.1202,0.0816,0.0723,0.0516] },
        { rank: 104, name: 'Manggahan General Trias', ratio: 0.1968, m: [0.5096,0.3799,0.122,0.5217,0.5135,0.0955,0.0835,0.0672,0.0683] },
        { rank: 105, name: 'SM City Bicutan', ratio: 0.1961, m: [0.5463,0.292,0.1772,0.593,0.4901,0.0771,0.0668,0.0745,0.0357] },
        { rank: 106, name: 'Burgos Circle', ratio: 0.1943, m: [0.6092,0.3422,0.1626,0.4522,0.4396,0.0972,0.0782,0.0776,0.073] },
        { rank: 107, name: 'Graceland Plaza Marikina', ratio: 0.1921, m: [null,null,null,0.9919,0.9367,0.0935,0.1116,0.0989,0.0728] },
        { rank: 108, name: 'SM J Mall', ratio: 0.1919, m: [0.4381,0.3836,0.125,0.6111,0.4909,0.0714,0.0726,0.0534,0.057] },
        { rank: 109, name: 'Grace Mall', ratio: 0.1911, m: [0.5231,0.3195,0.1578,0.4574,0.5725,0.0808,0.0676,0.0734,0.0415] },
        { rank: 110, name: 'Up Technohub', ratio: 0.1906, m: [0.6645,0.2244,0.0808,0.5429,0.5317,0.1061,0.0383,0.0375,0.0611] },
        { rank: 111, name: 'SM Santa Rosa', ratio: 0.1898, m: [0.6051,0.2543,0.1491,0.4965,0.5122,0.0812,0.0602,0.0717,0.0467] },
        { rank: 112, name: 'Robinsons Fuente', ratio: 0.1892, m: [0.548,0.3077,0.1429,0.5046,0.5077,0.0776,0.063,0.061,0.0579] },
        { rank: 113, name: 'Sun Residences', ratio: 0.1885, m: [0.5074,0.25,0.1554,0.5044,0.5276,0.0903,0.0987,0.0744,0.0543] },
        { rank: 114, name: 'Batangas City', ratio: 0.1884, m: [0.3364,0.1899,0.0138,0.5672,0.8584,0.1172,0.0744,0.0567,0.0474] },
        { rank: 115, name: 'Batasan Hills', ratio: 0.1854, m: [0.4615,0.2899,0.1533,0.5164,0.5312,0.0775,0.0822,0.0562,0.0563] },
        { rank: 116, name: 'Greenhills', ratio: 0.1851, m: [0.5161,0.2523,0.0833,0.3913,0.6415,0.087,0.1149,0.0735,0.0616] },
        { rank: 117, name: 'Ayala Malls Legazpi', ratio: 0.1838, m: [0.4828,0.3919,0.1198,0.4,0.5,0.1181,0.0769,0.0828,0.0333] },
        { rank: 118, name: 'SM City Valenzuela', ratio: 0.1834, m: [0.5422,0.25,0.1575,0.5172,0.4509,0.0861,0.0758,0.0706,0.0507] },
        { rank: 119, name: 'United Nations', ratio: 0.1831, m: [0.5614,0.1591,0.0588,0.6667,0.5439,0.0706,0.0474,0.039,0.0501] },
        { rank: 120, name: 'Shaw Blvd', ratio: 0.1828, m: [0.48,0.405,0.1449,0.48,0.4231,0.0613,0.0889,0.063,0.0477] },
        { rank: 121, name: 'Up Town Center', ratio: 0.182, m: [0.5728,0.2375,0.0831,0.6212,0.4023,0.0634,0.0625,0.0879,0.0538] },
        { rank: 122, name: 'SM City Manila', ratio: 0.182, m: [0.5304,0.2637,0.1257,0.4662,0.5506,0.0676,0.0695,0.0567,0.0531] },
        { rank: 123, name: 'Ayala Malls Manila Bay', ratio: 0.1808, m: [0.5891,0.2802,0.1084,0.4414,0.4745,0.0671,0.0933,0.0553,0.0599] },
        { rank: 124, name: 'Paseo Arcenas Cebu', ratio: 0.1806, m: [0.3659,0.3301,0.1913,0.5161,0.5509,0.0755,0.0567,0.0492,0.0311] },
        { rank: 125, name: 'Bacoor', ratio: 0.1795, m: [0.4966,0.3065,0.1507,0.4904,0.451,0.089,0.0699,0.0625,0.0378] },
        { rank: 126, name: 'SM City Baliwag', ratio: 0.1791, m: [0.4804,0.2922,0.0983,0.5089,0.4944,0.1047,0.0645,0.058,0.0472] },
        { rank: 127, name: 'SM Southmall', ratio: 0.179, m: [0.4726,0.2509,0.1202,0.4706,0.5038,0.0957,0.0827,0.0741,0.0776] },
        { rank: 128, name: 'Mckinley West', ratio: 0.1772, m: [0.4236,0.3279,0.1412,0.4876,0.4646,0.0855,0.0646,0.0851,0.0458] },
        { rank: 129, name: 'Cauayan City Isabela', ratio: 0.1769, m: [0.8438,0.0967,0.0259,0.5417,0.4889,0.0402,0.0305,0.0341,0.0212] },
        { rank: 130, name: 'Congressional Ext.', ratio: 0.1758, m: [0.5102,0.3387,0.1105,0.4694,0.4118,0.0797,0.0526,0.0611,0.0761] },
        { rank: 131, name: 'SM Telabastagan', ratio: 0.1758, m: [null,null,null,0,1.732,0.1244,0.1121,0.0708,0.0702] },
        { rank: 132, name: 'Almar Kai Mall', ratio: 0.1753, m: [null,null,0.9309,0.5932,0.3754,0.0679,0.0667,0.0314,0.0382] },
        { rank: 133, name: 'Robertson Plaza Kawit', ratio: 0.1749, m: [0.4414,0.2385,0.1447,0.4957,0.5055,0.0816,0.0644,0.0684,0.059] },
        { rank: 134, name: 'Tagbilaran City', ratio: 0.1737, m: [0.567,0.3048,0.0809,0.4343,0.5132,0.0662,0.0579,0.0331,0.0274] },
        { rank: 135, name: 'Sto Tomas Batangas', ratio: 0.173, m: [0.5678,0.2193,0.102,0.5,0.4416,0.0624,0.0805,0.0682,0.0339] },
        { rank: 136, name: 'Radiance Manila Bay', ratio: 0.1716, m: [0.443,0.2414,0.1435,0.4603,0.5,0.0735,0.0733,0.0687,0.0549] },
        { rank: 137, name: 'Novaliches', ratio: 0.1711, m: [0.3861,0.3622,0.1008,0.3864,0.5088,0.0766,0.0808,0.0932,0.0582] },
        { rank: 138, name: 'Chino Roces Makati', ratio: 0.1705, m: [0.5789,0.4009,0.0822,0.3505,0.4302,0.0789,0.0565,0.0267,0.0412] },
        { rank: 139, name: 'Lipa', ratio: 0.1679, m: [0.5101,0.2621,0.1014,0.3981,0.4595,0.1003,0.0748,0.0739,0.0345] },
        { rank: 140, name: 'SM City North Edsa', ratio: 0.1676, m: [0.4538,0.2745,0.1405,0.4688,0.4236,0.0671,0.0791,0.0639,0.0395] },
        { rank: 141, name: 'Pamplona Tres Las Pinas', ratio: 0.1671, m: [0.5,0.3361,0.1514,0.3023,0.5,0.0603,0.0235,0.0863,0.0457] },
        { rank: 142, name: 'SM City Grand Central', ratio: 0.167, m: [0.3895,0.2128,0.113,0.4295,0.5535,0.0724,0.0932,0.0833,0.0564] },
        { rank: 143, name: 'Iloilo City', ratio: 0.1662, m: [0.4375,0.24,0.117,0.4915,0.4444,0.0906,0.0652,0.0638,0.0442] },
        { rank: 144, name: 'Dasmarinas', ratio: 0.1651, m: [0.4875,0.2373,0.1233,0.4565,0.4233,0.0758,0.0648,0.0714,0.0413] },
        { rank: 145, name: 'SOMO Molino', ratio: 0.1619, m: [0.3656,0.2423,0.1283,0.4712,0.4862,0.075,0.0522,0.0546,0.0678] },
        { rank: 146, name: 'Mercedes Avenue', ratio: 0.1617, m: [0.4188,0.2564,0.1592,0.4211,0.4527,0.0634,0.0716,0.0524,0.0451] },
        { rank: 147, name: 'Makati Glorietta', ratio: 0.161, m: [0.7299,0.3172,0.1088,0.3981,0.233,0.0435,0.0355,0.0346,0.0312] },
        { rank: 148, name: 'SM City CDO Uptown', ratio: 0.1598, m: [0.5524,0.2154,0.0773,0.4375,0.3772,0.0833,0.0588,0.0802,0.036] },
        { rank: 149, name: 'Ayala Cresendo Tarlac', ratio: 0.1578, m: [0.5065,0.3786,0.1146,0.3483,0.3359,0.0768,0.0701,0.0408,0.022] },
        { rank: 150, name: 'Don Bosco-Pasong Tamo', ratio: 0.157, m: [0.3939,0.4429,0.0874,0.3478,0.4242,0.0635,0.0566,0.0596,0.008] },
        { rank: 151, name: 'Tagum KM 54', ratio: 0.156, m: [0.8312,0.34,0.1658,0.0923,0.3333,0.1046,0.0048,null,null] },
        { rank: 152, name: 'San Pedro', ratio: 0.1539, m: [0.4701,0.3059,0.1344,0.3567,0.3537,0.0851,0.0575,0.0331,0.0498] },
        { rank: 153, name: 'Boni Ave. Mandaluyong', ratio: 0.1531, m: [0.497,0.2143,0.1325,0.4098,0.3846,0.0604,0.0619,0.0356,0.0407] },
        { rank: 154, name: 'Vermosa', ratio: 0.1463, m: [0.411,0.2873,0.1055,0.2989,0.4396,0.0775,0.0642,0.0371,0.034] },
        { rank: 155, name: 'Bonifacio District Cebu', ratio: 0.1403, m: [0.2336,0.2707,0.1121,0.5192,0.3718,0.0558,0.0669,0.0243,0.0297] },
        { rank: 156, name: 'Arca South Taguig', ratio: 0.1396, m: [null,null,0.8149,0.385,0.3444,0.04,0.0364,0.0359,0.0184] },
        { rank: 157, name: 'SM Jazz Makati', ratio: 0.1382, m: [0.3469,0.2509,0.1299,0.2593,0.4356,0.0737,0.0743,0.0401,0.0472] },
        { rank: 158, name: 'Circuit Makati', ratio: 0.1365, m: [0.3823,0.1714,0.1197,0.3973,0.3388,0.0747,0.0675,0.0527,0.0332] },
        { rank: 159, name: 'Cabanatuan', ratio: 0.1336, m: [0.4,0.2389,0.1368,0.3684,0.3063,0.0395,0.061,0.0217,0.0299] },
        { rank: 160, name: 'Pedro Gil', ratio: 0.133, m: [0.3085,0.2035,0.0888,0.4015,0.3724,0.0603,0.0667,0.0454,0.0485] },
        { rank: 161, name: 'Metroplaza Vicas Camarin', ratio: 0.1322, m: [0,0,0.6486,0.3846,0.3784,0.0521,0.0416,0.0454,0.0361] },
        { rank: 162, name: 'Dasca Centre', ratio: 0.1304, m: [0.4487,0.1473,0.1017,0.3457,0.3597,0.0308,0.0428,0.0495,0.038] },
        { rank: 163, name: 'Malate', ratio: 0.1257, m: [0.4269,0.203,0.0715,0.3136,0.3247,0.0388,0.0414,0.0363,0.0526] },
        { rank: 164, name: 'Up Town BGC', ratio: 0.1227, m: [0.345,0.1909,0.0928,0.2717,0.3843,0.05,0.0638,0.0391,0.0348] },
        { rank: 165, name: 'University Belt', ratio: 0.1201, m: [0.3756,0.2328,0.0848,0.3354,0.2403,0.0486,0.0408,0.0475,0.0351] },
        { rank: 166, name: 'Myzone Mendiola Manila', ratio: 0.1185, m: [null,null,null,null,null,null,0.8791,0.4261,0.1173] },
        { rank: 167, name: 'Sunny Place', ratio: 0.1183, m: [null,null,null,null,0.9845,0.1284,0.133,0.0791,0.0942] },
        { rank: 168, name: 'Mall of Asia', ratio: 0.1149, m: [0.3798,0.1822,0.1119,0.2381,0.2874,0.0494,0.0597,0.0421,0.0282] },
        { rank: 169, name: 'Clark', ratio: 0.1135, m: [0.2566,0.1961,0.1089,0.3113,0.3099,0.0539,0.0537,0.0433,0.0281] },
        { rank: 170, name: 'Friendship Highway', ratio: 0.111, m: [0.36,0.1787,0.0732,0.2065,0.2923,0.0699,0.0729,0.0237,0.0547] },
        { rank: 171, name: 'Greenfields San Fernando', ratio: 0.111, m: [0.471,0.1377,0.0644,0.1921,0.2769,0.053,0.0537,0.0432,0.0399] },
        { rank: 172, name: 'CBC Bacoor', ratio: 0.1093, m: [null,null,null,null,null,0.899,0.2108,0.1218,0.0795] },
        { rank: 173, name: 'Araneta City', ratio: 0.1021, m: [0.2941,0.1545,0.0785,0.2649,0.2887,0.0507,0.0406,0.0313,0.0217] },
        { rank: 174, name: '202 Peaklane Davao', ratio: 0.1009, m: [null,null,null,null,null,0.8862,0.1722,0.103,0.0496] },
        { rank: 175, name: 'Blue Residences Katipunan', ratio: 0.0976, m: [0.3757,0.2178,0.0601,0.2565,0.1374,0.0298,0.0305,0.0386,0.0252] },
        { rank: 176, name: 'Olivarez Calamba', ratio: 0.0976, m: [null,null,null,null,0,0.9402,0.112,0.0666,0.0527] },
        { rank: 177, name: 'Buting Pasig', ratio: 0.0974, m: [0.3559,0.2057,0.066,0.2,0.2315,0.0291,0.0251,0.0307,0.0254] },
        { rank: 178, name: 'Festival Mall Alabang', ratio: 0.0946, m: [null,null,null,null,null,null,0.9345,0.1399,0.0603] },
        { rank: 179, name: 'Centtro Mall Los Baños', ratio: 0.0943, m: [null,null,null,null,0,0.7713,0.2041,0.0925,0.0643] },
        { rank: 180, name: 'Alabang', ratio: 0.0943, m: [0.4718,0.2218,0.1273,0.3833,0.4,0.0625,0.0535,0.0568,0.0487] },
        { rank: 181, name: 'Santana Grove', ratio: 0.0879, m: [0.3416,0.2038,0.0584,0.1796,0.1622,0.0449,0.0239,0.0112,0.0295] },
        { rank: 182, name: 'Collegepoint Manila', ratio: 0.0869, m: [null,null,null,null,0,0.7515,0.1397,0.0653,0.086] },
        { rank: 183, name: 'Met Park Sports Center', ratio: 0.0856, m: [null,null,null,null,null,0,0.8447,0.0922,0.0899] },
        { rank: 184, name: 'Santa Maria Bulacan', ratio: 0.0809, m: [null,null,null,null,null,null,0.7741,0.1316,0.0651] },
        { rank: 185, name: 'Eton City Square', ratio: 0.0763, m: [0.1908,0.0997,0.0452,0.1879,0.2635,0.0389,0.0332,0.0292,0.0273] },
        { rank: 186, name: 'Paseo Center', ratio: 0.0732, m: [0.2974,0.1616,0.0493,0.1401,0.1051,0.0314,0.0391,0.0221,0.0321] },
        { rank: 187, name: 'Naic Waltermart', ratio: 0.0708, m: [null,null,null,null,null,null,null,0.1518,0.6979] },
        { rank: 188, name: 'Eton Tower', ratio: 0.0665, m: [0.2982,0.1006,0.0375,0.133,0.116,0.0275,0.0286,0.0257,0.0313] },
        { rank: 189, name: 'Dagupan', ratio: 0.0543, m: [0.1587,0.1387,0.0449,0.115,0.0937,0.0353,0.0269,0.0181,0.02] },
        { rank: 190, name: 'Dumaguete City', ratio: 0.0494, m: [0.0848,0.0866,0.0278,0.1865,0.1176,0.0298,0.0273,0.0209,0.0112] },
        { rank: 191, name: 'Imus', ratio: 0.0436, m: [0.4,0.115,0.0077,0,null,null,null,null,null] },
        { rank: 192, name: 'Otis', ratio: 0.014, m: [null,0.1682,0,null,null,null,null,null,null] },
        { rank: 193, name: 'High Street', ratio: 0, m: [null,null,null,null,null,null,null,null,null] },
        { rank: 193, name: 'Montalban', ratio: 0, m: [null,null,null,null,null,null,null,null,0] },
        { rank: 193, name: 'Robinsons General Trias', ratio: 0, m: [null,null,null,null,null,null,null,0,0] },
        { rank: 193, name: 'Scape Macapagal', ratio: 0, m: [null,0,null,null,null,null,null,null,null] },
        { rank: 193, name: 'SM Bacolod', ratio: 0, m: [null,0,0,null,null,null,null,null,null] },
        { rank: 193, name: 'Sto Domingo', ratio: 0, m: [null,null,null,null,null,null,null,null,null] },
    ],
  },
};

function renderTabs() {
  const tabsEl = document.getElementById('tabs');
  if (FILE_GROUPS.length <= 1) {
    tabsEl.hidden = false;
    tabsEl.innerHTML = `<span class="tab active section-label">${FILE_GROUPS[0] ? FILE_GROUPS[0].label : ''}</span>`;
    return;
  }
  tabsEl.hidden = false;
  const labels = [...FILE_GROUPS.map(g => g.label), 'Files'];
  tabsEl.innerHTML = labels.map(label => `
    <button type="button" class="tab${label === activeTab ? ' active' : ''}" data-tab="${label}" role="tab" aria-selected="${label === activeTab}">${label}</button>
  `).join('');

  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeTab = btn.dataset.tab;
      renderTabs();
      renderGrid();
      updateChartVisibility();
    });
  });
}

function updateChartVisibility() {
  const chartCard = document.getElementById('chartCard');
  chartCard.hidden = activeTab !== OSAT_CHART_CATEGORY;

  const afccCard = document.getElementById('afccChartCard');
  afccCard.hidden = activeTab !== AFCC_CATEGORY;

  const learnerCard = document.getElementById('learnerChartCard');
  learnerCard.hidden = activeTab !== LEARNER_CATEGORY;

  const npsCard = document.getElementById('npsChartCard');
  npsCard.hidden = activeTab !== NPS_CATEGORY;

  const clubCard = document.getElementById('clubAnalyticsCard');
  clubCard.hidden = activeTab !== CLUB_ANALYTICS_CATEGORY;
}

function renderClubAnalyticsPicker() {
  const select = document.getElementById('clubMarketSelect');
  select.innerHTML = CLUB_ANALYTICS_MARKETS.map(m => `
    <option value="${m.code}"${m.code === activeClubMarket ? ' selected' : ''}>${m.code} — ${m.name}</option>
  `).join('');

  const updateLink = () => {
    const market = CLUB_ANALYTICS_MARKETS.find(m => m.code === activeClubMarket);
    const link = document.getElementById('clubMarketLink');
    link.href = market.url;
    link.textContent = `Open Club Analytics — ${market.code}`;
  };
  updateLink();
  renderClubCharts();

  select.addEventListener('change', () => {
    activeClubMarket = select.value;
    updateLink();
    renderClubCharts();
  });
}

function renderClubCharts() {
  const data = CLUB_DATA[activeClubMarket];
  const wrap = document.getElementById('clubChartsWrap');
  const noData = document.getElementById('clubNoDataNote');

  if (!data) {
    wrap.hidden = true;
    noData.hidden = false;
    return;
  }
  wrap.hidden = false;
  noData.hidden = true;

  document.getElementById('clubMembersMarketLabel').textContent = activeClubMarket;
  drawClubTotalMembers(data);
  drawClubJoiners(data);
  drawClubActive(data);
  drawClubLeadRank(data);
}

function drawClubTotalMembers(data) {
  const W = 640, H = 220, M = { top: 20, right: 16, bottom: 26, left: 50 };
  const innerW = W - M.left - M.right, innerH = H - M.top - M.bottom;
  const min = Math.min(...data.totalMembers);
  const max = Math.max(...data.totalMembers);
  const pad = (max - min) * 0.15 || max * 0.05;
  const yMin = Math.max(0, min - pad);
  const yMax = max + pad;

  const x = d3.scalePoint().domain(CLUB_MONTHS).range([0, innerW]).padding(0.5);
  const y = d3.scaleLinear().domain([yMin, yMax]).range([innerH, 0]);

  const line = d3.line().x((d, i) => x(CLUB_MONTHS[i])).y(d => y(d));

  const ticks = y.ticks(5);
  const gridLines = ticks.map(v => `
    <line x1="0" y1="${y(v)}" x2="${innerW}" y2="${y(v)}" stroke="var(--border)" stroke-width="1" />
    <text class="chart-axis-label" x="-8" y="${y(v) + 4}" font-size="10" text-anchor="end">${d3.format(',')(Math.round(v))}</text>
  `).join('');

  const monthLabels = CLUB_MONTHS.map(m => `
    <text class="chart-axis-label" x="${x(m)}" y="${innerH + 18}" font-size="9.5" text-anchor="middle">${m.slice(0, 3).toUpperCase()}</text>
  `).join('');

  const points = data.totalMembers.map((v, i) => `
    <circle cx="${x(CLUB_MONTHS[i])}" cy="${y(v)}" r="3" fill="var(--purple)" />
  `).join('');

  document.getElementById('clubTotalMembersChart').innerHTML = `
    <svg viewBox="0 0 ${W} ${H}">
      <g transform="translate(${M.left},${M.top})">
        ${gridLines}
        <path d="${line(data.totalMembers)}" fill="none" stroke="var(--purple)" stroke-width="2.5" />
        ${points}
        ${monthLabels}
      </g>
    </svg>
  `;

  const first = data.totalMembers[0];
  const last = data.totalMembers[data.totalMembers.length - 1];
  const growth = (((last - first) / first) * 100).toFixed(1);
  document.getElementById('clubTotalMembersNote').textContent =
    `Total members grew from ${first.toLocaleString()} in January to ${last.toLocaleString()} in September — up ${growth}%.`;
}

function drawClubJoiners(data) {
  const W = 640, H = 220, M = { top: 20, right: 16, bottom: 26, left: 40 };
  const innerW = W - M.left - M.right, innerH = H - M.top - M.bottom;
  const max = Math.max(...data.joiners, ...data.cancelled);

  const x0 = d3.scaleBand().domain(CLUB_MONTHS).range([0, innerW]).paddingInner(0.35).paddingOuter(0.1);
  const x1 = d3.scaleBand().domain(['joiners', 'cancelled']).range([0, x0.bandwidth()]).padding(0.1);
  const y = d3.scaleLinear().domain([0, max * 1.1]).range([innerH, 0]);

  const ticks = y.ticks(5);
  const gridLines = ticks.map(v => `
    <line x1="0" y1="${y(v)}" x2="${innerW}" y2="${y(v)}" stroke="var(--border)" stroke-width="1" />
    <text class="chart-axis-label" x="-8" y="${y(v) + 4}" font-size="10" text-anchor="end">${d3.format(',')(Math.round(v))}</text>
  `).join('');

  const monthLabels = CLUB_MONTHS.map(m => `
    <text class="chart-axis-label" x="${x0(m) + x0.bandwidth() / 2}" y="${innerH + 18}" font-size="9.5" text-anchor="middle">${m.slice(0, 3).toUpperCase()}</text>
  `).join('');

  const bars = CLUB_MONTHS.map((m, i) => `
    <rect x="${x0(m) + x1('joiners')}" y="${y(data.joiners[i])}" width="${x1.bandwidth()}" height="${innerH - y(data.joiners[i])}" fill="var(--purple)" rx="1.5" />
    <rect x="${x0(m) + x1('cancelled')}" y="${y(data.cancelled[i])}" width="${x1.bandwidth()}" height="${innerH - y(data.cancelled[i])}" fill="var(--silver)" rx="1.5" />
  `).join('');

  document.getElementById('clubJoinersChart').innerHTML = `
    <svg viewBox="0 0 ${W} ${H}">
      <g transform="translate(${M.left},${M.top})">
        ${gridLines}
        ${bars}
        ${monthLabels}
      </g>
    </svg>
  `;

  document.getElementById('clubJoinersLegend').innerHTML = `
    <span class="chart-legend-item"><span class="chart-legend-swatch" style="background:var(--purple)"></span>Joiners</span>
    <span class="chart-legend-item"><span class="chart-legend-swatch" style="background:var(--silver)"></span>Cancelled</span>
  `;
}

function drawClubActive(data) {
  const W = 640, H = 220, M = { top: 20, right: 16, bottom: 26, left: 50 };
  const innerW = W - M.left - M.right, innerH = H - M.top - M.bottom;
  const min = Math.min(...data.active);
  const max = Math.max(...data.active);
  const pad = (max - min) * 0.15 || max * 0.05;
  const yMin = Math.max(0, min - pad);
  const yMax = max + pad;

  const x = d3.scalePoint().domain(CLUB_MONTHS).range([0, innerW]).padding(0.5);
  const y = d3.scaleLinear().domain([yMin, yMax]).range([innerH, 0]);

  const line = d3.line().x((d, i) => x(CLUB_MONTHS[i])).y(d => y(d));

  const ticks = y.ticks(5);
  const gridLines = ticks.map(v => `
    <line x1="0" y1="${y(v)}" x2="${innerW}" y2="${y(v)}" stroke="var(--border)" stroke-width="1" />
    <text class="chart-axis-label" x="-8" y="${y(v) + 4}" font-size="10" text-anchor="end">${d3.format(',')(Math.round(v))}</text>
  `).join('');

  const monthLabels = CLUB_MONTHS.map(m => `
    <text class="chart-axis-label" x="${x(m)}" y="${innerH + 18}" font-size="9.5" text-anchor="middle">${m.slice(0, 3).toUpperCase()}</text>
  `).join('');

  const points = data.active.map((v, i) => `
    <circle cx="${x(CLUB_MONTHS[i])}" cy="${y(v)}" r="3" fill="var(--purple-light)" />
  `).join('');

  document.getElementById('clubActiveChart').innerHTML = `
    <svg viewBox="0 0 ${W} ${H}">
      <g transform="translate(${M.left},${M.top})">
        ${gridLines}
        <path d="${line(data.active)}" fill="none" stroke="var(--purple-light)" stroke-width="2.5" />
        ${points}
        ${monthLabels}
      </g>
    </svg>
  `;

  const first = data.active[0];
  const last = data.active[data.active.length - 1];
  document.getElementById('clubActiveNote').textContent =
    `Active members rose from ${first.toLocaleString()} in January to ${last.toLocaleString()} in September.`;
}

let clubLeadRankLimit = '10';
let clubLeadRankMonth = 'overall';
const CLUB_LEAD_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'];

function drawClubLeadRank(data) {
  const section = document.getElementById('clubLeadRankSection');
  if (!data.leadToSalesRank) {
    section.hidden = true;
    return;
  }
  section.hidden = false;

  let allRows;
  let periodLabel;
  if (clubLeadRankMonth === 'overall') {
    allRows = data.leadToSalesRank.map(r => ({ name: r.name, ratio: r.ratio }));
    periodLabel = 'Jan–Sep';
  } else {
    const mi = Number(clubLeadRankMonth);
    allRows = data.leadToSalesRank
      .filter(r => r.m[mi] != null)
      .map(r => ({ name: r.name, ratio: r.m[mi] }));
    periodLabel = CLUB_LEAD_MONTHS[mi];
  }
  allRows.sort((a, b) => b.ratio - a.ratio);
  allRows = allRows.map((r, i) => ({ ...r, rank: i + 1 }));

  const rows = clubLeadRankLimit === 'all' ? allRows : allRows.slice(0, Number(clubLeadRankLimit));
  const max = Math.max(...allRows.map(r => r.ratio), 0.0001);

  document.getElementById('clubLeadRankChart').innerHTML = rows.map(r => `
    <div class="bar-row">
      <span class="bar-label bar-label-wide">#${r.rank} ${r.name}</span>
      <span class="bar-track"><span class="bar-fill" style="width:${Math.max(0, Math.min(100, (r.ratio / max) * 100))}%"></span></span>
      <span class="bar-value">${(r.ratio * 100).toFixed(1)}%</span>
    </div>
  `).join('');

  const top = allRows[0];
  document.getElementById('clubLeadRankNote').textContent =
    `${top.name} led all ${allRows.length} ranked PH clubs in ${periodLabel} with a ${(top.ratio * 100).toFixed(1)}% lead-to-sales ratio. Showing ${rows.length} of ${allRows.length}.`;

  const limitSelect = document.getElementById('clubLeadRankLimit');
  if (!limitSelect.dataset.bound) {
    limitSelect.dataset.bound = 'true';
    limitSelect.value = clubLeadRankLimit;
    limitSelect.addEventListener('change', () => {
      clubLeadRankLimit = limitSelect.value;
      drawClubLeadRank(CLUB_DATA[activeClubMarket]);
    });
  }

  const monthSelect = document.getElementById('clubLeadRankMonth');
  if (!monthSelect.dataset.bound) {
    monthSelect.dataset.bound = 'true';
    monthSelect.value = clubLeadRankMonth;
    monthSelect.addEventListener('change', () => {
      clubLeadRankMonth = monthSelect.value;
      drawClubLeadRank(CLUB_DATA[activeClubMarket]);
    });
  }
}

function renderMonthPicker() {
  document.getElementById('monthPicker').innerHTML = MONTHS.map(m => `
    <button type="button" class="month-btn${m === activeMonth ? ' active' : ''}" data-month="${m}">${m}</button>
  `).join('');

  document.querySelectorAll('#monthPicker .month-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeMonth = btn.dataset.month;
      renderMonthPicker();
      renderChart();
    });
  });
}

function renderChart() {
  const rows = MONTHLY.filter(r => r.month === activeMonth).sort((a, b) => b.osat - a.osat);
  const max = 70;

  document.getElementById('chartBox').innerHTML = rows.map(r => `
    <div class="bar-row">
      <span class="bar-label">${r.market}</span>
      <span class="bar-track"><span class="bar-fill" style="width:${Math.max(0, Math.min(100, (r.osat / max) * 100))}%"></span></span>
      <span class="bar-value">${r.osat}</span>
    </div>
  `).join('');

  const top = rows[0];
  const bottom = rows[rows.length - 1];
  document.getElementById('chartNote').textContent = top
    ? `${top.market} led in ${MONTH_NAMES[activeMonth]} 2026 at ${top.osat}, ${bottom.market} trailed at ${bottom.osat}.`
    : 'No data for this month yet.';
}

function renderMarketPicker() {
  document.getElementById('marketPicker').innerHTML = MARKETS.map(m => `
    <button type="button" class="month-btn${m === activeMarket ? ' active' : ''}" data-market="${m}">${m}</button>
  `).join('');

  document.querySelectorAll('#marketPicker .month-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeMarket = btn.dataset.market;
      renderMarketPicker();
      drawTrendChart();
      drawSubmetricChart();
    });
  });
}

function drawTrendChart() {
  document.getElementById('trendMarketLabel').textContent = activeMarket;
  document.getElementById('subMarketLabel').textContent = activeMarket;

  const rows = ALL_MONTHS_12.map(m => MONTHLY.find(r => r.market === activeMarket && r.month === m));
  const W = 640, H = 220, M = { top: 20, right: 16, bottom: 26, left: 30 };
  const innerW = W - M.left - M.right, innerH = H - M.top - M.bottom;
  const max = 70;

  const x = d3.scalePoint().domain(ALL_MONTHS_12).range([0, innerW]).padding(0.5);
  const y = d3.scaleLinear().domain([0, max]).range([innerH, 0]);

  const line = d3.line()
    .defined(d => d && d.osat != null)
    .x(d => x(d.month))
    .y(d => y(d.osat));

  const gridLines = d3.range(0, max + 1, 10).map(v => `
    <line x1="0" y1="${y(v)}" x2="${innerW}" y2="${y(v)}" stroke="var(--border)" stroke-width="1" />
    <text class="chart-axis-label" x="-8" y="${y(v) + 4}" font-size="10.5" text-anchor="end">${v}</text>
  `).join('');

  const monthLabels = ALL_MONTHS_12.map(m => `
    <text class="chart-axis-label" x="${x(m)}" y="${innerH + 18}" font-size="10.5" text-anchor="middle">${m.toUpperCase()}</text>
  `).join('');

  const points = rows.filter(d => d && d.osat != null).map(d => `
    <circle cx="${x(d.month)}" cy="${y(d.osat)}" r="3.2" fill="var(--purple)" />
    <text class="chart-value-label" x="${x(d.month)}" y="${y(d.osat) - 10}" font-size="11" text-anchor="middle">${d.osat}</text>
  `).join('');

  const pathD = line(rows) || '';

  document.getElementById('trendChart').innerHTML = `
    <svg viewBox="0 0 ${W} ${H}">
      <g transform="translate(${M.left},${M.top})">
        ${gridLines}
        <path d="${pathD}" fill="none" stroke="var(--purple)" stroke-width="2.5" />
        ${points}
        ${monthLabels}
      </g>
    </svg>
  `;
}

function drawSubmetricChart() {
  const rows = ALL_MONTHS_12.map(m => MONTHLY.find(r => r.market === activeMarket && r.month === m));
  const W = 640, H = 240, M = { top: 20, right: 16, bottom: 26, left: 30 };
  const innerW = W - M.left - M.right, innerH = H - M.top - M.bottom;
  const max = 70;

  const x0 = d3.scaleBand().domain(ALL_MONTHS_12).range([0, innerW]).paddingInner(0.3).paddingOuter(0.15);
  const x1 = d3.scaleBand().domain(SUBMETRICS.map(s => s.key)).range([0, x0.bandwidth()]).padding(0.08);
  const y = d3.scaleLinear().domain([0, max]).range([innerH, 0]);

  const gridLines = d3.range(0, max + 1, 10).map(v => `
    <line x1="0" y1="${y(v)}" x2="${innerW}" y2="${y(v)}" stroke="var(--border)" stroke-width="1" />
    <text class="chart-axis-label" x="-8" y="${y(v) + 4}" font-size="10.5" text-anchor="end">${v}</text>
  `).join('');

  const monthLabels = ALL_MONTHS_12.map(m => `
    <text class="chart-axis-label" x="${x0(m) + x0.bandwidth() / 2}" y="${innerH + 18}" font-size="10.5" text-anchor="middle">${m.toUpperCase()}</text>
  `).join('');

  const bars = rows.map((d, i) => {
    if (!d) return '';
    const month = ALL_MONTHS_12[i];
    return SUBMETRICS.map(s => {
      const v = d[s.key];
      if (v == null) return '';
      const bx = x0(month) + x1(s.key);
      const bh = Math.max(0, innerH - y(Math.max(0, v)));
      const by = y(Math.max(0, v));
      return `<rect x="${bx}" y="${by}" width="${x1.bandwidth()}" height="${bh}" fill="${s.color}" rx="1.5" />`;
    }).join('');
  }).join('');

  document.getElementById('submetricChart').innerHTML = `
    <svg viewBox="0 0 ${W} ${H}">
      <g transform="translate(${M.left},${M.top})">
        ${gridLines}
        ${bars}
        ${monthLabels}
      </g>
    </svg>
  `;

  document.getElementById('submetricLegend').innerHTML = SUBMETRICS.map(s => `
    <span class="chart-legend-item"><span class="chart-legend-swatch" style="background:${s.color}"></span>${s.label}</span>
  `).join('');
}

function drawAfccOverview() {
  const rows = [...AFCC_BATCHES].sort((a, b) => b.overall - a.overall);
  const min = Math.floor(Math.min(...AFCC_BATCHES.map(r => r.overall)));
  const max = 10;

  document.getElementById('afccOverviewChart').innerHTML = rows.map(r => `
    <div class="bar-row">
      <span class="bar-label bar-label-wide">${r.code} &middot; ${r.month} ${r.batch}</span>
      <span class="bar-track"><span class="bar-fill" style="width:${Math.max(0, Math.min(100, ((r.overall - min) / (max - min)) * 100))}%"></span></span>
      <span class="bar-value">${r.overall.toFixed(1)}</span>
    </div>
  `).join('');

  const top = rows[0];
  const bottom = rows[rows.length - 1];
  document.getElementById('afccNote').textContent =
    `${top.code} ${top.month} ${top.batch} scored highest at ${top.overall.toFixed(1)}, ${bottom.code} ${bottom.month} ${bottom.batch} scored lowest at ${bottom.overall.toFixed(1)} (out of 10).`;
}

function drawAfccSubmetrics() {
  const labels = AFCC_BATCHES.map(r => `${r.code} ${r.batch.replace('Batch ', 'B')}`);
  const W = 640, H = 240, M = { top: 20, right: 16, bottom: 26, left: 30 };
  const innerW = W - M.left - M.right, innerH = H - M.top - M.bottom;
  const min = Math.floor(Math.min(...AFCC_BATCHES.flatMap(r => AFCC_SUBMETRICS.map(s => r[s.key]))));
  const max = 10;

  const x0 = d3.scaleBand().domain(labels).range([0, innerW]).paddingInner(0.3).paddingOuter(0.15);
  const x1 = d3.scaleBand().domain(AFCC_SUBMETRICS.map(s => s.key)).range([0, x0.bandwidth()]).padding(0.08);
  const y = d3.scaleLinear().domain([min, max]).range([innerH, 0]);

  const gridLines = d3.range(min, max + 1, 1).map(v => `
    <line x1="0" y1="${y(v)}" x2="${innerW}" y2="${y(v)}" stroke="var(--border)" stroke-width="1" />
    <text class="chart-axis-label" x="-8" y="${y(v) + 4}" font-size="10" text-anchor="end">${v}</text>
  `).join('');

  const labelEls = labels.map(l => `
    <text class="chart-axis-label" x="${x0(l) + x0.bandwidth() / 2}" y="${innerH + 18}" font-size="9" text-anchor="middle">${l}</text>
  `).join('');

  const bars = AFCC_BATCHES.map((r, i) => {
    const label = labels[i];
    return AFCC_SUBMETRICS.map(s => {
      const v = r[s.key];
      const bx = x0(label) + x1(s.key);
      const bh = Math.max(0, innerH - y(v));
      const by = y(v);
      return `<rect x="${bx}" y="${by}" width="${x1.bandwidth()}" height="${bh}" fill="${s.color}" rx="1.5" />`;
    }).join('');
  }).join('');

  document.getElementById('afccSubmetricChart').innerHTML = `
    <svg viewBox="0 0 ${W} ${H}">
      <g transform="translate(${M.left},${M.top})">
        ${gridLines}
        ${bars}
        ${labelEls}
      </g>
    </svg>
  `;

  document.getElementById('afccLegend').innerHTML = AFCC_SUBMETRICS.map(s => `
    <span class="chart-legend-item"><span class="chart-legend-swatch" style="background:${s.color}"></span>${s.label}</span>
  `).join('');
}

function drawLearnerMonthChart() {
  const max = Math.max(...LEARNER_MONTHS.map(r => r.completed));

  document.getElementById('learnerMonthChart').innerHTML = LEARNER_MONTHS.map(r => `
    <div class="bar-row">
      <span class="bar-label bar-label-wide">${r.month}</span>
      <span class="bar-track"><span class="bar-fill" style="width:${Math.max(0, Math.min(100, (r.completed / max) * 100))}%"></span></span>
      <span class="bar-value">${r.completed.toLocaleString()}</span>
    </div>
  `).join('');

  const first = LEARNER_MONTHS[0];
  const last = LEARNER_MONTHS[LEARNER_MONTHS.length - 1];
  document.getElementById('learnerMonthNote').textContent =
    `Completed courses rose from ${first.completed.toLocaleString()} in ${first.month} to ${last.completed.toLocaleString()} in ${last.month}, across ${last.learners.toLocaleString()} registered learners.`;
}

function drawLearnerDeptChart() {
  const rows = [...LEARNER_DEPTS].sort((a, b) => b.total - a.total);
  const max = Math.max(...rows.map(r => r.total), 1);

  document.getElementById('learnerDeptChart').innerHTML = rows.map(r => `
    <div class="bar-row">
      <span class="bar-label bar-label-wide">${r.dept}</span>
      <span class="bar-track"><span class="bar-fill" style="width:${Math.max(0, Math.min(100, (r.total / max) * 100))}%"></span></span>
      <span class="bar-value">${r.total.toLocaleString()}</span>
    </div>
  `).join('');

  const top = rows[0];
  document.getElementById('learnerDeptNote').textContent =
    `${top.dept} leads with ${top.total.toLocaleString()} completed courses year-to-date, across all 8 markets.`;
}

function drawLearnerTopDeptChart() {
  const max = Math.max(...LEARNER_MONTHS.map(r => r.topDeptPct));

  document.getElementById('learnerTopDeptChart').innerHTML = LEARNER_MONTHS.map(r => `
    <div class="bar-row">
      <span class="bar-label bar-label-wide">${r.month}</span>
      <span class="bar-track"><span class="bar-fill" style="width:${Math.max(0, Math.min(100, (r.topDeptPct / max) * 100))}%"></span></span>
      <span class="bar-value">${Math.round(r.topDeptPct * 100)}%</span>
    </div>
  `).join('');

  document.getElementById('learnerTopDeptNote').textContent =
    `${LEARNER_TOP_DEPT} was the top department every month, completing 51%–58% of that month's total.`;
}

function drawLearnerAvgChart() {
  const max = Math.max(...LEARNER_MONTHS.map(r => r.avgPerLearner));

  document.getElementById('learnerAvgChart').innerHTML = LEARNER_MONTHS.map(r => `
    <div class="bar-row">
      <span class="bar-label bar-label-wide">${r.month}</span>
      <span class="bar-track"><span class="bar-fill" style="width:${Math.max(0, Math.min(100, (r.avgPerLearner / max) * 100))}%"></span></span>
      <span class="bar-value">${r.avgPerLearner.toFixed(2)}</span>
    </div>
  `).join('');

  const avgAll = (LEARNER_MONTHS.reduce((s, r) => s + r.avgPerLearner, 0) / LEARNER_MONTHS.length).toFixed(2);
  document.getElementById('learnerAvgNote').textContent =
    `Averaged ${avgAll} completed courses per learner per month across Jan–Sep.`;
}

const NPS_DOMAIN = [-40, 100];

function fmtNps(v) {
  const r = Math.round(v * 10) / 10;
  return r > 0 ? `+${r}` : `${r}`;
}

function renderQuarterPicker() {
  document.getElementById('quarterPicker').innerHTML = NPS_QUARTERS.map(q => `
    <button type="button" class="month-btn${q === activeQuarter ? ' active' : ''}" data-quarter="${q}">${q}</button>
  `).join('');

  document.querySelectorAll('#quarterPicker .month-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeQuarter = btn.dataset.quarter;
      renderQuarterPicker();
      drawNpsOverview();
    });
  });
}

function drawNpsOverview() {
  const rows = NPS_DATA.filter(r => r.quarter === activeQuarter).sort((a, b) => b.average - a.average);
  const [min, max] = NPS_DOMAIN;
  const range = max - min;
  const zeroPct = ((0 - min) / range) * 100;

  document.getElementById('npsOverviewChart').innerHTML = rows.map(r => {
    const valPct = ((r.average - min) / range) * 100;
    const isPos = r.average >= 0;
    const left = isPos ? zeroPct : valPct;
    const width = Math.abs(valPct - zeroPct);
    return `
      <div class="bar-row">
        <span class="bar-label bar-label-wide">${r.market}</span>
        <span class="bar-track-diverging">
          <span class="bar-zero-line" style="left:${zeroPct}%"></span>
          <span class="bar-fill-diverging ${isPos ? 'is-positive' : 'is-negative'}" style="left:${left}%; width:${width}%"></span>
        </span>
        <span class="bar-value">${fmtNps(r.average)}</span>
      </div>
    `;
  }).join('');

  const top = rows[0];
  const bottom = rows[rows.length - 1];
  document.getElementById('npsOverviewNote').textContent =
    `${top.market} led ${activeQuarter} at ${fmtNps(top.average)}, ${bottom.market} trailed at ${fmtNps(bottom.average)}.`;
}

function renderNpsMarketPicker() {
  document.getElementById('npsMarketPicker').innerHTML = NPS_MARKETS.map(m => `
    <button type="button" class="month-btn${m === activeNpsMarket ? ' active' : ''}" data-market="${m}">${m}</button>
  `).join('');

  document.querySelectorAll('#npsMarketPicker .month-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeNpsMarket = btn.dataset.market;
      renderNpsMarketPicker();
      drawNpsTrend();
      drawNpsDept();
    });
  });
}

function drawNpsTrend() {
  document.getElementById('npsTrendMarketLabel').textContent = activeNpsMarket;
  document.getElementById('npsDeptMarketLabel').textContent = activeNpsMarket;

  const rows = NPS_QUARTERS.map(q => NPS_DATA.find(r => r.market === activeNpsMarket && r.quarter === q));
  const W = 640, H = 220, M = { top: 20, right: 16, bottom: 26, left: 34 };
  const innerW = W - M.left - M.right, innerH = H - M.top - M.bottom;
  const [min, max] = NPS_DOMAIN;

  const x = d3.scalePoint().domain(NPS_QUARTERS).range([0, innerW]).padding(0.5);
  const y = d3.scaleLinear().domain([min, max]).range([innerH, 0]);

  const line = d3.line()
    .defined(d => d && d.average != null)
    .x(d => x(d.quarter))
    .y(d => y(d.average));

  const gridLines = d3.range(min, max + 1, 20).map(v => `
    <line x1="0" y1="${y(v)}" x2="${innerW}" y2="${y(v)}" stroke="${v === 0 ? 'var(--muted)' : 'var(--border)'}" stroke-width="1" />
    <text class="chart-axis-label" x="-8" y="${y(v) + 4}" font-size="10.5" text-anchor="end">${v}</text>
  `).join('');

  const quarterLabels = NPS_QUARTERS.map(q => `
    <text class="chart-axis-label" x="${x(q)}" y="${innerH + 18}" font-size="10.5" text-anchor="middle">${q}</text>
  `).join('');

  const points = rows.filter(d => d && d.average != null).map(d => `
    <circle cx="${x(d.quarter)}" cy="${y(d.average)}" r="3.2" fill="var(--purple)" />
    <text class="chart-value-label" x="${x(d.quarter)}" y="${y(d.average) - 10}" font-size="11" text-anchor="middle">${fmtNps(d.average)}</text>
  `).join('');

  const pathD = line(rows) || '';

  document.getElementById('npsTrendChart').innerHTML = `
    <svg viewBox="0 0 ${W} ${H}">
      <g transform="translate(${M.left},${M.top})">
        ${gridLines}
        <path d="${pathD}" fill="none" stroke="var(--purple)" stroke-width="2.5" />
        ${points}
        ${quarterLabels}
      </g>
    </svg>
  `;
}

function drawNpsDept() {
  const rows = NPS_QUARTERS.map(q => NPS_DATA.find(r => r.market === activeNpsMarket && r.quarter === q));
  const W = 640, H = 240, M = { top: 20, right: 16, bottom: 26, left: 34 };
  const innerW = W - M.left - M.right, innerH = H - M.top - M.bottom;
  const [min, max] = NPS_DOMAIN;

  const x0 = d3.scaleBand().domain(NPS_QUARTERS).range([0, innerW]).paddingInner(0.3).paddingOuter(0.15);
  const x1 = d3.scaleBand().domain(NPS_SUBMETRICS.map(s => s.key)).range([0, x0.bandwidth()]).padding(0.08);
  const y = d3.scaleLinear().domain([min, max]).range([innerH, 0]);

  const gridLines = d3.range(min, max + 1, 20).map(v => `
    <line x1="0" y1="${y(v)}" x2="${innerW}" y2="${y(v)}" stroke="${v === 0 ? 'var(--muted)' : 'var(--border)'}" stroke-width="1" />
    <text class="chart-axis-label" x="-8" y="${y(v) + 4}" font-size="10.5" text-anchor="end">${v}</text>
  `).join('');

  const quarterLabels = NPS_QUARTERS.map(q => `
    <text class="chart-axis-label" x="${x0(q) + x0.bandwidth() / 2}" y="${innerH + 18}" font-size="10.5" text-anchor="middle">${q}</text>
  `).join('');

  const bars = rows.map((d, i) => {
    if (!d) return '';
    const q = NPS_QUARTERS[i];
    return NPS_SUBMETRICS.map(s => {
      const v = d[s.key];
      if (v == null) return '';
      const bx = x0(q) + x1(s.key);
      const by = Math.min(y(0), y(v));
      const bh = Math.abs(y(v) - y(0));
      return `<rect x="${bx}" y="${by}" width="${x1.bandwidth()}" height="${bh}" fill="${s.color}" fill-opacity="${s.opacity}" rx="1.5" />`;
    }).join('');
  }).join('');

  document.getElementById('npsDeptChart').innerHTML = `
    <svg viewBox="0 0 ${W} ${H}">
      <g transform="translate(${M.left},${M.top})">
        ${gridLines}
        ${bars}
        ${quarterLabels}
      </g>
    </svg>
  `;

  document.getElementById('npsDeptLegend').innerHTML = NPS_SUBMETRICS.map(s => `
    <span class="chart-legend-item"><span class="chart-legend-swatch" style="background:${s.color}; opacity:${s.opacity}"></span>${s.label}</span>
  `).join('');
}

function renderGrid() {
  const mount = document.getElementById('igGrid');

  if (activeTab !== 'Files') {
    mount.hidden = true;
    mount.innerHTML = '';
    return;
  }
  mount.hidden = false;

  const files = ALL_FILES;

  if (!files.length) {
    mount.innerHTML = '<p class="ig-empty">No files yet.</p>';
    return;
  }

  mount.innerHTML = files.map(f => `
    <a class="ig-tile" href="${f.url}" title="${f.name}" target="_blank" rel="noopener">
      <span class="ig-tile-inner">
        <span class="ig-icon">${ICONS[f.type] || ICONS.link}</span>
        <span class="ig-name">${f.name}</span>
        <span class="ig-meta">${f.type.toUpperCase()} &middot; ${f.size}</span>
      </span>
      <span class="ig-overlay">${DOWNLOAD_ICON} ${f.type === 'link' ? 'Open' : 'Download'}</span>
    </a>
  `).join('');
}

renderTabs();
renderGrid();
updateChartVisibility();
renderMonthPicker();
renderChart();
renderMarketPicker();
drawTrendChart();
drawSubmetricChart();
drawAfccOverview();
drawAfccSubmetrics();
drawLearnerMonthChart();
drawLearnerDeptChart();
drawLearnerTopDeptChart();
drawLearnerAvgChart();
renderQuarterPicker();
drawNpsOverview();
renderNpsMarketPicker();
drawNpsTrend();
drawNpsDept();
renderClubAnalyticsPicker();
