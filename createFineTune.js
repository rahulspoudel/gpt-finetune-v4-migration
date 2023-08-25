import { openai } from './api.js';

async function createFineTune() {
  try {
    const response = await openai.fineTunes.create({
      training_file: 'file-7lK24aTyXRVc6dwRsbaerz7S',
      model: 'davinci',
    });
    console.log('response: ', response);
  } catch (err) {
    console.log('error: ', err.response.data.error);
  }
}

createFineTune();
