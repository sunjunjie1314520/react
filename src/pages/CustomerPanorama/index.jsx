import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <>
                <div className="panorama-list">
                    <h2 className="pub-tit">
                        <i className="ico-inten2"></i>
                        <var>销售单全貌</var>
                        <div className="seacrh">
                            <input type="text" placeholder="请输入销售单号查询" />
                            <button type="submit">查询</button>
                        </div>
                    </h2>
                    <div className="tabs">
                        <a href="/" title="">销售详情</a>
                        <a href="/" title="">收款记录</a>
                        <a className="acti" href="/" title="">送货详情</a>
                        <a href="/" title="">退货情况</a>
                        <a href="/" title="">售后服务</a>
                        <a href="/" title="">跟进情况</a>
                    </div>
                    <div className="pub-table">
                        <ul>
                            <li>
                                <span>送货单号：</span>
                                <div className="input-wrap">
                                    <input type="text" className="a2" />
                                </div>
                            </li>
                            <li>
                                <span>销售单号：</span>
                                <div className="input-wrap">
                                    <input type="text" className="a2" />
                                </div>
                            </li>
                            <li>
                                <span>送货日期：</span>
                                <div className="input-wrap">
                                    <input type="text" />
                                </div>
                            </li>
                            <li>
                                <span>出货仓库：</span>
                                <div className="input-wrap">
                                    <input type="text" className="a2" />
                                </div>
                            </li>

                            <li>
                                <span>客户名称：</span>
                                <div className="input-wrap">
                                    <input type="text" className="a2" />
                                </div>
                            </li>
                            <li>
                                <span>客户编码：</span>
                                <div className="input-wrap">
                                    <input type="text" className="a2" />
                                </div>
                            </li>
                            <li>
                                <span>手机/电话：</span>
                                <div className="input-wrap">
                                    <input type="text" className="a2" />
                                </div>
                            </li>
                            <li>
                                <span>销售商场：</span>
                                <div className="input-wrap">
                                    <input type="text" className="a2" />
                                </div>
                            </li>

                            <li className="li1">
                                <span>送货地址：</span>
                                <div className="input-wrap">
                                    <input type="text" />
                                </div>
                            </li>
                            <li>
                                <span>制单人：</span>
                                <div className="input-wrap">
                                    <input type="text" />
                                </div>
                            </li>
                            <li>
                                <span>销售员：</span>
                                <div className="input-wrap">
                                    <input type="text" />
                                </div>
                            </li>
                            <li className="li2">
                                <span>备注：</span>
                                <div className="input-wrap">
                                    <input type="text" />
                                </div>
                            </li>

                        </ul>
                    </div>
                    
                </div>

                <div className="pub-row-style">
                    <div className="table-head"> 
                        <div className="slide-bar">
                            <span className="sp60">序号</span>
                            <span className="sp120">货品编码</span>
                            <span className="sp120">货品名称</span>
                            <span className="sp120">型 号</span>
                            <span className="sp140">尺 寸</span>
                            <span className="sp60">单位</span>
                            <span className="sp100">库存数</span>
                            <span className="sp110">货品属性</span>
                            <span className="sp100">订货数</span>
                            <span className="sp100">送货数</span>
                            <span className="sp120">单价</span>
                            <span className="sp140">金额</span>
                            <span className="sp200">备　　注</span>
                            <span className="sp120">末送货数</span>
                        </div>
                    </div>
                    <div className="table-row auto-table pub-first-center">
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
                    </div>
                </div>
            </>
        )
    }
}
