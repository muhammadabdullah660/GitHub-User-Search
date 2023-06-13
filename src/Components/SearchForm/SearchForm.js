import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
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
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            Enter username to search for user
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={findUser}>Find</button>
            {userData && <UserDetails data={userData} />}
          </div>
        </div>
      </div>
    </>
  );
}
