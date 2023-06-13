import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./UserDetails.css";
export default function UserDetails({ data }) {
  //console.log(data);
  const {
    login,
    avatar_url,
    bio,
    public_repos,
    blog,
    followers,
    following,
    location,
  } = data;
  return (
    <>
      <div className="container search-form">
        <img id="pfp" src={avatar_url} alt="Profile" />

        <h2>{login}</h2>
        <p className="details">{bio}</p>
        <p className="details">Followers: {followers}</p>
        <p className="details">Following: {following}</p>
        <p className="details">Location: {location}</p>
        <p className="details">Blog: {blog}</p>
        <p className="details">Public Repositories: {public_repos}</p>
      </div>
    </>
  );
}
