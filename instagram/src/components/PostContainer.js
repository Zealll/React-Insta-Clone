import React from 'react';
import Comment from './CommentSection'

function PostContainer(props) {
    if (!props.data.length) {
        return <h1>Loading Your Post...</h1>
    }
    return (
        <>
            {props.data.map(poster => (
                <div className='container' key={poster.timestamp}>
                    <div className='userDisplay' >
                     <img src={poster.thumbnailUrl} alt={`${poster.username}'s profile pic`}></img> <p><strong>{poster.username}</strong></p>
                    </div>
                    <div className='postImage'>
                        <img src={poster.imageUrl} alt={`${poster.username}'s img`}></img>
                    </div>
                    <div className="like-comment">
                        <img src='#' alt='like button'></img>
                        <img src='#' alt='comment button'></img>
                    </div>
                    <div className='likes'>
                        {poster.likes}
                    </div>
                    <div>
                       <Comment comments={poster.comments}/>
                    </div>

                </div>
                
            ))}
        </>
    )
}

export default PostContainer