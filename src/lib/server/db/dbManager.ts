import Database from 'better-sqlite3';

const db: Database.Database = new Database('src/lib/server/db/Tally.db');

export { db };
