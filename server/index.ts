import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT ? process.env.PORT : 3500;
const app = express();

app.get("/", (req, res) => res.send("Welcome to our website."));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
