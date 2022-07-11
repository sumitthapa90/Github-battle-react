import "./player.css";
import { ImCross } from "react-icons/im";

function Player(props) {
  const inputText1 = props.inputText1;
  const inputText2 = props.inputText2;

  return (
    <div className="input-field  flex-sb">
      <div className="first-input">
        <form
          onSubmit={(event) => props.handleSubmit(event)}
          data-id="inputText1"
        >
          <label className="flex">Player 1</label>
          <input
            type="text"
            placeholder="GitHub Username"
            data-id="inputText1"
            className="input-text-field"
            value={inputText1}
            onChange={(event) => props.handleChange(event)}
            onKeyDown={(event) => props.handleKeyPress(event)}
          />
          <input type="submit" value="submit" className="input-btn" />
        </form>

        {props.hideForm1 && (
          <div className="Guser flex-sb">
            <div className="Iuser">
              <img src={props.data1.avatar_url} alt={props.data1.login} />
            </div>
            <h3>{props.data1.login}</h3>
            <div className="cross-icon">
              <ImCross
                data-id="user1"
                onClick={(event) => props.closeUserData(event)}
              />
            </div>
          </div>
        )}
      </div>

      <div className="first-input">
        <form
          onSubmit={(event) => props.handleSubmit(event)}
          data-id="inputText2"
        >
          <label className="flex">Player 2</label>
          <input
            type="text"
            placeholder="GitHub Username"
            className="input-text-field"
            data-id="inputText2"
            value={inputText2}
            onChange={(event) => props.handleChange(event)}
            onKeyDown={(event) => props.handleKeyPress(event)}
          />
          <input type="submit" value="submit" className="input-btn" />
        </form>

        {props.hideForm2 && (
          <div className="Guser flex-sb">
            <div className="Iuser">
              <img src={props.data2.avatar_url} alt={props.data2.login} />
            </div>
            <h3>{props.data2.login} </h3>

            <div className="cross-icon">
              <ImCross
                data-id="user2"
                onClick={(event) => props.closeUserData(event)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Player;
