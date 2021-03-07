import React, { Component, createRef } from 'react'

import { offsetTop } from '../../utils';

export default class index extends Component {

    constructor(){
        super()
        this.state = {}
        this.left_layout = createRef()
        this.rihgt_layout = createRef()
    }

    componentDidMount(){
        let w_hei = window.innerHeight
        let off_top = offsetTop(this.left_layout.current)
        let off_top1 = offsetTop(this.rihgt_layout.current)
        this.left_layout.current.style.height = (w_hei - off_top - 16) +'px'
        this.rihgt_layout.current.style.height = (w_hei - off_top1 - 17) +'px'
    }

    render() {
        return (
            <>
                <div className="notice-left">
                    <h2 className="pub-tit">
                        <i className="ico-font4"></i>
                        送货列表
                        <div className="fr">
                            <a className="a6" href="/" title="">查询</a>
                        </div>
                    </h2>
                    <div className="pub-table">
                        <ul>
                            <li className="li2">
                                <span>销售商场：</span>
                                <div className="input-wrap">
                                    <input type="text" name="" />
                                    <button className="pub-down"></button>
                                    <div className="pub-drop-down">
                                        <span>深圳红星香蜜湖店</span>
                                        <span>上海红星真北店</span>
                                        <span>北京居然之家四环店</span>
                                    </div>
                                </div>
                            </li>	
                            <li className="li1">
                                <span>销售单号：</span>
                                <div className="input-wrap">
                                    <input type="text" name="" />
                                    <button className="pub-search"></button>
                                </div>
                            </li>
                            <li className="li1">
                                <span>是否有余款：</span>
                                <div className="input-wrap">
                                    <input type="text" name="" />
                                    <button className="pub-down"></button>
                                    <div className="pub-drop-down">
                                        <span>是</span>
                                        <span>否</span>
                                    </div>
                                </div>
                            </li>
                            <li className="li1">
                                <span>客户名称：</span>
                                <div className="input-wrap">
                                    <input type="text" name="" />
                                    <button className="pub-search"></button>
                                </div>
                            </li>
                            <li className="li1">
                                <span>预送期间：</span>
                                <div className="input-wrap">
                                    <input type="text" name="" />
                                    <button className="pub-down"></button>
                                    <div className="pub-drop-down">
                                        <span>最近一天</span>
                                        <span>最近三天</span>
                                        <span>最近一周</span>
                                        <span>最近半月</span>
                                        <span>最近一月</span>
                                        <span>最近三月</span>
                                        <span>最近半年</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                        <div className="pub-row-style pub-mt-0 pub-border-no3">

                            <div className="table-head">
                                <div className="slide-bar">
                                <span className="sp50">序号</span>
                                <span className="sp120">销售单号</span>
                                <span className="sp100">客户名称</span>
                                <span className="sp100">销售员</span>
                                <span className="sp80">未送数</span>
                                <span className="sp100">送货日期</span>
                            </div>
                            </div>
                            <div className="table-row auto-table pub-first-center" ref={this.left_layout}>
                                <ul>
                                    <li>
                                        <span className="sp50">
                                        <label className="pub-check a1">1</label>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="sp50">
                                        <label className="pub-check a1">2</label>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="sp50">
                                        <label className="pub-check a1">3</label>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="sp50">
                                        <label className="pub-check a1">4</label>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="sp50">
                                        <label className="pub-check a1">5</label>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="sp50">
                                        <label className="pub-check a1">6</label>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="sp50">
                                        <label className="pub-check a1">7</label>
                                        </span>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>

                <div className="notice-right bg-none">

                    <div className="box3">
                        <h2 className="pub-tit">
                            <i className="ico-font7"></i>
                            送货安排
                            <div className="fr">
                                <a className="a3" href="/" title="">保存</a>
                            </div>
                        </h2>

                        <div className="pub-table">
                            <ul>
                                <li className="li0">
                                    <span>出货仓库：</span>
                                    <div className="input-wrap">
                                        <input type="text" />
                                        <button type="button" className="pub-down"></button>
                                        <div className="pub-drop-down">
                                            <span>深圳坪山总仓</span>
                                            <span>深圳红星香蜜湖店</span>
                                            <span>深圳第三空间</span>
                                            <span>广州吉盛伟邦琶洲店</span>
                                        </div>
                                        <var className="pub-asterisk">*</var>
                                    </div>
                                </li>
                                <li className="li5">
                                    <label className="pub-check1"><input type="checkbox" />是否全部送货</label>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="box4">
                        <div className="pub-table">
                            <ul>
                                <li className="li5">
                                    <span>销售单号：</span>
                                    <div className="input-wrap">
                                        <input type="text" name="" />
                                    </div>
                                </li>
                                <li className="li5">
                                    <span>销售日期：</span>
                                    <div className="input-wrap">
                                        <input type="text" name="" />
                                    </div>
                                </li>
                                <li className="li6">
                                    <span>预送日期：</span>
                                    <div className="input-wrap J-datepicker-day right">
                                        <input type="text" className="c-datepicker-data-input only-date" />
                                        <var className="pub-asterisk">*</var>
                                    </div>
                                </li>
                                <li className="li5">
                                    <span>客户名称：</span>
                                    <div className="input-wrap">
                                        <input type="text" name="" />
                                    </div>
                                </li>
                                <li className="li5">
                                    <span>客户编码：</span>
                                    <div className="input-wrap">
                                        <input type="text" name="" />
                                    </div>
                                </li>
                                <li className="li6">
                                    <span>手机/电话：</span>
                                    <div className="input-wrap">
                                        <input type="text" name="" />
                                    </div>
                                </li>
                                <li className="li2">
                                    <span>送货地址：</span>
                                    <div className="input-wrap">
                                        <input type="text" name="" />
                                    </div>
                                </li>
                                <li className="li5">
                                    <span>销售商场：</span>
                                    <div className="input-wrap">
                                        <input type="text" name="" />
                                    </div>
                                </li>
                                <li className="li5">
                                    <span>销售员：</span>
                                    <div className="input-wrap">
                                        <input type="text" name="" />
                                    </div>
                                </li>
                                <li className="li6">
                                    <span>未送总数：</span>
                                    <div className="input-wrap">
                                        <input type="text" name="" />
                                    </div>
                                </li>
                                <li className="li5">
                                    <span>销售金额：</span>
                                    <div className="input-wrap">
                                        <input type="text" name="" />
                                    </div>
                                </li>
                                <li className="li5">
                                    <span>累计收款：</span>
                                    <div className="input-wrap">
                                        <input type="text" name="" />
                                    </div>
                                </li>
                                <li className="li6">
                                    <span>还剩余款：</span>
                                    <div className="input-wrap">
                                        <input type="text" name="" />
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

                    <div className="pub-row-style">
                        <div className="table-head"> 
                            <div className="slide-bar">
                                    <span className="sp50">序号</span>
                                    <span className="sp120">货品编码</span>
                                    <span className="sp120">货品名称</span>
                                    <span className="sp120">型　号</span>
                                    <span className="sp140">尺　寸</span>
                                    <span className="sp60">单位</span>
                                    <span className="sp80">库存数</span>
                                    <span className="sp100">货品属性</span>
                                    <span className="sp80">销售数</span>
                                    <span className="sp80">已送数</span>
                                    <span className="sp90">本次送货数</span>
                                    <span className="sp100">单价</span>
                                    <span className="sp60">折扣%</span>
                                    <span className="sp110">送货金额</span>
                                    <span className="sp140">备  注</span>
                                </div>
                            </div>	
                            <div className="table-row auto-table pub-first-center" ref={this.rihgt_layout}>
                                <ul>
                                    <li>
                                    <span className="sp50">
                                    <label className="pub-check a1">1</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp50">
                                    <label className="pub-check a1">2</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp50">
                                    <label className="pub-check a1">3</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp50">
                                    <label className="pub-check a1">4</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp50">
                                    <label className="pub-check a1">5</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp50">
                                    <label className="pub-check a1">6</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp50">
                                    <label className="pub-check a1">7</label>
                                    </span>
                                </li>
                                </ul>
                            </div>
                        </div>
                </div>
            </>
        )
    }
}
