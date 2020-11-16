import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { logUser } from "../Requests/authentication.js";
import catchAsync from "../utils/catchAsyncMethod";

function Login(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = catchAsync(async (email, password) => {
    const response = await logUser(email, password);
    console.log(response);
    if (response.status === "success") {
      sessionStorage.setItem("jwt", response.data.token.toString());
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
