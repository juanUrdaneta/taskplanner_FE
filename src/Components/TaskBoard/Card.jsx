import React from "react";

const TEST = {
  name: "Task 1",
  description: "This is the task description",
  status: "In Progress",
};

function Card(props) {
  return (
    <div className="card">
      <h1 className="card__name">{TEST.name}</h1>
      <p className="card__description">{TEST.description}</p>
      <div className="card__bottom">
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
