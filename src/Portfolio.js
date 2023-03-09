import Coding from "./Coding";
import Gif from "./Gif";
import Contributions from "./Contributions";
import Menu from "./Menu";
import Footer from "./Footer";
import { useState } from "react";

function Portfolio() {
  return (
    <div className="portfolio">
      <Menu />
      <section>
        {/* {credits === "off" && (
          <h2 className="pointer" onClick={handleCredits}>
            credits
          </h2>
        )}
        {credits === "on" && (
          <ul className="creditslist">
            <li>Maki icon by Mapbox</li>
            <li>Simple Icons</li>
            <li>SPICED Academy</li>
            <li>
              Amèlie Poulain - pic!{"   "}
              <button onClick={handleCredits}>x</button>
            </li>
          </ul>
        )} */}
      </section>
      <Footer />
    </div>
  );
}

export default Portfolio;
