import React, { Component, createRef } from 'react'

import { offsetTop } from '../../utils';

export default class index extends Component {

    constructor(){
        super()
        this.state = {
            init: null,
            init1: null,
            init2: null,
            s1: true,
            sh: null,
            sh1: null,
        }
        this.left_layout = createRef()
        this.left_layout1 = createRef()
        this.rihgt_layout = createRef()
    }

    componentDidMount(){
        let w_hei = window.innerHeight
        let off_top = offsetTop(this.left_layout.current)
        let off_top1 = offsetTop(this.rihgt_layout.current)
        let off_top2 = offsetTop(this.left_layout1.current) + 17

        this.setState({
            init: this.left_layout.current.offsetHeight,
            s1: false,
            sh: w_hei - off_top - 58 - 15,
            init1: w_hei - off_top - 58 - 15,
            init2: w_hei - off_top2
        })      

        this.rihgt_layout.current.style.height = (w_hei - off_top1 - 17) +'px'
    }

    abc = () =>{
        const {s1, init, init1, init2} = this.state
        this.setState({
            s1: !s1,
            sh: !s1 ? init : init1,
            sh1: !s1 ? init2 : 0
        })
    }

    render() {
        const { s1, sh, sh1 } = this.state
        return (
            <>
                <div className="left-wrappr">
		
                    <div className="query pub-bor-fl">

                        <h2 className="pub-tit">
                            <i className="ico-font4"></i>
                            销售单列表
                            <div className="fr">
                                <a className="a6" href="/" title="">查询</a>
                            </div>
                        </h2>

                        <div className="pub-table">
                            <ul>
                                <li className="li1">
                                    <span>销售商场：</span>
                                    <div className="input-wrap">
                                    <input type="text" name="" />				
                                    <button className="pub-down"></button>
                                    <div className="pub-drop-down">
                                            <span>菜单一</span>
                                            <span>菜单二</span>
                                            <span>菜单三</span>
                                            <span>菜单四</span>
                                            <span>菜单五</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="li1">
                                    <span>销售单号：</span>
                                    <div className="input-wrap">
                                        <input type="text" name="" />
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
                                    <span>销售日期：</span>
                                    <div className="input-wrap J-datepicker-day right">
                                        <input type="text" className="c-datepicker-data-input only-date" />
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="pub-row-style pub-mt-0 pub-border-no3">

                            <div className="table-head">
                                <div className="slide-bar" style={{minWidth: '530px'}}>
                                    <span className="sp50">序号</span>
                                    <span className="sp120">销售日期</span>
                                    <span className="sp120">销售单号</span>
                                    <span className="sp120">客户名称</span>
                                    <span className="sp120">销售金额</span>
                                </div>
                            </div>

                            <div className="table-row pub-half pub-first-center a2" style={{height: `${sh}px`}} ref={this.left_layout}>
                                <ul style={{minWidth: '530px'}}>
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
                                    <li>
                                        <span className="sp50">
                                        <label className="pub-check a1">8</label>
                                        </span>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                    
                    {/* 第二个 */}

                    <div className={`receivables pub-mt-15 pub-bor-fl ${s1 ? '' : 'no-border'}`}>
                        
                        {/* 标题栏 */}
                        <h2 className="pub-tit">
                            <div className="fl cursor" onClick={this.abc}>
                                <i className="ico-font2"></i>
                                销售收款
                            </div>
                            <div className="fr">
                                <a className="a3" href="/" title="">确定</a>
                            </div>
                        </h2>
                        
                        <div className="wrap" style={{display: s1 ? 'block': 'none'}}>
                            {/* 列表 */}
                            <div className="pub-table">
                                <ul>
                                    <li className="li1">
                                        <span>收款商场：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span></span>
                                        {/* 复选框 */}
                                        <label className="pub-check1"><input type="checkbox" />是否收余款</label>
                                    </li>
                                    <li className="li1">
                                        <span>本次收款：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>还剩余款：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* 表格 */}
                            <div className="pub-row-style pub-mt-0 pub-border-no3">
                                <div className="table-head">
                                    <div className="slide-bar">
                                        <span className="sp50">序号</span>
                                        <span className="sp160">收款方式</span>
                                        <span className="sp80">币种</span>
                                        <span className="sp120">收款金额</span>
                                        <span className="sp120">备注</span>
                                    </div>
                                </div>
                                <div className="table-row auto-table pub-first-center" style={{height: `${sh1}px`}} ref={this.left_layout1}>
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
                                        <li>
                                            <span className="sp50">
                                                <label className="pub-check a1">8</label>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right-wrapper">

                    <div className="xiao-box pub-bor-fl">

                        {/* 标题栏 */}
                        <h2 className="pub-tit">
                            <i className="ico-font5"></i>
                            销售单详情
                            <div className="fr">
                                <a className="a6 let w100" href="/" title="">查看销售单</a>
                            </div>
                        </h2>
                        
                        {/* 列表 */}
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
                                    <div className="input-wrap">
                                    <input type="text" name="" />
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
                                <li className="li8">
                                    <span></span>
                                    <label className="pub-check1"><input type="checkbox" />是否有现场销售</label>
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

                    <div className="record-receipts pub-mt-15 pub-bor-fl">

                        <h2 className="pub-tit">
                            <i className="ico-font1"></i>
                            收款记录
                        </h2>

                        <div className="pub-row-style pub-mt-0 pub-border-no4">

                            <div className="table-head">
                                <div className="slide-bar">
                                    <span className="sp50">序号</span>
                                    <span className="sp120">收款日期</span>
                                    <span className="sp120">收款方式</span>
                                    <span className="sp140">收款金额</span>
                                    <span className="sp200">收款商场</span>
                                    <span className="sp100">收款人</span>
                                    <span className="sp140">备注</span>
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
                    
                </div>
                
                {/* 确认弹窗 */}
                <div className="pub-shadow">
                    <div className="tips-wrapper move-obj">
                        <div className="pub-tit add">
                            <i className="ico-font30"></i>
                            提示
                            <div className="fr">
                            <span className="ico-close"></span> 
                        </div>
                        </div>
                        <div className="tips-text">
                            <img src="img/33faba806d3a89bc_88x88.png" alt="" />
                            <b>销售订单：XS001658</b>
                            <p>【是否确认收款￥10,000.00元】</p>
                        </div>
                        <div className="tip-btn-group">
                            <a href="/" className="a1">打印</a>
                            <a href="/" className="a2">取消</a>
                            <a href="/" className="a3">确定</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}