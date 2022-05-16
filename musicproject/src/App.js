import "./css/App.css";
import "./css/Slider.css";
import React from "react";
import { Slider } from "./Slider";
import { ChangeSongs } from "./ChangeSongs"

function App() {
  const [musicList, setMusicList] = React.useState([]);
  const [trackValence, setTrackValence] = React.useState(500000)
  const [trackArousal, setTrackArousal] = React.useState(500000)

  //Needs 'Moesif Origin & CORS Changer' extension to work in production
  /* Ejemplos de parametros
  fct=getfrommood
  popularitymax=100
  popularitymin=50
  date70=true
  yearmax=2050
  yearmin=1990
  trackvalence=900000
  trackarousal=100000
  resultsnumber=15
  listenercountry=es
  genreNo=rock
  resultsnumber=15
  resultsnumber=1
  */
 // to get cover art: https://musicbrainz.org/doc/Cover_Art_Archive/API
 // or https://developers.music-story.com/developers/artist

  function fetchMain() {
    fetch(`http://musicovery.com/api/V6/playlist.php?&fct=getfrommood&popularitymax=100&popularitymin=50&starttrackid=&trackvalence=${trackValence}&trackarousal=${trackArousal}&resultsnumber=15`)
      .then((response) => response.json())
      .then((music) => {
        setMusicList(music);
        console.log("music: ", music);
      });
  }
  
  React.useEffect(() => {
    fetchMain();
  }, []);

  return (
    <div className="App">
      <h1>Welcome</h1>
      <Slider setTrack={setTrackValence} identifier='Happy' identifierTwo='Sad'></Slider>
      <Slider setTrack={setTrackArousal} identifier='Energetic' identifierTwo='Calm'></Slider>
      <ChangeSongs fetchMain={()=>fetchMain()}></ChangeSongs>
    </div>
  );
}

export default App;
