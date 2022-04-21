import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from '../components/auth/Login';
import { HotelView } from '../components/hoteles/HotelView';

export const AppRouter = () => {
    return(
        <Router>
            <div>
             <Routes>
                <Route exact path="/" element={ <Login/> } />
                <Route exact path="/hoteles" element={ <HotelView/> } />
             </Routes>
            </div>
        </Router>
    )
}

