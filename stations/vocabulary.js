// vocabulary.js
// Synchronize 2 — Units 1–8
// Clean image-based vocabulary system

import { getImageForWord } from "./vocab-image-engine.js";

export const VOCAB_DB = {
  meta: {
    course: "Synchronize 2",
    scope: "Units 1–8 Language Summary vocabulary",
    version: "2.0.0"
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
      unit: 8,
      title: "Unit 8",
      sets: [
        {
          setId: "u8_jobs",
          label: "Jobs",
          type: "words",
          items: [
            "astronaut","baker","builder","cook","dentist",
            "detective","engineer","fashion designer",
            "hairdresser","lawyer","manager","musician",
            "police officer","racing driver",
            "songwriter","video games designer"
          ]
        }
      ]
    }

  ]
};

/* --------------------------
   FLATTEN FUNCTION
-------------------------- */

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
            image: getImageForWord(pair.a, set.setId)
          });

        }
      } else {

        for (const word of set.items) {
          out.push({
            unit: unit.unit,
            unitTitle: unit.title,
            setId: set.setId,
            setLabel: set.label,
            type: set.type,
            front: word,
            back: "",
            image: getImageForWord(word, set.setId)
          });
        }

      }
    }
  }

  return out;
}

/* --------------------------
   HELPERS
-------------------------- */

export function listUnits(db = VOCAB_DB) {
  return db.units.map(u => ({
    unit: u.unit,
    title: u.title
  }));
}

export function listSets(db = VOCAB_DB, unitNumber = null) {
  const units = unitNumber
    ? db.units.filter(u => u.unit === unitNumber)
    : db.units;

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
