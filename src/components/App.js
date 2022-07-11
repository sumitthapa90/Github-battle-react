import React, { useState } from "react";
import Header from "./header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";
import GitHubStar from "./GithubStars/GitHubStar";
import GithubBattle from "./githubbattle/GithubBattle";
import Battle from "./battle/Battle";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDark = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "container" : ""}>
      <BrowserRouter>
        <Header darkMode={darkMode} handleToggleDark={handleToggleDark} />
        <Route path="/" exact>
          <GitHubStar />
        </Route>

        <Route path="/battle">
          <GithubBattle darkMode={darkMode} />
        </Route>

        <Route path="/userbattle">
          <Battle darkMode={darkMode} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
