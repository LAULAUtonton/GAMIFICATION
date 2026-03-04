// stations/vocab-semantic-db.js
// Semantic categories: consistent meaning -> icon + color

export const SEMANTIC_CATEGORIES = {
  // Feelings
  joy:         { icon: "smile",          color: "#22c55e" },
  sadness:     { icon: "frown",          color: "#64748b" },
  fear:        { icon: "alert-triangle", color: "#ef4444" },
  anxiety:     { icon: "badge-alert",    color: "#f97316" },
  surprise:    { icon: "sparkles",       color: "#a855f7" },
  energy_low:  { icon: "battery-low",    color: "#0ea5e9" },
  energy_high: { icon: "star",           color: "#f59e0b" },
  calm:        { icon: "coffee",         color: "#10b981" },

  // Verbs & opposites (optional grouping example)
  exchange:    { icon: "arrow-left-right", color: "#0ea5e9" }
};

// Word -> category (add words here for precision)
export const WORD_TO_CATEGORY = {
  // Feelings (from your screenshot)
  happy: "joy",
  excited: "energy_high",
  relaxed: "calm",

  unhappy: "sadness",

  scared: "fear",

  worried: "anxiety",

  surprised: "surprise",

  tired: "energy_low",
  bored: "energy_low"
};

// Normalize variants (optional)
export const VARIANTS = {
  // example: "sports event": "sports event"
};
