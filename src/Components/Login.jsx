import React from "react";

function Login(props) {
  return (
    <div className="login">
      <input className="app_input" placeholder="Usuario" type="text" />
      <input className="app_input" placeholder="Contraseña" type="password" />
      <button className="app_button app_button--teal">Log in</button>
    </div>
  );
}

export default Login;
