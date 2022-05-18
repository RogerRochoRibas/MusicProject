export function ChangeSongs(props) {
  return (
    <button
      onClick={() => {
        return props.fetchMain();
      }}
      className="bn39"
      href="/"
    >
      <span class="bn39span">Get Songs</span>
    </button>
  );
}