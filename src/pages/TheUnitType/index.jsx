import React, { Component } from 'react'

// import Swiper from "swiper"

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';


import {Input, Frame, } from '../../components/UI';


SwiperCore.use([Navigation, Pagination, Autoplay]);

export default class index extends Component {
    constructor(){
        super()
        this.state = {

            items1: '',
            index1: 0,

            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            input6: '',

        }
    }


    render() {
        return (
            <>
                <Frame className="archives-type" bottom={14}>
                    <div className="pub-tit">
                        <i className="ico-type"></i>
                        单位类型
                    </div>
                    <ul>
                        <li><a href="/" title="">01-品牌专卖店</a></li>
                        <li><a href="/" title="">02-连锁店</a></li>
                        <li><a href="/" title="">03-旗舰独立店</a></li>
                        <li><a href="/" title="">04-零售批发</a></li>
                        <li><a href="/" title="">05-大型品牌联盟</a></li>
                        <li><a href="/" title="">06-设计公司</a></li>
                        <li><a href="/" title="">07-其他</a></li>
                    </ul>
                </Frame>

                <div className="archives-right">
                    <Frame className="function-wrap color" bottom={14}>
                        <div className="pub-fun">
                            <a href="/" title="" className="a2"><i className="ico-xin1"></i>新建</a>
                            <a href="/" title="" className="a2"><i className="ico-suan"></i>刷新</a>
                            <a href="/" title="" className="a2"><i className="ico-shan"></i>删除</a>
                            <a href="/" title="" className="a2"><i className="ico-ting"></i>停用</a>
                            <a href="/" title="" className="a2"><i className="ico-qi"></i>启用</a>
                            <a href="/" title="" className="a2"><i className="ico-cha"></i>查询</a>
                        </div>
                        <div className="pub-table">
                            <ul>
                                <Input width="30%" title="类型编码" value={this.state.input1} model={(v)=>this.setState({input1: v})}required></Input>
                                <li></li>
                                <li></li>
                                <Input width="30%" title="类型名称" value={this.state.input2} model={(v)=>this.setState({input2: v})}required></Input>
                                <li></li>
                                <li></li>
                                <li>
                                    <span></span>
                                    <p>
                                        <label className="pub-check1" title="默认类型">
                                            <input type="checkbox" checked={this.state.c1} onChange={(e)=>this.setState({c1: e.target.checked})}/>默认类型
                                        </label>
                                    </p>
                                </li>
                                <li></li>
                                <li></li>
                                <Input width="30%" title="备注" value={this.state.input3} model={(v)=>this.setState({input3: v})}></Input>
                                <li></li>
                                <li></li>
                                <Input width="30%" title="建立人" value={this.state.input4} model={(v)=>this.setState({input4: v})}></Input>
                                <li></li>
                                <li></li>
                                <Input width="30%" title="修改人" value={this.state.input5} model={(v)=>this.setState({input5: v})}></Input>
                            </ul>
                        </div>
                    </Frame>

                </div>

            </>
        )
    }
}
