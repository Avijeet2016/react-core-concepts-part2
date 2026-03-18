import { useState } from "react"

export default function Bowler() {
    const [run, setRun] = useState(0);
    const [singles, setSingles] = useState(0);
    const [doubles, setDoubles] = useState(0);

    const newDiv = {
        border: "2px solid yellow"
    }
    const singleRun = () => {
        const newSingles = singles + 1;
        setSingles(newSingles);
        const newRun = run + 1;
        setRun(newRun);
    }
    const twoRun = () => {
        const newDoubles = doubles + 1;
        setDoubles(newDoubles);
        const newRun = run + 2;
        setRun(newRun);
    }

    return (
        <div style={newDiv}>
            <h2>Total Run: {run}</h2>
            <p>Total Singles: {singles}</p>
            <p>Total Doubles: {doubles}</p>
            <button onClick={singleRun}>Single</button>
            <button onClick={twoRun}>Two</button>
            <button>Three</button>
            <button>Four</button>
            <button>Six</button>
        </div>
    )
}