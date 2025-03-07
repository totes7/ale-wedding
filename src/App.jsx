import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" component={App} />
            </Routes>
        </Router>
    )
}
export default App
