import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { db } from './db.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

/**
 * GET /cars
 * Supports filtering:
 * /cars?type=SUV&brand=BMW&min=100&max=500
 */
app.get('/cars', async (req, res) => {
  try {
    const { type, brand, min, max } = req.query;

    let query = `SELECT * FROM cars WHERE 1=1`;
    const values = [];

    // Filter by type
    if (type) {
      query += ` AND type = ?`;
      values.push(type);
    }

    // Filter by brand
    if (brand) {
      query += ` AND brand = ?`;
      values.push(brand);
    }

    // Price range filter (safe parsing)
    const minPrice = Number(min);
    const maxPrice = Number(max);

    if (min !== undefined && max !== undefined && !isNaN(minPrice) && !isNaN(maxPrice)) {
      query += ` AND price BETWEEN ? AND ?`;
      values.push(minPrice, maxPrice);
    }

    const cars = await db.all(query, values);

    res.status(200).json({
      success: true,
      count: cars.length,
      data: cars,
    });

  } catch (err) {
    console.error('GET /cars error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching cars',
      error: err.message,
    });
  }
});

/**
 * GET /cars/:id
 * Get single car
 */
app.get('/cars/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const car = await db.get(
      `SELECT * FROM cars WHERE id = ?`,
      [id]
    );

    if (!car) {
      return res.status(404).json({
        success: false,
        message: 'Car not found',
      });
    }

    res.json({
      success: true,
      data: car,
    });

  } catch (err) {
    console.error('GET /cars/:id error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});

/**
 * POST /cars
 * Add new car
 */
app.post('/cars', async (req, res) => {
  try {
    const { name, brand, type, price } = req.body;

    if (!name || !brand || !type || !price) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
      });
    }

    await db.run(
      `INSERT INTO cars (name, brand, type, price) VALUES (?, ?, ?, ?)`,
      [name, brand, type, price]
    );

    res.status(201).json({
      success: true,
      message: 'Car added successfully',
    });

  } catch (err) {
    console.error('POST /cars error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error while adding car',
    });
  }
});

/**
 * DELETE /cars/:id
 */
app.delete('/cars/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.run(`DELETE FROM cars WHERE id = ?`, [id]);

    if (result.rowsAffected === 0) {
      return res.status(404).json({
        success: false,
        message: 'Car not found',
      });
    }

    res.json({
      success: true,
      message: 'Car deleted successfully',
    });

  } catch (err) {
    console.error('DELETE /cars error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error while deleting car',
    });
  }
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});