import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <div className="navbar__left">
          <h1>Autocity</h1>
        </div>
        <div className="navbar__right">
          <h1>New Task</h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
