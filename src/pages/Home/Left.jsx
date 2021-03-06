import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';

import logo from "../../style/img/logo.png";

import { connect } from 'react-redux';

import { ADD_OPEN_TABS } from '../../redux/actions/home';

import PubSub from 'pubsub-js';

import { Save } from '../../utils'

class NavLink extends Component {
    state ={
        style: {
            cursor: 'pointer',
            transition: '.2s'
        }
    }
    openHandle = (e, title, path) => {
        e.preventDefault()
        let data = {
            title,
            path,
            close: true,
        }
        Save('tabs_item', data)
        Save('default', this.props.tabs)
        this.props.ADD_OPEN_TABS(data)
        this.props.history.replace(path)
    }
    render() {
        return (
            <>
                <a href={this.props.to} style={this.state.style} className={this.props.location.pathname === this.props.to ? 'acti': ''} onClick={(e)=> this.openHandle(e, this.props.children, this.props.to)}>{this.props.children}</a>
            </>
        )
    }
}

NavLink = withRouter(NavLink)

NavLink = connect(
    state => ({
        tabs: state.home.tabs
    }),
    {ADD_OPEN_TABS}
)(NavLink)

class Li extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    playOpen = () => {
        const { slide, index } = this.props
        PubSub.publish('Close', {slide: !slide, index})
    }
    render() {
        const { slide } = this.props
        return (
            <li className={slide ? 'acti': ''}>
                <h2 onClick={this.playOpen}><i className={this.props.icons}></i><var>{this.props.children}</var></h2>
                <div className="slide-sub" style={{height: slide ? `${this.props.types.length * 38}px`: '0px'}}>
                    {
                        this.props.types.map((v, k)=>{
                            return <NavLink key={k} to={v.to}>{v.title}</NavLink>
                        })
                    }
                </div>
                <div className="small-mode">
                    {
                        this.props.types.map((v, k)=>{
                            return <NavLink key={k} to={v.to}>{v.title}</NavLink>
                        })
                    }
                </div>
            </li>
        )
    }
}

export default class Left extends Component {

    constructor(props){
        super(props)
        this.state = {
            current: {
                index: 0
            },
            menu: [
                {
                    slide: false,
                    title: '?????????',
                    icons: 'ico-huo',
                    types: [
                        {
                            title: '????????????',
                            to: '/home/message'
                        },
                        {
                            title: '????????????',
                            to: '/home/notice'
                        },
                        {
                            title: '????????????',
                            to: '/home/goods-file'
                        },
                        {
                            title: '????????????',
                            to: '/home/customer-case'
                        },
                        {
                            title: '????????????',
                            to: '/home/customer-profile'
                        },
                        {
                            title: '????????????',
                            to: '/home/customer-followup'
                        },
                        {
                            title: '???????????????',
                            to: '/home/customer-panorama'
                        },
                        {
                            title: '???????????????',
                            to: '/home/intention-sheet'
                        },
                        {
                            title: '????????????????????????',
                            to: '/home/authority'
                        },
                        {
                            title: '???????????????',
                            to: '/home/picture-inventory'
                        },
                        {
                            title: '????????????',
                            to: '/home/picture-catalogue'
                        },
                        {
                            title: '???????????????',
                            to: '/home/sales-list'
                        },
                        {
                            title: '????????????',
                            to: '/home/sales-order'
                        },
                        {
                            title: '????????????',
                            to: '/home/picture-guide'
                        },
                        {
                            title: '????????????',
                            to: '/home/delivery-arrangement'
                        },
                        {
                            title: '????????????',
                            to: '/home/receipt'
                        },
                        {
                            title: '????????????',
                            to: '/home/after-sales-management'
                        },
                    ]
                },
                {
                    slide: false,
                    title: '????????????',
                    icons: 'ico-huo',
                    types: [
                        {
                            title: '????????????',
                            to: '/home/purchase-order'
                        },
                        {
                            title: '????????????',
                            to: '/home/page1'
                        },
                        {
                            title: '????????????',
                            to: '/home/page1'
                        },
                        {
                            title: '???????????????',
                            to: '/home/Price-Adjustment'
                        },
                        {
                            title: '??????????????????',
                            to: '/home/Goods-Specials'
                        },
                        {
                            title: '???????????????',
                            to: '/home/Special-Offer-List'
                        },
                        {
                            title: '??????????????????',
                            to: '/home/Batch-Edit'
                        },
                        {
                            title: '??????????????????',
                            to: '/home/page1'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page1'
                        },
                        {
                            title: '??????????????????',
                            to: '/home/page1'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page1'
                        },
                    ]
                },
                {
                    slide: false,
                    title: '????????????',
                    icons: 'ico-ke',
                    types: [
                        {
                            title: '????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '????????????',
                            to: '/home/Follow-up-list'
                        },
                        {
                            title: '????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '??????????????????',
                            to: '/home/page5'
                        },
                    ]
                },
                {
                    slide: false,
                    title: '????????????',
                    icons: 'ico-xiao',
                    types: [
                        {
                            title: '??????????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '????????????',
                            to: '/home/page7'
                        },
                        {
                            title: '????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '???????????????',
                            to: '/home/Return-form'
                        },
                        {
                            title: '????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '???????????????',
                            to: '/home/Sales-inquiry'
                        },
                        {
                            title: '??????????????????',
                            to: '/home/page6'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '?????????????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page5'
                        },
                    ]
                },
                {
                    slide: false,
                    title: '????????????',
                    icons: 'ico-ku',
                    types: [
                        {
                            title: '??????????????????',
                            to: '/home/Current-Inventory'
                        },
                        {
                            title: '???????????????',
                            to: '/home/picture-inventory'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '?????????',
                            to: '/home/page5'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page8'
                        },
                        {
                            title: '?????????',
                            to: '/home/page4'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page9'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '??????????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '?????????????????????',
                            to: '/home/page5'
                        },
                    ]
                },
                {
                    slide: false,
                    title: '????????????',
                    icons: 'ico-shou',
                    types: [
                        {
                            title: '????????????',
                            to: '/home/page1'
                        },
                        {
                            title: '?????????',
                            to: '/home/page9'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '???????????????',
                            to: '/home/Delivery-Statistics'
                        },
                        {
                            title: '?????????????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '?????????????????????',
                            to: '/home/page5'
                        },
                    ]
                },
                {
                    slide: false,
                    title: '????????????',
                    icons: 'ico-cai',
                    types: [
                        {
                            title: '?????????',
                            to: '/home/page1'
                        },
                        {
                            title: '????????????',
                            to: '/home/page2'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page3'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '???????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '??????????????????',
                            to: '/home/page6'
                        },
                        {
                            title: '?????????????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '??????????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '??????????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '??????????????????',
                            to: '/home/page5'
                        },
                    ]
                },
                {
                    slide: false,
                    title: '????????????',
                    icons: 'ico-jue',
                    types: [
                        {
                            title: '?????????????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '????????????TOP',
                            to: '/home/page4'
                        },
                        {
                            title: '???????????????TOP',
                            to: '/home/page6'
                        },
                        {
                            title: '??????????????????TOP',
                            to: '/home/page4'
                        },
                        {
                            title: '????????????TOP',
                            to: '/home/page5'
                        },
                        {
                            title: '??????????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '??????????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '??????????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '??????????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '??????????????????',
                            to: '/home/page6'
                        },
                    ]
                },
                {
                    slide: false,
                    title: '????????????',
                    icons: 'ico-xin',
                    types: [
                        {
                            title: '????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '????????????',
                            to: '/home/Received-message'
                        },
                        {
                            title: '????????????',
                            to: '/home/page6'
                        },
                        {
                            title: '????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '?????????',
                            to: '/home/Notebook'
                        },
                    ]
                },
                {
                    slide: false,
                    title: '????????????',
                    icons: 'ico-ji',
                    types: [
                        {
                            title: '????????????',
                            to: '/home/The-unit-type'
                        },
                        {
                            title: '????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '????????????',
                            to: '/home/Payment-Methods'
                        },
                        {
                            title: '????????????',
                            to: '/home/Goods-Category'
                        },
                        {
                            title: '????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '??????/????????????',
                            to: '/home/Store-Warehouse-Settings'
                        },
                        {
                            title: '????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '??????????????????',
                            to: '/home/page5'
                        },
                    ]
                },
                {
                    slide: false,
                    title: '????????????',
                    icons: 'ico-xi',
                    types: [
                        {
                            title: '????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '??????????????????',
                            to: '/home/page6'
                        },
                        {
                            title: '????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '????????????????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '????????????????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '??????????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '?????????????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '????????????????????????',
                            to: '/home/page6'
                        },
                        {
                            title: '?????????????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '????????????????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '????????????/??????????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '????????????',
                            to: '/home/page5'
                        },
                        {
                            title: '??????????????????',
                            to: '/home/page4'
                        },
                        {
                            title: '????????????????????????',
                            to: '/home/page4'
                        },
                    ]
                },
            ],
        }
    }

    mysub = (msg, data) =>{
        console.log(msg, data);
        const { menu, current } = this.state

        if(data.index !== current.index) menu[current.index]['slide'] = false
        menu[data.index]['slide'] = data.slide
        this.setState({
            current: data,
            // menu: menu
        })
    }

    componentDidMount(){
        PubSub.subscribe('Close', this.mysub)
    }

    render() {
        const { menu } = this.state
        return (
            <div className="main-left">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul>
                    {
                        menu.map((v, k)=>{
                            return <Li key={k} index={k} icons={v.icons} types={v.types} slide={v.slide}>{v.title}</Li>
                        })
                    }
                </ul>
                <div className="nav"></div>
            </div>
        )
    }
}