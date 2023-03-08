import Coding from "./Coding";
import Gif from "./Gif";
import Contributions from "./Contributions";

function Portfolio() {
  return (
    <div id="tutto">
      <Coding></Coding>
      <Gif></Gif>
      <Contributions></Contributions>
      <footer className="footer">
        <h2 className="back">roberta garavaglia</h2>
        <h2>credits</h2>
      </footer>
    </div>
  );
}

export default Portfolio;
