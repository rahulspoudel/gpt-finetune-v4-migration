import { openai } from './api.js';

async function createFineTune() {
  try {
    const response = await openai.fineTuning.jobs.create({
      training_file: 'file-7lK24aTyXRVc6dwRsbaerz7S',
      // can use babbage or davinci here
      model: 'davinci-002',
    });
    console.log('response: ', response);
  } catch (err) {
    console.log('error: ', err);
  }
}

createFineTune();
