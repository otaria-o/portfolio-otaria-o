import Home from "./Home";
import About from "./About";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <h2 className="back">«</h2>
      </Link>
      {/* <Link to="/about">
        <h2>about</h2>
      </Link> */}
    </footer>
  );
}

export default Footer;
