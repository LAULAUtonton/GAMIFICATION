/* =====================================================
   TEXT BANK
===================================================== */

const TEXT_BANK = [

{
  id: "U1_T1",
  title: "A Night at the Old Factory",
  content: `
Last Friday, my friends and I visited an old factory near our town.
There was a broken gate and there were pieces of metal on the ground.
We felt nervous but curious.

Inside the building, there were large containers and old machines.
Suddenly, we heard a loud noise upstairs.

When we opened the door, we discovered a group of artists preparing an exhibition.
What started as a scary adventure became an unforgettable experience.
`
},

{
  id: "U1_T2",
  title: "The Time Capsule",
  content: `
Last month, students at our school found a small metal box under a tree.
Inside, there were photos, letters and small objects.

We read that in 2004 there were no smartphones in our school.
Students listened to CDs and wrote letters instead of sending messages.

We decided to create our own time capsule for the future.
`
},

{
  id: "U2_T1",
  title: "While the Storm Was Growing",
  content: `
It was getting dark while we were walking home from school.
Suddenly, it started to rain heavily.

We were running when a loud noise interrupted us.
After a few minutes, the storm stopped and we continued home.
`
},

{
  id: "U3_T1",
  title: "If We Work Together",
  content: `
Our town is planning an outdoor festival near the lake.
If the weather is good, many families will attend.

If volunteers help, the event will run smoothly.
If everyone respects the rules, the festival will be a success.
`
}

];


/* =====================================================
   READING QUESTION BANK
===================================================== */

const READING_BANK = [

/* ================= U1_T1 ================= */

{
  textId: "U1_T1",
  type: "detail",
  question: "Where did the friends go?",
  options: [
    "To an old factory",
    "To a museum",
    "To a shopping centre"
  ],
  answer: "To an old factory"
},

{
  textId: "U1_T1",
  type: "gist",
  question: "What is the main idea of the story?",
  options: [
    "They discovered something unexpected",
    "They built a factory",
    "They got lost"
  ],
  answer: "They discovered something unexpected"
},

{
  textId: "U1_T1",
  type: "inference",
  question: "How did they feel at the end?",
  options: [
    "Impressed and relieved",
    "Angry and bored",
    "Sad and tired"
  ],
  answer: "Impressed and relieved"
},

/* ================= U1_T2 ================= */

{
  textId: "U1_T2",
  type: "detail",
  question: "What did the students find?",
  options: [
    "A metal box",
    "A mobile phone",
    "A wallet"
  ],
  answer: "A metal box"
},

{
  textId: "U1_T2",
  type: "sequence",
  question: "What did they decide to do after reading the letters?",
  options: [
    "Create their own time capsule",
    "Throw it away",
    "Sell it"
  ],
  answer: "Create their own time capsule"
},

/* ================= U2_T1 ================= */

{
  textId: "U2_T1",
  type: "detail",
  question: "What interrupted them?",
  options: [
    "A loud noise",
    "A teacher",
    "A car"
  ],
  answer: "A loud noise"
},

{
  textId: "U2_T1",
  type: "gist",
  question: "What is the story mainly about?",
  options: [
    "Experiencing a storm",
    "Going to a party",
    "Building a house"
  ],
  answer: "Experiencing a storm"
},

/* ================= U3_T1 ================= */

{
  textId: "U3_T1",
  type: "detail",
  question: "Where will the festival take place?",
  options: [
    "Near the lake",
    "Inside a school",
    "In a shopping centre"
  ],
  answer: "Near the lake"
},

{
  textId: "U3_T1",
  type: "conditional",
  question: "What will happen if everyone respects the rules?",
  options: [
    "The festival will be a success",
    "The festival will stop",
    "Nothing will happen"
  ],
  answer: "The festival will be a success"
}

];
