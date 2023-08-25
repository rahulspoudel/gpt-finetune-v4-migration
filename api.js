// import { Configuration, OpenAIApi } from 'openai';
// const openaiApiKey = process.env.OPENAI_KEY;
// const configuration = new Configuration({
//   apiKey: openaiApiKey,
// });
// export const openai = new OpenAIApi(configuration);
import { config } from 'dotenv';
config();
// New
import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});
