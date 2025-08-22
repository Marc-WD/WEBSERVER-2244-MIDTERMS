const express = require("express");
const app = express();

// Data (regional dishes)
const dishes = [
  { type: "Sisig", province: "Pampanga", price: 220 },
  { type: "Salpicao", province: "Quezon", price: 180 },
  { type: "Bagnet", province: "Ilocos", price: 370 },
];

// 1. Route to display all records
app.get("/dishes", (req, res) => {
  res.json(dishes);
});

// 2. Route to display specific record based on dish type
app.get("/dishes/:type", (req, res) => {
  const dishType = req.params.type.toLowerCase();
  const dish = dishes.find((d) => d.type.toLowerCase() === dishType);

  if (dish) {
    res.json(dish);
  } else {
    res.json({ message: "Record not found" });
  }
});

// 3. Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ message: "Record not found" });
});

// Server listening on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
