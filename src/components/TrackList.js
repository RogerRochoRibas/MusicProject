import React from "react";
import classNames from "classnames";

export function TrackContainer(props) {
  return (<div
  className={classNames("trackContainer", { expandToggle: props.panelHidden })}
>
  <ul className="Tracks">
    <TrackList trackList={props.trackList} />
  </ul>
</div>)
}

export function TrackList(props) {
  if (props.trackList) {
    if (props.trackList.length > 0) {
      let SongsMounted = props.trackList.map((element, index) => {
        return (
          <li key={element.title} className={`track ${element.genre}`}>
            <h2>{element.genre}</h2>
            <div className="centerTrack">
              <h3 className="track_title">
                {element.title.length > 27
                  ? `${element.title.substring(0, 24)}...`
                  : element.title}
              </h3>
              <p className="track_artist">
                {element.artist_display_name.length > 30
                  ? `${element.artist_display_name.substring(0, 27)}...`
                  : element.artist_display_name}
              </p>
            </div>
          </li>
        );
      });
      return SongsMounted;
    } else {
      return <div>Getting songs from Musicovery...</div>;
    }
  } else {
    return <div>No songs found.</div>
  }
}
