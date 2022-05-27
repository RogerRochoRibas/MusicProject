export function LoginButton(props) {

  if (!props.logged) {
    return (
      <button
        onClick={() => {props.setLoginScreen(true)}}
        id="loginButton"
        className="logbtn"
        href="/"
      >
        <img
          id="login-icon"
          className="logicon"
          alt="login icon"
          src={require("../img/icon-login.png")}
        />
        <p>Login</p>
      </button>
    );
  }
  if (props.logged) {
    <button
      onClick={() => {props.logout();}}
      id="logoutButton"
      className="logbtn"
      href="/"
    >
      <img
        id="login-icon"
        className="logicon"
        alt="login icon"
        src={require("../img/icon-logout.png")}
      />
      <p>Logout</p>
    </button>;
  }
}
