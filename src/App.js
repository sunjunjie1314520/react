import React, { Component } from 'react'

import Demo from './pages/Demo';

import 'antd/dist/antd.css';

import './App.styl';

export default class App extends Component {
	render() {
		console.log(this.props);
		return (
			<div className="container">
				<Demo />
			</div>
		)
	}
}
