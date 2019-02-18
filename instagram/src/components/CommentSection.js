import React from 'react';


const Comment = props => {
    return (
        <div>
            {props.comments.map(individualCommenter => (
                <div className='comment'>
                    {individualCommenter.username}
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