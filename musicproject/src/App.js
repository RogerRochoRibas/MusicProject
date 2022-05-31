import "./css/Slider.css";
import "./css/Button.css";
import "./css/TrackList.css";
import "./css/MainPanel.css";
import "./css/PanelButtons.css";
import "./css/Modal.css";
import React from "react";
import { TrackList } from "./components/TrackList";
import { MainPanel } from "./components/MainPanel";
import { dataExample } from "./dataExample";
import { ShowPanel } from "./components/ShowPanel";
import axios from "axios";
import classNames from "classnames";

function App() {
  const [logged, setLogged] = React.useState(false);
  const [trackList, setTrackList] = React.useState([]);
  const [trackValence, setTrackValence] = React.useState(500000);
  const [trackArousal, setTrackArousal] = React.useState(500000);
  const [panelHidden, setPanelHidden] = React.useState(false);
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

  //To run in windows 10 use Run (ejecutar) and insert: chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
  //For windows 11 you can create a shortcut to: "C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp

  // to get cover art: https://musicbrainz.org/doc/Cover_Art_Archive/API
  // or https://developers.music-story.com/developers/artist
  // night mode toogle https://codepen.io/daviddarnes/pen/LdGYVG

  function fetchMain() {
    let Rap = "";
    let Electro = "";
    let HipHop = "";
    let Soul = "";
    let Jazz = "";
    let Classical = "";
    let Blues = "";
    let Cinema = "";
    let Latin = "";
    let World = "";
    let Metal = "";
    let Reggae = "";
    let Rock = "";
    let Folk = "";
    let Vocal = "";
    let Country = "";
    let Pop = "";
    let Funk = "";
    if (genreNo.Rap) {
      Rap = "gangsta rap,rap,rap randb,";
    }
    if (genreNo.Electro) {
      Electro =
        "big beat,breakbeat,broken-beat,dance electro,dj,downbeat,ambient,drum-and-bass,dubstep,electro,electro ambient,electro atmospheric,electro latin,electro minimal,electroclash,electronica,eurodance,house,jungle,techno,trance,";
    }
    if (genreNo.HipHop) {
      HipHop = "dirty-south,hip hop,trap,trip-hop,";
    }
    if (genreNo.Soul) {
      Soul = "blue-eyed-soul,chicago-soul,blues soul,soul,southern-soul,";
    }
    if (genreNo.Jazz) {
      Jazz =
        "jazz,acid-jazz,bebop,dixieland,free jazz,fusion jazz,hard bop,jazz electro,jazz latin,jazz piano,jazz rock,jazz sax,jazzy,lounge,manouche,motown,quiet storm,swing,randb,";
    }
    if (genreNo.Classical) {
      Classical =
        "big-band,classical,classical ballet,classical baroque,classical cello,classical chamber,classical classicism,classical concerto,classical contemporary,classical guitar,classical harp,classical lied,classical modern,classical opera,classical piano,classical reinassance,classical romantic,classical sacred,classical symphonic,classical trumpet,classical violon,dancehall,modern-classical,clásica,classical,classica,classique,classique ballet,classique baroque,classique chambre,classique concertos,classique contemporain,classique moderne,classique opera,classique piano,classique romantique,classique sacré,classique symphonique,classique violon,classique violoncelle,classique vocal,danser tempo assez lent,dîner,dîner romantique,Klassik,Klassisk,";
    }
    if (genreNo.Blues) {
      Blues =
        "blues,acoustic blues,delta blues,blues jazz,blues roots,chicago-blues,doo-wop,electric blues,";
    }
    if (genreNo.Cinema) {
      Cinema =
        "cinema action,cinema adventure,cinema animation,cinema biopic,cinema bollywood,cinema comedy,cinema drama,cinema fantasy,cinema history,cinema horror,cinema martial art,cinema musical,cinema nature,cinema peplum,cinema romance,cinema science fiction,cinema spy,cinema thriller,cinema tragicomedy,cinema war,cinema western,soundtrack,cinéma comédie dramatique,cinema tragicomedy,cinéma dessin animé,cinema animation,cinéma dramatique,cinema drama,cinéma espionnage,cinéma spy,cinéma guerre,cinema war,cinéma horreur,cinema horror,";
    }
    if (genreNo.Latin) {
      Latin = "latin,";
    }
    if (genreNo.World) {
      World =
        "african,european,afrobeat,americana,arabic,australian,bossa-nova,Brazilian,Canadian,Cuban music,dance latin,ethnic,fado,fusion world,pagode,tropicalia,world,";
    }
    if (genreNo.Metal) {
      Metal =
        "black metal,death metal,death core,doom metal,heavy metal,metal,nu metal,screamo,sludge,speed metal,thrash,";
    }
    if (genreNo.Reggae) {
      Reggae = "dub,ragga,rasta,reggae,rocksteady,ska,ska-punk,";
    }
    if (genreNo.Rock) {
      Rock =
        "rock,blues rock,darkwave,emo,French rock,fusion rock,glam,gothic,grunge,guitar hero,hard-rock,indie rock,kraut rock,new-wave,psychedelic,punk,rock,rock'n'roll,rockabilly,showgaxe,";
    }
    if (genreNo.Folk) {
      Folk = "brazilian folk,folk,folklore,celtic,gypsy,tango,";
    }
    if (genreNo.Vocal) {
      Vocal = "classical vocal,vocal jazz,vocal pop,";
    }
    if (genreNo.Country) {
      Country = "bluegrass,blues country,country,sertanejo,";
    }
    if (genreNo.Pop) {
      Pop =
        "baroque pop,boys-band,brit-pop,bubblegum,british-invasion,cantautori,euro pop,eurovision,French pop,girlsband,indie pop,orchestral pop,pop,pop latin,power pop,synthpop,teen,new-age,reading news,";
    }
    if (genreNo.Funk) {
      Funk = "baile funk,funk,";
    }
    let musicoveryURL = `https://musicovery.com/api/V6/playlist.php?&fct=getfrommood&popularitymax=100&popularitymin=50&starttrackid=&trackvalence=${trackValence}&trackarousal=${trackArousal}&resultsnumber=15&genreNo=${Rap}${Electro}${HipHop}${Soul}${Metal}${World}${Latin}${Cinema}${Funk}${Classical}${Reggae}${Rock}${Vocal}${Pop}${Country}${Folk}${Jazz}${Blues}`;

    /* axios.get(musicoveryURL).then((music) => {
      if (music.data.tracks) {
        console.log(music.data.tracks.track);
        setTrackList(music.data.tracks.track);
      }
      if (!music.data.tracks && !trackList) { */
    setTrackList(dataExample);
    /* }
    }); */
  }

  React.useEffect(() => {
    fetchMain();
  }, []);

  return (
    <div className="App">
      <MainPanel
        panelHidden={panelHidden}
        setPanelHidden={setPanelHidden}
        trackList={trackList}
        setTrackList={setTrackList}
        genreNo={genreNo}
        setGenreNo={setGenreNo}
        setTrackValence={setTrackValence}
        trackValence={trackValence}
        setTrackArousal={setTrackArousal}
        trackArousal={trackArousal}
        fetchMain={() => fetchMain()}
        setLogged={setLogged}
        logged={logged}
      />
      <div className={classNames("trackContainer",{ expandToggle: panelHidden })}>
        <ul className="Tracks">
          <TrackList trackList={trackList} />
        </ul>
      </div>
      <ShowPanel panelHidden={panelHidden} setPanelHidden={setPanelHidden} />
    </div>
  );
}

export const ContextProvider = React.createContext();
export default App;
