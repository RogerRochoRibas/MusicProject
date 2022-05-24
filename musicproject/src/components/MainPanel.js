import { Slider } from "./Slider";
import { ChangeSongs } from "./ChangeSongs";
import { GenreSelector } from "./GenreSelector";

export function MainPanel(props) {
  return (
    <div id="MainPanel">
        <img id="logo" alt="page logo" src={require('../musical-notes.png')}/><h1>Musicaster</h1>
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
      <GenreSelector  genreNo={props.genreNo} setGenreNo={props.setGenreNo}/>
      <ChangeSongs fetchMain={() => props.fetchMain()}></ChangeSongs>
    </div>
  );
}
