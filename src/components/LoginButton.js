export function LoginButton(props) {
  if (!props.logged) {
    return (
      <button
        onClick={() => {
          props.setLoginScreen("login");
        }}
        id="loginButton"
        className="logbtn"
        href="/"
      >
        <img
          id="login-icon"
          className="panelpng"
          alt="login icon"
          src={require("../img/icon-login.png")}
        />
        <p>Account</p>
      </button>
    );
  }
  if (props.logged) {
    return (
      <button
        onClick={() => {
          props.setLogged(false);
        }}
        id="logoutButton"
        className="logbtn"
        href="/"
      >
        <img
          id="login-icon"
          className="panelpng"
          alt="login icon"
          src={require("../img/icon-logout.png")}
        />
        <p>Logout</p>
      </button>
    );
  }
}
