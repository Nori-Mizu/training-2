import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createContext } from "react";

const codeInfo = {
  name: "Michael Schenker",
  age: 35,
};

const CodeContext = createContext(codeInfo);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CodeContext.Provider value={codeInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CodeContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default CodeContext;
