// vocab-visuals.js
export const SET_VISUALS = {
  // Unit 1
  u1_verbs_opposites: { emoji: "🔁", icon: "swap", pattern: "diagonal", accent: "mint" },
  u1_feelings_adjectives: { emoji: "🙂", icon: "mood", pattern: "dots", accent: "yellow" },
  u1_time_capsules_extra: { emoji: "📦", icon: "box", pattern: "grid", accent: "blue" },

  // Unit 2
  u2_adjectives_synonyms: { emoji: "✨", icon: "spark", pattern: "stars", accent: "pink" },
  u2_materials: { emoji: "🧱", icon: "layers", pattern: "bricks", accent: "orange" },
  u2_art_artists_extra: { emoji: "🎨", icon: "palette", pattern: "waves", accent: "purple" },

  // Unit 3
  u3_outdoor_leisure_activities: { emoji: "🚴", icon: "activity", pattern: "wind", accent: "mint" },
  u3_outdoor_events: { emoji: "🎪", icon: "ticket", pattern: "confetti", accent: "pink" },
  u3_parks_features_extra: { emoji: "🌳", icon: "tree", pattern: "dots", accent: "green" },

  // Unit 4
  u4_personality_adjectives: { emoji: "🧠", icon: "person", pattern: "grid", accent: "purple" },
  u4_phrasal_verbs: { emoji: "🧩", icon: "puzzle", pattern: "diagonal", accent: "blue" },
  u4_good_deeds_extra: { emoji: "🤝", icon: "heart", pattern: "hearts", accent: "red" },

  // Unit 5
  u5_senses: { emoji: "👂", icon: "senses", pattern: "rings", accent: "yellow" },
  u5_gaming_verbs: { emoji: "🎮", icon: "gamepad", pattern: "pixels", accent: "mint" },
  u5_games_extra: { emoji: "🕹️", icon: "arcade", pattern: "pixels", accent: "blue" },

  // Unit 6
  u6_exercise_body: { emoji: "💪", icon: "fitness", pattern: "stripes", accent: "orange" },
  u6_personal_hygiene: { emoji: "🧼", icon: "hygiene", pattern: "bubbles", accent: "blue" },
  u6_morning_routines_extra: { emoji: "⏰", icon: "clock", pattern: "dots", accent: "yellow" },

  // Unit 7
  u7_learning_noun_pairs: { emoji: "🎓", icon: "cap", pattern: "grid", accent: "purple" },
  u7_verbs: { emoji: "🗣️", icon: "chat", pattern: "waves", accent: "mint" },
  u7_online_learning_extra: { emoji: "💻", icon: "laptop", pattern: "circuits", accent: "blue" },

  // Unit 8
  u8_summer_holidays: { emoji: "🏖️", icon: "sun", pattern: "waves", accent: "yellow" },
  u8_jobs: { emoji: "🧰", icon: "briefcase", pattern: "grid", accent: "orange" },
  u8_school_events_extra: { emoji: "🏫", icon: "calendar", pattern: "confetti", accent: "pink" }
};

const STICKERS = ["⭐", "🔥", "💥", "✅", "🏆", "🌈", "🧠", "🎯", "⚡", "🪄"];

export function getVisualForCard(setId, wordOrPhrase) {
  const base = SET_VISUALS[setId] || { emoji: "📘", icon: "book", pattern: "dots", accent: "blue" };

  // optional “sticker sometimes”
  const sticker = Math.random() < 0.25 ? STICKERS[Math.floor(Math.random() * STICKERS.length)] : "";

  // tiny tweak: if phrase includes "bike", show bike emoji etc.
  let emoji = base.emoji;
  const w = (wordOrPhrase || "").toLowerCase();
  if (w.includes("bike")) emoji = "🚲";
  if (w.includes("dentist")) emoji = "🦷";
  if (w.includes("hairdresser")) emoji = "💇";
  if (w.includes("volunteer")) emoji = "🫶";

  return { ...base, emoji, sticker };
}
