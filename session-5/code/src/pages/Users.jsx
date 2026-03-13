import React, { useEffect, useState } from "react";
import { getUsers } from "../api/userApi";
import useUsers from "../hooks/useUsers";

const Users = () => {
  const { users, loading } = useUsers();

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {users.map((user) => {
        return <p key={user.id}>{user.username}</p>;
      })}
    </>
  );
};

export default Users;
