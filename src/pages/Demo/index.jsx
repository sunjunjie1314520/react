import React, { Component } from 'react';

import { connect } from "react-redux";

import { loadData } from "../../actions/action";

import logo from "../../style/img/logo.svg";

import demo from './index.module.css';

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
		const {add_one, count, load_data, loadding, data} = this.props
		console.log(this.props);
		return (
			<>
				<h2>App.js</h2>
				<img src={logo} width="60" alt=""/>
				<p>{count}</p>
				<button className="c1" onClick={add_one}>点一下加+1</button>
				<button className="c2" onClick={load_data}>加载数据</button>

				<div className="wrap" ref={this.myRef} style={{width: '300px', height: '100px', background: '#f60'}}>
					
				</div>
				<button onClick={this.show}>显示show</button>
				{
				loadding ?
					<h2>加载中...</h2>
				:
					<div>
						<ul>
							{
								data.map((v, k) => (<li key={v.id}>{v.Code}</li>))
							}
						</ul>
					</div>
				}
                <h3 className={demo.title}>46546546445</h3>
				<Link to="/test">Test</Link>
			</>
		)
	}
}

var mapStateToProps = function(state, ownProps){
	return {
		count: state.app.count,
		loadding: state.app.loadding,
		data: state.app.data
	}
}

var mapDispatchToProps = function(dispatch, ownProps){
	return {
		add_one(){
			dispatch({
				type: 'ADD_ONE',
			})
		},
		load_data(){
			dispatch(loadData())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
