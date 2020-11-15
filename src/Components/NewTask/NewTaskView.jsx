import React from "react";
import Deletedtasks from "./DeletedTasks";
import Newtask from "./NewTask";

function NewTaskView(props) {
  return (
    <div className="newtask-view">
      <Newtask />
      <Deletedtasks />
    </div>
  );
}

export default NewTaskView;
