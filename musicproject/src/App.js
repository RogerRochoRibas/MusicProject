import "./css/App.css";
import "./css/Slider.css";
import React from "react";
import { Slider } from "./Slider";
import { ChangeSongs } from "./ChangeSongs"

function App() {
  const [musicList, setMusicList] = React.useState([]);
  const [trackvalence, settrackvalence] = React.useState(500000)
  const [trackarousal, settrackarousal] = React.useState(500000)

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

  function fetchMain() {
    fetch(`http://musicovery.com/api/V6/playlist.php?&fct=getfrommood&popularitymax=100&popularitymin=50&starttrackid=&trackvalence=${trackvalence}&trackarousal=${trackarousal}&resultsnumber=15`)
      .then((response) => response.json())
      .then((music) => {
        setMusicList(music);
        console.log("music: ", music);
        console.log("musicList: ", musicList);
      });
  }
  
  React.useEffect(() => {
    fetchMain();
  }, []);

  return (
    <div className="App">
      <h1>Welcome</h1>
      <Slider settrackvalence={settrackvalence}></Slider>
      <ChangeSongs fetchMain={()=>fetchMain()}></ChangeSongs>
    </div>
  );
}

export default App;
