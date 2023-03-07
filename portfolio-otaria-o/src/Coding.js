function Coding() {
  return (
    <div className="board">
      <h2>APPS</h2>
      <section className="cardpreview">
        <h3>I like books</h3>
        <img
          className="preview"
          src="/bcbf2023.png"
          alt="colourful calendar"
        ></img>
        <figcaption>
          a calendar dedicated to the Bologna Children's Book Fair, 6-9 March
          2023, 60th edition, Bologna, Italy. it is on line!{" "}
          <a
            href="https://bcbf2023-calendar.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            »»
          </a>
        </figcaption>
      </section>
      <section className="cardpreview">
        <h3>I like cookies</h3>
        <img
          className="preview"
          src="/bcbf2023.png"
          alt="colourful calendar"
        ></img>
        <figcaption>
          a mini social network for cookie lovers : you can register, upload a
          profile pic, search for people, ask for friendship and even end
          friendships, and if you want to share your thoughts there is a group
          chat.{" "}
          <a
            href="https://github.com/otaria-o/social-cookies"
            target="_blank"
            rel="noopener noreferrer"
          >
            »»
          </a>
        </figcaption>
      </section>
    </div>
  );
}

export default Coding;
