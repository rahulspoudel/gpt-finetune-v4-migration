import { openai } from './api.js';

async function listFineTunes() {
  try {
    const response = await openai.fineTunes.list();
    console.log('data: ', response.data);
  } catch (err) {
    console.log('error:', err);
  }
}

listFineTunes();
