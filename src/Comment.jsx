import Comments from "./Comments"

export default function Comment({comment}) {
    // console.log(comment);
    const {name, email, body} = comment;
    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    )
}
