import React from "react";
import { AuthContext } from "../context/context";
function AuthProvider({ children, login }) {
  return (
    <AuthContext.Provider value={{ ...login }}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
