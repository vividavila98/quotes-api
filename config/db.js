import mongoose from "mongoose";
import config from "config";

const db = config.get("mongoURI");

// connect to database
export const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true, // tool to parse connection strings
            useUnifiedTopology: true // use new topology engine
        });
        console.log("MongoDB is connected");
    } catch(e) {
        console.error(e);
    }
}
