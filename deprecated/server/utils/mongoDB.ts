/* eslint-disable  no-underscore-dangle */
/* eslint-disable  @typescript-eslint/naming-convention */

import mongoose from 'mongoose';

let _defaultDb: any;
export const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}?retryWrites=true&writeConcern=majority`;

export async function setDefaultConnection(dbName: string) {
  if (_defaultDb) {
    return _defaultDb;
  }

  try {
    await mongoose.connect(uri, { dbName: dbName, serverSelectionTimeoutMS: 100000 });
    _defaultDb = mongoose.connection;
    console.log(`Established default db as ${dbName}`);
    return _defaultDb;
  } catch (err) {
    console.log(uri)
    throw new Error(`Failed to set default db as ${dbName}`);
  }
}

export function getDefaultDb() {
  if (_defaultDb) {
    return _defaultDb;
  }
  throw new Error(`No database connections exists for default db - call initDB first`);
}
