import express from "express";
import { connectDB } from "../config/db.js";
import quotes from "./routes/quotes.js";

// Create express app
const app = express();

// Connect to database
connectDB();

app.use(express.json()); 
app.use(express.urlencoded()); // Parse URL-encoded bodies

const PORT = process.env.PORT || 3000;

// Routes
app.get("/", (req, res) => {
    res.send("Hello world!");
})

app.use("/api/quotes", quotes);

// Starting server
app.listen(PORT, () => {
    console.log("Server is running :)");
});