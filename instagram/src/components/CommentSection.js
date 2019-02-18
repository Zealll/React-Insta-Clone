import React from 'react';


const Comment = props => {
    return (
        <div>
            {props.comments.map(individualCommenter => (
                <div>
                    {individualCommenter.username}
                    {individualCommenter.text}
                </div>)
            )}
        </div>
        
    )
}

export default Comment