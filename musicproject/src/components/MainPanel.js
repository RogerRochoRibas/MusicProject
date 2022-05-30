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
  const [userID, setUserID] = React.useState("");
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
          userID={userID}
          trackValence={props.trackValence}
          trackArousal={props.trackArousal}
        />
        <LoginButton
          setLoginScreen={setLoginScreen}
          loginScreen={loginScreen}
          logged={props.logged}
          setLogged={props.setLogged}
        />
      </div>
      <LoginModal
        trackList={props.trackList}
        successScreen={successScreen}
        setSuccessScreen={setSuccessScreen}
        setLogged={props.setLogged}
        logged={props.logged}
        setLoginScreen={setLoginScreen}
        loginScreen={loginScreen}
        setUserID={setUserID}
      />
      <SuccessScreen logged={props.logged} successScreen={successScreen} />
    </>
  );
}
