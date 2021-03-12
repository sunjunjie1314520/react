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
                    title: '已完成',
                    icons: 'ico-huo',
                    types: [
                        {
                            title: '发送消息',
                            to: '/home/message'
                        },
                        {
                            title: '公告通知',
                            to: '/home/notice'
                        },
                        {
                            title: '货品档案',
                            to: '/home/goods-file'
                        },
                        {
                            title: '客户案例',
                            to: '/home/customer-case'
                        },
                        {
                            title: '客户档案',
                            to: '/home/customer-profile'
                        },
                        {
                            title: '客户跟进',
                            to: '/home/customer-followup'
                        },
                        {
                            title: '客户全貌',
                            to: '/home/customer-panorama'
                        },
                        {
                            title: '客户意向单',
                            to: '/home/intention-sheet'
                        },
                        {
                            title: '分配人员操作权限',
                            to: '/home/authority'
                        },
                        {
                            title: '图片库存表',
                            to: '/home/picture-inventory'
                        },
                        {
                            title: '图片目录',
                            to: '/home/picture-catalogue'
                        },
                        {
                            title: '销售单列表',
                            to: '/home/sales-list'
                        },
                        {
                            title: '销售订单',
                            to: '/home/sales-order'
                        },
                        {
                            title: '图片导购',
                            to: '/home/picture-guide'
                        },
                        {
                            title: '送货安排',
                            to: '/home/delivery-arrangement'
                        },
                        {
                            title: '销售收款',
                            to: '/home/receipt'
                        },
                        {
                            title: '售后管理',
                            to: '/home/after-sales-management'
                        },
                    ]
                },
                {
                    slide: false,
                    title: '货品管理',
                    icons: 'ico-huo',
                    types: [
                        {
                            title: '采购订单',
                            to: '/home/purchase-order'
                        },
                        {
                            title: '货品档案',
                            to: '/home/page1'
                        },
                        {
                            title: '价格审核',
                            to: '/home/page1'
                        },
                        {
                            title: '价格调整单',
                            to: '/home/page1'
                        },
                        {
                            title: '货品特价申请',
                            to: '/home/page1'
                        },
                        {
                            title: '特价货品表',
                            to: '/home/page1'
                        },
                        {
                            title: '批量修改货品',
                            to: '/home/page1'
                        },
                        {
                            title: '货品修改记录',
                            to: '/home/page1'
                        },
                        {
                            title: '打印货品表',
                            to: '/home/page1'
                        },
                        {
                            title: '打印货品类别',
                            to: '/home/page1'
                        },
                        {
                            title: '打印价格牌',
                            to: '/home/page1'
                        },
                    ]
                },
                {
                    slide: false,
                    title: '客户管理',
                    icons: 'ico-ke',
                    types: [
                        {
                            title: '商户档案',
                            to: '/home/page4'
                        },
                        {
                            title: '跟进列表',
                            to: '/home/page5'
                        },
                        {
                            title: '客户跟进',
                            to: '/home/page4'
                        },
                        {
                            title: '客户案例',
                            to: '/home/page5'
                        },
                        {
                            title: '客户意向单',
                            to: '/home/page4'
                        },
                        {
                            title: '客户余款查询',
                            to: '/home/page5'
                        },
                    ]
                },
                {
                    slide: false,
                    title: '销售管理',
                    icons: 'ico-xiao',
                    types: [
                        {
                            title: '商城支出',
                            to: '/home/page4'
                        },
                        {
                            title: '销售订单',
                            to: '/home/page5'
                        },
                    ]
                },
                {
                    slide: false,
                    title: '库存管理',
                    icons: 'ico-ku',
                    types: [
                        {
                            title: '当前库存查询',
                            to: '/home/page4'
                        },
                        {
                            title: '图片库存表',
                            to: '/home/page5'
                        },
                        {
                            title: '调拨申请单',
                            to: '/home/page5'
                        },
                        {
                            title: '调拨单',
                            to: '/home/page5'
                        },
                    ]
                },
                {
                    slide: false,
                    title: '售后管理',
                    icons: 'ico-shou',
                    types: []
                },
                {
                    slide: false,
                    title: '采购管理',
                    icons: 'ico-cai',
                    types: []
                },
                {
                    slide: false,
                    title: '决策图表',
                    icons: 'ico-jue',
                    types: []
                },
                {
                    slide: false,
                    title: '信息中心',
                    icons: 'ico-xin',
                    types: []
                },
                {
                    slide: false,
                    title: '基础设置',
                    icons: 'ico-ji',
                    types: []
                },
                {
                    slide: false,
                    title: '系统管理',
                    icons: 'ico-xi',
                    types: []
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