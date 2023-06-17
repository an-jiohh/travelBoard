// src/main/frontend/src/App.js

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import About from "./component/About";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./component/Header";
import Aside from "./component/Aside";
import Communication from "./component/Communication";
import Archiving from "./component/Archiving";
import ProjectList from "./component/ProjectList";
import Footer from "./component/Footer";
import Project from "./component/Project";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Aside />
                <Routes>
                    <Route path="/" exact element={<About />} />
                    <Route path="/communication" element={<Communication />} />
                    <Route path="/archiving" element={<Archiving />} />
                    <Route path="/projectList" element={<ProjectList />} />
                    <Route path="/:title" element={<Project />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;