import Menu from "./Menu";
import Footer from "./Footer";

function About() {
  return (
    <div className="portfolio">
      <Menu />
      <section className="card">
        <article className="bio">
          <p>
            <b>
              Assistente sociale appassionata di scrittura e letteratura per
              l'infanzia.{" "}
            </b>
            <br />
            Classe 1984. Mattiniera e riservata.
            <br />
            Laurea magistrale in Sociologia, anno 2015.
            <br />
            Laurea triennale in Scienze del Servizio Sociale, anno 2007.
            Iscrizione all'albo della Lombardia.
            <br />
            <br />
            <p>
              Collaboro con
              <a
                style={{ textDecoration: "none" }}
                href="https://www.milkbook.it"
                target="_blank"
                rel="noopener noreferrer"
              >
                Milkbook
              </a>
              , un sito dedicato alla letteratura per l'infanzia. <br />
              Ho scritto alcuni pezzi per
              <a
                style={{ textDecoration: "none" }}
                href="https://www.altrianimali.it"
                target="_blank"
                rel="noopener noreferrer"
              >
                Altri Animali
              </a>
              .
              <br />
              Ho scritto cose su Primo Levi. Una recensione è stata pubblicata
              sul primo numero della rivista
              <a
                style={{ textDecoration: "none" }}
                href="https://journals.uniurb.it/index.php/materialismostorico"
                target="_blank"
                rel="noopener noreferrer"
              >
                Materialismo Storico
              </a>
              .
              <br />
              Su alcune riviste online si possono trovare certi miei raccontini,
              i più belli sono questi due:
              <a
                style={{ textDecoration: "none" }}
                href="https://rivista.inutile.eu/2018/02/teo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>Teo </i>
              </a>{" "}
              e{" "}
              <a
                style={{ textDecoration: "none" }}
                href="https://bellevillenews.it/2020/08/05/quando-partivano-i-soldati-di-roberta-garavaglia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>Quando partivano i soldati</i>
              </a>
              .
              <br />
              <br />
              Ho partecipato al <i>Corso della voce</i> di Booksound a Milano
              nel 2018.
              <br />
              Nel 2019 al corso <i>I fondamenti della scrittura</i> tenuto da
              Gaia Manzini e organizzato dalla scuola Belleville.
            </p>
          </p>
          <aside className="fotine">
            {/* <p className="arrow">&larr;</p> */}
            <img className="slide" src="/1699264530278.jpg" alt="apple" />
            {/* <p className="arrow">&rarr;</p> */}
          </aside>
          {/* <figcaption className="label">this is me</figcaption> */}
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default About;
