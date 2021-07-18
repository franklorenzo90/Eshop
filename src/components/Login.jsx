import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// My Components
import { useAuth } from "../custom-hooks/useAuth";
import LoginForm from "./LoginForm";
import Loading from "./Loading";

function Login() {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const handleSubmit = (values) => {
    const { username, password } = values;
    setIsLoading(true);
    login(
      username,
      password,
      () => {
        setIsLoading(false);
        localStorage.setItem("isLogged", true);
        localStorage.setItem("username", username);
        history.push("/home");
      },
      (error) => {
        setIsLoading(false);
        console.log(error);
        history.push("/");
      }
    );
  };

  return (
    <>
      {!isLoading ? (
        <LoginForm handleSubmit={(values) => handleSubmit(values)} />
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Login;
