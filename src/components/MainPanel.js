import { Slider } from "./Slider";
import { ChangeSongs } from "./ChangeSongs";
import { GenreSelector, AllGenres } from "./GenreSelector";
import { LoginButton } from "./LoginButton";
import { LoginModal } from "./LoginModal";
import React from "react";
import { SuccessScreen } from "./SuccessScreen";
import { SaveTracks } from "./SaveTracks";
import { HidePanel } from "./HidePanel";
import classNames from "classnames";

export function MainPanel(props) {
  const [loginScreen, setLoginScreen] = React.useState("");
  const [successScreen, setSuccessScreen] = React.useState("");
  const [successText, setSuccessText] = React.useState("Congratulations");
  const [userID, setUserID] = React.useState("");
  const [userList, setUserList] = React.useState([]);
  const [logged, setLogged] = React.useState(false);
  const [trackValence, setTrackValence] = React.useState(500000);
  const [trackArousal, setTrackArousal] = React.useState(500000);
  const [genreNo, setGenreNo] = React.useState({
    Rap: false,
    Electro: false,
    HipHop: false,
    Soul: false,
    Jazz: false,
    Classical: false,
    Blues: false,
    Cinema: false,
    Latin: false,
    World: false,
    Metal: false,
    Reggae: false,
    Rock: false,
    Folk: false,
    Vocal: false,
    Country: false,
    Pop: false,
    Funk: false,
  });
  return (
    <>
      <div
        id="MainPanel"
        className={classNames("main-panel", { hideToggle: props.panelHidden })}
      >
        <img id="logo" alt="page logo" src={require("../musical-notes.png")} />
        <h1>Musicaster</h1>
        <Slider
          setTrack={setTrackValence}
          identifier="Happy"
          identifierTwo="Sad"
        ></Slider>
        <Slider
          setTrack={setTrackArousal}
          identifier="Energetic"
          identifierTwo="Calm"
        ></Slider>
        <AllGenres genreNo={genreNo} setGenreNo={setGenreNo} />
        <GenreSelector genreNo={genreNo} setGenreNo={setGenreNo} />
        <ChangeSongs
          genreNo={genreNo}
          trackValence={trackValence}
          trackArousal={trackArousal}
          setTrackList={props.setTrackList}
        />
        <SaveTracks
          userList={userList}
          setUserList={setUserList}
          userID={userID}
          trackList={props.trackList}
          setTrackList={props.setTrackList}
          setSuccessScreen={setSuccessScreen}
          setSuccessText={setSuccessText}
          logged={logged}
        />
        <LoginButton
          setLoginScreen={setLoginScreen}
          logged={logged}
          setLogged={setLogged}
        />
        <HidePanel
          setPanelHidden={props.setPanelHidden}
        />
      </div>
      <LoginModal
        userList={userList}
        setUserList={setUserList}
        setSuccessText={setSuccessText}
        trackList={props.trackList}
        successScreen={successScreen}
        setSuccessScreen={setSuccessScreen}
        setLogged={setLogged}
        logged={logged}
        setLoginScreen={setLoginScreen}
        loginScreen={loginScreen}
        setUserID={setUserID}
      />
      <SuccessScreen
        logged={logged}
        successScreen={successScreen}
        successText={successText}
      />
    </>
  );
}
