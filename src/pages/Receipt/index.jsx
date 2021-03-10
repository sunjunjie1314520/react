import React, { Component, createRef } from 'react'

import { offsetTop } from '../../utils';

import {Input, DropDown, DateTime } from '../../components/UI';

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

            
            items1: ['营养师1', '菜单一'],
            index1: 0,
            field1: '',
            field2: '',
            time1: '',  // 销售日期

            field5: '5',
            field6: '6',
            field7: '7',
            field8: false,

            t1: '',
            t2: '',
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

                                <DropDown width="48%" items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})}>销售商场</DropDown>
                                <Input title="销售单号" width="48%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                                <Input width="48%" title="客户名称" value={this.state.name} model={(v)=>this.setState({name: v})}>
                                    <button className="pub-search"></button>
                                </Input>
                                <DateTime width="48%" title="销售日期" model={(v)=> this.setState({time1: v})}></DateTime>
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

                                    <Input title="收款商场" width="48%" value={this.state.field5} model={(v)=>this.setState({field5: v})}></Input>
                   
                                    <li className="li1">
                                        <span></span>
                                        <label className="pub-check1"><input type="checkbox" checked={this.state.field8} onChange={(e)=> this.setState({field8: e.target.checked})} />是否收余款</label>
                                    </li>
                                    
                                    <Input title="本次收款" width="48%" value={this.state.field6} model={(v)=>this.setState({field6: v})}></Input>
                                    <Input title="还剩余款" width="48%" value={this.state.field7} model={(v)=>this.setState({field7: v})}></Input>
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
                                <a className="a3 let w100" href="/" title="">销售收款</a>
                                <a className="a6 let w100" href="/" title="">查看销售单</a>
                            </div>
                        </h2>
                        
                        {/* 列表 */}
                        <div className="pub-table">
                            <ul>

                                <Input title="销售单号" width="31%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                            
                                <Input title="销售日期" width="31%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>

                                <Input title="预送日期" width="31%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>

                                <Input title="客户名称" width="31%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                                <Input title="客户编码" width="31%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                                <Input title="手机/电话" width="32%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>


                                <Input title="送货地址" width="98%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                                <Input title="销售商场" width="31%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                                <Input title="销售员" width="31%" value={this.state.field1}  model={(v)=>this.setState({field1: v})}></Input>

                                <li className="li6">
                                    <span></span>
                                    <label className="pub-check1"><input type="checkbox" />是否有现场销售</label>
                                </li>

                                <Input title="销售金额" width="31%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                                <Input title="累计收款" width="31%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                                <Input title="还剩余款" width="32%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>

                                <Input title="备注" width="98%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>

                                

            
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
