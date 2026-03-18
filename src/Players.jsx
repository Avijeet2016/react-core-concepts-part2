import { use } from "react";

export default function Players({fetchPlayers}) {
    const playerList = use (fetchPlayers);
    return (
        <div>
            <h3>Players List: {playerList.length}</h3>
        </div>
    )
}