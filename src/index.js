import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Clock from './Clock'

class Index extends Component{
  constructor(){
    super()
    this.state = {
      isShowClock:true
    }
  }

  handleClock(){
    this.setState({
      isShowClock:!this.state.isShowClock 
    })
  }

  render(){
    return(
      <div className='wrapper'>
      {this.state.isShowClock?<Clock/>:null}
      <div>
      <button onClick={this.handleClock.bind(this)}>
      {this.state.isShowClock?'隐藏时钟':'显示时钟'}
      </button>
      </div>
      </div>
    )
  }
}

  ReactDOM.render(
    <Index />,
    document.getElementById('root')
  )
