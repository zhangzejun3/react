import React, { Component } from 'react';

class App extends Component {
    constructor () {
        super()
        this.state = { isLiked: false }
      }
    
      handleClickOnLikeButton () {
        this.setState({
          isLiked: !this.state.isLiked
        })
      }
    
      render () {
        return (
          <button onClick={this.handleClickOnLikeButton.bind(this)}>
            {this.state.isLiked ? '取消' : '点赞'} 👍
          </button>
        )
      }
}

export default App;
