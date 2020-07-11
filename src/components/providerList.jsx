import React, { useEffect, useState } from "react";
import ReactDirective from "react-directive";

const ProviderList = (props) => {
  return (
    <ReactDirective>
      <div
        className="card mt-3 border-0 rounded-lg shadow-sm"
        data-react-for={props.services}
      >
        {(service) => (
          <div className="card-body">
            <a className="card-title" href="#">
              {service.post_title}
            </a>
            <p className="card-text">{service.post_details}</p>
          </div>
        )}
      </div>
    </ReactDirective>
  );
};

export default ProviderList;
