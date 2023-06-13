import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./SearchForm.css";
import UserDetails from "../UserDetails/UserDetails";
export default function SearchForm() {
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState("");
  const findUser = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(response.data);
      setUserData(response.data);
    } catch (error) {
      alert("User not found");
    }
  };
  return (
    <>
      <div className="container search-form">
        <div className="row">
          <div className="col-md-12">
            <h1>Github User Search</h1>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12 input">
            Enter username to search for user
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12 input">
            <input
              type="text"
              name=""
              id="input"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={findUser} className="findButton">
              Find
            </button>
          </div>
        </div>
      </div>
      {userData && <UserDetails data={userData} />}
    </>
  );
}
