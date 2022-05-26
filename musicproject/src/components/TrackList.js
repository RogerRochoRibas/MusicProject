import React from "react";
export function TrackList(props) {
  if (props.trackList.length > 0) { 
    let SongsMounted = props.trackList.map((element, index) => {
      return (
          <li className={`track ${element.genre}`}>
            <h2>{element.genre}</h2>
            <div className="centerTrack">
              <h3 className="track_title">{element.title}</h3>
              <p className="track_artist">{element.artist_display_name}</p>
              <button>Read more</button></div>
          </li>
      );
    });
    return SongsMounted;
  } else {return <div>Getting songs from Musicovery...</div>}
}
