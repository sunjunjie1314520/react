import React, { Component } from 'react'

// import Swiper from "swiper"

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';


import {Input, Frame, DropDown } from '../../components/UI';


SwiperCore.use([Navigation, Pagination, Autoplay]);

export default class index extends Component {
    constructor(){
        super()
        this.state = {

            // 下拉选择项
            items1: ['商场', '仓库', '样板房', '办公室', '坏仓' ],
            index1: 6,

            items2: ['专卖店', '连锁店', '独立店', '综合店', '自营店', '其他'],
            index2: 7,

            // 表单显示内容项
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            input6: '',
            input7: '',
            input8: '',

            // 表单查询内容项
            search1: '',
            search2: '',

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
                        商场/仓库列表
                    </div>
                    <ul>
                        <li><a href="/" title="">1001-深圳宝能家居广场</a></li>
                        <li><a href="/" title="">1002-深圳第三空间</a></li>
                        <li><a href="/" title="">1003-深圳创意家居</a></li>
                        <li><a href="/" title="">2001-深圳布吉总仓</a></li>
                        <li><a href="/" title="">2002-深圳坪山红星仓库</a></li>
                        <li><a href="/" title="">2003-深圳宝安机场仓库</a></li>
                        <li><a href="/" title="">3001-深圳湾一号样板房</a></li>
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
                                <Input width="30%" title="仓库编码" value={this.state.input1} model={(v)=>this.setState({input1: v})}required></Input>
                                <li></li>
                                <li></li>
                                <Input width="30%" title="仓库名称" value={this.state.input2} model={(v)=>this.setState({input2: v})}required></Input>
                                <li></li>
                                <li></li>
                                <li>
                                    <span></span>
                                    <p>
                                        <label className="pub-check1" title="是否属于经销商">
                                            <input type="checkbox" checked={this.state.check1} onChange={(e)=>this.setState({check1: e.target.checked})}/>是否属于经销商
                                        </label>
                                    </p>
                                </li>
                                <li></li>
                                <li></li>
                                <DropDown width="30%" items={this.state.items1} index={this.state.index1} required onChange={(index)=> this.setState({index1: index})}>仓库类型</DropDown>
                                <li></li>
                                <li></li>
                                <DropDown width="30%" items={this.state.items2} index={this.state.index2} onChange={(index)=> this.setState({index2: index})}>商场性质</DropDown>
                                <li></li>
                                <li></li>
                                <Input width="30%" title="所属单位" value={this.state.search1} required model={(v)=>this.setState({search1: v})}><button className="pub-search"></button></Input>
                                <li></li>
                                <li></li>
                                <li>
                                    <span></span>
                                    <p>
                                        <label className="pub-check1" title="是否公开库存">
                                            <input type="checkbox" checked={this.state.check2} onChange={(e)=>this.setState({check2: e.target.checked})}/>是否公开库存
                                        </label>
                                    </p>
                                </li>
                                <li></li>
                                <li></li>
                                <Input width="30%" title="联系人" value={this.state.input3} model={(v)=>this.setState({input3: v})}></Input>
                                <li></li>
                                <li></li>
                                <Input width="30%" title="联系电话" value={this.state.input4} model={(v)=>this.setState({input4: v})}></Input>
                                <li></li>
                                <li></li>
                                <Input width="30%" title="地址" value={this.state.input5} model={(v)=>this.setState({input5: v})}></Input>
                                <li></li>
                                <li></li>

                                <Input width="30%" title="备注" value={this.state.input6} model={(v)=>this.setState({input6: v})}></Input>
                                <li></li>
                                <li></li>
                                <Input width="30%" title="建立人" value={this.state.input7} model={(v)=>this.setState({input7: v})}></Input>
                                <li></li>
                                <li></li>
                                <Input width="30%" title="修改人" value={this.state.input8} model={(v)=>this.setState({input8: v})}></Input>
                            </ul>
                        </div>
                    </Frame>

                </div>

            </>
        )
    }
}
