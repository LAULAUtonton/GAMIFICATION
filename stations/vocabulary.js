import { getVisualForCard } from "./vocab-visuals.js";

/* vocabulary.js
   Synchronize 2 — Units 1–8 (Language Summary vocabulary)
*/

export const VOCAB_DB = {
  meta: {
    course: "Synchronize 2",
    scope: "Units 1–8 Language Summary vocabulary",
    version: "1.1.0"
  },

  units: [
    {
      unit: 1,
      title: "Then and now",
      sets: [
        {
          setId: "u1_verbs_opposites",
          label: "Verbs and their opposites",
          type: "pairs",
          items: [
            { a: "agree", b: "disagree" },
            { a: "appear", b: "disappear" },
            { a: "borrow", b: "lend" },
            { a: "buy", b: "sell" },
            { a: "connect", b: "disconnect" },
            { a: "lose", b: "win" },
            { a: "save", b: "spend" },
            { a: "send", b: "receive" }
          ]
        },
        {
          setId: "u1_feelings_adjectives",
          label: "Adjectives for feelings",
          type: "words",
          items: [
            "annoyed","bored","embarrassed","excited","relaxed",
            "scared","surprised","tired","unhappy","worried"
          ]
        }
      ]
    },

    {
      unit: 2,
      title: "Unit 2",
      sets: [
        {
          setId: "u2_adjectives_synonyms",
          label: "Adjectives and synonyms",
          type: "pairs",
          items: [
            { a: "attractive", b: "pretty" },
            { a: "awful", b: "terrible" },
            { a: "bright", b: "colourful" },
            { a: "brilliant", b: "incredible" }
          ]
        },
        {
          setId: "u2_materials",
          label: "Materials",
          type: "words",
          items: ["cardboard","cotton","glass","metal","plastic","wood"]
        }
      ]
    },

    {
      unit: 3,
      title: "Unit 3",
      sets: [
        {
          setId: "u3_outdoor_events",
          label: "Outdoor events",
          type: "words",
          items: [
            "concert",
            "music festival",
            "funfair",
            "outdoor cinema"
          ]
        }
      ]
    },

    {
      unit: 4,
      title: "A helping hand",
      sets: [
        {
          setId: "u4_personality_adjectives",
          label: "Personality adjectives",
          type: "words",
          items: [
            "kind","polite","generous","patient",
            "lazy","mean","rude","shy"
          ]
        }
      ]
    },

    {
      unit: 5,
      title: "Let’s play",
      sets: [
        {
          setId: "u5_senses",
          label: "Senses",
          type: "words",
          items: [
            "sight","smell","taste","touch","hearing"
          ]
        }
      ]
    },

    {
      unit: 6,
      title: "Unit 6",
      sets: [
        {
          setId: "u6_exercise_body",
          label: "Exercise and the body",
          type: "words",
          items: [
            "muscles","heart","lungs","brain","stretch","train"
          ]
        }
      ]
    },

    {
      unit: 7,
      title: "Skills for life",
      sets: [
        {
          setId: "u7_learning_noun_pairs",
          label: "Verb–noun pairs",
          type: "pairs",
          items: [
            { a: "achieve", b: "achievement" },
            { a: "decide", b: "decision" },
            { a: "train", b: "training" },
            { a: "solve", b: "solution" }
          ]
        }
      ]
    },

    {
      unit: 8,
      title: "Unit 8",
      sets: [
        {
          setId: "u8_jobs",
          label: "Jobs",
          type: "words",
          items: [
            "doctor","dentist","engineer",
            "teacher","musician","lawyer"
          ]
        }
      ]
    }
  ]
};


/* ============================= */
/* Flatten DB into card objects  */
/* ============================= */

export function flattenVocab(db = VOCAB_DB) {
  const out = [];

  for (const u of db.units) {
    for (const set of u.sets) {

      if (set.type === "pairs") {
        for (const p of set.items) {
          out.push({
            unit: u.unit,
            unitTitle: u.title,
            setId: set.setId,
            setLabel: set.label,
            type: "pair",
            front: p.a,
            back: p.b,
            visual: getVisualForCard(set.setId, p.a)
          });
        }
      } else {
        for (const item of set.items) {
          out.push({
            unit: u.unit,
            unitTitle: u.title,
            setId: set.setId,
            setLabel: set.label,
            type: set.type,
            front: item,
            back: "",
            visual: getVisualForCard(set.setId, item)
          });
        }
      }

    }
  }

  return out;
}


/* ============================= */
/* Helpers                       */
/* ============================= */

export function listUnits(db = VOCAB_DB) {
  return db.units.map(u => ({ unit: u.unit, title: u.title }));
}

export function listSets(db = VOCAB_DB, unitNumber = null) {
  const units = unitNumber ? db.units.filter(u => u.unit === unitNumber) : db.units;
  const sets = [];

  for (const u of units) {
    for (const s of u.sets) {
      sets.push({
        unit: u.unit,
        setId: s.setId,
        label: s.label,
        type: s.type
      });
    }
  }

  return sets;
}

export function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function getCards(db = VOCAB_DB, { unit = null, setId = null } = {}) {
  let cards = flattenVocab(db);

  if (unit != null) {
    cards = cards.filter(c => c.unit === unit);
  }

  if (setId) {
    cards = cards.filter(c => c.setId === setId);
  }

  return cards;
}
