import React, { Component, createRef } from 'react'

import Pager from '../../components/Pager';

import { Input, DropDown, Frame } from '../../components/UI';

export default class index extends Component {

    constructor(){
        super()
        this.left_layout = createRef()
        this.state = {
            items1: ['天虹购物广场', '百佳购物广场'],
            index1: 0,

            items2: ['张三', '李四', '王五'],
            index2: 0,

            items3: ['最近三天', '最近一周', '最近一月', '最近一季', '最近半年'],
            index3: 0,

            phone: ''
        }
    }

    render() {

        return (
            <>   
                <div className="intention-list">
                    <h2 className="pub-tit">
                    <i className="ico-font8"></i>
                        客户意向单
                        <div className="fr">
                            <a className="a5 w100" href="/" title="">导出</a>
                            <a className="a2 w100" href="/" title="">导购</a>
                            <a className="a1 w100" href="/" title="">删行</a>
                            <a className="a3 w100" href="/" title="">开单</a>
                            <a className="a4 w100" href="/" title="">查询</a>
                        </div>
                    </h2>
                    <div className="pub-table">
                        <ul>
                            <Input title="客户手机号" value={this.state.phone} model={(v)=> this.setState({phone: v})}></Input>
                            <DropDown index={this.state.index1} items={this.state.items1} onChange={(index)=> this.setState({index1: index})}>商场</DropDown>
                            <DropDown index={this.state.index2} items={this.state.items2} onChange={(index)=> this.setState({index2: index})}>制单人</DropDown>
                            <DropDown index={this.state.index3} items={this.state.items3} onChange={(index)=> this.setState({index3: index})}>添加期间</DropDown>                            
                        </ul>
                    </div>
                </div>

                <div className="pub-row-style">
                    <div className="table-head"> 
                        <div className="slide-bar">
                            <span className="sp60">序号</span>
                            <span className="sp128">图 片</span>
                            <span className="sp150">客户手机号</span>
                            <span className="sp120">货品编码</span>
                            <span className="sp120">货品名称</span>
                            <span className="sp120">型 号</span>
                            <span className="sp140">尺 寸</span>
                            <span className="sp150">品 牌</span>
                            <span className="sp60">单位</span>
                            <span className="sp100">库存数</span>
                            <span className="sp120">单价</span>
                            <span className="sp100">选购数</span>
                            <span className="sp130">金额</span>
                            <span className="sp120">添加日期</span>
                        </div>
                    </div>

                    <Frame className="table-row pub-small" bottom={42}>
                        <ul>
                            <li>
                                <span className="sp65">
                                    <label className="pub-check"><input type="checkbox" />1</label>
                                </span>
                                <span className="sp118">
                                    <var></var>
                                </span>
                            </li>
                            <li>
                                <span className="sp65">
                                    <label className="pub-check"><input type="checkbox" />2</label>
                                </span>
                                <span className="sp118">
                                    <var></var>
                                </span>
                            </li>
                            <li>
                                <span className="sp65">
                                    <label className="pub-check"><input type="checkbox" />3</label>
                                </span>
                                <span className="sp118">
                                    <var></var>
                                </span>
                            </li>
                            <li>
                                <span className="sp65">
                                    <label className="pub-check"><input type="checkbox" />4</label>
                                </span>
                                <span className="sp118">
                                    <var></var>
                                </span>
                            </li>
                            <li>
                                <span className="sp65">
                                    <label className="pub-check"><input type="checkbox" />5</label>
                                </span>
                                <span className="sp118">
                                    <var></var>
                                </span>
                            </li>
                            <li>
                                <span className="sp65">
                                    <label className="pub-check"><input type="checkbox" />6</label>
                                </span>
                                <span className="sp118">
                                    <var></var>
                                </span>
                            </li>
                            <li className="pub-last-back">
                                <span className="sp65">
                                    <label className="pub-check"><input type="checkbox" />7</label>
                                </span>
                                <span className="sp118">
                                <span className="sp200">
                                    <b>合计：</b>
                                </span>
                                </span>
                            </li>
                        </ul>
                    </Frame>
                </div>

                <Pager></Pager>

            </>
        )
    }
}
