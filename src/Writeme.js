import { Link } from "react-router-dom";

function Writeme() {
  return (
    <div className="page">
      <main className="msx">
        <p>
          Se vuoi contattarmi, scrivimi a questo indirizzo:
          <br />
          <i> roberta.garavaglia.it@gmail.com</i>
          {/* <br />
          in case of exciting news, you can call me on this number :{" "}
          <i>+39 333 444 1503</i>
          <br /> */}
          <br />
          <img src="/heart.svg" alt="cuore" />
        </p>
      </main>
      <div></div>
      <footer className="footer" id="writeme">
        <Link style={{ textDecoration: "none" }} to="/">
          <h2 className="back">roberta garavaglia</h2>
        </Link>
      </footer>
    </div>
  );
}

export default Writeme;
