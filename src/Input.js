import React, { Component } from 'react'

class Input extends Component{
    constructor(){
        super()
        this.state = {
            number:0
        }
    }
    handleNumberChange(e){
        this.setState({
            number:e.target.value
        })
        if(this.props.onSubmit){
            this.props.onSubmit({
                number:e.target.value
            })
        }
    }
    render(){
        return(
            <div>
                <input type="number"
                value={this.state.number}
                onChange={this.handleNumberChange.bind(this)}/>
            </div>
        )
    }
}

export default Input;
