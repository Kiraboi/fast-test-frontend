import React from "react";
import useLocalStorage from "./state/localStorage.hook";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [userName, setUserName] = useLocalStorage("user", null);
  const [token, setToken] = useLocalStorage("token", null);
  const [email, setEmail] = useLocalStorage("email", null);
  const [isStaff, setIsStaff] = useLocalStorage("isStaff", false);

  const processLogin = (loginResponse) => {
    if (loginResponse) {
      setToken(loginResponse.token);
      setEmail(loginResponse.email);
      setUserName(loginResponse.user_name);
      setIsStaff(loginResponse.staff);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userName: userName,
        token: token,
        email: email,
        processLogin: processLogin,
        isStaff: isStaff,
        history: window.history,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
