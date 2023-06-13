import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import UserDetails from "./UserDetails";
export default function SearchForm() {
  const [userData, setUserData] = useState(null);
  const findUser = async () => {
    const response = await axios.get(
      "https://api.github.com/users/techsithgit"
    );
    setUserData(response.data);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            Enter username to search for user
            <input type="text" name="" id="" />
            <button onClick={findUser}>Find</button>
            <UserDetails data={userData} />
          </div>
        </div>
      </div>
    </>
  );
}
