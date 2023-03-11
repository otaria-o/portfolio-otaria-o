import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="nav">
      <Link style={{ textDecoration: "none", color: "black" }} to="/apps">
        <h2>APPS</h2>
      </Link>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/contributions"
      >
        <h2>CONTRIBUTIONS</h2>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/gifs">
        <h2>GIFS</h2>
      </Link>
    </nav>
  );
}

export default Menu;
