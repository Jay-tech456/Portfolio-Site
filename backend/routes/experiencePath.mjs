import express from 'express'
import db from '../db/conn.mjs'



const experienceRouter = express.Router(); 

experienceRouter.get('/education', async (req, res) => {
    console.log("Request Received, and fetching data from MongoDB Atlas Education Collection");

    try { 
        // Fetch the document from the experience collection
        let collection = await db.collection("Education");
        let results = await collection.find({})
            .limit(50)
            .toArray();

        // Function to parse year range and return a comparable value
        const parseYear = (yearString) => {
            if (!yearString) return { start: 0, end: 0 }; // Handle missing or empty yearString
            const [start, end] = yearString.split(' - ').map(y => {
                if (!y) return 0; // Handle cases where the split results in undefined
                const [season, year] = y.split(' ');
                const seasonOrder = { Winter: 0, Spring: 1, Summer: 2, Fall: 3 };
                return parseInt(year) * 4 + (seasonOrder[season] || 0);
            });
            return { start: start || 0, end: end || 0 }; // Handle cases where parsing fails
        };

        // Sort results by the parsed year range in reverse order
        results.sort((a, b) => {
            const yearA = parseYear(a.year);
            const yearB = parseYear(b.year);
            return yearB.start - yearA.start || yearB.end - yearA.end;
        });

        res.status(200).json(results);
    } catch (e) { 
        console.error("Error: ", e); 
        res.status(500).send("Internal Server Error");
    }
});




// This is for the experience section 
experienceRouter.get('/experience', async (req, res) => { 

    try{ 
    // console.log("request has been recieved from the microservice")
    let collection = await db.collection('Experience'); 
    let result = await collection.find({}).limit(50).toArray(); 

    // console.log(result); 
    return res.status(200).send(result); 


    } catch(e){ 
        console.log("An Error has occured at ", e)
    }

    res.send("Message from the Experience Get Request ")
})



export default experienceRouter;