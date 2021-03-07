import React, { Component, createRef} from 'react'

import PropTypes from 'prop-types'

import { offsetTop } from '../../utils';

export default class index extends Component {

    static propTypes = {
        bottom: PropTypes.number
    }

    static defaultProps = {
        bottom: 0
    }

    constructor(props){
        super(props)
        this.wrapper = createRef()
        this.state = { }
    }
    
    componentDidMount(){
        const { bottom } = this.props
        let w_hei = window.innerHeight
        let off_top = offsetTop(this.wrapper.current)
        this.wrapper.current.style.height = `${w_hei - off_top - bottom}px`
    }

    render() {
        return (
            <div {...this.props} ref={this.wrapper}>
                {this.props.children}
            </div>
        )
    }
}
