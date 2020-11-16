import React from "react";
import TaskPreview from "../Taskpreview";
import Bucket from "./Bucket";

function Taskboard(props) {
  return (
    <>
      <TaskPreview />
      <div className="taskboard">
        <Bucket />
        <Bucket />
        <Bucket />
      </div>
    </>
  );
}

export default Taskboard;
