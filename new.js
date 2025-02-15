import { config } from "dotenv";
import fs from "fs";

import OpenAI from "openai";
config(
  {path   : "./.env"}
);

const date = new Date().toISOString().split('T')[0];




const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const number  = (Math.random() * 1000).toFixed(0);
const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        {"role": "user", "content": `solve a ${number} leetcode question in javascript and don't add comment and format in 'question: //leetcode question   , answer: answer not in comments`},
    ]
});



fs.writeFileSync(`${number}.js`, completion.choices[0].message.content);
console.log(completion.choices[0].message.content);