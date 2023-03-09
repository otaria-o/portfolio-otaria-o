import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Writeme from "./Writeme";
import Portfolio from "./Portfolio";
import Coding from "./Coding";
import Gif from "./Gif";
import Contributions from "./Contributions";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contacts" element={<Writeme />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/apps" element={<Coding />}></Route>
        <Route path="/gifs" element={<Gif />}></Route>
        <Route path="/contributions" element={<Contributions />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
