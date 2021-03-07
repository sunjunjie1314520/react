import React, { Component, createRef } from 'react'

import Pager from '../../components/Pager';

import Input from '../../components/Input';

import { offsetTop } from '../../utils';

export default class index extends Component {

    constructor(){
        super()
        this.left_layout = createRef()
        this.state = {
            down1: ['11111', '22222'],
            index1: 0,
            down2: ['3333', '44444'],
            index2: 0
        }
    }

    componentDidMount(){
        let w_hei = window.innerHeight
        let off_top = offsetTop(this.left_layout.current)
        this.left_layout.current.style.height = (w_hei - off_top - 45) +'px'
    
    }

    change1 = (index) => {
        this.setState({
            index1: index
        })
    }

    // 更换制单人
    change2 = (index) => {
        this.setState({
            index2: index
        })
    }

    render() {
        const {down1, index1, down2, index2} = this.state
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
                            <Input type="search">客户手机号</Input>
                            <Input type="down" index={index1} items={down1} onChange={this.change1}>商场</Input>
                            <Input type="down" index={index2} items={down2} onChange={this.change2}>制单人</Input>

                            <li>
                                <span>添加期间：</span>
                                <div className="input-wrap">
                                    <input type="text" name="" />
                                    <button className="pub-down" type="submit"></button>
                                    <div className="pub-drop-down">
                                        <span>最近三天</span>
                                        <span>最近一周</span>
                                        <span>最近一月</span>
                                        <span>最近一季</span>
                                        <span>最近半年</span>
                                    </div>
                                </div>
                            </li>
                            
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
                    <div className="table-row auto-height pub-small" ref={this.left_layout}>
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
                    </div>
                </div>

                <Pager></Pager>
            </>
        )
    }
}
