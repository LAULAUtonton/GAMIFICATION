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
Laura travelled to Ireland for a school exchange.
She stayed with a host family near Dublin.
At first, she felt nervous.

Classes were different and students worked in groups.
By the end of the week, she felt more confident.`
},

{
id:"T3",
title:"Teenagers Who Care",
content:`
A group of students organised a beach clean-up.
More than fifty people collected plastic bottles.

They plan to repeat the event every three months.`
},

{
id:"T4",
title:"Is Gaming Always Bad?",
content:`
Carlos enjoys playing video games.
Some games develop skills,
but too much gaming can affect sleep.

He created a schedule to find balance.`
},

{
id:"T5",
title:"Small Changes, Big Results",
content:`
Sara stopped drinking fizzy drinks.
She started walking to school.

After a few weeks, she felt more energetic.`
},

{
id:"T6",
title:"Friends from Another Country",
content:`
Miguel met Tom through a language app.
They practise English and Spanish weekly.

Technology helped create a real friendship.`
},

{
id:"T7",
title:"My First Job",
content:`
Andrea worked at a café.
She learned to communicate with customers.

She became more confident and independent.`
},

{
id:"T8",
title:"A Trip to Remember",
content:`
Marcos travelled to Madrid.
His suitcase was missing at the airport.

It arrived the next day. He learned to stay calm.`
},

{
id:"T9",
title:"Helping the Community",
content:`
Students painted a sports centre.
They worked in teams and felt proud.

Volunteering made a difference.`
},

{
id:"T10",
title:"Tablets in the Classroom",
content:`
Students use tablets for research.
Some teachers worry about distractions.

The school created rules for proper use.`
}

];


/* ================= QUESTION BANK ================= */

const READING_BANK = [

/* ===== T1 ===== */

{ textId:"T1", type:"title", question:"Choose the best title:", options:["Holiday in Spain","Too Much Screen Time?","A Football Match"], answer:"Too Much Screen Time?" },
{ textId:"T1", type:"scan", question:"How many hours did Daniel spend on his phone?", options:["2","6","7"], answer:"7" },
{ textId:"T1", type:"patch", question:"Daniel felt ______ in class.", options:["distracted","happy","relaxed"], answer:"distracted" },
{ textId:"T1", type:"wrong", question:"Which is NOT true?", options:["He tried a detox.","He deleted his phone forever.","He felt calmer."], answer:"He deleted his phone forever." },
{ textId:"T1", type:"inference", question:"Why did he feel happier?", options:["Less screen time","New phone","No school"], answer:"Less screen time" },

/* ===== T2 ===== */

{ textId:"T2", type:"title", question:"Choose the best title:", options:["Trip to London","A Week in Ireland","School Exam"], answer:"A Week in Ireland" },
{ textId:"T2", type:"scan", question:"Where did Laura stay?", options:["Hotel","Host family","Alone"], answer:"Host family" },
{ textId:"T2", type:"patch", question:"She felt more ______ speaking English.", options:["confident","angry","sad"], answer:"confident" },
{ textId:"T2", type:"wrong", question:"Which is NOT true?", options:["She felt nervous.","Classes were different.","Ireland is in Spain."], answer:"Ireland is in Spain." },
{ textId:"T2", type:"inference", question:"Why was the exchange useful?", options:["Improved English","Hated school","Returned early"], answer:"Improved English" },

/* ===== T3 ===== */

{ textId:"T3", type:"title", question:"Choose the best title:", options:["Beach Holiday","Teenagers Who Care","Plastic Factory"], answer:"Teenagers Who Care" },
{ textId:"T3", type:"scan", question:"How many people participated?", options:["10","More than 50","5"], answer:"More than 50" },
{ textId:"T3", type:"patch", question:"They collected plastic ______.", options:["bottles","shoes","tables"], answer:"bottles" },
{ textId:"T3", type:"wrong", question:"Which is NOT true?", options:["They cleaned a beach.","They collected rubbish.","They built a hotel."], answer:"They built a hotel." },
{ textId:"T3", type:"inference", question:"Why repeat the event?", options:["Help environment","Make money","Homework"], answer:"Help environment" },

/* ===== T4 ===== */

{ textId:"T4", type:"title", question:"Choose the best title:", options:["Video Games and Balance","Cooking Lesson","Travel Story"], answer:"Video Games and Balance" },
{ textId:"T4", type:"scan", question:"What can too much gaming affect?", options:["Sleep","Food","Weather"], answer:"Sleep" },
{ textId:"T4", type:"patch", question:"Carlos created a ______.", options:["schedule","problem","game"], answer:"schedule" },
{ textId:"T4", type:"wrong", question:"Which is NOT true?", options:["Gaming can develop skills.","Balance is important.","Gaming improves sleep."], answer:"Gaming improves sleep." },
{ textId:"T4", type:"inference", question:"Why did Carlos make a schedule?", options:["Find balance","Stop gaming","Win money"], answer:"Find balance" },

/* ===== T5 ===== */

{ textId:"T5", type:"title", question:"Choose the best title:", options:["Healthy Changes","Math Exam","Football Match"], answer:"Healthy Changes" },
{ textId:"T5", type:"scan", question:"What did Sara stop drinking?", options:["Water","Fizzy drinks","Milk"], answer:"Fizzy drinks" },
{ textId:"T5", type:"patch", question:"She felt more ______.", options:["energetic","tired","angry"], answer:"energetic" },
{ textId:"T5", type:"wrong", question:"Which is NOT true?", options:["She walked to school.","She felt better.","She ate more sugar."], answer:"She ate more sugar." },
{ textId:"T5", type:"inference", question:"What is the message?", options:["Small habits help","School is hard","Sports are boring"], answer:"Small habits help" },

/* ===== T6 ===== */

{ textId:"T6", type:"title", question:"Choose the best title:", options:["Online Friendship","Bad Travel","Exam Day"], answer:"Online Friendship" },
{ textId:"T6", type:"scan", question:"Where does Tom live?", options:["Spain","Scotland","France"], answer:"Scotland" },
{ textId:"T6", type:"patch", question:"They practise ______ weekly.", options:["languages","math","sports"], answer:"languages" },
{ textId:"T6", type:"wrong", question:"Which is NOT true?", options:["They met online.","They practise weekly.","They met at school."], answer:"They met at school." },
{ textId:"T6", type:"inference", question:"What helped create friendship?", options:["Technology","Money","School"], answer:"Technology" },

/* ===== T7 ===== */

{ textId:"T7", type:"title", question:"Choose the best title:", options:["My First Job","A Holiday","A Test"], answer:"My First Job" },
{ textId:"T7", type:"scan", question:"Where did Andrea work?", options:["Café","Hospital","Airport"], answer:"Café" },
{ textId:"T7", type:"patch", question:"She became more ______.", options:["confident","lazy","sad"], answer:"confident" },
{ textId:"T7", type:"wrong", question:"Which is NOT true?", options:["She worked at a café.","She felt nervous.","She hated customers."], answer:"She hated customers." },
{ textId:"T7", type:"inference", question:"What did she gain?", options:["Experience","Money only","Nothing"], answer:"Experience" },

/* ===== T8 ===== */

{ textId:"T8", type:"title", question:"Choose the best title:", options:["Travel Problem","School Day","Beach Party"], answer:"Travel Problem" },
{ textId:"T8", type:"scan", question:"What was missing?", options:["Suitcase","Passport","Money"], answer:"Suitcase" },
{ textId:"T8", type:"patch", question:"It arrived the ______ day.", options:["next","same","last"], answer:"next" },
{ textId:"T8", type:"wrong", question:"Which is NOT true?", options:["He travelled to Madrid.","The suitcase arrived later.","They cancelled the trip."], answer:"They cancelled the trip." },
{ textId:"T8", type:"inference", question:"What did he learn?", options:["Stay calm","Be angry","Travel alone"], answer:"Stay calm" },

/* ===== T9 ===== */

{ textId:"T9", type:"title", question:"Choose the best title:", options:["Community Work","Exam Results","Video Games"], answer:"Community Work" },
{ textId:"T9", type:"scan", question:"What did they paint?", options:["Sports centre","Hotel","Beach"], answer:"Sports centre" },
{ textId:"T9", type:"patch", question:"They felt ______.", options:["proud","angry","bored"], answer:"proud" },
{ textId:"T9", type:"wrong", question:"Which is NOT true?", options:["They worked in teams.","They volunteered.","They destroyed the building."], answer:"They destroyed the building." },
{ textId:"T9", type:"inference", question:"What is the benefit?", options:["Help community","Win prize","Skip school"], answer:"Help community" },

/* ===== T10 ===== */

{ textId:"T10", type:"title", question:"Choose the best title:", options:["Tablets at School","Sports Day","Travel Story"], answer:"Tablets at School" },
{ textId:"T10", type:"scan", question:"What do students use tablets for?", options:["Research","Cooking","Driving"], answer:"Research" },
{ textId:"T10", type:"patch", question:"Teachers worry about ______.", options:["distractions","weather","sports"], answer:"distractions" },
{ textId:"T10", type:"wrong", question:"Which is NOT true?", options:["Students use tablets.","Rules were created.","Teachers removed all technology."], answer:"Teachers removed all technology." },
{ textId:"T10", type:"inference", question:"Why create rules?", options:["Control usage","Stop learning","Close school"], answer:"Control usage" }

];
