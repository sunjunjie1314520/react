import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { Provider } from 'react-redux';

import router from './routers/index';

import { ConfigProvider } from 'antd';

import 'antd/dist/antd.css';

import './style/css/reset.css';

import './style/css/style.css';

import store from './redux/store'

import locale from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';

ReactDOM.render(
	<React.StrictMode>
		<ConfigProvider locale={locale} csp={{ nonce: 'YourNonceCode' }}>
		<Provider store={store}>
				<Router>
					<Switch>
						{
						router.map((v, k)=>{
							return <Route key={k} path={v.path} exact={v.exact} component={v.component} ></Route>
						})
						}
						<Redirect to="/home/index" />
					</Switch>
				</Router>
		</Provider>
		</ConfigProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
