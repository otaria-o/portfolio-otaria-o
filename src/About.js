import Menu from "./Menu";
import Footer from "./Footer";

function About() {
  return (
    <div className="portfolio">
      <Menu />
      <section>
        <section className="cardpreview">
          <p>
            I grew up in Italy, close to Milan, and wanted to be a dancer.
            <br />I live in Berlin with my husband and daughter.
          </p>
        </section>
        <img
          className="pic"
          src="/large_amelie-1024x593.jpg"
          alt="Amelie kid"
        />
      </section>
      <Footer />
    </div>
  );
}

export default About;
