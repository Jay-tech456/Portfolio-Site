import express from 'express'; 
import db from '../db/conn.mjs';

const aboutRouter = express.Router();


// The Get Request to handle the about case
aboutRouter.get('/about', async (req, res) => { 
    // console.log("Request has been received, fetching information from the about collection");

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


aboutRouter.get('/project', async(req, res) => { 

    try{

        // console.log("Get request has been recieved from gateway, fetching project details")
        let collection = await db.collection("Project"); 
        let result = await collection.find({}).limit(50).toArray(); 

        // console.log(result); 

        return res.status(200).send(result); 
    }catch(e){ 
        console.log('Error: ', e);
        
        return res.status(500).send(e); 
    }
})

export default aboutRouter;
