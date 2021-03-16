import React, { Component } from 'react'

// import Swiper from "swiper"

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';


import {Input, Frame, } from '../../components/UI';


SwiperCore.use([Navigation, Pagination, Autoplay]);

export default class index extends Component {
    constructor(){
        super()
        this.state = {

            // 下拉选择项
            items1: '',
            index1: 0,

            // 表单显示内容项
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            input6: '',

            // 勾选项
            check1: true,
            check2: false,

        }
    }


    render() {
        return (
            <>
                <Frame className="archives-type" bottom={14}>
                    <div className="pub-tit">
                        <i className="ico-type"></i>
                        收款方式
                    </div>
                    <ul>
                        <li><a href="/" title="">00-现金 Cash</a></li>
                        <li><a href="/" title="">01-刷卡 Swiping Sard</a></li>
                        <li><a href="/" title="">02-银行转账 Bank transfer</a></li>
                        <li><a href="/" title="">03-微信 WeChect</a></li>
                        <li><a href="/" title="">04-支付宝 Alipay</a></li>
                        <li><a href="/" title="">05-优惠券 Coupons</a></li>
                        <li><a href="/" title="">06-其他 Other</a></li>
                    </ul>
                </Frame>

                <div className="archives-right">
                    <Frame className="function-wrap color" bottom={14}>
                        <div className="pub-fun">
                            <a href="/" title="" className="a2"><i className="ico-xin1"></i>新建</a>
                            <a href="/" title="" className="a2"><i className="ico-shan"></i>删除</a>
                            <a href="/" title="" className="a2"><i className="ico-ting"></i>停用</a>
                            <a href="/" title="" className="a2"><i className="ico-qi"></i>启用</a>
                            <a href="/" title="" className="a2"><i className="ico-bao"></i>保存</a>
                        </div>
                        <div className="pub-table">
                            <ul>
                                <Input width="30%" title="收款编码" value={this.state.input1} model={(v)=>this.setState({input1: v})}required></Input>
                                <li></li>
                                <li></li>
                                <Input width="30%" title="收款名称" value={this.state.input2} model={(v)=>this.setState({input2: v})}required></Input>
                                <li></li>
                                <li></li>
                                <li>
                                    <span></span>
                                    <p>
                                        <label className="pub-check1" title="默认收款方式">
                                            <input type="checkbox" checked={this.state.check1} onChange={(e)=>this.setState({check1: e.target.checked})}/>默认收款方式
                                        </label>
                                    </p>
                                </li>
                                <li></li>
                                <li></li>
                                <Input width="30%" title="备注" value={this.state.input5} model={(v)=>this.setState({input5: v})}></Input>
                                <li></li>
                                <li></li>
                                <Input width="30%" title="建立人" value={this.state.input3} model={(v)=>this.setState({input3: v})}></Input>
                                <li></li>
                                <li></li>
                                <Input width="30%" title="修改人" value={this.state.input4} model={(v)=>this.setState({input4: v})}></Input>
                            </ul>
                        </div>
                    </Frame>

                </div>

            </>
        )
    }
}
