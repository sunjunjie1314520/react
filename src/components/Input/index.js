import React, {Component} from 'react';

export default class Input extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }
    inputHandle(e){

        var reg = /\d/g

        let value = e.target.value

        var arr = value.match(reg)

        if (value.length > this.props.maxLength) return

        this.setState({
            value: arr ? arr.join('') : ''
        })

    }
    inputBlur(e){
        console.log(e);
        if(this.state.value !=='' && this.state.value < this.props.min){
            this.setState({
                value: this.props.min
            })
        }
    }
    render(){
        return (
            <div className="input-wrap">
                <input type="tel" onInput={ (e) => this.inputHandle(e)} value={this.state.value} onBlur={(e)=> this.inputBlur(e)} />
            </div>
        )
    }
}