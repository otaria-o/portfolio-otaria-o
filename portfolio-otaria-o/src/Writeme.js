import { useState } from "react";

function Writeme() {
  // const [language, setLanguage] = useState("ENG");
  // const handleIta = () => {
  //   setLanguage("ITA");
  // };
  // const handleEng = () => {
  //   setLanguage("ENG");
  // };
  return (
    <section className="msx">
      {/* <aside className="language">
            <p onClick={handleEng}>ENG</p>
            <p>|</p>
            <p onClick={handleIta}>ITA</p>
          </aside> */}
      <main className="info">
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
    </section>
  );
}

export default Writeme;
