import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="board" id="home">
      <h1 className="name">roberta garavaglia</h1>
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
          <button className="button">PORTFOLIO</button>
        </Link>
        <a
          href="http://independent.academia.edu/robertagaravaglia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src="/academia.svg" alt="academia" />
        </a>
        <Link to="/contacts">
          <img className="icon" src="/gmail.svg" alt="gmail" />
        </Link>
      </section>
      <footer>
        <img className="home" src="/heart.jpg" alt="grande cuore nero" />
      </footer>
    </div>
  );
}

export default Home;
