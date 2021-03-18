import React, { Component } from 'react'

import PubSub from 'pubsub-js';

import {withRouter} from 'react-router';

import baseURL, { compare, isDuringDate, foramt } from '../../utils';

class sort extends Component {

    constructor(){
        super()
        this.state = {
            list: [],
            list1: [],
            order_by: 'today',
            code: null,
            load: false,
        }
    }
    componentWillUnmount(){
        PubSub.unsubscribe('getNetData')
    }
    componentDidMount(){
        this.optional(()=>{this.getNetData()})
        PubSub.subscribe('getNetData', this.mysub)

        // 定时请求
        setInterval(() => {
            this.allTop(true)
        }, 30 * 1000);
    }

    mysub = (msg, code) => {
        this.optional(()=> this.getNetData(code))
    }

    // 热门基金排行
    getNetData = (code='') =>{
        const _this = this
        const {list1, order_by} = this.state
        const { uid } = this.props.match.params
        fetch(baseURL.concat('/fund/sort'),
            {
                method: 'POST',
                body: JSON.stringify({order_by, code, uid}), // [today, day, week, one_month, three_month]
                headers: {
                    'user-agent': 'Mozilla/4.0 MDN Example',
                    'content-type': 'application/json'
                },
            }
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(res) {
            var filter = res.data.filter(item=>{
                let find = true
                for(let i=0; i < list1.length; i++){
                    if(item.code.code === list1[i].fund.code.code){
                        find = false
                        break
                    }
                }
                return find
            })
            
            _this.setState({
                list: filter,
                code: null,
                load: true,
            })
        });
    }

    optional = (callback) => {
        const _this = this
        const { uid } = this.props.match.params
        fetch(baseURL.concat('/fund/optional'),
            {
                method: 'POST',
                body: JSON.stringify({uid}), // [today, day, week, one_month, three_month]
                headers: {
                    'user-agent': 'Mozilla/4.0 MDN Example',
                    'content-type': 'application/json'
                },
            }
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(res) {
            // console.log(res.data);
            _this.setState({
                list1: res.data,
            })
            _this.allTop()
            callback()
        });
    }

    // 排序
    sortHandle(order_by){
        this.setState({
            order_by: order_by
        })
        this.optional(()=> this.getNetData())
    }

    // 选择
    select = (code) => {
        this.props.select(code)
        this.setState({
            code: code,
        })
    }

    // 设置1
    change(e, index, id){
        const {list, list1, order_by} = this.state
        const { checked } = e.target
        let remove = list.splice(index, 1)
        let item = {
            "id": list1.length * Math.round(Math.random() * 10000),
            "create_time": "2021-03-18 18:02:44",
            "fund": remove[0],
            "checked": true,
        }
        this.fengzhang(item)
        .then(gszzl=>{
            console.log(item);
            console.log(gszzl);
            item.fund.today = gszzl;
            list1.push(item)
            list1.sort(compare({property: 'fund.'.concat(order_by)}))
            this.setState({
                list: list,
                list1: list1,
            })
        })
        this.setTop(id, checked)
    }

    // 设置2
    change2(e, index, id){
        const {list, list1} = this.state
        const { checked } = e.target
        let remove = list1.splice(index, 1)
        let item = remove[0].fund
        item.today = 0
        list.unshift(item)

        this.setState({
            list1: list1,
            list: list,
        })
        this.setTop(id, checked)
    }

    // 设置接口
    setTop = (id, checked) =>{
        // 置顶
        const { uid } = this.props.match.params
        fetch(baseURL.concat('/fund/set_top'),
            {
                method: 'POST',
                body: JSON.stringify({id, checked, uid: uid * 1}),
                headers: {
                    'user-agent': 'Mozilla/4.0 MDN Example',
                    'content-type': 'application/json'
                },
            }
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(res) {
            console.log(res);
            if(res.code){
                alert(res.msg)
            }
        });
    }
    
    fengzhang(item){
        return new Promise((resolve, reject)=>{
            fetch(baseURL.concat('/fund/realtime'),
                {
                    method: 'POST',
                    body: JSON.stringify({code: item.fund.code.code}),
                    headers: {
                        'user-agent': 'Mozilla/4.0 MDN Example',
                        'content-type': 'application/json'
                    },
                }
            )
            .then(function(response) {
                return response.json();
            })
            .then(function(res) {
                if(res.code === 0){
                    resolve(res.data.gszzl * 1)
                } else {
                    console.log(res);
                }
            })
            .catch(error=>{
                reject(error)
            })
        })
    }
    // 实时获取
    allTop(sort=false){
        if (!sort) return;
        if(!isDuringDate('09:30:00', '15:30:00')){
            console.log('只限 周一 至 周五 09:30-15:30 开启');
            return;
        }
        console.log('-------start get--------');
        const {list1, order_by} = this.state
        list1.forEach((item, index)=>{
            this.fengzhang(item)
            .then(gszzl=>{
                list1[index].fund.today = gszzl
                list1.sort(compare({property: 'fund.'.concat(order_by)}))
                this.setState({
                    list1: list1
                })
            })
        })
    }

    mouseDown(e){
        if(e.button === 2){
            console.log(e.clientX);
            console.log(e.clientY);
            
        }
    }

    render() {
        const {list, list1, order_by, code, load} = this.state
        const { full } = this.props
        return (
            <div className={`sort-pages ${full?'active':''}`} onMouseDown={this.mouseDown}>
                <ul>
                    <li className="first">
                        <div className="wrap">
                            <span className="s1">基金名称</span>
                            <span className="s2 pointer" onClick={()=> this.sortHandle('today')}>净值估算{order_by==='today'?<var className="select"></var>:<var></var>}</span>
                            <span className="s2 pointer" onClick={()=> this.sortHandle('day')}>日涨跌幅{order_by==='day'?<var className="select"></var>:<var></var>}</span>
                            <span className="s3 pointer" onClick={()=> this.sortHandle('week')}>近1周{order_by==='week'?<var className="select"></var>:<var></var>}</span>
                            <span className="s4 pointer" onClick={()=> this.sortHandle('one_month')}>近1月{order_by==='one_month'?<var className="select"></var>:<var></var>}</span>
                            <span className="s5 pointer" onClick={()=> this.sortHandle('three_month')}>近3月{order_by==='three_month'?<var className="select"></var>:<var></var>}</span>
                            <span className="s5 pointer" onClick={()=> this.sortHandle('six_month')}>近6月{order_by==='six_month'?<var className="select"></var>:<var></var>}</span>
                        </div>
                    </li>
                    {
                        list1.map((v, k)=>{
                            return (
                                <li key={v.id} className={v.fund.code.code===code?'active':''}>
                                    <span><input type="checkbox" onChange={(e)=>this.change2(e, k, v.fund.id)} checked={v.checked} /></span>
                                    <div className="wrap" onClick={(e)=>{e.preventDefault(); e.stopPropagation(); this.select(v.fund.code.code);}}>
                                        <span className="s1">{v.fund.code.code}-{v.fund.code.name}{v.checked?<strong><em>顶</em></strong>:null}</span>
                                        <span className="s2 font" style={{color: v.fund.today > 0 ? '#e7541e': v.fund.today < 0 ? '#0da195' : '#b1afaf'}}>{foramt(v.fund.today)}</span>
                                        <span className="s2 font" style={{color: v.fund.day > 0 ? '#e7541e': v.fund.day < 0 ? '#0da195' : '#b1afaf'}}>{foramt(v.fund.day)}</span>
                                        <span className="s3 font" style={{color: v.fund.week > 0 ? '#e7541e': v.fund.week < 0 ? '#0da195' : '#b1afaf'}}>{foramt(v.fund.week)}</span>
                                        <span className="s4 font" style={{color: v.fund.one_month > 0 ? '#e7541e': v.fund.one_month < 0 ? '#0da195' : '#b1afaf'}}>{foramt(v.fund.one_month)}</span>
                                        <span className="s5 font" style={{color: v.fund.three_month > 0 ? '#e7541e': v.fund.three_month < 0 ? '#0da195' : '#b1afaf'}}>{foramt(v.fund.three_month)}</span>
                                        <span className="s5 font" style={{color: v.fund.six_month > 0 ? '#e7541e': v.fund.six_month < 0 ? '#0da195' : '#b1afaf'}}>{foramt(v.fund.six_month)}</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                    {
                        list.map((v, k)=>{
                            return (
                                <li key={v.id} className={v.code.code===code?'active':''}>
                                    <span><input type="checkbox" onChange={(e)=>this.change(e, k, v.id,)} checked={v.checked} /></span>
                                    <div className="wrap" onClick={(e)=>{e.preventDefault(); e.stopPropagation(); this.select(v.code.code);}}>
                                        <span className="s1">{k+1}.{v.code.code}-{v.code.name}{v.top?<strong><em>顶</em></strong>:null}</span>
                                        <span className="s2 font" style={{color: v.today > 0 ? '#e7541e': v.today < 0 ? '#0da195' : '#b1afaf'}}>{foramt(v.today)}</span>
                                        <span className="s2 font" style={{color: v.day > 0 ? '#e7541e': v.day < 0 ? '#0da195' : '#b1afaf'}}>{foramt(v.day)}</span>
                                        <span className="s3 font" style={{color: v.week > 0 ? '#e7541e': v.week < 0 ? '#0da195' : '#b1afaf'}}>{foramt(v.week)}</span>
                                        <span className="s4 font" style={{color: v.one_month > 0 ? '#e7541e': v.one_month < 0 ? '#0da195' : '#b1afaf'}}>{foramt(v.one_month)}</span>
                                        <span className="s5 font" style={{color: v.three_month > 0 ? '#e7541e': v.three_month < 0 ? '#0da195' : '#b1afaf'}}>{foramt(v.three_month)}</span>
                                        <span className="s5 font" style={{color: v.six_month > 0 ? '#e7541e': v.six_month < 0 ? '#0da195' : '#b1afaf'}}>{foramt(v.six_month)}</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                    <div style={{display: load ? list.length === 0 ? 'block': 'none' : 'none' }} className="null-data"><h4>没有搜到任何数据...</h4></div>
                </ul>
            </div>
        )
    }
}

export default withRouter(sort)