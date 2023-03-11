import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link style={{ textDecoration: "none", color: "black" }} to="/credits">
        <h2 style={{ fontSize: "small" }} className="">
          CREDITS
        </h2>
      </Link>
      <Link to="/">
        <h2>«</h2>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/about">
        <h2 style={{ fontSize: "small" }}>ABOUT</h2>
      </Link>
    </footer>
  );
}

export default Footer;
