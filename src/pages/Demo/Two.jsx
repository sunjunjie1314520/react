import React, { Component } from 'react'

export default class Two extends Component {
    state ={
        show: true,
        cl_name: 'sub-miut abc2'
    }
    componentDidMount(){
        // document.addEventListener("popstate", this.handlePop)
    }
    handlePop1 = (e)=>{
        this.setState({
            cl_name: 'sub-miut slideInOut-enter-done'
        })
        setTimeout(()=>{
            this.handlePop2();
        }, 1500)
    }
    handlePop2 = (e)=>{
        this.setState({
            show: false,
        })
        setTimeout(()=>{
            this.setState({
                cl_name: 'sub-miut abc2',
                show: true,
            })
        }, 800)
    }
    render() {
        const {show, cl_name} = this.state
        console.log(window.location.pathname);
        return show ? React.createElement(One, {className: cl_name}, [<li key="a1" onClick={this.handlePop1}>5646544</li>]) : null
    }
}

class One extends Component {
    render() {
        console.log(this.props);
        return (
            <div {...this.props}>
                {this.props.children}
            </div>
        )
    }
}