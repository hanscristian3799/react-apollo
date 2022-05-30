import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { getUsers } from "../GraphQL/Queries";

const GetUsers = () => {
  const { error, loading, data } = useQuery(getUsers);
  const [users, setUsers] = useState([]);

  if (error) {
    console.log("ERRRORRRR", error);
  }

  useEffect(() => {
    if (data) {
      console.log("da", data);
      setUsers(data.getAllUsers);
    }
  }, [data]);

  return (
    <div>
      {users.map((u) => {
        return <h1>{u.firstName}</h1>;
      })}
    </div>
  );
};

export default GetUsers;
