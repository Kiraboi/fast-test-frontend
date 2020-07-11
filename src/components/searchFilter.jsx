import React, { useEffect, useState } from "react";
import { AuthConsumer } from "../AuthContext";
import { useHistory } from "react-router-dom";

const SearchFilter = ({ onSubmit, token }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <form onSubmit={(e) => (e.preventDefault(), onSubmit(searchTerm, token))}>
      <div className="input-group my-3">
        <input
          type="text"
          className="form-control"
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search using Title"
          aria-label="Search using Title"
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default (props) => (
  <AuthConsumer>
    {({ onSubmit, token }) => (
      <SearchFilter onSubmit={onSubmit} token={token} {...props}></SearchFilter>
    )}
  </AuthConsumer>
);
