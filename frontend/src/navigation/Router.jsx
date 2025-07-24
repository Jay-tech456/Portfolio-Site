import React from "react";
import { Routes, Route } from "react-router-dom"; // Fixed package name
import LandingPage from "../Views/landingpage";

function Router() { 
    return ( 
        <div>
            <Routes>
                <Route path="" element={<LandingPage/>} />

            </Routes>
        </div>
    )
}

export default Router;