import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <p>
        This project was coded by Vanessa Teixeira and is open-sourced on {""}
        <a
          href="https://github.com/vanessateixeira92/react-github-netlify"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        {""}
        and hosted on{" "}
        <a
          href="https://react-github-netlify-project.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </p>
    </div>
  );
}

export default App;
