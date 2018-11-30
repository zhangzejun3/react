import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Post from './Post'

class Index extends Component {
  render() {
    return (
      <div className='wrapper'>
        <h1>掷骰子</h1>
        <Post />
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)
