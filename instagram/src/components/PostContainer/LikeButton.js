import React from 'react'
import likebutton from './images/likebutton.PNG'
import commentbutton from './images/commentbutton.PNG'

class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: props.likes,
            likeToggle: false
        }
    }

    addLike = () => {
        if (this.state.likeToggle == false) {
            this.setState({ 
                likes: this.state.likes + 1,
                likeToggle: true 
            })
        } else {
            this.setState({ 
                likes: this.state.likes - 1,
                likeToggle: false 
            })
        }
    }

    render() {
        return (
            <> <div className='like-comment'>
                    <img src={likebutton}  onClick={this.addLike} alt='like button'></img>
                    <img src={commentbutton} alt='comment button'></img>
                </div>
                <div className='likes'>
                    {this.state.likes}
                </div>
                
            </>

        )
    }
}

export default LikeButton