import { db } from "./db.js";

async function seed() {
  try {
    console.log("Checking if already seeded...");

    const result = await db.get(
      "SELECT COUNT(*) as count FROM cars"
    );

    const count = result.count;

    if (count > 0) {
      console.log("Already seeded, skipping...");
      return;
    }

    console.log("Seeding database...");

    const cars = [
      ["Toyota Camry", "Sedan", "Toyota", 30000, "/images/Camry.jpg"],
      ["BMW X1", "SUV", "BMW", 70000, "/images/BMW.jpg"],
      ["BMW X3", "SUV", "BMW", 80000, "/images/Bmw.webp"],
      ["Toyota Accent", "Sedan", "Toyota", 40000, "/images/Accent.webp"],
      ["Ford Explorer", "SUV", "Ford", 90000, "/images/Ford.webp"],
      ["Ford Ranger", "Truck", "Ford", 30000, "/images/FordMachine.avif"],
      ["Ford Mustang", "Sports", "Ford", 120000, "/images/FordMusntage.webp"],
      ["Nissan Altima", "Sedan", "Nissan", 35000, "/images/Nissan.webp"],
    ];

    for (const car of cars) {
      await db.run(
        `INSERT INTO cars (name, type, brand, price, img)
         VALUES (?, ?, ?, ?, ?)`,
        car
      );
    }

    console.log("Seed completed");
  } catch (err) {
    console.error("Seed error:", err.message);
  } finally {
    await db.close();
  }
}

seed();