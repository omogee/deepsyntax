import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Datapage from './datapage';
import Landing from './landing';
import Lazyloader from './lazyloader';
import Login from './login';
import Navbar from './navbar';
import Register from './register';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return ( 
        <Router>
            <Routes>
                <Route path="/" exact element={<><Navbar/><Landing/></>} />
    
                <Route path="/login" exact element={<><Navbar/><Login /></>} />
                <Route path="/register" element={<>< Navbar/><Register /></>}/>
                <Route path="/purchase" element={<><Navbar /><Datapage /></>} />
                <Route path="/loading" element={<><Navbar /><Lazyloader /></>} />
            </Routes>
        </Router>
     );
}

export default App;