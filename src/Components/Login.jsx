import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { TaskContext } from "../App.jsx";
import { logUser } from "../Requests/authentication.js";
import { formatUser } from "../utils/misc";
import catchAsync from "../utils/catchAsyncMethod";

function Login(props) {
  const history = useHistory();
  const { user, setUser } = useContext(TaskContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = catchAsync(async (email, password) => {
    const response = await logUser(email, password);
    console.log(response);
    if (response.status === "success") {
      sessionStorage.setItem("jwt", response.data.token.toString());
      console.log(user, response.data.data);
      history.push("/taskboard");
    }
  });

  return (
    <div className="login">
      <input
        className="app_input"
        placeholder="Usuario"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="app_input"
        placeholder="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="app_button app_button--teal"
        onClick={() => login(email, password)}
      >
        Log in
      </button>
    </div>
  );
}

export default Login;
