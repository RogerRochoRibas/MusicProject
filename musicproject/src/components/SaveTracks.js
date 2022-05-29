export function SaveTracks(props) {
    if (!props.logged) {
      return (<div id="saveLoad">
        <button
          onClick={() => {
            
          }}
          id="saveButton"
          className="savebtn"
          href="/"
        >
          <img
            id="login-icon"
            className="logicon"
            alt="login icon"
            src={require("../img/icon-save.png")}
          />
          <p>Save</p>
        </button>
        <button
          onClick={() => {

          }}
          id="Button"
          className="savebtn"
          href="/"
        >
          <img
            id="login-icon"
            className="logicon"
            alt="login icon"
            src={require("../img/icon-load.png")}
          />
          <p>load</p>
        </button>
        </div>
      );
    }
  }
  