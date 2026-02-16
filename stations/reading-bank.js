/* ================= TEXT BANK ================= */

const TEXT_BANK = [

{
id:"T1",
title:"Too Much Screen Time?",
content:`
Daniel used to spend almost seven hours a day on his phone.
He checked social media before school and watched videos late at night.
His parents were worried because he was always tired.

One weekend, he decided to try a digital detox.
He turned off his phone and spent time outside with his family.
On Sunday, he felt calmer and happier.`
},

{
id:"T2",
title:"A Week in Ireland",
content:`
Laura travelled to Ireland for a school exchange programme.
She stayed with a host family near Dublin.
At first, she felt nervous because she had never travelled alone.

Classes were different from Spain.
Students worked in groups and used laptops in many lessons.

By the end of the week, Laura felt more confident speaking English.`
},

{
id:"T3",
title:"Teenagers Who Care",
content:`
A group of students organised a beach clean-up in Tenerife.
They created posters and invited families to participate.

More than fifty people helped collect plastic bottles and rubbish.
After three hours, the beach looked much cleaner.

They plan to repeat the event every three months.`
},

{
id:"T4",
title:"Is Gaming Always Bad?",
content:`
Carlos enjoys playing video games after finishing his homework.
His parents worry that he spends too much time online.

Some games help develop problem-solving skills,
but experts warn about lack of sleep.

Carlos created a schedule to find balance.`
},

{
id:"T5",
title:"Small Changes, Big Results",
content:`
Sara decided to improve her health.
She stopped drinking fizzy drinks and started walking to school.

At first it was difficult,
but after a few weeks she felt more energetic and happier.

She believes small daily habits can improve life.`
},

{
id:"T6",
title:"Friends from Another Country",
content:`
Miguel met Tom through a language exchange app.
Tom lives in Scotland and wants to learn Spanish.

They practise twice a week and help each other.
Last summer, they finally met in person.

Technology helped create a real friendship.`
},

{
id:"T7",
title:"My First Job",
content:`
Andrea worked at a café during summer.
At first she felt nervous because it was her first job.

She learned to communicate politely with customers.
By the end of summer, she felt more independent and confident.`
},

{
id:"T8",
title:"A Trip to Remember",
content:`
Marcos travelled to Madrid with his family.
When they arrived, one suitcase was missing.

Fortunately, it arrived at the hotel the next day.
He learned that staying calm is important when travelling.`
},

{
id:"T9",
title:"Helping the Community",
content:`
Students in Gran Canaria painted a public sports centre.
More than thirty teenagers worked together.

Although it was hard work, they felt proud of the result.
The project showed that volunteering makes a difference.`
},

{
id:"T10",
title:"Tablets in the Classroom",
content:`
Many schools are introducing tablets instead of traditional textbooks.
Students use them for research and presentations.

Some teachers worry about distractions.
The school created rules to ensure proper use.`
}

];


/* ================= QUESTION BANK ================= */

const READING_BANK = [

/* ---------- TEXT 1 ---------- */

{
textId:"T1",
type:"title",
question:"Choose the best title:",
options:["A Football Match","Too Much Screen Time?","A Summer Camp"],
answer:"Too Much Screen Time?"
},

{
textId:"T1",
type:"scan",
question:"How many hours did Daniel spend on his phone?",
options:["2","6","7"],
answer:"7"
},

{
textId:"T1",
type:"patch",
question:"Daniel felt tired and ______ in class.",
options:["distracted","relaxed","confident"],
answer:"distracted"
},

{
textId:"T1",
type:"wrong",
question:"Which statement is NOT true?",
options:[
"He tried a digital detox.",
"He deleted his phone forever.",
"He spent time outside."
],
answer:"He deleted his phone forever."
},

{
textId:"T1",
type:"inference",
question:"Why did Daniel feel happier?",
options:[
"He reduced screen time",
"He bought a new phone",
"He changed schools"
],
answer:"He reduced screen time"
},

/* ---------- TEXT 2 ---------- */

{
textId:"T2",
type:"title",
question:"Choose the best title:",
options:["A Week in Ireland","Trip to London","A School Exam"],
answer:"A Week in Ireland"
},

{
textId:"T2",
type:"scan",
question:"Where did Laura stay?",
options:["Hotel","Host family","Alone"],
answer:"Host family"
},

{
textId:"T2",
type:"patch",
question:"Laura felt more ______ speaking English.",
options:["confident","angry","tired"],
answer:"confident"
},

{
textId:"T2",
type:"wrong",
question:"Which statement is NOT true?",
options:[
"Students worked in groups.",
"Classes were identical to Spain.",
"She felt nervous at first."
],
answer:"Classes were identical to Spain."
},

{
textId:"T2",
type:"inference",
question:"Why was the exchange useful?",
options:[
"She improved her English",
"She disliked the country",
"She returned early"
],
answer:"She improved her English"
},

/* ---------- TEXT 3 ---------- */

{
textId:"T3",
type:"title",
question:"Choose the best title:",
options:["Beach Holiday","Teenagers Who Care","Plastic Factory"],
answer:"Teenagers Who Care"
},

{
textId:"T3",
type:"scan",
question:"How many people participated?",
options:["10","More than 50","5"],
answer:"More than 50"
},

{
textId:"T3",
type:"patch",
question:"They collected plastic ______.",
options:["bottles","shoes","tables"],
answer:"bottles"
},

{
textId:"T3",
type:"inference",
question:"Why will they repeat the event?",
options:[
"To help the environment",
"To earn money",
"For homework"
],
answer:"To help the environment"
}

];

