import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

// Open local SQLite file (cars.db created automatically)
export const db = await open({
  filename: './cars.db',
  driver: sqlite3.Database,
});

// Create table if it doesn't exist
await db.exec(`
  CREATE TABLE IF NOT EXISTS cars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    type TEXT,
    brand TEXT,
    price INTEGER,
    img TEXT
  );
`);
