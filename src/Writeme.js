import { Link } from "react-router-dom";
import { useState } from "react";

function Writeme() {
  const [credits, setCredits] = useState("off");
  const handleCredits = () => {
    if (credits === "off") {
      setCredits("on");
    }
    if (credits === "on") {
      setCredits("off");
    }
  };
  return (
    <div className="contacts">
      <main className="msx">
        <p>
          if you have a message for me, don't hesitate to write to
          roberta.garavaglia.it@gmail.com
          <br />
          in case of exciting news, you can call me on this number : +39 333 444
          1503
          <br />
          <img src="/heart.svg" alt="cuore" />
        </p>
      </main>
      <footer className="footer">
        <Link to="/">
          <h2 className="back">roberta garavaglia</h2>
        </Link>
        {credits === "off" && (
          <h2 className="pointer" onClick={handleCredits}>
            credits
          </h2>
        )}
        {credits === "on" && (
          <ul className="creditslist">
            <button onClick={handleCredits}>x</button>
            <li>Maki icon by Mapbox</li>
            <li>Simple Icons</li>
            <li>SPICED Academy for the social network project</li>
            <li>Amèlie Poulain - homepage pic</li>
            <li>DeepL Translate - mamma!</li>
          </ul>
        )}
      </footer>
    </div>
  );
}

export default Writeme;
