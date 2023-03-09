import Coding from "./Coding";
import Gif from "./Gif";
import Contributions from "./Contributions";
import Menu from "./Menu";
import Footer from "./Footer";
import { useState } from "react";
// import { Link } from "react-router-dom";

function Portfolio() {
  // const [thanks, setThanks] = useState("off");
  // const [apps, setApps] = useState(false);
  // const [gifs, setGifs] = useState(false);
  // const [contributions, setContributions] = useState(false);
  // const handleThanks = () => {
  //   if (thanks === "off") {
  //     setThanks("on");
  //   }
  //   if (thanks === "on") {
  //     setThanks("off");
  //   }
  // };
  // const handleApps = () => {
  //   setApps(true);
  //   setGifs(false);
  //   setContributions(false);
  // };
  // const handleGifs = () => {
  //   setGifs(true);
  //   setApps(false);
  //   setContributions(false);
  // };
  // const handleContributions = () => {
  //   setContributions(true);
  //   setGifs(false);
  //   setApps(false);
  // };
  return (
    <div className="portfolio">
      <Menu />
      <section>
        {/* {apps === true && <Coding></Coding>}
        {gifs === true && <Gif></Gif>}
        {contributions === true && <Contributions></Contributions>} */}
      </section>
      <Footer />
    </div>
  );
}

export default Portfolio;
