import React from "react";
import { getDocs, addDoc } from "firebase/firestore";
import { usersCollection } from "../firebase";

export function LoginModal(props) {
  const [name, setName] = React.useState("");
  const [pass, setPass] = React.useState("");

  const createUser = async () => {
    await addDoc(usersCollection, {
      name: name,
      pass: pass,
      trackList: props.trackList,
      trackValence: props.trackValence,
      trackArousal: props.trackArousal,
      genreNo: props.genreNo,
    });
    props.setLoginScreen("false");
    props.setSuccessText('Register Successful')
    props.setSuccessScreen(true);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(props.setSuccessScreen(false));
      }, 4000);
    });
  };
  const validateUser = async () => {
    const userData = await getDocs(usersCollection);
    props.setUserList(userData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    for (let i = 0; i < props.userList.length; i++) {
      if (name === props.userList[i].name && pass === props.userList[i].pass) {
        props.setLogged(true);
        props.setLoginScreen(false);
        props.setSuccessText('Log In Successful');
        props.setSuccessScreen(true);
        props.setUserID(props.userList[i].id);
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(props.setSuccessScreen(false));
          }, 4000);
        });
      }
    }
  };

  if (props.loginScreen === "login") {
    return (
      <div className="modal-bg full-screen">
        <div className="modal">
          <div className="modal-content">
            <h2 className="title">Log In</h2>
            <form id="login">
              <input
                type="text"
                spellCheck="false"
                placeholder="User Name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <input
                type="password"
                spellCheck="false"
                placeholder="Password"
                onChange={(event) => {
                  setPass(event.target.value);
                }}
              />
              <button
                className="submit clickable"
                onClick={() => validateUser()}
                type="button"
                value="Submit"
              >
                <span className="submitSpan">Send</span>
              </button>
            </form>
            <p className="changeModal">
              New Here?
              <button
                onClick={() => {
                  props.setLoginScreen("register");
                }}
              >
                Register
              </button>
            </p>
            <p
              onClick={() => {
                props.setLoginScreen(false);
              }}
              className="clickable modal-close"
            >
              Close
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (props.loginScreen === "register") {
    return (
      <div className="modal-bg full-screen">
        <div className="modal">
          <div className="modal-content">
            <h2 className="title">Register</h2>
            <form id="login">
              <input
                type="text"
                spellCheck="false"
                placeholder="User Name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <input
                type="password"
                spellCheck="false"
                placeholder="Password"
                onChange={(event) => {
                  setPass(event.target.value);
                }}
              />
              <button
                className="submit clickable"
                type="button"
                value="Submit"
                onClick={() => createUser()}
              >
                <span className="submitSpan">Send</span>
              </button>
            </form>
            <p className="changeModal">
              Allready did?
              <button
                onClick={() => {
                  props.setLoginScreen("login");
                }}
              >
                Log In
              </button>
            </p>
            <p
              onClick={() => {
                props.setLoginScreen(false);
              }}
              className="clickable modal-close"
            >
              Close
            </p>
          </div>
        </div>
      </div>
    );
  }
}
