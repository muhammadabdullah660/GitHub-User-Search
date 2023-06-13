import React, { useState } from "react";

export default function UserDetails({ data }) {
  //console.log(data);
  const { login, avatar_url, bio, public_repos } = data;
  return (
    <>
      <div>
        <h2>{login}</h2>
        <img src={avatar_url} alt="Profile" />
        <p>{bio}</p>
        <p>Public Repositories: {public_repos}</p>
      </div>
    </>
  );
}
