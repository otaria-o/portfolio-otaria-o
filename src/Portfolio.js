import Coding from "./Coding";
import Gif from "./Gif";
import Contributions from "./Contributions";
import { useState } from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  const [thanks, setThanks] = useState("off");
  const [apps, setApps] = useState(false);
  const [gifs, setGifs] = useState(false);
  const [contributions, setContributions] = useState(false);
  const handleThanks = () => {
    if (thanks === "off") {
      setThanks("on");
    }
    if (thanks === "on") {
      setThanks("off");
    }
  };
  const handleApps = () => {
    setApps(true);
    setGifs(false);
    setContributions(false);
  };
  const handleGifs = () => {
    setGifs(true);
    setApps(false);
    setContributions(false);
  };
  const handleContributions = () => {
    setContributions(true);
    setGifs(false);
    setApps(false);
  };
  return (
    <div className="portfolio">
      <nav className="cardpreview">
        <h2 className="pointer" onClick={handleApps}>
          APPS
        </h2>
        <h2 className="pointer" onClick={handleGifs}>
          GIFS
        </h2>
        <h2 className="pointer" onClick={handleContributions}>
          CONTRIBUTIONS
        </h2>
      </nav>
      <section>
        {apps === true && <Coding></Coding>}
        {gifs === true && <Gif></Gif>}
        {contributions === true && <Contributions></Contributions>}
      </section>
      <footer className="footer">
        <Link to="/">
          <h2 className="back">«</h2>
        </Link>
        {/* {thanks === "off" && (
          <h2 className="pointer" onClick={handleThanks}>
            thanks
          </h2>
        )}
        {thanks === "on" && (
          <p className="creditslist">
            thanks to bears <button onClick={handleThanks}>x</button>
          </p>
        )} */}
      </footer>
    </div>
  );
}

export default Portfolio;
