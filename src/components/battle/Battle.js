import "./battle.css";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { GiShadowFollower } from "react-icons/gi";
import { FcSportsMode } from "react-icons/fc";
import { FcPositiveDynamic } from "react-icons/fc";
import { FcManager } from "react-icons/fc";
import React from "react";

function Battle(props) {
  console.log(props);
  let user1 = props.location.state[0];
  let user2 = props.location.state[1];

  let winner;
  let looser;

  if (
    user1.public_repos * 20 + user1.followers >
    user2.public_repos * 20 + user1.followers
  ) {
    winner = user1;
    looser = user2;
  } else {
    winner = user2;
    looser = user1;
  }

  return (
    <main className="main-div">
      <section className="main-sec flex-sb">
        <div className="lSec">
          <h4>Winner</h4>
          <div>
            <img src={winner.avatar_url} alt={winner.login} />
          </div>

          <h4> Score: {winner.public_repos * 20 + winner.followers}</h4>

          <div className="div">
            <div className="flex">
              <i className="fas fa-user text-green-300 mr-3"></i>
              <h4>{winner.login}</h4>
            </div>
          </div>

          <div className="div">
            <div className="flex">
              <GiShadowFollower />
              <h4> {winner.followers}</h4>
            </div>
          </div>

          <div className="div">
            <div className="flex">
              <FcSportsMode />
              <h4> {winner.following}</h4>
            </div>
          </div>

          <div className="div">
            <div className="flex">
              <FcPositiveDynamic />
              <h4> {winner.public_repos}</h4>
            </div>
          </div>
          <div className="div">
            <div className="flex">
              <FcManager />
              <h4> {winner.location}</h4>
            </div>
          </div>
        </div>

        <div className="rSec">
          <h4>looser</h4>
          <div>
            <img src={looser.avatar_url} alt={looser.login} />
          </div>

          <h4> Score: {looser.public_repos * 20 + winner.followers}</h4>

          <div className="div">
            <div className="flex">
              <i className="fas fa-user text-green-300 mr-3"></i>
              <h4>{looser.login}</h4>
            </div>
          </div>

          <div className="div">
            <div className="flex">
              <GiShadowFollower />
              <h4>{looser.followers}</h4>
            </div>
          </div>

          <div className="div">
            <div className="flex">
              <FcSportsMode />
              <h4>{looser.following}</h4>
            </div>
          </div>

          <div className="div">
            <div className="flex">
              <FcPositiveDynamic />
              <h4>{looser.public_repos}</h4>
            </div>
          </div>

          <div className="div">
            <div className="flex">
              <FcManager />
              <h4>{looser.location}</h4>
            </div>
          </div>
        </div>
      </section>
      <div className="reset">
        <Link to="/battle">
          <button>Reset</button>
        </Link>
      </div>
    </main>
  );
}

export default withRouter(Battle);
