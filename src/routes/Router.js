import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from "../components/nav";
import Home from "../screens/Home";
import Profile from "../screens/Profile";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;