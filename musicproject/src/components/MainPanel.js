import { Slider } from "./Slider";
import { ChangeSongs } from "./ChangeSongs";
import { GenreSelector } from "./GenreSelector";

export function MainPanel(props) {
  return (
    <div id="MainPanel">
        <h2>Main Panel</h2>
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
