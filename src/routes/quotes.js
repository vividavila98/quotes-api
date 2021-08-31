import express from "express";
const router = express.Router(); // routing system
import { quoteModel } from "../models/quotes.js";

// Get all quotes
// middleware specific to this router
router.get("/", async (req, res) => {
    const quotes = await quoteModel.find();
    res.send(quotes);
});

// Create new quote
router.post("/new", async (req, res) => {
    const newQuote = new quoteModel(req.body);

    const savedQuote = await newQuote.save();

    res.send(savedQuote);
});

// Get a specific quote by ID
// colon means it will be different values
router.get("/id/:id", async (req, res) => {
    const foundQuote = await quoteModel.findById({ _id: req.params.id });
    
    res.send(foundQuote);
});

// Delete a quote
router.delete("/delete/:id", async (req, res) => {
    const result = await quoteModel.findByIdAndDelete({ _id: req.params.id });

    res.send(result);
});

// Update a quote 
router.patch("/update/:id", async (req, res) => {
    const updatedQuote = await quoteModel.updateOne({ _id: req.params.id }, {$set: req.body});

    res.send(updatedQuote);
});

// Get a random quote
router.get("/random", async (req, res) => {
    try {
        const length = await quoteModel.count({});
        const num = Math.floor(Math.random() * length);
        const ranQuote = await quoteModel.findOne().skip(num);
        
        res.send(ranQuote);
    } catch (e) {
        console.error(e);
    }
})

export default router;