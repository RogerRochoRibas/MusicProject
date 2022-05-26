export function ChangeSongs(props) {
  return (
    <button
      onClick={() => {
        return props.fetchMain();
      }}
      className="bn39"
      href="/"
    >
      <span className="bn39span">Get Songs</span>
    </button>
  );
}
