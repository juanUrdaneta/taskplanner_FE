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
    <div className="taskboard">
      <Bucket />
      <Bucket />
      <Bucket />
    </div>
  );
}

export default Taskboard;
