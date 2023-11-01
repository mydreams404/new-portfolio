import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import { ReactP5Wrapper } from "react-p5-wrapper";

export default function App() {
  class Particle {
    //describes properties of a single particle
    constructor(p) {
      //sets co-ordinates, radius and speed
      this.x = p.random(0, p.width);
      this.y = p.random(0, p.height);
      this.r = p.random(1, 15);
      this.xSpeed = p.random(-0.1, 0.1);
      this.ySpeed = p.random(-0.1, 0.05);
    }

    createParticle(p) {
      p.noStroke();
      // let colours = ['rgba(168, 235, 237,0.1)', 'rgba(168, 235, 237,0.2)', 'rgba(168, 235, 237,0.5)']
      // fill(random(colours));
      p.fill("rgba(168, 235, 237,0.5)");
      p.circle(this.x, this.y, this.r);
    }

    moveParticle(p) {
      if (this.x < 0 || this.x > p.width) this.xSpeed *= -1;
      if (this.y < 0 || this.y > p.height) this.ySpeed *= -1;
      this.x += this.xSpeed;
      this.y += this.ySpeed;
    }

    joinParticles(particles, p) {
      particles.forEach((element) => {
        let dis = p.dist(this.x, this.y, element.x, element.y);
        if (dis < 150) {
          p.stroke("rgba(168, 235, 237,0.3)");
          p.line(this.x, this.y, element.x, element.y);
        }
      });
    }
  }

  const sketch = (p) => {
    let particles = [];

    p.setup = () => {
      p.createCanvas(p.windowWidth*0.7, p.windowHeight*0.9);
      for (let i = 0; i < p.windowWidth/15; i++) particles.push(new Particle(p));
    };

    p.draw = () => {
      p.clear();
      for (let i = 0; i < particles.length; i++) {
        particles[i].createParticle(p);
        particles[i].moveParticle(p);
        particles[i].joinParticles(particles, p);
      }
    };
  };

  return (
    <div className="App">
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
