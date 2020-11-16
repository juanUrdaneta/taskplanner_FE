import React, { useState } from "react";

const TEST = {
  name: "Task 1",
  description:
    "This is the descrtiption This is the descrtiption This is the descrtiption This is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiption This is the descrtiption This is the descrtiption This is the descrtiption This is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiption This is the descrtiption This is the descrtiption This is the descrtiption This is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiptionThis is the descrtiption",
  tags: ["one", "two"],
  status: "In Progress",
};

function TaskPreview(props) {
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  return (
    <>
      <div
        className={`screencover ${isShowing ? "" : "screencover--is-hidden"} `}
      ></div>
      <div
        className={`taskpreview ${isShowing ? "" : "taskpreview--is-hidden"}`}
      >
        <div className="taskpreview__close" onClick={() => setIsShowing(false)}>
          <span className="material-icons">close</span>
        </div>
        {isPreviewing ? (
          <>
            <h1 className="taskpreview__title ">{TEST.name}</h1>
            <div className="taskpreview__description margin-top-small">
              <p className="taskpreview__description__text">
                {TEST.description}
              </p>
            </div>
            <div className="taskpreview__tags">
              {TEST.tags.map((tag) => (
                <div className="taskpreview__tag">
                  <p>{tag}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="taskpreview__edit">
            <input
              type="text"
              className="app_input app_input--full-width"
              placeholder="Name"
            />
            <textarea
              className="app_textarea margin-top-small"
              cols="30"
              rows="14"
            ></textarea>
            <input
              type="text"
              className="app_input margin-top-big app_input--full-width"
              placeholder="Tags"
              value={TEST.tags.join(",")}
            />
          </div>
        )}
        <div className="taskpreview__bottom margin-top-big">
          <button
            className="app_button app_button--yellow"
            onClick={() => setIsPreviewing((prev) => !prev)}
          >
            Edit
          </button>
          <div className="taskpreview__bottom__right">
            <button className="app_button app_button--red">Discard</button>
            <button className="app_button app_button--teal">Save</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskPreview;
