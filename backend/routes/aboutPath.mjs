import express from 'express'; 
import db from '../db/conn.mjs';

const aboutRouter = express.Router();

aboutRouter.get('/about', async (req, res) => { 
    console.log("Request has been received, fetching information from the about collection");

    try {
        let collection = await db.collection("About"); 
        let result = await collection.find({})
          .limit(50)
          .toArray();

        res.status(200).json(result); 
    } catch (err) {
        console.error("Error fetching data from the about collection", err);
        res.status(500).send("Internal Server Error");
    }
});

export default aboutRouter;
