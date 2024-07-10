import express from 'express'
import db from '../db/conn.mjs'



const experienceRouter = express.Router(); 

experienceRouter.get('/education', async (req, res) => {

    // console.log("Request Recieved, and fetching data from MongoDB Atlas Education Collection")
    
    
    
    // fetch the document from the experience collection
    let collection = await db.collection("Experience");
    let results = await collection.find({})
      .limit(50)
      .toArray();

    // Function to parse year range and return a comparable value
    const parseYear = (yearString) => {
        const [start, end] = yearString.split(' - ').map(y => {
            const [season, year] = y.split(' ');
            const seasonOrder = { Winter: 0, Spring: 1, Summer: 2, Fall: 3 };
            return parseInt(year) * 4 + (seasonOrder[season] || 0);
        });
        return { start, end };
    };

    // Sort results by the parsed year range in reverse order
    results.sort((a, b) => {
        const yearA = parseYear(a.year);
        const yearB = parseYear(b.year);
        return yearB.start - yearA.start || yearB.end - yearA.end;
    });

    res.status(200).send(results);
});



// This is for the experience section 
experienceRouter.get('/experience', (req, res) => { 


    console.log("request has been recieved from the microservice")


    res.send("Message from the Experience Get Request ")
})



export default experienceRouter;