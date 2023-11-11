// import { ReactP5Wrapper } from "react-p5-wrapper";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./designer.css";
import Title from "./components/Title";
import NavTab from "./components/NavTab";
import Underline from "./components/Underline";
import LightToggle from "./components/LightToggle";

import ContentComponent from "./components/ContentComponent";
import About from "./components/About";
import Works from "./components/Works";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

import Particles from "./components/Particles";

function AppWithRouter() {
  let location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="page"
        timeout={{ enter: 5000, exit: 5000 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Title />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Router>
      <div>
        <LightToggle />
        <div id="particle-container">
          <Particles />
        </div>
        {/* <Title /> */}
        <div className="tab-container">
          <NavTab />
        </div>
        <div className="page-enter">Animation Test</div>
      </div>
      <AppWithRouter />
    </Router>
  );
}

export default App;
