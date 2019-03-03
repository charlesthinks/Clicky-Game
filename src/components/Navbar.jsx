import React from "react";

function Navbar(props) {
  return (
    <React.Fragment>
      <nav className="navbar fixed-top navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Clicky Game</span>
        <span className="navbar-text">Score: {props.count}</span>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
