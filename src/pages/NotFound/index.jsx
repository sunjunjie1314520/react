import React, { Component } from 'react';

import { Link } from "react-router-dom";

import "./index.css";

export default class ErrorComponent extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return (
            <div className="error">
                <Link to="/home">去首页</Link>
                <p>404 Found Error Pages</p>
            </div>
        )
    }
}