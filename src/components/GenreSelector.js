import React from "react";

export function GenreSelector(props) {
  return (
    <div id="genreGrid">
      <GenreButton
        genreNo={props.genreNo}
        setGenreNo={props.setGenreNo}
        genre="Rap"
      />
      <GenreButton
        genreNo={props.genreNo}
        setGenreNo={props.setGenreNo}
        genre="Electro"
      />
      <GenreButton
        genreNo={props.genreNo}
        setGenreNo={props.setGenreNo}
        genre="HipHop"
      />
      <GenreButton
        genreNo={props.genreNo}
        setGenreNo={props.setGenreNo}
        genre="Latin"
      />
      <GenreButton
        genreNo={props.genreNo}
        setGenreNo={props.setGenreNo}
        genre="Jazz"
      />
      <GenreButton
        genreNo={props.genreNo}
        setGenreNo={props.setGenreNo}
        genre="Classical"
      />
      <GenreButton
        genreNo={props.genreNo}
        setGenreNo={props.setGenreNo}
        genre="Blues"
      />
      <GenreButton
        genreNo={props.genreNo}
        setGenreNo={props.setGenreNo}
        genre="Soul"
      />
      <GenreButton
        genreNo={props.genreNo}
        setGenreNo={props.setGenreNo}
        genre="Cinema"
      />
      <GenreButton
        genreNo={props.genreNo}
        setGenreNo={props.setGenreNo}
        genre="World"
      />
      <GenreButton
        genreNo={props.genreNo}
        setGenreNo={props.setGenreNo}
        genre="Metal"
      />
      <GenreButton
        genreNo={props.genreNo}
        setGenreNo={props.setGenreNo}
        genre="Reggae"
      />
      <GenreButton
        genreNo={props.genreNo}
        setGenreNo={props.setGenreNo}
        genre="Rock"
      />
      <GenreButton
        genreNo={props.genreNo}
        setGenreNo={props.setGenreNo}
        genre="Folk"
      />
      <GenreButton
        genreNo={props.genreNo}
        setGenreNo={props.setGenreNo}
        genre="Vocal"
      />
      <GenreButton
        genreNo={props.genreNo}
        setGenreNo={props.setGenreNo}
        genre="Country"
      />
      <GenreButton
        genreNo={props.genreNo}
        setGenreNo={props.setGenreNo}
        genre="Pop"
      />
      <GenreButton
        genreNo={props.genreNo}
        setGenreNo={props.setGenreNo}
        genre="Funk"
      />
    </div>
  );
}

function GenreButton(props) {
  function changeGenre(genre) {
    let newGenre = { ...props.genreNo };
    if (newGenre[genre]) {
      newGenre[genre] = false;
    } else {
      newGenre[genre] = true;
    }
    props.setGenreNo(newGenre);
  }
  return (
    <article className={props.genre}>
      <div className="genreBox">
        <input
          type="checkbox"
          id={props.genre}
          onClick={(e) => changeGenre(props.genre)}
        />
        <div>
          <span className="genre">{props.genre}</span>
        </div>
      </div>
    </article>
  );
}

export function AllGenres(props) {
  function allGenreToggle(value) {
    let newGenre = { ...props.genreNo };
    Object.keys(newGenre).forEach((key) => {
      newGenre[key] = value;
    });
    Object.keys(newGenre).forEach(
      (key) => (document.getElementById(key).checked = value)
    );
    props.setGenreNo(newGenre);
  }
  return (
    <div>
      <button
        className="allGenres"
        id="All"
        onClick={(e) => allGenreToggle(false)}
      >
        <span className="allGenresSpan">All</span>
      </button>
      <button
        className="allGenres"
        id="None"
        onClick={(e) => allGenreToggle(true)}
      >
        <span className="allGenresSpan">None</span>
      </button>
    </div>
  );
}
