import React from "react";

export function GenreSelector(props) {
  
  return (
    <div id="genreGrid">
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Rap" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Electro" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="HipHop" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Latino" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Jazz" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Classical" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Blues" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Cinema" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="European" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="World" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Metal" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Reggae" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Rock" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Folk" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Vocal" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Country" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Pop" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Disco" />
    </div>
  );
}

function GenreButton(props) {
  function changeGenre(genre) {
    let newGenre = {...props.genreNo};
    if (newGenre[genre]) {newGenre[genre]=false}
    else {newGenre[genre]=true}
    props.setGenreNo(newGenre);
  }
  return (
      <article className={props.genre}>
        <div className="genreBox">
          <input type="checkbox" onClick={e => changeGenre(props.genre)} />
          <div>
            <span className="genre">{props.genre}</span>
          </div>
        </div>
      </article>
  );
}