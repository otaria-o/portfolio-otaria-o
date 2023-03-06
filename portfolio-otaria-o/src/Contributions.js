import { useState } from "react";

function Contributions() {
  const [language, setLanguage] = useState("ENG");
  const handleIta = () => {
    setLanguage("ITA");
  };
  const handleEng = () => {
    setLanguage("ENG");
  };
  return (
    <div>
      <aside className="language">
        <p onClick={handleEng}>ENG</p>
        <p>|</p>
        <p onClick={handleIta}>ITA</p>
      </aside>
      <div className="info">
        <section>
          <h1>TECH</h1>
          <a href="" target="_blank" rel="noopener noreferrer">
            <p>freeCodeCamp's translation program</p>
          </a>
        </section>
        <section>
          <h1>LIT</h1>
          <a href="" target="_blank" rel="noopener noreferrer">
            <p>Milkbook, an italian website about children's literature</p>
          </a>
          <p>Altri Animali Tuffi</p>
        </section>
      </div>
    </div>
  );
}

export default Contributions;
// https://www.milkbook.it/author/roberta-garavaglia/
// https://www.altrianimali.it/author/roberta-garavaglia/
// https://tuffirivista.com/immersioni/
