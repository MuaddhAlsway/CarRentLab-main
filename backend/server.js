import express from "express";
import cors from "cors";
import path from "path";
import { connectDB } from "./db.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(process.cwd(), "public/images")));

async function start() {
  try {
    console.log("⏳ Connecting to DB...");

    const db = await connectDB();

    console.log("✅ DB connected");

    app.get("/", (req, res) => {
      res.send("Backend running 🚀");
    });

    app.get("/about", async (req, res) => {
      try {
        const about = await db.get(
          "SELECT * FROM about_page WHERE id = 1"
        );

        const customers = await db.all(
          "SELECT * FROM about_customers"
        );

        res.json({
          ...(about || {}),
          customers: customers || [],
        });
      } catch (err) {
        console.error("ABOUT ERROR:", err);
        res.status(500).json({ error: err.message });
      }
    });

    // ✅ FIXED HERE
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error("🔥 SERVER FAILED TO START:", err);
  }
}
start();