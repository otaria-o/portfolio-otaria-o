import Menu from "./Menu";
import Footer from "./Footer";

function About() {
  return (
    <div className="portfolio">
      <Menu />
      <section className="msx">
        <section className="">
          <p>
            I grew up in Italy, close to Milan, and wanted to be a dancer.
            <br />I live with my husband and my daughter in Berlin.
          </p>
        </section>
        {/* <img
          className="pic"
          src="/large_amelie-1024x593.jpg"
          alt="Amelie kid"
        /> */}
      </section>
      <Footer />
    </div>
  );
}

export default About;