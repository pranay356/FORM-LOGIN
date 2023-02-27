import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login-wrapper">
      <div className="card">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="username"></input>
          </div>
          <div className="form-group">
            <label> Password</label>
            <input type="password" placeholder="password"></input>
          </div>
          <div> <button  className="form-button"> Login </button></div>
          </form>
          </div>
          </div>
  )

}
export default Login;