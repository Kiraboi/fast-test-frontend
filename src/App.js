import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Login from "./components/login";
import Create from "./components/create";
import Home from "./components/home";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" render={(props) => <Login {...props} />} />
          <Route path="/home" render={(props) => <Home {...props} />} />
          <Route path="/create" render={(props) => <Create {...props} />} />
          <Route path="/404" render={(props) => <Login {...props} />} />
          <Redirect to="/404" />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
