import { open } from "sqlite";
import sqlite3 from "sqlite3";

export async function connectDB() {
  const db = await open({
    filename: "./cars.db",
    driver: sqlite3.Database,
  });

  // -------------------------
  // 1. CREATE TABLES FIRST
  // -------------------------

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

  await db.exec(`
    CREATE TABLE IF NOT EXISTS about_page (
      id INTEGER PRIMARY KEY,
      title TEXT,
      subtitle TEXT,
      mainImage TEXT,
      customerText TEXT,
      sectionTag TEXT,
      sectionTitle TEXT,
      sectionDescription TEXT,
      buttonText TEXT
    );
  `);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS about_customers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT
    );
  `);

  // -------------------------
  // 2. INSERT DEFAULT DATA
  // -------------------------

  await db.run(`
    INSERT OR REPLACE INTO about_page (
      id,
      title,
      subtitle,
      mainImage,
      customerText,
      sectionTag,
      sectionTitle,
      sectionDescription,
      buttonText
    )
    VALUES (
      1,
      'About US',
      'Premium service with high standard rent car',
      '/images/CarRentImage.jpg',
      'Our Happy Customers',
      'ABOUT US',
      'More than Just a Car Rental Service',
      'We provide premium cars and service...',
      'Learn More'
    );
  `);

  return db;
}