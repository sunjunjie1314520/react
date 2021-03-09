import React, { Component, createRef } from 'react'

import { Input, DropDown, Frame } from '../../components/UI';

import Pager from '../../components/Pager';

export default class index extends Component {

    constructor(props){
        super(props)
        this.left_layout = createRef()
        this.state = {
            field1: '1',
            field2: '2',
            field3: '3',
            
            items1: ['内部货品Internal Goods', '其他家具Other furniture'],
            index1: 0,

            items2: ['1222', '333'],
            index2: 0,

            items3: ['asdf64', '4545'],
            index3: 0,

            c1: true,
            c2: false,
        }
    }
    
    render() {
        return (
            <>
                <div className="intention-list">
                    <h2 className="pub-tit">
                    <i className="ico-font3"></i>
                        图片库存表
                    <div className="fr">
                            <a className="a5 w100" href="/" title="">导出</a>
                            <a className="a4 w100" href="/" title="">查询</a>
                        </div>
                    </h2>
                    <div className="pub-table">
                        <ul>
                            <Input title="货品编码" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                            <Input title="品名/型号" value={this.state.field2} model={(v)=>this.setState({field2: v})}></Input>


                            <DropDown items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})}>货品类别</DropDown>

                            <li>
                                <p>
                                    <label className="pub-check1 fl" title="库存为零不显示">
                                        <input type="checkbox" checked={this.state.c1} onChange={(e)=>this.setState({c1: e.target.checked})}/>库存为零不显示
                                    </label>
                                    <label className="pub-check1 fr" title="停产停售不显示">
                                        <input type="checkbox" checked={this.state.c2} onChange={(e)=>this.setState({c2: e.target.checked})}/>停产停售不显示
                                    </label>
                                </p>
                            </li>

                            <Input title="品牌" value={this.state.field3} model={(v)=>this.setState({field3: v})}><button className="pub-search"></button></Input>
                            <DropDown items={this.state.items2} index={this.state.index2} onChange={(index)=> this.setState({index2: index})}>系列</DropDown>
                            <DropDown width="48%" items={this.state.items3} index={this.state.index3} onChange={(index)=> this.setState({index3: index})}>商场/仓库</DropDown>
                        </ul>
                    </div>
                </div>

                <div className="pub-row-style">
                    <div className="table-head"> 
                        <div className="slide-bar">
                            <span className="sp60">序号</span>
                            <span className="sp128">图 片</span>
                            <span className="sp150">商场/仓库</span>
                            <span className="sp120">货品编码</span>
                            <span className="sp120">货品名称</span>
                            <span className="sp120">型 号</span>
                            <span className="sp140">尺 寸</span>
                            <span className="sp150">系 列</span>
                            <span className="sp60">单位</span>
                            <span className="sp100">库存数</span>
                            <span className="sp120">单价</span>
                            <span className="sp100">销售订货</span>
                            <span className="sp100">采购订货</span>
                            <span className="sp100">经销订货</span>
                            <span className="sp100">待出库数</span>
                            <span className="sp100">待入库数</span>
                            <span className="sp120">有效数</span>
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
                                    <label className="pub-check pub-ml-20"><input type="checkbox" />7</label>
                                </span>
                                <span className="sp200">
                                <b>合计：</b>
                                </span>
                            </li>
                        </ul>
                    </Frame>
                </div>

                {/* 分页 */}
                <Pager></Pager>
            </>
        )
    }
}
