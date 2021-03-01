import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

// 引入工具插件
import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import thunk from "redux-thunk";

import reducer from './reducers';

import router from './routers/index';

import './style/css/style.css';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Switch>
					{
					router.map((v, k)=>{
						return <Route key={k} path={v.path} exact={v.exact} component={v.component} ></Route>
					})
					}
					<Redirect to="/404" />
				</Switch>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
