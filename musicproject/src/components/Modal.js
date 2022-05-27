import React from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { usersCollection } from "../firebase";

export function Modal(props) {
  const [newName, setNewName] = React.useState("");
  const [newPass, setNewPass] = React.useState("");
  const createUser = async () => {
    await addDoc(usersCollection, { name: newName, pass: newPass });
  };
  if (props.loginScreen) {
    return (
      <div className="modal-bg full-screen">
        <div className="modal">
          <p onClick={() => {props.setLoginScreen(false)}} className="">Close</p>
          <h2 class="title">Login</h2>
          <p>You must Log In to see the spaceships.</p>
          <form id="login">
            <input
              placeholder="User Name"
              onChange={(event) => {
                setNewName(event.target.value);
              }}
            />
            <input
              placeholder="User Name"
              onChange={(event) => {
                setNewPass(event.target.value);
              }}
            />
            <input className="submit clickable" type="button" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
