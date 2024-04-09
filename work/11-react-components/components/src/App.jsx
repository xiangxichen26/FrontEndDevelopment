import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cats from "./components/Cats";
import About from "./components/About";

function App() {
  const [ page, setPage ] = useState("/");

  return (
    <div className="app">
      <Header setPage={setPage}/>
      <div className="content">
      {page === "/" && <Home />}
      {page === "/cats" && <Cats setPage={setPage} />}
      {page === "/about" && <About />}
      {page === "/privacy" && <div>Privacy Policy</div>}
      {page === "/work" && <div>Work for us</div>}
      {page === "/contact" && <div>Contact Us</div>}
      {page === "/media" && <div>Social Media</div>}
      </div>
      <Footer setPage={setPage}/>
    </div>
  );
}

export default App;
