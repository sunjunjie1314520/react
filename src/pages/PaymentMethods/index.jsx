import React, { Component } from 'react'

// import Swiper from "swiper"

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import Table, {Box} from '../../components/Table';

import {Input, DropDown, Frame, Move } from '../../components/UI';

import img1 from '../../style/img/Goods_1199074c-5a08-49d6-834c-ff0b37996442.jpg';
import img2 from '../../style/img/Goods_27caca70-04a0-4659-979e-31459d0c9518.jpg';
import img3 from '../../style/img/Goods_a545c1fc-5f74-4d80-b975-40f3bd23cc7c.jpg';


SwiperCore.use([Navigation, Pagination, Autoplay]);

export default class index extends Component {
    constructor(){
        super()
        this.state = {

            items1: ['已停产','已停售','销售特价','采购特价'],
            index1: 0,

            items2: ['个','张','件','套','组','幅'],
            index2: 0,

            items3: '',
            index3: 0,

            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            input6: '',
            input7: '',
            input8: '',
            input9: '',
            input10: '',
            input11: '',
            input12: '',

            show1: false,

            fields: [
                {
                    width: 60,
                    name: '序号',
                },
                {
                    width: 120,
                    name: '货品编码',
                },
                {
                    width: 120,
                    name: '货品名称',
                },
                {
                    width: 140,
                    name: '型 号',
                },
                {
                    width: 150,
                    name: '尺 寸',
                },
                {
                    width: 60,
                    name: '单 位',
                },
                {
                    width: 140,
                    name: '品牌',
                },
                {
                    width: 140,
                    name: '系列',
                },
                {
                    width: 100,
                    name: '采购价',
                },
                {
                    width: 100,
                    name: '零售价',
                },
                {
                    width: 100,
                    name: '经销价',
                },
                {
                    width: 100,
                    name: '批发价',
                },
                {
                    width: 100,
                    name: '条码标签',
                },
                {
                    width: 80,
                    name: '颜色',
                },
                {
                    width: 80,
                    name: '产地',
                },
                {
                    width: 100,
                    name: '厂家',
                },
                {
                    width: 60,
                    name: '立方数',
                },
                {
                    width: 60,
                    name: '包装数',
                },
                {
                    width: 100,
                    name: '主 材',
                },
                {
                    width: 100,
                    name: '辅 材',
                },
                {
                    width: 150,
                    name: '描 述',
                },
                {
                    width: 60,
                    name: '是否停售',
                },
                {
                    width: 60,
                    name: '是否停产',
                },
                {
                    width: 80,
                    name: '建立人',
                },
                {
                    width: 100,
                    name: '建立时间',
                },
                {
                    width: 100,
                    name: '修改人',
                },
                {
                    width: 150,
                    name: '备 注',
                },
            ],

            data: [
                {
                    id: 1,
                    bianma: 'xxxxxxxxxxxxx',
                    check: false,
                },
                {
                    id: 2,
                    bianma: 'xxxxxxxxxxxxx',
                    check: false,
                },
                {
                    id: 3,
                    bianma: 'xxxxxxxxxxxxx',
                    check: false,
                },
                {
                    id: 4,
                    bianma: 'xxxxxxxxxxxxx',
                    check: false,
                },
            ],

            alert1: true,

            produce: [
                {
                    src: img1
                },
                {
                    src: img2
                },
                {
                    src: img3
                },
                {
                    src: img1
                },
                {
                    src: img2
                },
                {
                    src: img3
                },
            ],
        }
    }

    checkHandle(check, k){
        const {data} = this.state
        data[k].check = check
        this.setState({
            data: data
        })
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
                            <a href="/" title="" className="a2"><i className="ico-suan"></i>刷新</a>
                            <a href="/" title="" className="a2"><i className="ico-shan"></i>删除</a>
                            <a href="/" title="" className="a2"><i className="ico-ting"></i>停用</a>
                            <a href="/" title="" className="a2"><i className="ico-qi"></i>启用</a>
                            <a href="/" title="" className="a2"><i className="ico-cha"></i>查询</a>
                        </div>
                        <div className="pub-table">
                            <ul>
                                <Input width="31%" title="收款编码" value={this.state.input1} model={(v)=>this.setState({input1: v})}required></Input>
                                <li></li>
                                <li></li>
                                <Input width="31%" title="收款名称" value={this.state.input2} model={(v)=>this.setState({input2: v})}required></Input>
                                <li></li>
                                <li></li>
                                <li>
                                    <span></span>
                                    <p>
                                        <label className="pub-check1" title="默认收款方式">
                                            <input type="checkbox" checked={this.state.c1} onChange={(e)=>this.setState({c1: e.target.checked})}/>默认收款方式
                                        </label>
                                    </p>
                                </li>
                                <li></li>
                                <li></li>
                                <Input width="31%" title="建立人" value={this.state.input2} model={(v)=>this.setState({input2: v})}></Input>
                                <li></li>
                                <li></li>
                                <Input width="31%" title="修改人" value={this.state.input2} model={(v)=>this.setState({input2: v})}></Input>
                            </ul>
                        </div>
                    </Frame>

                </div>

            </>
        )
    }
}
