import React, { Component } from 'react'

import Input, { InputPub } from '../../components/Input';

import Pager from '../../components/Pager';

import Table from '../../components/Table';

import WrapHeight from '../../components/WrapHeight';

export default class index extends Component {
    constructor(){
        super()
        this.state = {

            items1: ['下拉菜单1','下拉菜单2','下拉菜单3','下拉菜单4','下拉菜单5'],
            index1: 0,

            items2: ['下拉菜单1','下拉菜单2','下拉菜单3','下拉菜单4','下拉菜单5'],
            index2: 2,

            fields1: '1',
            fields2: '2'
        }
    }
    
    render() {
        return (
            <>
                <WrapHeight className="archives-type" bottom={7}>
                    <h2 className="pub-tit">
                        <i className="ico-type"></i>
                        客户类别
                    </h2>
                    <ul>
                        <li><a href="/" title=""><i className="ico-i0"></i>潜在客户 Potential Customers</a></li>
                        <li><a href="/" title=""><i className="ico-i1"></i>普通客户 Ordinary</a></li>
                        <li><a href="/" title=""><i className="ico-i2"></i>大客户 Key Account</a></li>
                        <li><a href="/" title=""><i className="ico-i3"></i>设计师 Designer</a></li>
                        <li><a href="/" title=""><i className="ico-i4"></i>重要客户 VIP</a></li>
                    </ul>
                </WrapHeight>
                <div className="archives-right">
                    <div className="function-wrap">
                        <div className="pub-fun">
                            <a title="" className="a2" href="/"><i className="ico-xin1"></i>新建</a>
                            <a href="/" title="" className="a2"><i className="ico-fu"></i>复制</a>
                            <a title="" className="a2" href="/"><i className="ico-ka"></i>卡片</a>
                            <a href="/" title="" className="a2"><i className="ico-quan"></i>全貌</a>
                            <a href="/" title="" className="a2"><i className="ico-shan"></i>删除</a>
                            <a href="/" title="" className="a2"><i className="ico-ting"></i>停用</a>
                            <a href="/" title="" className="a2"><i className="ico-qi"></i>启用</a>
                            <a href="/" title="" className="a2"><i className="ico-cha"></i>查询</a>
                        </div>
                        <div className="pub-table">
                            <ul>

                                <InputPub placeholder="客户编码" title="客户编码" value={this.state.fields1} required model={(v)=>this.setState({fields1: v})}></InputPub>

                                <InputPub placeholder="手机/电话" title="手机/电话" value={this.state.fields2} required model={(v)=>this.setState({fields2: v})}></InputPub>

                                <Input items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})}>归属商场</Input>

                                <Input items={this.state.items2} index={this.state.index2} onChange={(index)=> this.setState({index2: index})}>建立人</Input>

                            </ul>
                        </div>
                    </div>
                    
                    {/* 表格 */}
                    <Table></Table>

                    {/* 分页 */}
                    <Pager></Pager>

                </div>

                {/* 弹窗 */}
                <div className="pub-shadow">
                    <div className="archives-alert move-obj">
                        <div className="pub-tit add">
                            <i className="ico-info"></i>
                            <em className="ico-info"></em> 客户信息
                        <div className="fr">
                        <span className="ico-close"></span> 
                    </div>
                    </div>
                        <div className="two-wrap">
                            <div className="pub-table">
                                <ul>
                                    <li className="li1">
                                        <span>客户编码：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>客户名称：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <var className="pub-asterisk a1">*</var>
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>性别：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <button className="pub-down"></button>
                                            <div className="pub-drop-down">
                                                <span>男</span>
                                                <span>女</span>
                                            </div>
                                            <var className="pub-asterisk">*</var>
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>客户类别：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <button className="pub-down"></button>
                                            <div className="pub-drop-down">
                                                <span>潜在客户 Potential Customers</span>
                                                <span>普通客户 Ordinary</span>
                                                <span>大客户 Key Account</span>
                                                <span>设计师 Designer</span>
                                                <span>重要客户 VIP</span>
                                            </div>
                                            <var className="pub-asterisk">*</var>
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>手机：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <var className="pub-asterisk a1">*</var>
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>电话：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                        </div>
                                    </li>
                                    <li className="li2">
                                        <span>地址：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <button className="pub-down"></button>
                                        </div>
                                    </li>
                                    <li className="li2">
                                        <span>归属商场：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <button className="pub-down"></button>
                                            <var className="pub-asterisk">*</var>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="two-wrap">
                            <div className="pub-table">
                                <ul>
                                    <li className="li1">
                                        <span>出生年月：</span>
                                        <div className="input-wrap J-datepicker-day right">
                                            <input type="text" className="c-datepicker-data-input only-date" />
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>客户来源：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <button className="pub-down"></button>
                                        </div>
                                    </li>

                                    <li className="li1">
                                        <span>微信/QQ：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>邮箱：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>职业：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>工作单位：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>楼盘名称：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <button className="pub-down"></button>
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>房型：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <button className="pub-down"></button>
                                            <div className="pub-drop-down">
                                                <span>中小户型</span>
                                                <span>大户型</span>
                                                <span>复式/跃层</span>
                                                <span>别墅/双拼</span>
                                                <span>商业/会所</span>
                                                <span>自建房</span>
                                                <span>其他</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>喜好风格：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <button className="pub-down"></button>
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>性格特征：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <button className="pub-down"></button>
                                        </div>
                                    </li>
                                    <li className="li2">
                                        <span>购置意向：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <button className="pub-down"></button>
                                            <div className="pub-drop-down">
                                                <span>添置家具</span>
                                                <span>更换家具</span>
                                                <span>整屋家具</span>
                                                <span>整屋固装</span>
                                                <span>软装饰品</span>
                                                <span>全套软硬装家具</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="li2">
                                        <span>备注：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="btn-wrap">
                            <a href="/" className="a1" title="">退 出</a>
                            <a href="/" className="a2" title="">上 页</a>
                            <a href="/" className="a2" title="">下 页</a>
                            <a href="/" className="a3" title="">新 建</a>
                            <a href="/" className="a4" title="">保 存</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}