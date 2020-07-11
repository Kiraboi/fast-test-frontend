import React, { useEffect, useState } from "react";
import { AuthConsumer } from "../AuthContext";
import ReactDirective from "react-directive";

const ServiceList = ({ email, token, services, onClick }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ReactDirective>
      <div
        className="card mt-3 border-0 rounded-lg shadow-sm"
        data-react-for={services}
      >
        {(service) => (
          <div className="card-body border-0 rounded-lg shadow-sm">
            <a className="card-title" href="#">
              {service.post_title}
            </a>
            <p className="card-text">{service.post_details}</p>
            <button
              onClick={() => onClick(service.post_posted_by, email, token)}
              data-react-if={service.post_posted_by}
              className="btn btn-primary float-right"
            >
              Contact me
            </button>

            <button
              data-react-if={!service.post_posted_by}
              className="btn btn-primary float-right disabled"
              disabled="disabled"
            >
              Contact me
            </button>
          </div>
        )}
      </div>
    </ReactDirective>
  );
};

export default (props) => (
  <AuthConsumer>
    {({ email, token, services, onClick }) => (
      <ServiceList
        email={email}
        token={token}
        services={services}
        onClick={onClick}
        {...props}
      ></ServiceList>
    )}
  </AuthConsumer>
);
