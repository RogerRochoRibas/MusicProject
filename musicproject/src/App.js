import "./css/Slider.css";
import "./css/Button.css";
import "./css/TrackList.css";
import "./css/MainPanel.css";
import "./css/PanelButtons.css";
import "./css/Modal.css";
import React from "react";
import classNames from "classnames";
import { TrackList } from "./components/TrackList";
import { MainPanel } from "./components/MainPanel";
import { ShowPanel } from "./components/ShowPanel";

function App() {
  const [trackList, setTrackList] = React.useState([]);
  const [panelHidden, setPanelHidden] = React.useState(false);

  //To run in windows 10 use Run (ejecutar) and insert: chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
  //For windows 11 you can create a shortcut to: "C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp

  return (
    <div className="App">
      <MainPanel
        panelHidden={panelHidden}
        setPanelHidden={setPanelHidden}
        trackList={trackList}
        setTrackList={setTrackList}
      />
      <div className={classNames("trackContainer", { expandToggle: panelHidden })}>
        <ul className="Tracks">
          <TrackList trackList={trackList} />
        </ul>
      </div>
      <ShowPanel panelHidden={panelHidden} setPanelHidden={setPanelHidden} />
    </div>
  );
}

export default App;
