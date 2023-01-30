import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TContextProvider } from "./context/TContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TContextProvider>
      <App />
    </TContextProvider>
  </React.StrictMode>
);
