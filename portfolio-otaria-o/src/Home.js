import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [tendina, setTendina] = useState(false);
  const handlePortfolio = (evt) => {
    if (tendina === false) {
      setTendina(true);
    } else if (tendina === true) {
      setTendina(false);
    }
  };
  return (
    <section className="main">
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
      <div className="portfoliobar">
        <p onClick={handlePortfolio}>PORTFOLIO</p>
        {tendina === true && (
          <nav className="tendina">
            <Link to="/app">
              <p>APPS</p>
            </Link>
            <Link to="/gif">
              <p>GIFS</p>
            </Link>
            <Link to="/contributions">
              <p>CONTRIBUTIONS</p>
            </Link>
          </nav>
        )}
      </div>
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
