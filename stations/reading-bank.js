/* =========================================================
   THE PIT – READING BANK
   Units 1–4 (ESO 2 aligned – varied cognitive question types)
   ========================================================= */

/* ========================= TEXT BANK ========================= */

const TEXT_BANK = [

/* ================= UNIT 1 ================= */

{
  id: "U1_T1",
  title: "Teenagers in 1900",
  content: `
In 1900, the word “teenager” didn’t exist. Young people were either children or adults. 
Many boys and girls started working at the age of fourteen. They worked in factories, 
on farms or in small family businesses.

Life was hard. Working days were long and the jobs were often dangerous. 
There were few laws to protect young workers. Education was not a priority for many families, 
because they needed money to survive.

However, things began to change in the 1920s and 1930s. More young people stayed in school 
for longer. There were new laws about education and child labour. Teenagers started to 
develop their own music, fashion and identity.

This period marked the birth of teenage culture.
`
},

{
  id: "U1_T2",
  title: "The Rise of Youth Culture",
  content: `
In the early 20th century, young people had very little free time. Most of them 
helped their families or worked long hours. There were no special activities designed 
for teenagers.

By the 1950s, everything had changed. Teenagers had more free time and more money. 
They began to listen to rock and roll, wear different clothes and spend time with friends.

Cinema, radio and later television helped create a global youth culture. 
Young people from different countries started sharing music and trends.

For the first time in history, teenagers became a powerful social group 
with their own voice.
`
},

/* ================= UNIT 2 ================= */

{
  id: "U2_T1",
  title: "The Stormy Afternoon",
  content: `
It was getting dark while we were walking home from school. The sky was turning grey 
and the wind was blowing strongly. We were laughing when the first drops of rain fell.

Suddenly, a loud crash interrupted us. A tree branch fell onto the road. 
Cars were stopping and people were running for shelter.

While we were waiting under a bus stop, we saw a photographer taking pictures. 
She was standing calmly in the rain.

Later, the storm ended as quickly as it had started. 
It became an unforgettable afternoon.
`
},

{
  id: "U2_T2",
  title: "An Unexpected Discovery",
  content: `
While I was cleaning the attic, I found an old wooden box. 
Dust was covering everything around it.

When I opened it, I discovered letters and black-and-white photographs. 
My grandmother had written them during the 1940s.

She described how people were living during difficult times. 
Families were helping each other and sharing what little they had.

Reading those letters made me understand my family’s history better.
`
},

/* ================= UNIT 3 ================= */

{
  id: "U3_T1",
  title: "If We Protect the Park",
  content: `
Our town has a beautiful park near the lake. If people respect the rules, 
the park will remain clean and safe.

Every weekend there are concerts and sports activities. 
If volunteers help, the events will be successful.

However, if visitors leave rubbish behind, the environment will suffer. 
Animals will lose their habitat and the lake will become polluted.

If everyone works together, the park will continue to be 
a place for families and friends.
`
},

{
  id: "U3_T2",
  title: "Planning the School Festival",
  content: `
The school is organising a music festival. If the weather is good, 
the concert will take place outdoors.

Students are preparing decorations and rehearsing performances. 
If more people buy tickets, the school will raise money for charity.

Some teachers are worried about noise levels. 
If the sound is too loud, neighbours will complain.

With good organisation, the festival will become an annual tradition.
`
},

/* ================= UNIT 4 ================= */

{
  id: "U4_T1",
  title: "Summer Plans",
  content: `
This summer, I’m going to volunteer at a community centre. 
We are going to organise sports activities for children.

My best friend is going to travel abroad. She says she will learn 
about new cultures and traditions.

We think it will be an exciting holiday. 
It’s going to be different from previous years.
`
},

{
  id: "U4_T2",
  title: "Life in 2050",
  content: `
In 2050, cities will be greener and more sustainable. 
People will use renewable energy and electric transport.

Schools will probably use virtual classrooms. 
Students won’t carry heavy books anymore.

However, teachers will still guide students. 
Technology will help education, but it won’t replace human interaction.
`
}

];


/* ========================= QUESTION BANK ========================= */

const READING_BANK = [

/* ================= UNIT 1 QUESTIONS ================= */

/* U1_T1 */
{
  textId: "U1_T1",
  type: "main-idea",
  question: "What is the main idea of the text?",
  options: [
    "Teenagers worked hard and teenage culture appeared later",
    "Factories were very modern in 1900",
    "Teenagers had too much free time",
    "Schools were always compulsory"
  ],
  answer: "Teenagers worked hard and teenage culture appeared later"
},
{
  textId: "U1_T1",
  type: "paragraph-title",
  question: "What is the best title for paragraph 3?",
  options: [
    "Change and new opportunities",
    "Dangerous factories",
    "Farm life",
    "Childhood games"
  ],
  answer: "Change and new opportunities"
},
{
  textId: "U1_T1",
  type: "true-false",
  question: "Teenagers in 1900 usually stayed in school until 18.",
  options: ["True", "False"],
  answer: "False"
},
{
  textId: "U1_T1",
  type: "keyword",
  question: "Which word best represents paragraph 2?",
  options: ["Danger", "Celebration", "Technology", "Freedom"],
  answer: "Danger"
},

/* U1_T2 */
{
  textId: "U1_T2",
  type: "summary",
  question: "Which sentence best summarises the text?",
  options: [
    "Teenagers gradually became an important social group",
    "Young people disliked music",
    "Radio destroyed youth culture",
    "Teenagers avoided cinema"
  ],
  answer: "Teenagers gradually became an important social group"
},
{
  textId: "U1_T2",
  type: "detail",
  question: "What helped create global youth culture?",
  options: [
    "Cinema and media",
    "Factories",
    "Farms",
    "Libraries"
  ],
  answer: "Cinema and media"
},
{
  textId: "U1_T2",
  type: "order",
  question: "Which happened first?",
  options: [
    "Teenagers worked long hours",
    "Teenagers listened to rock and roll",
    "Television existed",
    "Youth culture spread globally"
  ],
  answer: "Teenagers worked long hours"
},

/* ================= UNIT 2 QUESTIONS ================= */

{
  textId: "U2_T1",
  type: "sequence",
  question: "What happened after the branch fell?",
  options: [
    "Cars stopped and people ran",
    "The sun appeared",
    "They arrived home",
    "School reopened"
  ],
  answer: "Cars stopped and people ran"
},
{
  textId: "U2_T1",
  type: "inference",
  question: "How did the photographer feel?",
  options: [
    "Calm",
    "Terrified",
    "Angry",
    "Bored"
  ],
  answer: "Calm"
},
{
  textId: "U2_T2",
  type: "main-idea",
  question: "What is the text mainly about?",
  options: [
    "Discovering family history",
    "Cleaning houses",
    "Modern photography",
    "School homework"
  ],
  answer: "Discovering family history"
},
{
  textId: "U2_T2",
  type: "vocabulary",
  question: "What does 'discovered' mean in the text?",
  options: [
    "Found",
    "Destroyed",
    "Lost",
    "Painted"
  ],
  answer: "Found"
},

/* ================= UNIT 3 QUESTIONS ================= */

{
  textId: "U3_T1",
  type: "conditional-logic",
  question: "If visitors leave rubbish, what will happen?",
  options: [
    "The environment will suffer",
    "The lake will grow",
    "Animals will multiply",
    "Nothing will change"
  ],
  answer: "The environment will suffer"
},
{
  textId: "U3_T1",
  type: "best-title",
  question: "What is the best title?",
  options: [
    "Protecting Our Community Spaces",
    "Building Factories",
    "Modern Technology",
    "Travelling Abroad"
  ],
  answer: "Protecting Our Community Spaces"
},
{
  textId: "U3_T2",
  type: "prediction",
  question: "If more people buy tickets, what will happen?",
  options: [
    "The school will raise money",
    "The festival will close",
    "Teachers will cancel it",
    "Students will leave"
  ],
  answer: "The school will raise money"
},

/* ================= UNIT 4 QUESTIONS ================= */

{
  textId: "U4_T1",
  type: "future-form",
  question: "What is the speaker going to do?",
  options: [
    "Volunteer at a community centre",
    "Stay at home",
    "Start university",
    "Move abroad"
  ],
  answer: "Volunteer at a community centre"
},
{
  textId: "U4_T2",
  type: "prediction",
  question: "What will probably change in 2050?",
  options: [
    "Energy use",
    "Human emotions",
    "Gravity",
    "History"
  ],
  answer: "Energy use"
},
{
  textId: "U4_T2",
  type: "inference",
  question: "What does the text suggest about teachers?",
  options: [
    "They will remain important",
    "They will disappear",
    "They will stop teaching",
    "They will be robots"
  ],
  answer: "They will remain important"
}

];
