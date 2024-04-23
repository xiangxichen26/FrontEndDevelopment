import "./App.css";
import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import AboutUs from "./pages/AboutUs";
import JoinUs from "./pages/JoinUs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";


function App() {
  const [page, setPage] = useState("/");

  return (
    <div className="app">
      <Header className="header" setPage={setPage} />
      <div className="content">
        {page === "/" && <Home />}
        {page === "/groups" && <Groups />}
        {page === "/about-us" && <AboutUs />}
        {page === "/join-us" && <JoinUs />}
        {page === "/contact-us" && <ContactUs />}
        {page === "/privacy-policy" && <PrivacyPolicy />}
      </div>
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;
