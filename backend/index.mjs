import "./loadEnvironment.mjs"
import { MongoClient } from "mongodb";
import express from "express"; 
import dotenv from "dotenv"; 
import cors from "cors"; 
import aboutRouter from "./routes/aboutPath.mjs";
import expreienceRouter from "./routes/experiencePath.mjs";

dotenv.config();
const app = express();

// Loading up the environment variables, which includes MongoDB Atlas String
const port = process.env.PORT || 5000;  
const uri = process.env.ATLAS_URI || "";


// Middleware to parse JSON
app.use(express.json());
app.use(cors());


// MongoDB connection URI


// Create a MongoDB client and connection pool
const client = new MongoClient(uri);
let db;

// Connect to MongoDB and start the server
async function startServer() {
    try {
        await client.connect();
        db = client.db("WebPortfolio");
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);
    }
}

startServer()

app.use('/api', aboutRouter);
app.use('/api', expreienceRouter); 