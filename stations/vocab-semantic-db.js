// stations/vocab-semantic-db.js
// Semantic vocabulary categories for icon precision

export const SEMANTIC_CATEGORIES = {

  /* POSITIVE EMOTIONS */

  joy: {
    icon: "smile",
    color: "#22c55e"
  },

  excitement: {
    icon: "sparkles",
    color: "#f59e0b"
  },

  calm: {
    icon: "coffee",
    color: "#10b981"
  },

  /* NEGATIVE EMOTIONS */

  sadness: {
    icon: "frown",
    color: "#64748b"
  },

  fear: {
    icon: "ghost",
    color: "#ef4444"
  },

  anxiety: {
    icon: "alert-circle",
    color: "#f97316"
  },

  /* ENERGY STATES */

  tired: {
    icon: "battery-low",
    color: "#0ea5e9"
  },

  bored: {
    icon: "meh",
    color: "#94a3b8"
  },

  /* ACTION GROUP */

  exchange: {
    icon: "arrow-left-right",
    color: "#0ea5e9"
  }

};


/* WORD → CATEGORY */

export const WORD_TO_CATEGORY = {

  /* feelings */

  happy: "joy",
  excited: "excitement",
  relaxed: "calm",

  unhappy: "sadness",

  scared: "fear",

  worried: "anxiety",

  surprised: "excitement",

  tired: "tired",

  bored: "bored"

};


/* WORD VARIANTS */

export const VARIANTS = {

};
