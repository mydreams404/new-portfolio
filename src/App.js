// import { ReactP5Wrapper } from "react-p5-wrapper";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./designer.css";
import Title from "./components/Title";
import NavTab from "./components/NavTab";
import Underline from "./components/Underline";

import About from "./components/About";
import Works from "./components/Works";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

import Particles from "./components/Particles";

function App() {
  return (
    <div>
      <div id="particle-container">
        <Particles />
      </div>
      <Title />
      <Router>
        <div class="tab-container">
          <NavTab />
        </div>
      <Routes>
        <Route path="/about" element={About} /> 
        <Route path="/works" element={Works} /> 
        <Route path="/gallery" element={Gallery} /> 
        <Route path="/contact" element={Contact} /> 
      </Routes>
      </Router>
      {/* <div id="line-container">
      <Underline />
      </div> */}
    </div>
  );
}

export default App;
