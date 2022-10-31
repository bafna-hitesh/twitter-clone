import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DataProvider } from "./components/context";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <DataProvider>
      <App />
    </DataProvider>
  </Router>
  // <React.StrictMode>
  // </React.StrictMode>
);
