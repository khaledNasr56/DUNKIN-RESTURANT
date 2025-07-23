import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Join from "./Pages/Join";
import SignIn from "./Pages/SignIn";
import Working from "./Pages/Careers/Working";
import Apply from "./Pages/Careers/Apply";
import Corporate from "./Pages/Careers/Corporate";
import Cards from "./Pages/Cards";
import Location from "./Pages/Location";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default route - redirect to Home */}
        <Route path="/" element={<Home />} />
        
        {/* Auth routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/join" element={<Join />} />
        
        {/* Main pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/location" element={<Location />} />
        
        {/* Careers subroutes */}
        <Route path="/careers/working" element={<Working />} />
        <Route path="/careers/apply" element={<Apply />} />
        <Route path="/careers/corporate" element={<Corporate />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;