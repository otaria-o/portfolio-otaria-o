import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [tendina, setTendina] = useState(false);
  const handlePortfolio = () => {
    setTendina(!false);
  };
  return (
    <section>
      <a
        href="https://www.linkedin.com/in/roberta-garavaglia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="icon" src="/linkedin.svg" alt="linkedin" />
      </a>
      <a
        href="https://www.github.com/otaria-o"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="icon" src="/github.svg" alt="github" />
      </a>
      <p onClick={handlePortfolio}>PORTFOLIO</p>
      {setTendina === !false && <p>APP GIF CONTRIBUTIONS</p>}
      <a
        href="http://independent.academia.edu/robertagaravaglia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="icon" src="/academia.svg" alt="academia" />
      </a>
      <Link to="/write-me">
        <img className="icon" src="/gmail.svg" alt="gmail" />
      </Link>
    </section>
  );
}

export default Home;
