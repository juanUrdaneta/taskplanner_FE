import React, { useContext } from "react";
import { TaskContext } from "../../App";

const TEST = {
  name: "Task 1",
  tags: ["one", "two"],
  status: "In Progress",
};

function Card(props) {
  const taskContext = useContext(TaskContext);
  return (
    <div
      className="card"
      onDoubleClick={() => taskContext.setIsPreviewOpened(true)}
    >
      <h1 className="card__name">{TEST.name}</h1>
      <div className="card__tags margin-top-small">
        {TEST.tags.map((tag) => (
          <div className="card__tag">
            <p>{tag}</p>
          </div>
        ))}
      </div>
      <div className="card__bottom margin-top-small">
        <p className="card__status">{TEST.status}</p>
        <div className="card__shortcuts">
          <div className="delete">
            <span className="material-icons">delete_outline</span>
          </div>
          <div className="move-to">
            <span className="material-icons">double_arrow</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
