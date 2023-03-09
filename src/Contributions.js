import Menu from "./Menu";
import Footer from "./Footer";

function Contributions() {
  return (
    <div className="portfolio">
      <Menu />
      <div className="card" id="cursor">
        <section className="cardpreview">
          <h3>things that I do for tech:</h3>
          <p>
            free translator at freeCodeCamp.
            <a
              href="https://www.freecodecamp.org/italian/news/"
              target="_blank"
              rel="noopener noreferrer"
            >
              »»
            </a>
          </p>
        </section>
        <br />
        <section className="cardpreview">
          <h3>things that I do for lit:</h3>
          <p>
            I collaborate with Milkbook, an italian website about children's
            literature.{" "}
            <a
              href="https://www.milkbook.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              »»
            </a>
            <br />I also wrote few articles for Altri Animali.{" "}
            <a
              href="https://www.altrianimali.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              »»
            </a>
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Contributions;

// https://www.milkbook.it/author/roberta-garavaglia/
// https://www.altrianimali.it/author/roberta-garavaglia/
// https://tuffirivista.com/immersioni/
