import React from "react";

const TEST = {
  name: "Task 1",
  tags: ["one", "two"],
  status: "In Progress",
};

function Card(props) {
  return (
    <div className="card">
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
