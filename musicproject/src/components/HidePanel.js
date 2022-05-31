export function HidePanel(props) {
  return (
    <button
      onClick={() => {
        props.setPanelHidden(true);
      }}
      id="hidePanel"
      className="hidePanel"
      href="/"
    >
      <img
        id="close-icon"
        className="panelpng"
        alt="close icon"
        src={require("../img/icon-close.png")}
      />
      <p>Hide</p>
    </button>
  );
}
