import mongoose from 'mongoose';

import { getEnvVar } from '../utils/getEnvVar.js';

export const initMongoConnection = async () => {
  try {
    const user = getEnvVar('MONGODB_USER');
    const pswrd = getEnvVar('MONGODB_PASSWORD');
    const url = getEnvVar('MONGODB_URL');
    const db = getEnvVar('MONGODB_DB');

    await mongoose.connect(
      `mongodb+srv://${user}:${pswrd}@${url}/${db}?retryWrites=true&w=majority`,
    );
    console.log('Success conection');
  } catch (e) {
    console.error('Connection error', e.message);
    throw e;
  }
};
