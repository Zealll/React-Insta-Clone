import React from 'react';
import './CommentSection.css'



const Comment = props => {
    return (
        <div className='commentSection'>
            {props.comments.map(individualCommenter => (
                <div className='comment'>
                    <strong>{individualCommenter.username}</strong>
                    {individualCommenter.text}
                </div>)
            )}
            <form>
                <input placeholder='Add a comment...'></input>
            </form>
        </div>
        
    )
}

export default Comment