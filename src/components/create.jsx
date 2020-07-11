import React, { useState, useEffect } from "react";
import ReactDirective from "react-directive";
import { AuthConsumer } from "../AuthContext";
import { useAlert } from "react-alert";
import Header from "./header";
import ServiceCreate from "./serviceCreate";

const Create = ({ isStaff }) => {
  if (!isStaff) window.location = "/";
  useEffect(() => {
    console.log(isStaff);
    // if (!isStaff) window.location = "/";
  }, []);

  return (
    <ReactDirective>
      <Header />
      <ServiceCreate data-react-if={isStaff} />
    </ReactDirective>
  );
};

export default (props) => (
  <AuthConsumer>
    {({ isStaff }) => <Create isStaff={isStaff} {...props}></Create>}
  </AuthConsumer>
);
