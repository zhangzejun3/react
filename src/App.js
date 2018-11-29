import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Box1 />
        <Box2 />
      </div>
    )
  }
}

class Box1 extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          number:0
      }
  }
  add(){
      this.setState({
          number:this.state.number+=1
      })
  }
  minus(){
      this.setState({
          number:this.state.number-=1
      })
  }
  render(){
      return(
          <div className='red'>
          <span>{this.state.number}</span>
          <button onClick={this.add.bind(this)}>+1</button>
          <button onClick={this.minus.bind(this)}>-1</button>
          </div>
      )
  }
}

class Box2 extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          number:0
      }
  }
  add(){
      this.setState({
          number:this.state.number+=2
      })
  }
  minus(){
      this.setState({
          number:this.state.number-=2
      })
  }
  render(){
      return(
          <div className='red'>
          <span>{this.state.number}</span>          
          <button onClick={this.add.bind(this)}>+2</button>
          <button onClick={this.minus.bind(this)}>-2</button>
          </div>
      )
  }
}

export default App;
