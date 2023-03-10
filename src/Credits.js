import { useState } from "react";

function Credits() {
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
    <div>
      <h2
        style={{ fontSize: "small" }}
        onClick={handleCredits}
        className="pointer"
      >
        CREDITS
      </h2>
      {credits === "on" && (
        <ul className="creditslist">
          <li>Maki icon by Mapbox</li>
          <li>Simple Icons</li>
          <li>SPICED Academy</li>
          <li>Amèlie Poulain - in the pic!</li>
          {/* <button onClick={handleCredits}>x</button> */}
        </ul>
      )}
    </div>
  );
}

export default Credits;
