import "./css/Slider.css";
import "./css/Button.css";
import "./css/TrackList.css"
import "./css/MainPanel.css"
import React from "react";
import { ChangeSongs } from "./components/ChangeSongs"
import { TrackList } from "./components/TrackList";
import { MainPanel } from "./components/MainPanel"

function App() {
  const [trackList, setTrackList] = React.useState([])
  const [trackValence, setTrackValence] = React.useState(500000)
  const [trackArousal, setTrackArousal] = React.useState(500000)
  const [genreNo, setGenreNo] = React.useState({})

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
 // Genres ok: hiphop, electro, jazz, latin, rock, metal, pop, classical
 // Genres to consider: randb (r&B), folk, vocal pop (vocal)
 // Genres not showing up: funk, gospel, soul
 // to get cover art: https://musicbrainz.org/doc/Cover_Art_Archive/API
 // or https://developers.music-story.com/developers/artist
 // night mode toogle https://codepen.io/daviddarnes/pen/LdGYVG

  function fetchMain() {
    fetch(`http://musicovery.com/api/V6/playlist.php?&fct=getfrommood&popularitymax=100&popularitymin=50&starttrackid=&trackvalence=${trackValence}&trackarousal=${trackArousal}&resultsnumber=15&genreNo=${genreNo}`)
      .then((response) => response.json())
      .then((music) => {
        console.log("music: ", music);
        if (music.tracks) {
        setTrackList(music.tracks.track)
        }
      });
  }
  
  React.useEffect(() => {
    fetchMain();
  }, []);

  return (
    <div className="App">
      <h1>Music Project</h1>
      <MainPanel genreNo={genreNo} setGenreNo={setGenreNo} setTrackValence={setTrackValence} setTrackArousal={setTrackArousal} fetchMain={() => fetchMain()}/>
      <ChangeSongs fetchMain={()=>fetchMain()}></ChangeSongs>
      <div className='Tracks'><TrackList trackList={trackList}/></div>
    </div>
  );
}

export const ContextProvider = React.createContext()
export default App;