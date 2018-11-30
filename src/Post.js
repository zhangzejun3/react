import React, { Component } from 'react'

function getPostData() {
  return new Promise(
    resolve => {
      setTimeout(() => {
        let number = parseInt(Math.random() * 6 + 0.5)
        let result = `你的点数是${number}`
        resolve(result)

      }, 1000)
    }
  )
}

class Post extends Component {
  constructor() {
    super()
    this.state = {
      content: ''
    }
  }
  async loadData() {
    this.setState({
      content: '数据加载中...'
    })
    let result = await getPostData()
    this.setState({
      content: result
    })
  }
  componentWillMount() {
    this.loadData()
  }
  render() {
    return (
      <div className='post'>
        <div className="post-content">
          {this.state.content}
        </div>
        <button onClick={this.loadData.bind(this)}>
          下一局
        </button>
      </div>
    )
  }
}

export default Post;
