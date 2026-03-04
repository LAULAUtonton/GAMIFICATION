// vocabulary.js
// Synchronize 2 — Units 1–8
// Clean, safe, ES-module version

import { getIconName } from "./vocab-icon-engine.js";

/* ===============================
   DATABASE
=================================*/

export const VOCAB_DB = {
  units: [

    /* UNIT 1 */
    {
      unit: 1,
      title: "Then and now",
      sets: [
        {
          setId: "u1_verbs_opposites",
          label: "Verbs and opposites",
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
          setId: "u1_feelings",
          label: "Feelings",
          type: "words",
          items: [
            "happy","unhappy","scared","surprised",
            "tired","bored","excited","worried","relaxed"
          ]
        }
      ]
    },

    /* UNIT 2 */
    {
      unit: 2,
      title: "Materials and Art",
      sets: [
        {
          setId: "u2_materials",
          label: "Materials",
          type: "words",
          items: [
            "cardboard","cotton","glass","leather",
            "metal","paper","plastic","wood","wool"
          ]
        },
        {
          setId: "u2_art",
          label: "Art and artists",
          type: "words",
          items: [
            "dance","design","music","paint",
            "photograph","sculpture","designer",
            "musician","painter","photographer"
          ]
        }
      ]
    },

    /* UNIT 3 */
    {
      unit: 3,
      title: "Outdoor leisure",
      sets: [
        {
          setId: "u3_outdoor_activities",
          label: "Outdoor leisure activities",
          type: "words",
          items: [
            "cycling","jogging","rowing",
            "working out","kite flying","free running"
          ]
        },
        {
          setId: "u3_outdoor_events",
          label: "Outdoor events",
          type: "words",
          items: [
            "festival","market","sports event","concert"
          ]
        }
      ]
    },

    /* UNIT 4 */
    {
      unit: 4,
      title: "People and personality",
      sets: [
        {
          setId: "u4_personality",
          label: "Personality adjectives",
          type: "words",
          items: [
            "patient","lazy","generous","polite",
            "confident","kind","mean","rude"
          ]
        }
      ]
    },

    /* UNIT 5 */
    {
      unit: 5,
      title: "The senses",
      sets: [
        {
          setId: "u5_senses",
          label: "Senses",
          type: "words",
          items: [
            "sight","hearing","smell","taste","touch"
          ]
        }
      ]
    },

    /* UNIT 6 */
    {
      unit: 6,
      title: "Body and fitness",
      sets: [
        {
          setId: "u6_body_fitness",
          label: "Body and fitness",
          type: "words",
          items: [
            "brain","heart","lungs","muscles","bones",
            "injury","stretch","train"
          ]
        }
      ]
    },

    /* UNIT 7 */
    {
      unit: 7,
      title: "Learning",
      sets: [
        {
          setId: "u7_learning",
          label: "Learning",
          type: "pairs",
          items: [
            { a: "achieve", b: "achievement" },
            { a: "decide", b: "decision" },
            { a: "learn", b: "learning" },
            { a: "solve", b: "solution" }
          ]
        }
      ]
    },

    /* UNIT 8 */
    {
      unit: 8,
      title: "Work and school",
      sets: [
        {
          setId: "u8_jobs",
          label: "Jobs",
          type: "words",
          items: [
            "astronaut","builder","dentist","engineer",
            "musician","teacher","lawyer","manager"
          ]
        }
      ]
    }

  ]
};

/* ===============================
   POS GUESSER
=================================*/

function guessPOS(setId) {
  const id = String(setId || "").toLowerCase();

  if (id.includes("verbs")) return "v"; // verb sets
  if (id.includes("feel") || id.includes("personality")) return "adj"; // adjective sets

  // default: nouns
  return "n";
}

/* ===============================
   FLATTEN FUNCTION
=================================*/

export function flattenVocab(db = VOCAB_DB) {
  const out = [];

  for (const unit of db.units) {
    for (const set of unit.sets) {

      if (set.type === "pairs") {
        for (const pair of set.items) {
          out.push({
            unit: unit.unit,
            unitTitle: unit.title,
            setId: set.setId,
            setLabel: set.label,
            type: "pair",
            front: pair.a,
            back: pair.b,
            pos: "v",
            icon: getIconName(pair.a, "v", set.setId)
          });
        }
      }

      if (set.type === "words") {
        const pos = guessPOS(set.setId);

        for (const word of set.items) {
          out.push({
            unit: unit.unit,
            unitTitle: unit.title,
            setId: set.setId,
            setLabel: set.label,
            type: "word",
            front: word,
            back: "",
            pos,
            icon: getIconName(word, pos, set.setId)
          });
        }
      }

    }
  }

  return out;
}

/* ===============================
   HELPERS
=================================*/

export function getCards(db = VOCAB_DB, { unit = null } = {}) {
  let cards = flattenVocab(db);
  if (unit !== null) {
    cards = cards.filter(c => c.unit === unit);
  }
  return cards;
}

export function listUnits(db = VOCAB_DB) {
  return db.units.map(u => ({
    unit: u.unit,
    title: u.title
  }));
}

export function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
