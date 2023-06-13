import React, { useState } from "react";

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
      <div>
        <h2>{login}</h2>
        <img src={avatar_url} alt="Profile" />
        <p>{bio}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Location: {location}</p>
        <p>Blog: {blog}</p>
        <p>Public Repositories: {public_repos}</p>
      </div>
    </>
  );
}
