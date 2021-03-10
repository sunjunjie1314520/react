import React, { Component, createRef } from 'react'

import { offsetTop } from '../../utils';

import PropTypes from 'prop-types'

export default class index extends Component {

    static defaultProps = {
        picture: false,
    }

    constructor(props){
        super(props)
        this.table = createRef()
        this.state = {
            width: null,
        }
    }
    
    componentDidMount(){
        let w_hei = window.innerHeight
        let off_top = offsetTop(this.table.current)
        this.table.current.style.height = (w_hei - off_top - this.props.bottom) +'px'

        const { fields } = this.props
        
        let width = 0;
        fields.forEach(item=> width += item.width)

        this.setState({
            width: width,
            init: w_hei - off_top
        })
    }

    componentDidUpdate(){
        const {init} = this.state
        this.table.current.style.height = (init - this.props.bottom) +'px'
    }

    scroll(e){
        let left = e.target.scrollLeft
        e.target.previousElementSibling.scrollLeft = left
    }
    render() {
        const { width } = this.state
        const { fields, picture } = this.props
        return (
            <div className="clearfix">
                <div className="pub-row-style">
                    <div className="table-head">
                        <div className="slide-bar" style={{minWidth: `${width}px`}}>
                            {
                                fields.map((v, k)=>{
                                    return <span key={k} style={{width: `${v.width}px`}}>{v.name}</span>
                                })
                            }
                        </div>
                    </div>
                    <div className={`table-row ${picture?'pub-small':''}`} ref={this.table} onScroll={this.scroll}>
                        <ul style={{minWidth: `${width}px`}}>
                            {this.props.children}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


class Box extends Component {
    render() {
        const { w } = this.props
        return (
            <span style={{width: `${w}px`}}>
                {this.props.children}
            </span>
        )
    }
}

class Li extends Component {
    render() {
        return (
            <li className={this.props.check ? 'pub-table-back': ''}>
                {this.props.children}
            </li>
        )
    }
}


export {Box, Li}