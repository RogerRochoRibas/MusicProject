import { doc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase"
export function SaveTracks(props) {
    const SaveTracks = async () => {
      console.log('userID: ',props.userID)
      const userDoc = doc(db, "users", props.name)
      const newFields = {trackList: props.trackList,
        trackValence: props.trackValence,
        trackArousal: props.trackArousal,}
      await setDoc(doc(userDoc),{newFields})
    }

    if (!props.logged) {
      return (<div id="saveLoad">
        <button
          onClick={() => {
            SaveTracks()
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
            SaveTracks()
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
  