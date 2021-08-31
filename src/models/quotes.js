import mongoose from "mongoose";

// Rules to what we can store to our db collection
// Mongo gives ID automatically
const quoteSchema = new mongoose.Schema({
    content: String,
    category: String
});

// first argument - name of the collection your model is for
export const quoteModel = mongoose.model("quote", quoteSchema);
