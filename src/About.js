import Menu from "./Menu";
import Footer from "./Footer";

function About() {
  return (
    <div className="portfolio">
      <Menu />
      <section className="card">
        <section className="bio">
          <p>
            I grew up in Italy, close to Milan, and wanted to be a dancer.
            {/* <br />I have a Master's degree in Sociology and have recently
            completed an intensive Web Developer Full Stack bootcamp. I have */}
            <br />I worked in different fields: I have been a secretary, a
            social worker, a cashier and a bookseller.
            <br />I live with my husband and my daughter in Berlin. I like
            baking bread and cookies. I also enjoy going for walks, along the
            Spree and in the Tiergarten, sitting in a café and looking around,
            listening to my thoughts or to people's conversations. <br />I am
            passionate about books, especially picture books, and also poetry.
          </p>
          <aside className="fotine">
            {/* <p className="arrow">&larr;</p> */}
            <img className="slide" src="/1678464141377.jpg" alt="apple" />
            {/* <p className="arrow">&rarr;</p> */}
          </aside>
          {/* <figcaption className="label">this is me</figcaption> */}
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default About;
