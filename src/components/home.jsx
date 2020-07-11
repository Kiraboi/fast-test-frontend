import React, { useState, useEffect } from "react";
import ReactDirective from "react-directive";
import { AuthConsumer } from "../AuthContext";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import Header from "./header";
import ServiceList from "./serviceList";
import SearchFilter from "./searchFilter";
import ProviderList from "./providerList";
import {
  getServiceListAll,
  getProviderList,
  sendMail,
  getFilteredService,
} from "../state/fetch";

const Home = ({ isStaff, token, userName, props }) => {
  const [services, setServices] = useState([]);
  // const {state} = props.loca

  const alert = useAlert();
  const history = useHistory();

  useEffect(() => {
    if (isStaff) {
      getProviderList(token)
        .then((data) => {
          setServices(data);
        })
        .catch((error) => {
          console.log("Failed to load data");
          alert.error("Failed to load data.");
        });
    } else {
      getServiceListAll(token)
        .then((data) => {
          setServices(data);
          console.log(data);
        })
        .catch((error) => {
          console.log("Failed to load data");
          alert.error("Failed to load data.");
        });
    }
  }, []);

  const handleClick = (byMail, toMail, token) => {
    console.log("clicked again ", toMail);
    sendMail(byMail, toMail, token)
      .then((data) => {
        alert.success("A mail will be sent to the Service Provider");
      })
      .catch((error) => {
        console.log("Failed to load data");
        alert.error("Failed to send mail");
      });
  };

  const handleSubmit = (searchTerm, token) => {
    getFilteredService(searchTerm, token)
      .then((data) => {
        console.log(data);
        if (data.length > 0) setServices(data);
        else alert.error("No such post found");
      })
      .catch((error) => {
        console.log("Failed to load data");
        alert.error("Failed to load data.");
      });
  };

  return (
    <ReactDirective>
      <Header />
      <div className="container-fluid col-12 col-md-6">
        <div className="col-12 col-md-12">
          <SearchFilter onSubmit={handleSubmit} />
          <ServiceList
            data-react-if={!isStaff}
            services={services}
            onClick={handleClick}
          />

          {/* FOR THE PROVIDER */}
          <ProviderList data-react-if={isStaff} services={services} />
        </div>
      </div>
    </ReactDirective>
  );
};

export default (props) => (
  <AuthConsumer>
    {({ isStaff, token, userName, props }) => (
      <Home
        isStaff={isStaff}
        token={token}
        userName={userName}
        {...props}
      ></Home>
    )}
  </AuthConsumer>
);
