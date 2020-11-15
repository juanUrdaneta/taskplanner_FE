import React from "react";
import Bucket from "./Bucket";

const TEST = [
  { name: "CARD 1" },
  { name: "CARD 1" },
  { name: "CARD 1" },
  { name: "CARD 1" },
  { name: "CARD 1" },
  { name: "CARD 1" },
];

function Taskboard(props) {
  return (
    <div>
      <nav className="navbar">NAV</nav>
      <Bucket />
      <Bucket />
      <Bucket />
    </div>
  );
}

export default Taskboard;
