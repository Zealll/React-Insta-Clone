import React from 'react';
import Comment from '../CommentSection/CommentSection'
import './PostContainer.css'
import LikeButton from './LikeButton'

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
    }

    render() {
        if (!this.state.data.length) {
            return <h1>Loading Your Post...</h1>
        }
        return (
            <>
                {this.state.data.map(poster => (
                    <div className='container' key={poster.timestamp}>
                        <div className='userDisplay' >
                         <img src={poster.thumbnailUrl} alt={`${poster.username}'s profile pic`}></img> <p><strong>{poster.username}</strong></p>
                        </div>
                        <div className='postImage'>
                            <img src={poster.imageUrl} alt={`${poster.username}'s img`}></img>
                        </div>
                        <div>
                            <LikeButton likes={poster.likes} />
                        </div>
                        <div>
                           <Comment comments={poster.comments} timestamp={poster.timestamp}/>
                        </div>
    
                    </div>
                    
                ))}
            </>
        )
    }
    
}

export default PostContainer