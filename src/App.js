import React, { Fragment } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Customers from "./components/Customers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fakedata from "./components/Fakedata";

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
            <Route path="/fakedata" element={<Fakedata />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
