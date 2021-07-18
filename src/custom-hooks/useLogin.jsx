import { useState } from "react";
import axios from "axios";

function useLogin() {
  const [isLoggued, setIsLoggued] = useState(
    Boolean(localStorage.getItem("isLogged"))
  );
  const [userName, setUserName] = useState();
  const login = (user, password, success, error) => {
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: user,
        password,
      })
      .then((resp) => {
        if (resp.data.status === "Error") {
          error(resp.data);
        } else {
          setIsLoggued(true);
          setUserName(user);
          success();
        }
      })
      .catch((err) => error(err));
  };

  const logout = () => {
    setIsLoggued(false);
    localStorage.removeItem("isLogged");
    localStorage.removeItem("username");
    setUserName("");
  };

  return { userName, isLoggued, login, logout };
}

export default useLogin;
