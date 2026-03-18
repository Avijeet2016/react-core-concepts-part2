import { use } from "react"

export default function Users({fetchUsers}) {
    const usersData = use (fetchUsers);
    return (
        <div>
            <h3>Users:</h3>
            <p>Number of Users: {usersData.length}</p>
        </div>
    )
}