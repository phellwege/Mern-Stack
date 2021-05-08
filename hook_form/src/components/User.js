import React, { useState } from "react";

const User = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const createUser = (user) => {
    user.preventDefault();
  };

  return (
    <>
      <form onSubmit={createUser}>
        <div>
          <label htmlFor="firstname">First Name: </label>
          <input
            type="text"
            name="firsname"
            onChange={(user) => setFirstname(user.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name: </label>
          <input
            type="text"
            name="lastname"
            onChange={(user) => setLastname(user.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address: </label>
          <input
            type="text"
            name="email"
            onChange={(user) => setEmail(user.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            name="password"
            onChange={(user) => setPassword(user.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmpassword">Confirm Password: </label>
          <input
            type="text"
            name="confirmpassword"
            onChange={(user) => setConfirmPassword(user.target.value)}
          />
        </div>
        {/* <div>
            <input type="submit" value="Create User" />
          </div> */}
      </form>
      <footer>
        <p>First Name: {firstname}</p>
        <p>last Name: {lastname}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirmed Password: {confirmpassword}</p>
      </footer>
    </>
  );
};

export default User;
