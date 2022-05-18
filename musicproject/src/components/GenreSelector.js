import React from "react";

export function GenreSelector(props) {
  return (
    <div id="genreGrid">
      <GenreButton genre="Rap" />
      <GenreButton genre="Electro" />
      <GenreButton genre="Randb" />
      <GenreButton genre="Latino" />
      <GenreButton genre="Jazz" />
      <GenreButton genre="Classical" />
      <GenreButton genre="Gospel" />
      <GenreButton genre="Cinema" />
      <GenreButton genre="Blues" />
      <GenreButton genre="World" />
      <GenreButton genre="Metal" />
      <GenreButton genre="Reggae" />
      <GenreButton genre="Rock" />
      <GenreButton genre="Soul" />
      <GenreButton genre="Vocal" />
      <GenreButton genre="Funk" />
      <GenreButton genre="Pop" />
      <GenreButton genre="Disco" />
    </div>
  );
}

function GenreButton(props) {
  return (
      <article className={props.genre}>
        <div className="genreBox">
          <input type="checkbox" />
          <div>
            <span className="genre">{props.genre}</span>
          </div>
        </div>
      </article>
  );
}