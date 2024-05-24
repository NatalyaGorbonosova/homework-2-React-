import React, { useEffect, useRef, useState } from 'react';
function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" },
        { id: 4, text: "Это четвертый комментарий" },
        { id: 5, text: "Это пятый комментарий" },
        { id: 6, text: "Это шестой комментарий" },
        ]);
    
    const deleteComment = (e) => {
        const deletedItemId = e.target.closest('li');
        deletedItemId.remove();
        comments.map((comment) => {
            
            if (Number(comment.id) == deletedItemId.key) {
                comments.splice(comments.indexOf(comment), 1);
            }
        })
        setComments([...comments]);
    }

    return ( 
        <div>
            <ul>
                {comments.map((comment) => 
                    (<li  className="item-comment" key={comment.id} >{comment.text} <button onClick={deleteComment} >Удалить комментарий</button></li>))}
            </ul>
        </div>
     );
}

export default CommentsList;