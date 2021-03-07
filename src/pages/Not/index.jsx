import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import './index.styl';

export default class index extends Component {
    render() {
        return (
            <div id="sub-page">
                <h3>子页面开发中...</h3>
                <p>Sub page development</p>
                <Link to="/home/index">去首页</Link>
            </div>
        )
    }
}
