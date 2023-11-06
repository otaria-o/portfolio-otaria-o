import Menu from "./Menu";
import Footer from "./Footer";

function About() {
  return (
    <div className="portfolio">
      <Menu />
      <section className="card">
        <article className="bio">
        
          <p>
          pensieri liberi dopo due anni stranieri - 
          <br/>due anni fa circa mi sono trasferita a Berlino. i primi mesi sono stati un toccasana per la mia autostima, la lingua tedesca mi piace assai. 
          <br/>un anno fa ho cominciato un corso intensivo per web developer, con l'obiettivo di trovare lavoro e restare a Berlino - la cosa più impegnativa che abbia mai fatto. 
          perché - mi chiedo adesso, dopo aver assecondato entusiasmi labili e opinioni altrui - invece di scrivere un romanzo scrivevo codice per programmare mini social network e mappe di biblioteche? e perché il santissimo servizio che offrono le biblioteche a Berlino è a pagamento e in Italia no? 
          <br/>ero abbastanza brava - anche se non l'ho mai saputo ammettere -  a costruire reti quando facevo l'assistente sociale, ma non so sfruttare la mia rete per trovarmi un lavoro. 
          e invece di studiarle le reti - l'internetworking - ho pensato bene di mettermi a tradurre articoli, sulle reti e la tecnologia più in generale.
          <br/>rientrerò presto in Italia, in una città che può vantare un parco grandissimo. 
          <br/>vorrei trovare intanto il mio gene dell'introversione e coccolarlo tutta la notte. 
          <br/>tra poche settimane uscirà un mio post su un albo illustrato a cui tengo.
          
            // I grew up in Italy, close to Milan, and wanted to be a dancer.
            // {/* <br />I have a Master's degree in Sociology and have recently
            // completed an intensive Web Developer Full Stack bootcamp. I have */}
            // <br />I worked in different fields: I have been a secretary, a
            // social worker, a cashier and a bookseller.
            // <br />I live with my husband and my daughter in Berlin. I like
            // baking bread and cookies. I also enjoy going for walks, along the
            // Spree and in the Tiergarten, sitting in a café and looking around,
            // listening to my thoughts or to people's conversations. <br />I am
            // passionate about books, especially picture books, and also poetry.
          </p>
          <aside className="fotine">
            {/* <p className="arrow">&larr;</p> */}
            <img className="slide" src="/1678464141377.jpg" alt="apple" />
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
