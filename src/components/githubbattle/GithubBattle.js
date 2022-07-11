import "./githubbattle.css";
import React, { useState } from "react";
import Player from "../player/Player";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiBattleAxe } from "react-icons/gi";
import { GiPodiumWinner } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function GithubBattle(props) {
  const [inputText1, setInputText1] = useState("");
  const [inputText2, setInputText2] = useState("");
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [hideForm1, setHideForm1] = useState(false);
  const [hideForm2, setHideForm2] = useState(false);

  function handleChange({ target }) {
    let { value } = target;
    let id = target.dataset.id;
    if (id === "inputText1") {
      setInputText1(value);
    } else {
      setInputText2(value);
    }
  }

  function handleKeyPress(event) {
    if (event.target === 13) {
      handleSubmit(event);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    let id = event.target.dataset.id;
    if (inputText1 || inputText2) {
      fetch(`https://api.github.com/users/${inputText1 || inputText2}`)
        .then((res) => res.json())
        .then((data) => {
          if (id === "inputText1") {
            setData1(data);
            setHideForm1(true);
            setInputText1("");
          } else {
            setData2(data);
            setHideForm2(true);
            setInputText2("");
          }
        });
    }
  }

  function closeUserData({ target }) {
    let id = target.dataset.id;
    if (id === "user1") {
      setHideForm1(!hideForm1);

      setData1("");
    } else {
      setHideForm2(!hideForm2);

      setData2("");
    }
  }

  return (
    <div>
      <main className="name">
        <section className="sec">
          <h1>Instructions</h1>
          <div className="flex-sb">
            <div className="center">
              <h3>Enter two Github users</h3>
              <div>
                <BsFillPeopleFill className="react-icon" />
              </div>
            </div>

            <div>
              <h3>Battle</h3>
              <div>
                <GiBattleAxe className="react-icon" />
              </div>
            </div>

            <div>
              <h3>Know the Winner</h3>
              <div>
                <GiPodiumWinner className="react-icon" />
              </div>
            </div>
          </div>
        </section>

        <section className="players-sec">
          <div className="player-text">
            <h2 className="ph1">Player</h2>
            <div className="player-input">
              <Player
                inputText1={inputText1}
                inputText2={inputText2}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleKeyPress={handleKeyPress}
                data1={data1}
                data2={data2}
                hideForm1={hideForm1}
                hideForm2={hideForm2}
                closeUserData={closeUserData}
              />
            </div>
            <div className="userBattle">
              <NavLink
                to={{ pathname: "/userBattle", state: [data1, data2] }}
                className="navLink3"
              >
                <h4>Battle</h4>
              </NavLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default GithubBattle;
