import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { TaskContext } from "../App";

function Navbar(props) {
  const { setIsPreviewOpened } = useContext(TaskContext);
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <div className="navbar__left">
          <h1>Autocity</h1>
        </div>
        <div className="navbar__right">
          {useLocation().pathname === "/newtask" ? (
            <Link to="/taskboard" className="text-decor-none">
              <h1 className="navbar__right__link">Task Board</h1>
            </Link>
          ) : (
            <Link
              to="/newtask"
              className="text-decor-none"
              onClick={() => setIsPreviewOpened(false)}
            >
              <h1 className="navbar__right__link">New Task</h1>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
