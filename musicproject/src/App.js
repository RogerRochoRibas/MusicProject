import "./css/Slider.css";
import "./css/Button.css";
import "./css/TrackList.css";
import "./css/MainPanel.css";
import "./css/Logbtn.css";
import "./css/Modal.css";
import React from "react";
import { TrackList } from "./components/TrackList";
import { MainPanel } from "./components/MainPanel";
import { dataExample } from "./dataExample";
import axios from "axios";

function App() {
  const [logged, setLogged] = React.useState(false);
  const [trackList, setTrackList] = React.useState([]);
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
    European: false,
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
    let European = "";
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
    if (genreNo.European) {
      European =
        "flamenco,chanson,gospel,latin,French 00's,French 60's,French 70's,French 80's,French 90's,French music,German music,German pop,German pop 00's,German pop 60's,German pop 70's,German pop 80's,German pop 90's,German vocal,Italian music,Italian pop,Italian pop 00's,Italian pop 90's,Italian pop 80's,Italian pop 70's,Italian pop 60's,New French pop,New German pop,Norwegian music,Norwegian pop,Portuguese music,Scandinavian music,Spanish music,Spanish pop 00's,Spanish pop 60's,Spanish pop 70's,Spanish pop 80's,Spanish pop 90's,Spanish rock,Spanish vocal,Swedish music,Swedish pop,chanson française,chanson française 00s,chanson française 60s,French pop 60's,chanson française 70s,chanson française 80s,French pop 80's,chanson française 90s,Deutche Musik,deutsche pop,deutsche pop 00's,deutsche pop 60's,deutsche pop 70's,deutsche pop 80's,deutsche pop 90's,German pop,schlager,musica española,musica italiana,musique française,Neue Deutsche Welle,norsk musikk,norsk pop,Nouvelle scène,pop español,pop español 00's,pop español 60's,pop español 70's,pop español 80's,pop español 90's,pop italiano,pop italiano 00's,pop italiano 60's,pop italiano 70's,pop italiano 80's,pop italiano 90's,Rock en Espanol,rock français,Schlager,sous la douche,svensk musik,svensk pop,variété française,variété française 00s,variété française 60s,variété française 70s,variété française 80s,variété française 90s,";
    }
    if (genreNo.World) {
      World =
        "african,afrobeat,americana,arabic,australian,bossa-nova,Brazilian,Canadian,Cuban music,dance latin,ethnic,fado,fusion world,pagode,tropicalia,world,";
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
        "blues rock,darkwave,emo,French rock,fusion rock,glam,gothic,grunge,guitar hero,hard-rock,indie rock,kraut rock,new-wave,psychedelic,punk,rock,rock'n'roll,rockabilly,showgaxe,";
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
    let musicoveryURL = `https://musicovery.com/api/V6/playlist.php?&fct=getfrommood&popularitymax=100&popularitymin=50&starttrackid=&trackvalence=${trackValence}&trackarousal=${trackArousal}&resultsnumber=15&genreNo=${Rap}${Electro}${HipHop}${Soul}${Metal}${World}${European}${Cinema}${Funk}${Classical}${Reggae}${Rock}${Vocal}${Pop}${Country}${Folk}${Jazz}${Blues}`;

    axios
      .get(musicoveryURL)
      .then((music) => {
        console.log("music request: ", music);
        console.log("music tracks: ", music.data.tracks.track);
        if (music.data.tracks) {
          setTrackList(music.data.tracks.track);
        }
        if (!music.data.tracks && trackList) {
          console.log("No new tracks");
        }
        if (!music.data.tracks && !trackList) {
          setTrackList(dataExample);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  React.useEffect(() => {
    fetchMain();
  }, []);

  return (
    <div className="App">
      <MainPanel
        genreNo={genreNo}
        setGenreNo={setGenreNo}
        setTrackValence={setTrackValence}
        setTrackArousal={setTrackArousal}
        fetchMain={() => fetchMain()}
        setLogged={setLogged}
        logged={logged}
      />
      <div className="trackContainer">
        <ul className="Tracks">
          <TrackList trackList={trackList} />
        </ul>
      </div>
    </div>
  );
}

export const ContextProvider = React.createContext();
export default App;
