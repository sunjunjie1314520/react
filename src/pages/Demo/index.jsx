import React, { Component } from 'react';

import { connect } from "react-redux";

import { addOne, loadDataAsync } from "../../redux/actions/listdata";

import logo from "../../style/img/logo.svg";

import './index.styl';

import {Link} from 'react-router-dom';

class App extends Component{

	myRef = React.createRef()

	constructor(props){
		super(props)
		this.state = {}
	}

	show = () => {
		console.log(this.myRef.current.clientWidth);
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

				<div className="wrap1" ref={this.myRef}>
					
				</div>
				<button className="abc1" onClick={this.show}>显示show</button>
				{
				loadding ?
					<h2>加载中...</h2>
				:
					<>
						<ul>
							{
								data.map((v, k) => (<li key={v.id}>{v.Code}</li>))
							}
						</ul>
					</>
				}
                <h3 className="title">46546546445</h3>
				<Link to="/test">Test</Link>
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
