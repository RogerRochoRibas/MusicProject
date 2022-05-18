import React from "react";
export function TrackList(props) {
  if (props.trackList.length > 0) { 
    let SongsMounted = props.trackList.map((element, index) => {
      return (
          <div className="track">
              <td className="track_title">{element.title}</td>
              <td className="track_artist"> - {element.artist_display_name}</td>
              <td className="track_genre">{element.genre}</td>
          </div>
      );
    });
    return SongsMounted;
  }
}
