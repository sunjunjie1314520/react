import React, { Component } from 'react'

import PubSub from 'pubsub-js';



import './index.styl'

class Child extends Component {
    render() {
        return (
            <div>
                <h2>我是Child</h2>
                <S1/>
                <S2/>
            </div>
        )
    }
}

class S1 extends Component {
    inputHandle = (e) => {
        PubSub.publish('My', e.target.value)
    }
    render() {
        return (
            <div>
                <h2>S1组件内容</h2>
                <input maxLength={10} type="text" onInput={this.inputHandle}/>
                
            </div>
        )
    }
}

class S2 extends Component {
    state = {
        title: ''
    }
    mysub = (msg, data) =>{
        console.log(msg, data);
        this.setState({
            title: data,
        })
    }
    componentDidMount(){
        PubSub.subscribe('My', this.mysub)
    }
    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                
            </div>
        )
    }
}


export default Child