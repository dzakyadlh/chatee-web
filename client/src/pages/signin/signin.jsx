import React, { useState } from "react";
import { useNavigate } from "react-router";
import useLocalStorage from "use-local-storage";

import { Button, FloatingLabel, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./signin.css";
import Navbar from "../../components/navbar/navbar";

const SignIn = () => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");
    const payload = { email, password };
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      handleLogin();
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <main className="signInContainer mainContainer" data-theme={theme}>
        <h4>Sign In</h4>
        <section className="signInField">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mt-3 mb-3 inputField"
          >
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mt-3 mb-3 inputField"
          >
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              onKeyUp={handleEnter}
            />
          </FloatingLabel>
          <Button className="btnSignin">Sign In</Button>
        </section>
      </main>
    </React.Fragment>
  );
};

export default SignIn;
