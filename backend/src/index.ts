import dotenv from "dotenv"
import Anthropic from '@anthropic-ai/sdk';

const my_api_key = process.env.ANTHROPIC_API_KEY;

const anthropic = new Anthropic({
  apiKey: 'my_api_key', 
});

const message= async()=>{
    const msg = await anthropic.messages.create({
        model: "claude-3-7-sonnet-20250219",
        max_tokens: 1024,
        messages: [{ role: "user", content: "Hello, Claude" }],
      });
      console.log(msg);
}
message();

