export const SEMANTIC_CATEGORIES = {
  joy:         { icon: "smile",          color: "#22c55e" },
  sadness:     { icon: "frown",          color: "#60a5fa" },
  fear:        { icon: "alert-triangle", color: "#ef4444" },
  anxiety:     { icon: "badge-alert",    color: "#f97316" },
  surprise:    { icon: "sparkles",       color: "#a855f7" },
  energy_low:  { icon: "battery-low",    color: "#0ea5e9" },
  energy_high: { icon: "star",           color: "#f59e0b" },
  calm:        { icon: "leaf",           color: "#10b981" },
  anger:       { icon: "flame",          color: "#dc2626" },

  design:      { icon: "pen-tool",       color: "#3b82f6" },
  creator:     { icon: "pencil",         color: "#06b6d4" }
};

export const WORD_TO_CATEGORY = {
  happy: "joy",
  excited: "energy_high",
  relaxed: "calm",
  calm: "calm",

  unhappy: "sadness",
  sad: "sadness",

  scared: "fear",
  afraid: "fear",

  worried: "anxiety",
  nervous: "anxiety",
  anxious: "anxiety",

  surprised: "surprise",
  shocked: "surprise",

  tired: "energy_low",
  bored: "energy_low",

  angry: "anger",

  design: "design",
  designer: "creator"
};

export const VARIANTS = {
  "sports event": "sports event",
  "work out": "working out",
  workout: "working out"
};
