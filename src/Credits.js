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
    <div className="credits">
      <h2
        style={{ fontSize: "small" }}
        onClick={handleCredits}
        className="pointer"
      >
        CREDITS
      </h2>
      {credits === "on" && (
        <ul className="creditslist">
          Maki icon by Mapbox, Simple Icons, SPICED Academy, 842.studio, Amèlie
          Poulain in the pic!
        </ul>
      )}
    </div>
  );
}

export default Credits;
