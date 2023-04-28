import React from "react";
import ReactDOM from "react-dom/client";
import "bootswatch/dist/vapor/bootstrap.min.css";
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar />
    <div className="container p-4">
      <App />
    </div>
  </>
);
