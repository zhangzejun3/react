import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Input from './Input'
import PercentageShower from './PercentageShower'

class PercentageApp extends Component{
    constructor(){
        super()
        this.state = {
            number:0
        }
    }
    handleNumber(data){
        if(!data){alert('请输入数字')}
        this.setState({
            number:data.number
        })
    }
    render(){
        return(
            <div>
                <Input onSubmit={this.handleNumber.bind(this)}/>
                <PercentageShower number={this.state.number}/>
            </div>
        )
    }
}

ReactDOM.render(
    <PercentageApp />,
    document.getElementById('root')
)