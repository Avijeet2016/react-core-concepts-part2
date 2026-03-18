import { useState } from "react"

export default function Toggle() {
    const [show, setShow] = useState(false);
    const toggle = () => {
        return setShow(!show)
    }
    const divStyle = {
        border: '1px solid green'
    }
    return (
        <div style={divStyle}>
            <button onClick={toggle}>toggle</button>
            {show && <li>Avijeet</li>}
        </div>
    )
}