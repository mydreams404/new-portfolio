// import { ReactP5Wrapper } from "react-p5-wrapper";

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
      <div class="tab-container">
        <NavTab />
      </div>
      <div id="line-container">
        <Underline />
      </div>

      <About />
      <Works />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
