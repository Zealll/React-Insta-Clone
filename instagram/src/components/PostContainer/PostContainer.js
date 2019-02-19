import React from 'react';
import Comment from '../CommentSection/CommentSection'
import './PostContainer.css'
import likebutton from './images/likebutton.PNG'
import commentbutton from './images/commentbutton.PNG'

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
                        <img src={likebutton} alt='like button'></img>
                        <img src={commentbutton} alt='comment button'></img>
                    </div>
                    <div className='likes'>
                        {poster.likes}
                    </div>
                    <div>
                       <Comment comments={poster.comments} timestamp={poster.timestamp}/>
                    </div>

                </div>
                
            ))}
        </>
    )
}

export default PostContainer