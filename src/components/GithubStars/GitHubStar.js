import "./githubstar.css";
import AllCard from "../allCard/AllCard";
import React, { useState, useEffect } from "react";
import Loading from "../loading/Loading";

function GitHubStar(props) {
  // const allTags = ["all", "Java", "Javascript", "Rubby", "Python", "css"];

  let [data, setData] = useState(null);
  let [tag, setTag] = useState("all");

  useEffect(() => {
    fetchData(tag);
    return () => {};
  }, [tag]);

  function handleTags({ target }) {
    let id = target.dataset.id;
    setTag(id);
    fetchData(tag);
  }

  function fetchData(tag) {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${tag}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went Wrong");
        } else {
          return res.json();
        }
      })
      .then((data) => setData(data.items))
      .catch((err) => console.log(err));
  }

  return (
    <main className="main">
      <header className="main-center">
        <nav className="flex-sb">
          <h3
            className={tag === "all" ? "active" : ""}
            data-id="all"
            onClick={(event) => handleTags(event)}
          >
            All
          </h3>
          <h3
            className={tag === "javascript" ? "active" : ""}
            data-id="javascript"
            onClick={(event) => handleTags(event)}
          >
            JavaScript
          </h3>
          <h3
            className={tag === "ruby" ? "active" : ""}
            data-id="ruby"
            onClick={(event) => handleTags(event)}
          >
            Ruby
          </h3>
          <h3
            className={tag === "java" ? "active" : ""}
            data-id="java"
            onClick={(event) => handleTags(event)}
          >
            Java
          </h3>
          <h3
            className={tag === "css" ? "active" : ""}
            data-id="css"
            onClick={(event) => handleTags(event)}
          >
            CSS
          </h3>
          <h3
            className={tag === "python" ? "active" : ""}
            data-id="python"
            onClick={(event) => handleTags(event)}
          >
            Python
          </h3>
        </nav>
      </header>

      {data ? <AllCard data={data} /> : <Loading />}
    </main>
  );
}

export default GitHubStar;
