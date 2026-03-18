import { use } from "react"
import Comment from "./Comment";

export default function Comments({commentsPromise}) {
    const commentsData = use (commentsPromise);
    
    return (
        <div>
            <h3>All Comments are here</h3>
            {
                commentsData.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
            }
        </div>
    )
}