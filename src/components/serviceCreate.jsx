import React, { useState, useEffect } from "react";
import { AuthConsumer } from "../AuthContext";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { serviceSave } from "../state/fetch";

const ServiceCreate = ({ user, token, history }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const alert = useAlert();

  useEffect(() => {
    if (!user || user === undefined) {
      window.location = "/";
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    serviceSave(title, description, token)
      .then((result) => {
        if (result == 201) {
          alert.success("Sucessfully posted the service");
          window.location = "/home";
        }
      })
      .catch((error) => {
        console.log("Error here");
        console.log(error);
        alert.error("Failed to posted the service");
      });
  };

  return (
    <React.Fragment>
      <div className="container-fluid col-12 col-md-4">
        <div className="col-12 col-md-12 mt-5">
          <form className="form-horizontal" onSubmit={handleSubmit}>
            <div className="card p-4 border-0 rounded-lg shadow-sm">
              <div className="card-body text-center">
                <h4>Create new post</h4>
                <div className="input-group login-input-group mt-4">
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Title of the service"
                    required="required"
                  />
                </div>

                <div className="input-group login-input-group mt-3">
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Details of the service"
                    required="required"
                  />
                </div>

                <button className="btn btn-success mt-4" type="submit">
                  Post
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
    {({ userName, token, history }) => (
      <ServiceCreate
        user={userName}
        token={token}
        history={history}
        {...props}
      ></ServiceCreate>
    )}
  </AuthConsumer>
);
