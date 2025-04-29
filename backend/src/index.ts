import dotenv from "dotenv"
import Anthropic from '@anthropic-ai/sdk';
import express from "express"
import { TextBlock } from "@anthropic-ai/sdk/resources/messages";
import { BASE_PROMPT, getSystemPrompt } from "./prompt";
import { basePrompt as reactBasePrompt } from "./default/react";
import { basePrompt as nodeBasePrompt } from "./default/node";
const app = express();
app.use(express.json());
dotenv.config();

const my_api_key = process.env.ANTHROPIC_API_KEY;
const anthropic = new Anthropic({
  apiKey: 'my_api_key', 
});

app.post("template", async(req, res)=>{
    const prompt = req.body.prompt;
    const response = await anthropic.messages.create({
        model: "claude-3-7-sonnet-20250219",
        max_tokens: 1024,
        messages: [{ role: "user", content: prompt }],
        system: "Return either node or react based on what do you think this project should be. Only return a single word either 'node' or 'react'. Do not return anything extra"
        });

        const answer = (response.content[0] as TextBlock).text;
        if(answer == 'react'){
            res.json({
                prompts: [BASE_PROMPT, `Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${reactBasePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`],
            uiPrompts: [reactBasePrompt]
            });
            return ;
        }
        if(answer == 'node'){
            res.json({
                prompts: [`Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${nodeBasePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`],
                uiPrompts: [nodeBasePrompt]
            })
            return ;
        }else{
            res.status(403).send({ message : "no clear indication"})
            return ;
        }    
})

app.post("chat", async(req, res)=>{
    const message = req.body.message;
    const response = await anthropic.messages.create({
        messages : message,
        max_tokens : 5000,
        model: 'claude-3-5-sonnet-20241022',
        system : getSystemPrompt()
    });
    res.json({
        response : (response.content[0] as TextBlock).text
    })
})