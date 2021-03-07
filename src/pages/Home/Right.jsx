import React, { Component } from 'react'

import { Route, Switch } from "react-router-dom";

import { withRouter, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { Save } from '../../utils'
import router from '../../routers/index';
import ico5 from '../../../src/style/img/ico5.png'
import { CLOSE_TABS, ADD_OPEN_TABS } from '../../redux/actions/home';

class NavLink extends Component {
    state ={
        style: {
            cursor: 'pointer',
            transition: '.2s'
        }
    }
    openHandle = (e, title, path) => {
        e.preventDefault()
        e.stopPropagation()
        let data = {
            title: title,
            path,
            close: true,
        }
        Save('tabs_item', data)
        this.props.history.replace(path)
    }
    
    close = (e, index) => {
        e.preventDefault()
        e.stopPropagation()
        let last = [...this.props.tabs]
        let end = last[index - 1]
        
        if(this.props.location.pathname === this.props.to){
            Save('tabs_item', end)
            this.props.history.replace(end.path)
        }
        this.props.CLOSE_TABS(index)
    }

    render() {
        return (
            <>
                <a href={this.props.to} style={this.state.style} className={this.props.location.pathname === this.props.to ? 'acti': ''} onClick={(e)=> this.openHandle(e, this.props.children, this.props.to)}>{this.props.children}{this.props.close ? <i onClick={(e) => this.close(e, this.props.index)}>×</i> : ''}</a>
            </>
        )
    }
}

NavLink = connect(
    state => ({
        tabs: state.home.tabs
    }),
    {ADD_OPEN_TABS, CLOSE_TABS}
)(withRouter(NavLink))

class Right extends Component {

    componentDidUpdate(){
        Save('default', this.props.tabs)
    }

    quit = (e) =>{
        e.preventDefault()
        localStorage.clear()
        alert('退出成功！')
    }

    render() {
        const { tabs } = this.props
        return (
            <div className="main-right">
                <div className="head">
                    <div className="fl">
                        <a rel="noreferrer" href="http://www.fsmserp.com/" target="_blank">© 2016－2020 Fsmserp.com All Rights Reserved</a>
                    </div>
                    <ul>
                        <li>
                            <Link to="">
                                <i className="ico-per"></i>
                                <span>李家林</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <i className="ico-email"></i>
                                <span>消息</span>
                                <var>6</var>
                            </Link>
                        </li>
                        <li>
                            <a rel="noreferrer" href="/" onClick={this.quit}>
                                <i className="ico-quit"></i>
                                <span>退出</span>
                            </a>
                        </li>
                    </ul>
                    
                </div>
                <div className="page-tabs">
                    <div className="tabs-wrap">
                        {
                            tabs.map((v, k) => {
                                return <NavLink key={k} to={v.path} close={v.close} index={k}>{v.title}</NavLink>
                            })
                        }
                        {/* <span className="acti" href="index.html">主页</span>
                        <span className="acti" href="index.html">主页<i>×</i></span>
                        <span href="index.html"><i>×</i>主页</span> */}
                    </div>

                    <div className="pub-wen">
                        <a rel="noreferrer" target="_blank" href="http://www.fsmserp.com/index.php/home/article/lists/category/jc.html">
                            <img src={ico5} alt="" />
                        </a>
                    </div>
                </div>
                <div className="iframe">
                    <Switch>
                        {
                            router.map(item=>{
                                return (
                                    item.children.map((v, k)=>{
                                        return (<Route key={k} path={`${item.path}${v.path}`} exact={v.exact} component={v.component}></Route>)
                                    })
                                )
                            })
                        }
                    </Switch>
                </div>
            </div>
        )
    }
}

export default connect(
    state => (
        {
            tabs: state.home.tabs
        }
    ),
    {
        ADD_OPEN_TABS
    }
)(withRouter(Right))