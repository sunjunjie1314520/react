import React, { Component } from 'react';

import { connect } from "react-redux";

import { addOne, loadDataAsync } from "../../redux/actions/listdata";
import logo from "../../style/img/logo.svg";

import './index.styl';

import Two from './Two';

import { Link } from "react-router-dom";

class App extends Component{
	constructor(props){
		super(props)
		this.state = {}
	}
	componentDidMount(){
		
	}
	render(){
		const {count, loadding, data, loadDataAsync, addOne} = this.props
		return (
			<>
				<h2 className="all">App.js</h2>
				<img src={logo} width="60" alt=""/>
				<p>{count}</p>
				<button className="c3" onClick={() => addOne(-1)}>点一下-1</button>
				<button className="c1" onClick={() => addOne(1)}>点一下+1</button>
				<button className="c2" onClick={loadDataAsync}>加载数据</button>
				<Link to="/test">Test</Link>
				{
					loadding ?
					<h2>加载中...</h2>
					:
					<ul>
						{
							data.map((v, k) => (<li key={v.id}>{v.Code}</li>))
						}
					</ul>
				}

				<Two></Two>
				
			</>
		)
	}
}

export default connect(
	state => ({
		count: state.app.count,
		loadding: state.app.loadding,
		data: state.app.data
	}),
	{
		addOne,
		loadDataAsync
	}
)(App);
