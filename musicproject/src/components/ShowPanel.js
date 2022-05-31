export function ShowPanel(props) {
  if (props.panelHidden)
  return (
    <button
      onClick={() => {
        props.setPanelHidden(false);
      }}
      id="showPanel"
      className="showPanel"
      href="/"
    >
    <img
      id="close-icon"
      className="panelpng"
      alt="close icon"
      src={require("../img/icon-open.png")}
    />
    </button>
  );
}
