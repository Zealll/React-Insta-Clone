import React from 'react'
import likebutton from './images/likebutton.PNG'
import commentbutton from './images/commentbutton.PNG'

class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: props.likes
        }
    }

    addLikes = () => {
        let likes = this.state.likes + 1;
        this.setState({
          likes
        })
      }

    render() {
        return (
            <> <div className='like-comment'>
                    <img src={likebutton}  onClick={this.addLikes} alt='like button'></img>
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