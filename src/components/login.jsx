import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { AuthConsumer } from "../AuthContext";
import { credentialsCheck } from "../state/fetch";

const Login = ({ processLogin, user }) => {
  const [username, setUsername] = useState("shubham");
  const [password, setPassword] = useState("1q2w3E$R%T");
  // const { state } = props.history.location;

  const alert = useAlert();
  const history = useHistory();
  useEffect(() => {
    if (user) {
      window.location = "/home";
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    credentialsCheck(username, password)
      .then((result) => {
        processLogin(result);
        alert.success("Sucessfully Logged in");
        history.push({
          pathname: "/home",
          state: {
            details: result,
          },
        });
      })
      .catch((error) => {
        console.log("Error here");
        console.log(error);
        alert.error("Username or password is incorrect.");
      });
  };

  return (
    <React.Fragment>
      <div className="container-fluid col-12 col-md-3 h-100 d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-12">
          <form
            className="form-horizontal"
            id="loginform"
            onSubmit={handleSubmit}
          >
            <div className="card p-4 border-0 rounded-lg">
              <div className="card-body text-center">
                <h4>Login User</h4>
                <div className="input-group login-input-group mt-4">
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="username"
                    required="required"
                  />
                </div>

                <div className="input-group login-input-group mt-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="password"
                    required="required"
                  />
                </div>

                <button className="btn btn-success mt-4" type="submit">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default (props) => (
  <AuthConsumer>
    {({ processLogin, userName }) => (
      <Login processLogin={processLogin} user={userName}></Login>
    )}
  </AuthConsumer>
);
