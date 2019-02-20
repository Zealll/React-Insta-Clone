import React from 'react';
import './CommentSection.css'
import moment from 'moment'



class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            // text:''
        }
    }

    addComment = e => {
        e.preventDefault()
        const newComment = {
            username: 'baksj',
            text: this.state.text,
        }
        this.setState({
            comments:[...this.state.comments, newComment]
        })
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }
    render() {
        console.log(this.state.comments)
        return (
            <div className='commentSection'>
                {this.state.comments.map(individualCommenter => (
                    <div className='comment' key={individualCommenter.text}>
                        <strong>{individualCommenter.username}</strong>
                        {individualCommenter.text}
                    </div>)
                )}
                <p>{moment(this.props.timestamp, 'MMMM Do YYYY, LTS').startOf('day').fromNow()}</p>
                <form onSubmit={this.addComment}>
                    <input 
                    placeholder='Add a comment...'
                    onChange={this.changeHandler}
                    value={this.state.text}
                    name='text'></input>
                </form>
            </div>
            
        )
    
    }
}
        

export default Comment