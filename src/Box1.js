import React, { Component } from 'react';

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

  export default Box1;

