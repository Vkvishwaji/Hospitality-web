import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Route, Routes } from "react-router-dom";
 
import Home from "./component/pages/Home";
import Aboutus from "./component/pages/Aboutus";
import Services from "./component/pages/Services";
import Contact from "./component/pages/Contact";
import Navbar from "./component/pages/Navbar";
import Hotelbooking from "./component/pages/Hotelbooking";
import Mice from "./component/pages/Mice";
import Traveldesk from "./component/pages/Traveldesk";
import Footer from "./component/pages/Footer";



function App() {
  return (
     <>
     <Navbar/>
        
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<Aboutus/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={ <Contact /> } />             
            <Route path="/hotelbooking" element={ <Hotelbooking /> } />             
            <Route path="/mice" element={ <Mice /> } />             
            <Route path="/traveldesk" element={ <Traveldesk /> } />             
          </Routes>
         <Footer/>
     </>
  );
}

export default App;
