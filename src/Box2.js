import React, { Component } from 'react';

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

  export default Box2;

