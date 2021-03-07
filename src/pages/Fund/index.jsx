import React, { Component } from 'react'

import './index.styl';

export default class index extends Component {

    constructor(props){
        super(props)
        this.state = {
            code: '010160',
            list: [],
            info: null
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
        const _this = this
        const { code } = this.state
        if(code.length !== 6){
            alert('代号格式不正确');
            return false
        }
        _this.setState({list: [], info: null})
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
                list: res.data
            })
        });
    }
    getData1 = () =>{
        const _this = this
        const { code } = this.state
        if(code.length !== 6){
            alert('代号格式不正确');
            return false
        }
        _this.setState({info: null, list: []})
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
            _this.setState({
                info: res.data,
            })
        });
    }

    foramt(v){
        return `${v.toFixed(2)}%`
    }

    render() {
        const { code, list, info } = this.state
        return (
            <div>
                <div className="fund-wrap">
                    <span>基金代号：</span>
                    <input onInput={this.inputHandle} maxLength={6} value={code} type="tel" placeholder="请输入基金代号" />
                    <button className="b1" onClick={this.getData}>搜索</button>
                    <button className="b2" onClick={this.getData1}>实时</button>
                </div>

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
                    <div className="fund-info">
                        <ul>
                            <li><span>代码：</span><b>{info.fundcode}</b></li>
                            <li><span>名称：</span><b>{info.name}</b></li>
                            <li><span>最新净值({info.jzrq.substring(5)})：</span><b>{info.dwjz}</b></li>
                            <li><span>时间：</span><b>{info.gztime}</b></li>
                            <li><span>估值：</span><b>{info.gsz}</b></li>
                            <li><span>涨幅：</span><b className={info.gszzl > 0 ? 'red' : 'green'}>{this.foramt(info.gszzl*1)}</b></li>
                        </ul>
                    </div> : ''
                }
                
            </div>
        )
    }
}
