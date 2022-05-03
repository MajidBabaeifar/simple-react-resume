import React, { Fragment } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Customers from "./components/Customers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Nav />
        <div className="container-fluid p-0" style={{ transition: "1" }}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/customers" element={<Customers />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
