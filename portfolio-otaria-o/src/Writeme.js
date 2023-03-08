import { Link } from "react-router-dom";

function Writeme() {
  return (
    <div className="contacts">
      <main className="msx">
        <p>
          if you have a message for me, don't hesitate to write to
          roberta.garavaglia.it@gmail.com
          <br />
          in case of exciting news, you can call me on this number : +39 333 444
          1503
          <br />
          <img src="/heart.svg" alt="cuore" />
        </p>
      </main>
      <footer className="footer">
        <Link to="/">
          <h2 className="back">roberta garavaglia</h2>
        </Link>
        <h2>credits</h2>
      </footer>
    </div>
  );
}

export default Writeme;
