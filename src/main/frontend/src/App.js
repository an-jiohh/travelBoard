// src/main/frontend/src/App.js

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import About from "./component/About";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./component/Header";
import Communication from "./component/Communication";
import Archiving from "./component/Archiving";
import ProjectList from "./component/ProjectList";
import Footer from "./component/Footer";
import Project from "./component/Project";
import TravelList from "./component/TravelList";
import Login from "./component/Login";
import TravelDetail from "./component/TravelDatail";
import TravelForm from "./component/TravelForm";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" exact element={<TravelList />} />
                    <Route path="/travel/detail/:id" exact element={<TravelDetail/>} />
                    <Route path="/travel/create" exact element={<TravelForm/>} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;