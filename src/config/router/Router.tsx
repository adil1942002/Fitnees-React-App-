import {Route , Routes} from "react-router-dom";
import Home from "../pages/home/Home";
import { BrowserRouter as Router} from 'react-router-dom';
import About from "../pages/about/About";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import Services from "../pages/services/Services";
import AppBar from "@mui/material/AppBar/AppBar";
export default function ReactDOM(){
    return<>
        <Router>
            <AppBar/>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/contact" element={<Contact/>}/>
</Routes>
            </Router>
    </>
}