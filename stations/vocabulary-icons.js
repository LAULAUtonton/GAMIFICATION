// vocabulary-icons.js
// Clean high-contrast white icon database

const BASE = `
  fill="white"
  stroke="white"
  stroke-width="3"
  stroke-linecap="round"
  stroke-linejoin="round"
`;

export const VOCAB_ICONS = {

  swap: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <path d="M10 18h34v-8l12 12-12 12v-8H10z"/>
    <path d="M54 46H20v8L8 42l12-12v8h34z"/>
  </svg>`,

  mood: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <circle cx="32" cy="32" r="20"/>
    <circle cx="24" cy="28" r="3"/>
    <circle cx="40" cy="28" r="3"/>
    <path d="M24 40c4 4 12 4 16 0"/>
  </svg>`,

  box: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <path d="M10 24l22-12 22 12-22 12z"/>
    <path d="M10 24v24l22 12V36z"/>
    <path d="M54 24v24L32 60V36z"/>
  </svg>`,

  spark: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <path d="M32 6l6 18 18 6-18 6-6 18-6-18-18-6 18-6z"/>
  </svg>`,

  layers: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <path d="M12 24l20-12 20 12-20 12z"/>
    <path d="M12 36l20 12 20-12"/>
  </svg>`,

  palette: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <circle cx="32" cy="32" r="22"/>
    <circle cx="22" cy="26" r="3"/>
    <circle cx="42" cy="26" r="3"/>
    <circle cx="32" cy="42" r="3"/>
  </svg>`,

  activity: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <path d="M8 36h12l6-14 8 28 6-14h16"/>
  </svg>`,

  ticket: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <rect x="10" y="20" width="44" height="24" rx="4"/>
  </svg>`,

  tree: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <path d="M32 10l16 20H16z"/>
    <rect x="28" y="30" width="8" height="16"/>
  </svg>`,

  person: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <circle cx="32" cy="20" r="8"/>
    <path d="M16 56c0-12 8-18 16-18s16 6 16 18"/>
  </svg>`,

  puzzle: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <rect x="14" y="20" width="36" height="28" rx="6"/>
  </svg>`,

  heart: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <path d="M32 54S10 38 10 24c0-6 4-10 10-10 5 0 9 3 12 8 3-5 7-8 12-8 6 0 10 4 10 10 0 14-22 30-22 30z"/>
  </svg>`,

  senses: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <circle cx="32" cy="32" r="14"/>
  </svg>`,

  gamepad: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <rect x="14" y="28" width="36" height="12" rx="6"/>
  </svg>`,

  fitness: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <rect x="16" y="28" width="8" height="8"/>
    <rect x="40" y="28" width="8" height="8"/>
  </svg>`,

  hygiene: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <rect x="24" y="16" width="16" height="32"/>
  </svg>`,

  cap: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <path d="M8 28l24-12 24 12-24 12z"/>
  </svg>`,

  chat: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <rect x="10" y="14" width="44" height="26" rx="6"/>
  </svg>`,

  laptop: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <rect x="14" y="18" width="36" height="22"/>
    <rect x="8" y="44" width="48" height="6"/>
  </svg>`,

  sun: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <circle cx="32" cy="32" r="10"/>
  </svg>`,

  briefcase: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <rect x="12" y="24" width="40" height="26"/>
  </svg>`,

  calendar: `
  <svg viewBox="0 0 64 64" ${BASE}>
    <rect x="14" y="18" width="36" height="30"/>
  </svg>`
};
