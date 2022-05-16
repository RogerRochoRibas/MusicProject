export function Slider(props) {
    const output = document.querySelector('output')

const doThings = (events) => {
	const { value, min, max, step, parentElement: parent } = events.target
	const decimals = step && step.includes('.') ? step.split('.')[1] : 1
	const percent = `${((value - min)/(max - min) * 100).toFixed(decimals)}%`
	parent.style.setProperty('--p', percent)
	output.value = `Happyness: ${percent}`
    props.settrackvalence(percent*10000)
}
return <p><label class="heat-slider heat-slider--v">
<span className="heat-slider--label">Are you happy?</span>
<span className="heat-slider--input">
    <input id="slider" type="range" min="0" max="100" onChange={(e)=>doThings(e)} />
</span>
</label>

<output>change the slider</output></p>
}