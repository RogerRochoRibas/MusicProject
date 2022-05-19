import React from "react";

export function GenreSelector(props) {
  
  return (
    <div id="genreGrid">
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Rap" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Electro" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Randb" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Latino" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Jazz" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Classical" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Gospel" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Cinema" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Blues" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="World" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Metal" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Reggae" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Rock" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Soul" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Vocal" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Funk" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Pop" />
      <GenreButton genreNo={props.genreNo} setGenreNo={props.setGenreNo} genre="Disco" />
    </div>
  );
}

function GenreButton(props) {
  async function changeGenre(genre,value) {
    try { let newGenreNo = await {...props.genreNo};
    console.log(newGenreNo)
    newGenreNo[genre]= await value;
    props.setGenreNo(newGenreNo);
  } catch(err)
  {console.log(err)}
  }
  return (
      <article className={props.genre}>
        <div className="genreBox">
          <input type="checkbox" onChange={e => changeGenre(props.genre,e.target.value)} />
          <div>
            <span className="genre">{props.genre}</span>
          </div>
        </div>
      </article>
  );
}