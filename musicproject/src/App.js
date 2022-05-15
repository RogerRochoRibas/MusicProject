import "./App.css";
import React from "react";

function App() {
  const [musicList, setMusicList] = React.useState([]);

  //Needs 'Moesif Origin & CORS Changer' extension to work in production

  function fetchMain() {
    fetch("http://musicovery.com/api/V6/search.php?fct=search&q=new&track=false")
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
    </div>
  );
}

export default App;
