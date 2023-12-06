import Menu from "./Menu";
import Footer from "./Footer";

function About() {
  return (
    <div className="portfolio">
      <Menu />
      <section className="card">
        <article className="bio">
        
          <p>
          I am returning to Italy after two years in Berlin and I am ready for new adventures. 
          <br/> My previous jobs in social work and in retail have helped me to develop skills such as organization and dealing with people. 
          <br/> I am passionate about children's literature and write book reviews for Milkbook, a dedicated website.
          <br/> I am also a free translator for freeCodeCamp, an open source project and a friendly community where you can learn to code for free - someone told me that programming languages are like foreign languages, so I started learning JavaScript, Python, HTML, CSS, React, PostgreSQL, Linux, web accessibility.
          <br/> I would like to start new experiences and maybe find a way to combine my interests in books, social work, and the web.
           
          </p>
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default About;
