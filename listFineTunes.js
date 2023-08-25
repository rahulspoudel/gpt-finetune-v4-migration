import { openai } from './api.js';

async function listFineTunes() {
  try {
    const response = await openai.fineTuning.jobs.retrieve(
      'ftjob-BcTfL5i6cIxlnqMz9HODQ6Vy',
    );
    console.log('data: ', response);
  } catch (err) {
    console.log('error:', err);
  }
}

listFineTunes();
