import Coding from "./Coding";
import Gif from "./Gif";
import Contributions from "./Contributions";
import { useState } from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  const [thanks, setThanks] = useState("off");
  const handleThanks = () => {
    if (thanks === "off") {
      setThanks("on");
    }
    if (thanks === "on") {
      setThanks("off");
    }
  };
  return (
    <div>
      <section id="tutto">
        <Coding></Coding>
        <Gif></Gif>
        <Contributions></Contributions>
      </section>
      <footer className="footer">
        <Link to="/">
          <h2 className="back">roberta garavaglia</h2>
        </Link>
        {thanks === "off" && (
          <h2 className="pointer" onClick={handleThanks}>
            thanks
          </h2>
        )}
        {thanks === "on" && (
          <p className="creditslist">
            thanks to bears <button onClick={handleThanks}>x</button>
          </p>
        )}
      </footer>
    </div>
  );
}

export default Portfolio;
