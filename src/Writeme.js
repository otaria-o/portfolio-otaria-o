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
    <div className="page">
      <main className="msx">
        <p>
          if you would like to contact me, don't hesitate to write to
          <br />
          <i> roberta.garavaglia.it@gmail.com</i>
          {/* <br />
          in case of exciting news, you can call me on this number :{" "}
          <i>+39 333 444 1503</i>
          <br /> */}
          <br />
          <img src="/heart.svg" alt="cuore" />
        </p>
      </main>
      <div></div>
      <footer className="footer">
        <Link to="/">
          <h2 className="back">«</h2>
        </Link>
        {credits === "off" && (
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
        )}
      </footer>
    </div>
  );
}

export default Writeme;
