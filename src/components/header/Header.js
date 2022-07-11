import React from "react";
import "./header.css";
import { FcIdea } from "react-icons/fc";
import { FcFilledFilter } from "react-icons/fc";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <nav className="headerItems">
        <NavLink to="/">
          <button className="header-btn">Popular</button>
        </NavLink>
        <NavLink to="/battle">
          <button className="header-btn">Battle</button>
        </NavLink>
      </nav>
      <div className="header-Icon">
        <button onClick={props.handleToggleDark}>
          {props.darkMode ? <FcFilledFilter /> : <FcIdea />}
        </button>
      </div>
    </div>
  );
}

export default Header;
