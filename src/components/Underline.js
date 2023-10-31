import ReactDOM from "react-dom";
import { ReactP5Wrapper } from "react-p5-wrapper";

export default function Underline(p) {
  const sketch = (p) => {
    var x = p.windowWidth;

    p.setup = function () {
      let canvas = p.createCanvas(p.windowWidth, 50);
      // canvas.parent('line-container');
      p.background(0, 0);
    };

    p.draw = function () {
      p.stroke("#a8ebed");
      p.strokeWeight(0.1);
      p.line(x, 1, p.windowWidth, 1);
      if (x > 0) x -= 5;
    };
  };

  return (
    <div className="Underline">
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Underline />, rootElement);
