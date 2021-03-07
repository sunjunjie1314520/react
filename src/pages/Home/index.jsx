import React, { Component } from 'react'
import { Read } from '../../utils'

import { connect } from 'react-redux';

import Left from './Left'
import Right from './Right'

import './index.styl';

import { ADD_OPEN_TABS } from '../../redux/actions/home';

class Index extends Component {

    componentDidMount(){
		const _this = this
		const { push, replace } = this.props.history
		window.onresize = function(){
			const { pathname } = _this.props.location
			push('/home/welcome')
			replace(pathname)
		}

        let cache = Read('tabs_item')
        if(cache){
            this.props.ADD_OPEN_TABS(cache)
        } else {
            replace('/home/index')
        }
	}

    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div id="home-page">
                <Left />
                <Right />
            </div>
        )
    }
}


export default connect(
    state => ({}),
    {ADD_OPEN_TABS}
)(Index)