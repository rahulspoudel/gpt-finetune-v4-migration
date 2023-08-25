import { openai } from './api.js';

async function createCompletion() {
  try {
    const response = await openai.completions.create({
      model: 'ft:davinci-002:personal::7rS9a1yA',
      prompt: 'What is Lens Protocol?',
      max_tokens: 50,
      temperature: 0,
    });
    if (response) {
      console.log('completions: ', response);
    }
  } catch (err) {
    console.log('err: ', err);
  }
}

createCompletion();
