import React, { PureComponent, createRef } from 'react'

import './index.styl';

import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

import Sort from './Sort';

import RealTime from './RealTime';
import PubSub from 'pubsub-js';

import {Switch} from 'antd';

import baseURL, { fullScreen, exitScreen, foramt } from '../../utils';


export default class index extends PureComponent {

    constructor(props){
        super(props)        
        this.input = createRef()
        this.state = {
            list: [],
            slide: false,
            full: false,
        }
    }
    getNetData = (code) => {
        // 历史净值
        const _this = this
        if(code.length !== 6){
            alert('代号格式不正确');
            return false
        }
        _this.setState({slide: false})
        fetch(baseURL.concat('/fund/search'),
            {
                method: 'POST',
                body: JSON.stringify({code}),
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
            _this.setState({
                list: res.data,
            })
        });
    }

    // 选择
    select=(code)=>{
        this.getNetData(code)
    }

    componentDidMount(){
        PubSub.subscribe('Reset', this.clear)
        document.body.classList.add('active')
    }
    componentWillUnmount(){
        PubSub.unsubscribe('Reset')
    }

    clear=(msg, data)=>{
        this.setState({
            list: []
        })
    }

    onChange=(full)=>{
        if(full){
            fullScreen()
        } else {
            exitScreen()
        }
        this.setState({
            full: full,
            slide: false,
        })
    }

    render() {
        const { list, slide, full } = this.state
        return (
            <div>
                
                {/* 顶部 */}
                <div className="header">
                    <RealTime></RealTime>
                    <div className="fr">
                        <div className="min-menu" onClick={()=> this.setState({slide: !slide})}>{slide ? <CloseOutlined style={{fontSize: '18px'}} />:<MenuOutlined style={{fontSize: '18px'}} />}</div>
                    </div>
                </div>

                {/* 侧边栏 */}
                <div className={`slide-nav-menu ${slide ? 'active': ''}`}>
                    <div className="list">
                        <ul>
                            <ul>
                                <li><span>开启全屏: </span><Switch checked={this.state.full} onChange={this.onChange}></Switch></li>
                            </ul>
                        </ul>
                    </div>
                    
                    <button className="but1" onClick={this.getData}>历史</button>
                </div>
                
                {/* 主体 */}
                <div className={`main ${full?'active':''}`}>
                    <Sort select={this.select} full={full}></Sort>

                    <div className="right-layout">
                        {
                            list.length > 0 ?
                            <div className="fund-list">
                                <ul>
                                    <li className="first">
                                        <span className="s1">日期</span>
                                        <span className="s2">净值</span>
                                        <span className="s3">日涨幅</span>
                                    </li>
                                    {
                                        list.map((v, k)=>{
                                            return (
                                                <li key={k}>
                                                    <span className="s1">{v.time}</span>
                                                    <span className="s2">{v.y}</span>
                                                    <span className={`s3 ${v.equityReturn > 0 ? 'red' : 'green'}`}>{foramt(v.equityReturn)}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div> : ''
                        }
                    </div>
                </div>
            </div>
        )
    }
}
