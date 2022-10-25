import axios from "axios";
import { dataExample } from "../dataExample";
import React from "react";
export function ChangeSongs(props) {
  React.useEffect(() => {
    fetchMain();
  }, []);

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
    if (props.genreNo.Rap) {
      Rap = "gangsta rap,rap,rap randb,";
    }
    if (props.genreNo.Electro) {
      Electro =
        "big beat,breakbeat,broken-beat,dance electro,dj,downbeat,ambient,drum-and-bass,dubstep,electro,electro ambient,electro atmospheric,electro latin,electro minimal,electroclash,electronica,eurodance,house,jungle,techno,trance,";
    }
    if (props.genreNo.HipHop) {
      HipHop = "dirty-south,hip hop,trap,trip-hop,";
    }
    if (props.genreNo.Soul) {
      Soul = "blue-eyed-soul,chicago-soul,blues soul,soul,southern-soul,";
    }
    if (props.genreNo.Jazz) {
      Jazz =
        "jazz,acid-jazz,bebop,dixieland,free jazz,fusion jazz,hard bop,jazz electro,jazz latin,jazz piano,jazz rock,jazz sax,jazzy,lounge,manouche,motown,quiet storm,swing,randb,";
    }
    if (props.genreNo.Classical) {
      Classical =
        "big-band,classical,classical ballet,classical baroque,classical cello,classical chamber,classical classicism,classical concerto,classical contemporary,classical guitar,classical harp,classical lied,classical modern,classical opera,classical piano,classical reinassance,classical romantic,classical sacred,classical symphonic,classical trumpet,classical violon,dancehall,modern-classical,clásica,classical,classica,classique,classique ballet,classique baroque,classique chambre,classique concertos,classique contemporain,classique moderne,classique opera,classique piano,classique romantique,classique sacré,classique symphonique,classique violon,classique violoncelle,classique vocal,danser tempo assez lent,dîner,dîner romantique,Klassik,Klassisk,";
    }
    if (props.genreNo.Blues) {
      Blues =
        "blues,acoustic blues,delta blues,blues jazz,blues roots,chicago-blues,doo-wop,electric blues,";
    }
    if (props.genreNo.Cinema) {
      Cinema =
        "cinema action,cinema adventure,cinema animation,cinema biopic,cinema bollywood,cinema comedy,cinema drama,cinema fantasy,cinema history,cinema horror,cinema martial art,cinema musical,cinema nature,cinema peplum,cinema romance,cinema science fiction,cinema spy,cinema thriller,cinema tragicomedy,cinema war,cinema western,soundtrack,cinéma comédie dramatique,cinema tragicomedy,cinéma dessin animé,cinema animation,cinéma dramatique,cinema drama,cinéma espionnage,cinéma spy,cinéma guerre,cinema war,cinéma horreur,cinema horror,";
    }
    if (props.genreNo.Latin) {
      Latin = "latin,";
    }
    if (props.genreNo.World) {
      World =
        "african,european,afrobeat,americana,arabic,australian,bossa-nova,Brazilian,Canadian,Cuban music,dance latin,ethnic,fado,fusion world,pagode,tropicalia,world,";
    }
    if (props.genreNo.Metal) {
      Metal =
        "black metal,death metal,death core,doom metal,heavy metal,metal,nu metal,screamo,sludge,speed metal,thrash,";
    }
    if (props.genreNo.Reggae) {
      Reggae = "dub,ragga,rasta,reggae,rocksteady,ska,ska-punk,";
    }
    if (props.genreNo.Rock) {
      Rock =
        "rock,blues rock,darkwave,emo,French rock,fusion rock,glam,gothic,grunge,guitar hero,hard-rock,indie rock,kraut rock,new-wave,psychedelic,punk,rock,rock'n'roll,rockabilly,showgaxe,";
    }
    if (props.genreNo.Folk) {
      Folk = "brazilian folk,folk,folklore,celtic,gypsy,tango,";
    }
    if (props.genreNo.Vocal) {
      Vocal = "classical vocal,vocal jazz,vocal pop,";
    }
    if (props.genreNo.Country) {
      Country = "bluegrass,blues country,country,sertanejo,";
    }
    if (props.genreNo.Pop) {
      Pop =
        "baroque pop,boys-band,brit-pop,bubblegum,british-invasion,cantautori,euro pop,eurovision,French pop,girlsband,indie pop,orchestral pop,pop,pop latin,power pop,synthpop,teen,new-age,reading news,";
    }
    if (props.genreNo.Funk) {
      Funk = "baile funk,funk,";
    }
    let musicoveryURL = `https://musicovery.com/api/V6/playlist.php?&fct=getfrommood&popularitymax=100&popularitymin=50&starttrackid=&trackvalence=${props.trackValence}&trackarousal=${props.trackArousal}&resultsnumber=15&genreNo=${Rap}${Electro}${HipHop}${Soul}${Metal}${World}${Latin}${Cinema}${Funk}${Classical}${Reggae}${Rock}${Vocal}${Pop}${Country}${Folk}${Jazz}${Blues}`;

    axios.get(musicoveryURL).then((music) => {
      if (music.data.tracks) {
        props.setTrackList(music.data.tracks.track);
        props.setErrorMessage(false)
      }
    }).catch(function (error) {
      /* console.log("Fetch Error: ",error) */
      props.setTrackList(dataExample);
      props.setErrorMessage(true)
    });
  }
  

  return (
    <button
      onClick={() => {
        return fetchMain();
      }}
      className="bn39"
      href="/"
    >
      <span className="bn39span">Get Songs</span>
    </button>
  );
}
