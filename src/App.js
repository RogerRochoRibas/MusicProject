import "./css/Slider.css";
import "./css/Button.css";
import "./css/TrackList.css";
import "./css/MainPanel.css";
import "./css/PanelButtons.css";
import "./css/Modal.css";
import "./css/ErrorMessage.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TrackContainer } from "./components/TrackList";
import { MainPanel } from "./components/MainPanel";
import { ShowPanel } from "./components/ShowPanel";
import { ErrorMessage } from "./components/ErrorMessage";

function App() {
  const [trackList, setTrackList] = React.useState([]);
  const [panelHidden, setPanelHidden] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false)

  return (
    <Router className="App">
      <Routes>
        <Route
          path="/musicproject/"
          element={
            <>{errorMessage? <ErrorMessage/> : <></>}
              <MainPanel
                panelHidden={panelHidden}
                setPanelHidden={setPanelHidden}
                trackList={trackList}
                setTrackList={setTrackList}
                setErrorMessage={setErrorMessage}
              />
              <TrackContainer panelHidden={panelHidden} trackList={trackList} />
              <ShowPanel
                panelHidden={panelHidden}
                setPanelHidden={setPanelHidden}
              />
              
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
