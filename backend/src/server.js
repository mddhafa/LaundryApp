import express from "express";

const app = express();

app.get("/api/laundry", (req, res) => {
  res.json({ message: "Hello from the backend!" });
  res.send("Hello from the backend!");
});

app.get("/", (req, res) => {
  res.json("Welcome to the Laundry Service API");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
