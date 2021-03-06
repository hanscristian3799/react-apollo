import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { insertUser } from "../GraphQL/Mutations";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(insertUser, {
    variables: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    },
  });

  const addUser = () => {
    console.log("CLICK");
    // createUser({
    //   variables: {
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     password: password,
    //   },
    // });

    createUser();

    if (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={addUser}> Create User</button>
    </div>
  );
};

export default Form;
