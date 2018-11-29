import React, { Component } from 'react'

class PercentageShower extends Component{
    render(){
        let num = (this.props.number*100).toFixed(2)
        return(
            <div>
                {`${num}%`}
            </div>
        )
    }
}

export default PercentageShower;
