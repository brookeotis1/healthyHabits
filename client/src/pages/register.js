import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//import API from "../utils/API"
import { apiAuth } from "../utils/api/auth";
import { useAuth } from "../utils/context/AuthContext";
import {
  AuthContainer,
  AuthRow,
  AuthColumn,
  AuthFormGroup,
  AuthLabel,
  AuthInput,
  AuthButton,
} from "../components/Auth";

export function Register() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const { auth, setAuth } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (auth) {
      history.push("/profile");
    }
  }, []);

  function _handleChange(event) {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  function _handleSubmit(event) {
    event.preventDefault();
    const { username, password } = state;

    apiAuth
      .register(username, password)
      .then((token) => {
        setAuth({ ...auth, token });
        setTimeout(() => {
          history.push("/profile");
        })
      })
      .catch((err) => {
        // Choose your error notification
        // console.log("err", err);
      });
  }

  return (
    <AuthContainer className="mt-5">
      <AuthRow>
        <AuthColumn className="col-md-6 offset-md-3">
          <h1 className="mb-4">Register</h1>
          <form onSubmit={_handleSubmit}>
            <AuthFormGroup>
              <AuthLabel>Email</AuthLabel>
              <AuthInput
                type="text"
                name="username"
                value={state.username}
                onChange={_handleChange}
              />
            </AuthFormGroup>
            <AuthFormGroup>
              <AuthLabel>Password</AuthLabel>
              <AuthInput
                type="password"
                name="password"
                value={state.password}
                onChange={_handleChange}
              />
            </AuthFormGroup>
            <AuthFormGroup className="text-right">
              <AuthButton className="btn-primary">Register</AuthButton>
            </AuthFormGroup>
          </form>
        </AuthColumn>
      </AuthRow>
    </AuthContainer>
  );
}
