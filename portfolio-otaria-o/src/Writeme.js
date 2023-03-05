import { useState } from "react";

function Writeme() {
  const [language, setLanguage] = useState("ENG");
  const handleLanguage = () => {
    if (language === "ENG") {
      setLanguage("ITA");
    } else if (language === "ITA") {
      setLanguage("ENG");
    }
  };
  return (
    <section>
      {language === "ENG" && (
        <section className="msx">
          <div className="language">
            <p onClick={handleLanguage}>ITA | ENG</p>
          </div>
          <p>
            if you have a message for me, don't hesitate to write to
            roberta.garavaglia.it@gmail.com
            <br />
            in case of super exciting news, you can call me on this number : +39
            333 444 1503
            <br />
            <img src="/heart.svg" alt="cuore" />
          </p>
        </section>
      )}
      {language === "ITA" && (
        <section className="msx">
          <div className="language">
            <p onClick={handleLanguage}>ITA | ENG</p>
          </div>
          <p>
            se hai un messaggio per me, non esitare a scrivere a
            roberta.garavaglia.it@gmail.com
            <br />
            in caso di notizie super entusiasmanti puoi chiamarmi al numero :
            +39 333 444 1503
            <br />
            <img src="/heart.svg" alt="cuore" />
          </p>
        </section>
      )}
    </section>
  );
}

export default Writeme;
