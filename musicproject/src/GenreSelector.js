export function GenreSelector(props) {
  return (
    <>
      <div>
        <p>
          <GenreButton genre="Rock" />
        </p>
      </div>
    </>
  );
}

function GenreButton(props) {
  return <button className="genre">{props.genre}</button>;
}
