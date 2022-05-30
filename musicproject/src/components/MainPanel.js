import { Slider } from "./Slider";
import { ChangeSongs } from "./ChangeSongs";
import { GenreSelector, AllGenres } from "./GenreSelector";
import { LoginButton } from "./LoginButton";
import { LoginModal } from "./LoginModal";
import React from "react";
import { SuccessScreen } from "./SuccessScreen";
import { SaveTracks } from "./SaveTracks";

export function MainPanel(props) {
  const [loginScreen, setLoginScreen] = React.useState("");
  const [successScreen, setSuccessScreen] = React.useState("");
  const [successText, setSuccessText] = React.useState("Congratulations");
  const [userID, setUserID] = React.useState("");
  const [userList, setUserList] = React.useState([]);
  return (
    <>
      <div id="MainPanel">
        <img id="logo" alt="page logo" src={require("../musical-notes.png")} />
        <h1>Musicaster</h1>
        <Slider
          setTrack={props.setTrackValence}
          identifier="Happy"
          identifierTwo="Sad"
        ></Slider>
        <Slider
          setTrack={props.setTrackArousal}
          identifier="Energetic"
          identifierTwo="Calm"
        ></Slider>
        <AllGenres genreNo={props.genreNo} setGenreNo={props.setGenreNo} />
        <GenreSelector genreNo={props.genreNo} setGenreNo={props.setGenreNo} />
        <ChangeSongs fetchMain={() => props.fetchMain()}></ChangeSongs>
        <SaveTracks
          userList={userList}
          setUserList={setUserList}
          userID={userID}
          genreNo={props.genreNo}
          trackValence={props.trackValence}
          trackArousal={props.trackArousal}
          trackList={props.trackList}
          setTrackList={props.setTrackList}
          setSuccessScreen={setSuccessScreen}
          setSuccessText={setSuccessText}
        />
        <LoginButton
          setLoginScreen={setLoginScreen}
          loginScreen={loginScreen}
          logged={props.logged}
          setLogged={props.setLogged}
        />
      </div>
      <LoginModal
        userList={userList}
        setUserList={setUserList}
        setSuccessText={setSuccessText}
        genreNo={props.genreNo}
        trackValence={props.trackValence}
        trackArousal={props.trackArousal}
        trackList={props.trackList}
        successScreen={successScreen}
        setSuccessScreen={setSuccessScreen}
        setLogged={props.setLogged}
        logged={props.logged}
        setLoginScreen={setLoginScreen}
        loginScreen={loginScreen}
        setUserID={setUserID}
      />
      <SuccessScreen
        logged={props.logged}
        successScreen={successScreen}
        successText={successText}
      />
    </>
  );
}
