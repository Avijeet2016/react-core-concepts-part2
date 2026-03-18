import { useState } from "react"

export default function Cart() {
    const [items, setItems] = useState(0);

    return (
        <div>
            <p>Items: {items}</p>
            <button onClick={() => setItems(items + 1)}>Add Items</button>
        </div>
    )
}