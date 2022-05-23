import React from "react";

export function GenreSelector(props) {
  
  return (
    <div id="genreGrid">
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Rap" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Electro" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="RandB" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Latino" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Hip-Hop" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Classical" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Jazz" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Cinema" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Blues" />
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
  function changeGenre(genre,value) {
    console.log('value',genre)
    console.log('value',value)
    /* try {
    let newGenreNo = {...props.genreNo};
    newGenreNo.indexOf(genre) === -1 ? newGenreNo.push(genre) : newGenreNo.splice(newGenreNo.indexOf(genre), 1);
    props.setGenreNo(newGenreNo);
  } catch(err)
  {console.log(err)} */
  }
  return (
      <article className={props.genre}>
        <div className="genreBox">
          <input type="checkbox" onClick={e => changeGenre(props.genre,this.checked)} />
          <div>
            <span className="genre">{props.genre}</span>
          </div>
        </div>
      </article>
  );
}