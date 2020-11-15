import React from "react";

function Newtask(props) {
  return (
    <div className="newtask">
      <input
        type="text"
        className="app_input app_input--full-width margin-top-big"
        placeholder="Name"
      />
      <textarea
        className="margin-top-small app_textarea app_textarea--full-width"
        id=""
        placeholder="Task description"
        cols="30"
        rows="10"
      ></textarea>
      <input
        type="text"
        className="app_input app_input--full-width margin-top-small"
        placeholder="Tags"
      />
      <button className="app_button app_button--teal app_button--full-width margin-top-small">
        Attachment
      </button>
      <button className="app_button app_button--teal app_button--full-width margin-top-big">
        Create
      </button>
    </div>
  );
}

export default Newtask;
