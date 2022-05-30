import { doc, updateDoc, getDocs } from "firebase/firestore";
import { usersCollection, db } from "../firebase";
export function SaveTracks(props) {
  const SaveTracks = async (
    id,
    trackList,
    trackValence,
    trackArousal,
    genreNo
  ) => {
    const userDoc = doc(db, "users", id);
    const newFields = {
      trackList: trackList,
      trackValence: trackValence,
      trackArousal: trackArousal,
      genreNo: genreNo,
    };
    await updateDoc(userDoc, newFields);
    props.setSuccessText("Saved Tracks on your Account");
    props.setSuccessScreen(true);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(props.setSuccessScreen(false));
      }, 4000);
    });
  };
  const LoadTracks = async (id, setTrackList) => {
    const userData = await getDocs(usersCollection);
    props.setUserList(
      userData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    for (let i = 0; i < props.userList.length; i++) {
      if (id === props.userList[i].id) {
        setTrackList(props.userList[i].trackList);
        props.setSuccessText("Loaded your list of Tracks");
        props.setSuccessScreen(true);
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(props.setSuccessScreen(false));
          }, 4000);
        });
      }
    }
  };
  if (!props.logged) {
    return (
      <div id="saveLoad">
        <button
          onClick={() => {
            SaveTracks(
              props.userID,
              props.trackList,
              props.trackValence,
              props.trackArousal,
              props.genreNo
            );
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
            LoadTracks(props.userID, props.setTrackList);
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
