// import appears "lighter" when they're currently unused
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// calling this always at the beginning, to ensure that the
// variables defined in .env file are available for use
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is the root route!");
});

app.get("/images", async (req, res) => {
  const API = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=puppy`;
  const response = await fetch(API);
  const imageData = await response.json();

  res.json(imageData.results);
});

app.listen(8080, () => {
  console.log(`Server running on port 8080`);
});
