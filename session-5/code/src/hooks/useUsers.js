import React, { useEffect, useState } from "react";
import { getUsers } from "../api/userApi";

// custom hooks
const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { users, loading };
};

export default useUsers;

// axios.get(api).then(() => {

// }).catch(() => {

// })
