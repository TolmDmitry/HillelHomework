import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
function Login() {
  const { setIsUserLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (email === "email@google.com" && password === "1234567") {
      localStorage.setItem("isLogin", true);
      setIsUserLogin(true);
    } else {
      localStorage.clear();
      alert("Wrong email or password");
    }
  }

  return (
    <div class="container">
      <form onSubmit={HandleSubmit}>
        <label for="uname">
          <b>Email</b>
        </label>
        <input
          type="email"
          placeholder="Enter Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={!validateForm()}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
