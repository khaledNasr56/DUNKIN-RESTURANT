import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Join from "./Pages/Join";
import SignIn from "./Pages/SignIn";
import Working from "./pages/Careers/Working";
import Apply from "./pages/Careers/Apply";
import Corporate from "./pages/Careers/Corporate";
import Cards from "./Pages/Cards";
import Location from "./Pages/Location";

 // import Locations from "./Pages/Location";
// import Delivery from "./Pages/Delivery";
// import Rewards from "./pages/Reward";
// import Card from "./Pages/Card";
// import Shop from "./Pages/Shop";


function App() {
  return (
  
    <Router>

      <Navbar />
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Join" element={<Join />} />
      </Routes>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/About" element={<About/>}/> 
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Cards" element={<Cards/>} />
        <Route path="/Location" element={<Location/>} />

      

        {/* Careers subroutes */}
        <Route path="/careers/working" element={<Working />} />
        <Route path="/careers/apply" element={<Apply />} />
        <Route path="/careers/corporate" element={<Corporate />} />
      </Routes>
      <Footer/>

    </Router>

    
  );
}

export default App;
