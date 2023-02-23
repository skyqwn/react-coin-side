import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "../Routes/Detail";
import Home from "../Routes/Home";

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
};

export default Pages;
