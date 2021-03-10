import React, { Component, createRef } from 'react'

import Pager from '../../components/Pager';

import { Input, Frame, DateTime, ContainDown } from '../../components/UI';

export default class index extends Component {

    constructor(props){
        super(props)
        this.left_layout = createRef()
        this.state = {
            field1: '123',
            field2: '456',
            index1: 0,
        }
    }

    render() {
        return (
            <>
                <div className="function-wrap">
                    <div className="pub-fun">
                        <a href="/" title=""><i className="ico-da"></i>打印</a>
                        <a href="/" title=""><i className="ico-dao"></i>导出</a>
                        <a href="/" title=""><i className="ico-ming"></i>明细</a>
                        <a href="/" title=""><i className="ico-tiao"></i>选项</a>
                        <a href="/" title=""><i className="ico-she"></i>设置</a>
                        <a href="/" title=""><i className="ico-cha"></i>查询</a>
                    </div>
                    <div className="pub-table">
                        <ul>
                            <Input ltr={true} title="销售单号" value={this.state.field1} model={(v)=>this.setState({field1: v})}>
                                <ContainDown Select={(v)=> this.setState({index1: v})}></ContainDown>
                            </Input>

                            <Input split={true} title="销售商场" value={this.state.field1} model={(v)=>this.setState({field1: v})}>
                                <ContainDown Select={(v)=> this.setState({index1: v})}></ContainDown>
                                <button className="pub-search"></button>
                            </Input>

                            <DateTime title="销售日期" width="23%" model={(v)=> this.setState({t1: v})}>
								<ContainDown Select={(v)=>this.setState({d1: v})}></ContainDown>
							</DateTime>

                            <DateTime title="销售日期" width="23%" model={(v)=> this.setState({t1: v})}>
								<ContainDown Select={(v)=>this.setState({d1: v})}></ContainDown>
							</DateTime>

                            <Input ltr={true} title="货品编码" value={this.state.field1} model={(v)=>this.setState({field1: v})}>
                                <ContainDown Select={(v)=> this.setState({index1: v})}></ContainDown>
                            </Input>

                            <Input ltr={true} title="型号" value={this.state.field1} model={(v)=>this.setState({field1: v})}>
                                <ContainDown Select={(v)=> this.setState({index1: v})}></ContainDown>
                            </Input>

                            <Input ltr={true} title="客户编码" value={this.state.field1} model={(v)=>this.setState({field1: v})}>
                                <ContainDown Select={(v)=> this.setState({index1: v})}></ContainDown>
                            </Input>

                            <Input split={true} title="销售员" value={this.state.field1} model={(v)=>this.setState({field1: v})}>
                                <ContainDown Select={(v)=> this.setState({index1: v})}></ContainDown>
                                <button className="pub-search"></button>
                            </Input>
                        </ul>
                    </div>
                </div>

                <div className="pub-row-style">
                    <div className="table-head">
                        <div className="slide-bar">
                                <span className="sp60">序号</span>
                                <span className="sp150">销售商场</span>
                                <span className="sp130">销售单号</span>
                                <span className="sp120">销售日期</span>
                                <span className="sp120">客户名称</span>
                                <span className="sp120">客户编码</span>
                                <span className="sp140">订单金额</span>
                                <span className="sp120">已付款额</span>
                                <span className="sp120">还剩款额</span>
                                <span className="sp100">销售员</span>
                                <span className="sp200">备　注</span>
                                <span className="sp100">收款人</span>
                                <span className="sp120">收款日期</span>
                                <span className="sp100">修改人</span>
                            </div>
                        </div>
                        <Frame className="table-row pub-first-center" bottom={42}>
                            <ul>
                                <li>
                                    <span className="sp60">
                                        <label className="pub-check">1</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp60">
                                        <label className="pub-check">2</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp60">
                                        <label className="pub-check">3</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp60">
                                        <label className="pub-check">4</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp60">
                                        <label className="pub-check">5</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp60">
                                        <label className="pub-check">6</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp60">
                                        <label className="pub-check">7</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp60">
                                        <label className="pub-check">8</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp60">
                                        <label className="pub-check">9</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp60">
                                        <label className="pub-check">10</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp60">
                                        <label className="pub-check">11</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp60">
                                        <label className="pub-check">12</label>
                                    </span>
                                </li>
                                <li className="pub-last-back">
                                    <span className="sp60">
                                        <label className="pub-check">13</label>
                                    </span>
                                <span className="sp200">
                                <b>合计：</b>
                                </span>
                                </li>
                            </ul>
                        </Frame>
                </div>

                {/* 分页器 */}
                <Pager></Pager>

            </>
        )
    }
}
