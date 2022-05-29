import { Slider } from "./Slider";
import { ChangeSongs } from "./ChangeSongs";
import { GenreSelector, AllGenres } from "./GenreSelector";
import { LoginButton } from "./LoginButton";
import { Modal } from "./Modal";
import React from "react";
import { SuccessScreen } from "./SuccessScreen";

export function MainPanel(props) {
  const [loginScreen, setLoginScreen] = React.useState("");
  const [successScreen, setSuccessScreen] = React.useState("");
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
        <LoginButton
          setLoginScreen={setLoginScreen}
          loginScreen={loginScreen}
          logged={props.logged}
          setLogged={props.setLogged}
        />
      </div>
      <Modal
        successScreen={successScreen}
        setSuccessScreen={setSuccessScreen}
        setLogged={props.setLogged}
        logged={props.logged}
        setLoginScreen={setLoginScreen}
        loginScreen={loginScreen}
      />
      <SuccessScreen logged={props.logged} successScreen={successScreen} />
    </>
  );
}
