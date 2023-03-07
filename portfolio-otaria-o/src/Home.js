import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="board">
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
        <Link to="/portfolio">
          <p className="link">PORTFOLIO</p>
        </Link>
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
      <footer>
        <img src="/heart.jpg"></img>
      </footer>
    </div>
  );
}

export default Home;
