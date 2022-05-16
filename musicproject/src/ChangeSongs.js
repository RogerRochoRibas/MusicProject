export function ChangeSongs(props) {
    return <button onClick={() => {
        return props.fetchMain();
    }}>Change Songs</button>
}