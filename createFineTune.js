import { openai } from './api.js';

async function createFineTune() {
  try {
    const response = await openai.createFineTune({
      training_file: 'file-v9VCTfu5EwFcBnjRhSvePVkq',
      model: 'davinci',
    });
    console.log('response: ', response);
  } catch (err) {
    console.log('error: ', err.response.data.error);
  }
}

createFineTune();
