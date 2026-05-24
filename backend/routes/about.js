app.get("/about", async (req, res) => {
  const about = await db.get("SELECT * FROM about_page WHERE id = 1");
  const customers = await db.all("SELECT * FROM about_customers");

  res.json({ ...about, customers });
});