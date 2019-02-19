import React from 'react';
import './CommentSection.css'
import moment from 'moment'



const Comment = props => {
        return (
            <div className='commentSection'>
                {props.comments.map(individualCommenter => (
                    <div className='comment'>
                        <strong>{individualCommenter.username}</strong>
                        {individualCommenter.text}
                    </div>)
                )}
                <p>{moment(props.timestamp, 'MMMM Do YYYY, LTS').startOf('day').fromNow()}</p>
                <form>
                    <input placeholder='Add a comment...'></input>
                </form>
            </div>
            
        )
    }

export default Comment