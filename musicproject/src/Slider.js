export function Slider(props) {
  const output = document.getElementById(props.identifier);

  const doThings = (events) => {
    const { value, min, max, parentElement: parent } = events.target;
    const percent = `${(((value - min) / (max - min)) * 100).toFixed(0)}%`;
    parent.style.setProperty("--p", percent);
    output.value = `${percent}`;
    props.setTrack(value * 10000);
  };

  return (
    <div className='slider'>
      <label className="heat-slider heat-slider--v">
        <div className="heat-slider--label"><h3>{props.identifierTwo}</h3><h3>{props.identifier}</h3></div>
        <span className="heat-slider--input">
          <input
            id="slider"
            type="range"
            min="0"
            max="100"
            onChange={(e) => doThings(e)}
          />
        </span>
      </label>
      <output id={props.identifier}></output>
    </div>
  );
}
