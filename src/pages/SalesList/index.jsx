import React, { Component, createRef } from 'react'

import Pager from '../../components/Pager';

import { offsetTop } from '../../utils';

export default class index extends Component {

    constructor(props){
        super(props)
        this.left_layout = createRef()
        this.state = {}
    }

    componentDidMount(){
        let w_hei = window.innerHeight
        let off_top = offsetTop(this.left_layout.current)
        this.left_layout.current.style.height = (w_hei - off_top - 45) +'px'
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
                            <li>
                                <span>销售单号：</span>
                                <div className="input-wrap">
                                    <div className="select-down">
                                        <h2>含</h2>
                                        <div className="box">
                                            <span>含</span>
                                            <span>=</span>
                                            <span>≠</span>
                                            <span>&gt;</span>
                                            <span>&lt;</span>
                                            <span>≥</span>
                                            <span>≤</span>
                                        </div>
                                    </div>
                                    <input type="text" className="sel a2" name="" />
                                </div>
                            </li>
                            <li>
                                <span>销售商场：</span>
                                <div className="input-wrap">
                                    <div className="select-down">
                                        <h2>含</h2>
                                        <div className="box">
                                            <span>含</span>
                                            <span>=</span>
                                            <span>≠</span>
                                            <span>&gt;</span>
                                            <span>&lt;</span>
                                            <span>≥</span>
                                            <span>≤</span>
                                        </div>
                                    </div>
                                    <input type="text" className="sel a2" />
                                </div>
                            </li>
                            <li>
                                <span>销售日期：</span>
                                <div className="input-wrap J-datepicker-day right">
                                    <div className="select-down">
                                        <h2>≥</h2>
                                        <div className="box">
                                            <span>含</span>
                                            <span>=</span>
                                            <span>≠</span>
                                            <span>&gt;</span>
                                            <span>&lt;</span>
                                            <span>≥</span>
                                            <span>≤</span>
                                        </div>
                                    </div>
                                    <input type="text" className="two-input" />
                                </div>
                            </li>
                            <li>
                                <span>销售日期：</span>
                                <div className="input-wrap J-datepicker-day right">
                                    <div className="select-down">
                                        <h2>≤</h2>
                                        <div className="box">
                                            <span>含</span>
                                            <span>=</span>
                                            <span>≠</span>
                                            <span>&gt;</span>
                                            <span>&lt;</span>
                                            <span>≥</span>
                                            <span>≤</span>
                                        </div>
                                    </div>
                                    <input type="text" className="two-input" />			
                                </div>	
                            </li>
                            <li>
                                <span>货品编码：</span>
                                <div className="input-wrap">
                                    <div className="select-down">
                                        <h2>含</h2>
                                        <div className="box">
                                            <span>含</span>
                                            <span>=</span>
                                            <span>≠</span>
                                            <span>&gt;</span>
                                            <span>&lt;</span>
                                            <span>≥</span>
                                            <span>≤</span>
                                        </div>
                                    </div>
                                    <input type="text" className="sel a2" />
                                </div>
                            </li>
                            <li>
                                <span>型号：</span>
                                <div className="input-wrap">
                                    <div className="select-down">
                                        <h2>含</h2>
                                        <div className="box">
                                            <span>含</span>
                                            <span>=</span>
                                            <span>≠</span>
                                            <span>&gt;</span>
                                            <span>&lt;</span>
                                            <span>≥</span>
                                            <span>≤</span>
                                        </div>
                                    </div>
                                    <input type="text" className="sel a2" />
                                </div>
                            </li>
                            <li>
                                <span>客户编码：</span>
                                <div className="input-wrap">
                                    <div className="select-down">
                                        <h2>含</h2>
                                        <div className="box">
                                            <span>含</span>
                                            <span>=</span>
                                            <span>≠</span>
                                            <span>&gt;</span>
                                            <span>&lt;</span>
                                            <span>≥</span>
                                            <span>≤</span>
                                        </div>
                                    </div>
                                    <input type="text" className="sel a2" />
                                </div>
                            </li>
                            <li>
                                <span>销售员：</span>
                                <div className="input-wrap">
                                    <button className="pub-search"></button>
                                    <div className="select-down">
                                        <h2>=</h2>
                                        <div className="box">
                                            <span>含</span>
                                            <span>=</span>
                                            <span>≠</span>
                                            <span>&gt;</span>
                                            <span>&lt;</span>
                                            <span>≥</span>
                                            <span>≤</span>
                                        </div>
                                    </div>
                                    <input type="text" className="sel" />
                                </div>
                            </li>
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
                        <div className="table-row auto-height pub-first-center" ref={this.left_layout}>
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

                <Pager></Pager>
                
            </>
        )
    }
}
