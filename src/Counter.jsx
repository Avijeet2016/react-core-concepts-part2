import { useState } from "react"


export default function Counter() {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(5);
    }

    return (
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Click me</button>
        </div>
    )
}