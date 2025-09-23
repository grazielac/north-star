// import appears "lighter" when they're currently unused
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("This is the root route!");
});

app.listen(8080, () => {
    console.log(`Server running on port 8080`);
});