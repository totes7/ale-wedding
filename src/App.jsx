import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home/>} />
            </Routes>
        </Router>
    )
}
export default App
