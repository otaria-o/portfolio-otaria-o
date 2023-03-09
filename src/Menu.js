import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="nav">
      <Link to="/apps">
        <h2>APPS</h2>
      </Link>
      <Link to="/gifs">
        <h2>GIFS</h2>
      </Link>
      <Link to="/contributions">
        <h2>CONTRIBUTIONS</h2>
      </Link>
    </nav>
  );
}

export default Menu;
