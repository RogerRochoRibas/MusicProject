export function GenreSelector(props) {
  return (
    <div>
    <GenreButton genre="Rap" />
      <GenreButton genre="Electro" />
      <GenreButton genre="Randb" />
      <GenreButton genre="Latino" />
      <GenreButton genre="Jazz" />
      <GenreButton genre="Classique" />
      <GenreButton genre="Gospel" />
      <GenreButton genre="Cinema" />
      <GenreButton genre="Blues" />
      <GenreButton genre="World" />
      <GenreButton genre="Metal" />
      <GenreButton genre="Reggae" />
      <GenreButton genre="Rock" />
      <GenreButton genre="Soul" />
      <GenreButton genre="Variete" />
      <GenreButton genre="Funk" />
      <GenreButton genre="Pop" />
      <GenreButton genre="Disco" />
    </div>
  );
}

function GenreButton(props) {
  return (
    <div>
      <article className="genreBox">
        <input type="checkbox" />
        <div>
          <span className="genre">{props.genre}</span>
        </div>
      </article>
    </div>
  );
}
