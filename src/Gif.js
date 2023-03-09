import Menu from "./Menu";
import Footer from "./Footer";

function Gif() {
  return (
    <div className="portfolio">
      <Menu />
      <section classname="card">
        <section className="cardpreview">
          <h3>omina</h3>
          <img className="animated" src="/omina.gif"></img>
        </section>
        <section className="cardpreview">
          <h3>other gifs</h3>
          <p>are coming soon :)</p>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default Gif;
