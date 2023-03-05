import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Writeme from "./Writeme";
import Portfolio from "./Portfolio";
import Coding from "./Coding";
import Gif from "./Gif";
import Contributions from "./Contributions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/write-me" element={<Writeme />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/app" element={<Coding />}></Route>
        <Route path="/gif" element={<Gif />}></Route>
        <Route path="/contributions" element={<Contributions />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
