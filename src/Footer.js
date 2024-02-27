import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      
      <Link style={{ textDecoration: "none" }} to="/">
        <h2>roberta garavaglia</h2>
      </Link>
      
    </footer>
  );
}

export default Footer;
