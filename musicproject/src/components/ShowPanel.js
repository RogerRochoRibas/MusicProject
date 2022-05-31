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
      <p>Hide</p>
    </button>
  );
}
