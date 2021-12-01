// import { ReactP5Wrapper } from "react-p5-wrapper";

import "./designer.css";
import Title from "./components/Title";
import NavTab from "./components/NavTab";
import Underline from "./components/Underline";

// import About from "./components/About";
import Particles from "./components/Particles";

function App() {
  return (
    <div>
      <div id="particle-container">
        <Particles />
      </div>
      <Title />
      <NavTab />
      <div id="line-container">
        <Underline />
      </div>

      {/* <About /> */}
    </div>
  );
}

export default App;
