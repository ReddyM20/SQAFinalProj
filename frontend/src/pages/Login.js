import React, { useState, useContext } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { AuthContext } from "../helpers/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setAuthState} = useContext(AuthContext);

  let Navigate = useNavigate();

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
      alert (response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({username: response.data.username, id: response.data.id, status: true});
        Navigate("/");
      }
  });
  };
  return (
    <div className="loginContainer">
      <label data-testid="username">Username:</label>
      <input
        type="text" data-testid="action-username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <label data-testid="password">Password:</label>
      <input
        type="password" data-testid="action-password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button onClick={login} data-testid="loginbtn">Login</button>
    </div>
  );
}

export default Login;