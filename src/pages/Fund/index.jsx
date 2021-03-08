import React, { PureComponent } from 'react'

import './index.styl';

import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

import { Save, Read } from '../../utils';

import { Switch } from 'antd';

export default class index extends PureComponent {

    constructor(props){
        super(props)
        let history = Read('history') || []
        
        this.state = {
            code: history.length > 0 ? history[0].fundcode : '010160',
            list: [],
            info: null,
            slide: false,
            history: history,
            checked: false,
        }
    }

    componentDidMount(){
        this.getData();
    }

    inputHandle = (e) =>{
        this.setState({
            code: e.target.value,
        })
    }
    getData = () => {
        // 历史净值
        const _this = this
        const { code } = this.state
        if(code.length !== 6){
            alert('代号格式不正确');
            return false
        }
        _this.setState({list: [], info: null, slide: false})
        // fetch('http://127.0.0.1:80/api/fund/search',
        fetch('https://active.okami.net.cn/api/fund/search',
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

    // 实时
    getData1 = () =>{
        const _this = this
        const { code, history } = this.state
        if(code.length !== 6){
            alert('代号格式不正确');
            return false
        }
        _this.setState({list: [], slide: false})
        // fetch('http://127.0.0.1:80/api/fund/realtime',
        fetch('https://active.okami.net.cn/api/fund/realtime',
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
            
            let query = history.find(item=>{
                return item.fundcode === res.data.fundcode
            })
            _this.setState({
                info: res.data,
                checked: query ? true: false,
            })
        });
    }

    foramt(v){
        return `${v.toFixed(2)}%`
    }

    set(v){
        this.setState({code: v})
        this.getData()
    }

    ding = (checked) => {
        const { fundcode, name } = this.state.info
        var history
        if(checked){
            history = [...this.state.history, {name, fundcode}]
            this.setState({
                history: history,
                checked: true,
            })
        } else {
            const index = this.state.history.findIndex(item => item.fundcode === fundcode)
            history = [...this.state.history]
            history.splice(index, 1)
            this.setState({
                history: history,
                checked: false,
            })
        }
        Save('history', history)
    }

    render() {
        const { code, list, info, slide, history } = this.state
        return (
            <div>

                <div className="m-menu" onClick={()=> this.setState({slide: !slide})}>{slide ? <CloseOutlined style={{fontSize: '18px'}} />:<MenuOutlined style={{fontSize: '18px'}} />}</div>

                <div className={`fund-wrap ${slide ? 'active': ''}`}>
                    <div className="list">
                        <ul>
                            {
                                history.map((v, k)=>{
                                    return <li onClick={()=> this.set(v.fundcode)} key={k}>{`${v.fundcode}-${v.name}`}</li>
                                })
                            }
                        </ul>
                    </div>
                    <input onInput={this.inputHandle} maxLength={6} value={code} type="tel" placeholder="请输入基金代号" />
                    <button className="b2" onClick={this.getData1}>搜索</button>
                    <button className="b1" onClick={this.getData}>历史</button>
                </div>
                <div className="main">
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
                                list.reverse().map((v, k)=>{
                                    return (
                                        <li key={k}>
                                            <span className="s1">{v.time}</span>
                                            <span className="s2">{v.y}</span>
                                            <span className={`s3 ${v.equityReturn > 0 ? 'red' : 'green'}`}>{this.foramt(v.equityReturn)}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div> : ''
                }
                {
                    info ?
                    <>
                        <div className="fund-info">
                            <ul>
                                <li><span>代码：</span><b>{info.fundcode}</b></li>
                                <li><span>名称：</span><b>{info.name}</b></li>
                                <li><span>最新净值({info.jzrq.substring(5)})：</span><b>{info.dwjz}</b></li>
                                <li><span>时间：</span><b>{info.gztime}</b></li>
                                <li><span>估值：</span><b>{info.gsz}</b></li>
                                <li><span>涨幅：</span><b className={info.gszzl > 0 ? 'red' : 'green'}>{this.foramt(info.gszzl*1)}</b></li>
                            </ul>
                        </div>
                        <div className="set">
                            <p>是否订阅：<Switch checked={this.state.checked} onChange={this.ding} /></p>
                        </div>
                    </>
                    : ''
                }
                </div>
                
            </div>
        )
    }
}
