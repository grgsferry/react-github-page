import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Blob from "./Blob";
import App from "./App";
import Projects from "./Projects";
import Resume from "./Resume";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <div class="container mx-auto max-w-2xl font-ibm text-gray-700">
      <Blob />
      <div class="mt-24 mx-5 mb-12 lg:mx-0 shadow-xl p-6 lg:p-8 rounded-xl">
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
