import React, { Component, createRef } from 'react'

import { offsetTop } from '../../utils';

import {Input, DropDown, DateTime, Move} from '../../components/UI';

import Table, {Box, Li} from '../../components/Table';

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

            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            input6: '',
            input7: '',
            input8: '',
            input9: '',
            input10: '',
            input11: '',
            input12: '',
            input13: '',
            input14: '',
            input15: '',

            alert1: false,
            alert2: false,

            // Tabel 列字段
            fields1: [
                {
                    width: 50,
                    name: '序号',
                },
                {
                    width: 180,
                    name: '销售商场',
                },
                {
                    width: 120,
                    name: '销售单号',
                },
                {
                    width: 100,
                    name: '客户名称',
                },
                {
                    width: 100,
                    name: '销售日期',
                },
            ],
            // Tabel 源数据
            data1: [
                {
                    id: 1,
                    bianma: 'xxxxxxxxxxxxx',
                    check: false,
                },
                {
                    id: 2,
                    bianma: 'xxxxxxxxxxxxx',
                    check: false,
                },
            ]
        }
        this.rihgt_layout = createRef()
    }

    // 表格复选框
    checkHandle(check, k){
        const {data1} = this.state
        data1[k].check = check
        this.setState({
            data1: data1
        })
    }

    componentDidMount(){
        let w_hei = window.innerHeight
        let off_top1 = offsetTop(this.rihgt_layout.current)
        this.rihgt_layout.current.style.height = (w_hei - off_top1 - 16) +'px'
    }

    render() {
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
                                <Input title="销售单号" width="48%" value={this.state.input1} model={(v)=>this.setState({input1: v})}></Input>
                                <Input width="48%" title="客户名称" value={this.state.input2} model={(v)=>this.setState({input2: v})}>
                                    <button className="pub-search"></button>
                                </Input>
                                <DateTime width="48%" title="销售日期" model={(v)=> this.setState({time1: v})}></DateTime>
                            </ul>
                        </div>

                        <Table fields={this.state.fields1} bottom={17} margin noborder>
                            {
                                this.state.data1.map((v, k)=>{
                                    return (
                                        <Li key={k} check={v.check}>
                                            <Box w={this.state.fields1[0].width}>
                                                <label className="pub-check">
                                                    {k+1}
                                                </label>
                                            </Box>
                                            <Box w={this.state.fields1[1].width}>111</Box>
                                            <Box w={this.state.fields1[2].width}>2222</Box>
                                        </Li>
                                    )
                                })
                            }
                        </Table>
                    </div>
                </div>

                <div className="right-wrapper">

                    <div className="xiao-box pub-bor-fl">

                        {/* 标题栏 */}
                        <h2 className="pub-tit">
                            <i className="ico-font5"></i>
                            销售单详情
                            <div className="fr">
                                <a className="a3 let w100" href="/" title="" onClick={(e)=> {e.preventDefault();this.setState({alert2: true})}}>销售收款</a>
                                <a className="a6 let w100" href="/" title="">查看销售单</a>
                            </div>
                        </h2>

                        {/* 列表 */}
                        <div className="pub-table">
                            <ul>

                                <Input title="销售单号" width="31%" value={this.state.input3} model={(v)=>this.setState({input3: v})}></Input>

                                <Input title="销售日期" width="31%" value={this.state.time2} model={(v)=>this.setState({time2: v})}></Input>

                                <Input title="预送日期" width="32%" value={this.state.time3} model={(v)=>this.setState({time3: v})}></Input>

                                <Input title="客户名称" width="31%" value={this.state.input4} model={(v)=>this.setState({input4: v})}></Input>
                                <Input title="客户编码" width="31%" value={this.state.input5} model={(v)=>this.setState({input5: v})}></Input>
                                <Input title="手机/电话" width="32%" value={this.state.input6} model={(v)=>this.setState({input6: v})}></Input>


                                <Input title="送货地址" width="98%" value={this.state.input7} model={(v)=>this.setState({input7: v})}></Input>
                                <Input title="销售商场" width="31%" value={this.state.input8} model={(v)=>this.setState({input8: v})}></Input>
                                <Input title="销售员" width="31%" value={this.state.input9}  model={(v)=>this.setState({input9: v})}></Input>

                                <li className="li6">
                                    <span></span>
                                    <label className="pub-check1"><input type="checkbox" />是否有现场销售</label>
                                </li>

                                <Input title="销售金额" width="31%" value={this.state.input10} model={(v)=>this.setState({input10: v})}></Input>
                                <Input title="累计收款" width="31%" value={this.state.input11} model={(v)=>this.setState({input11: v})}></Input>
                                <Input title="还剩余款" width="32%" value={this.state.input12} model={(v)=>this.setState({input12: v})}></Input>

                                <Input title="备注" width="98%" value={this.state.input13} model={(v)=>this.setState({input13: v})}></Input>
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
                <Move model={this.state.alert1}>
                    <div className="tips-wrapper move-obj">
                        <div className="pub-tit add">
                            <i className="ico-font30"></i>
                            提示
                            <div className="fr">
                                <span className="ico-close" onClick={(e)=> {e.preventDefault();this.setState({alert1: false})}}></span> 
                            </div>
                        </div>
                        <div className="tips-text">
                            <img src="img/33faba806d3a89bc_88x88.png" alt="" />
                            <b>销售订单：XS001658</b>
                            <p>【是否确认收款￥10,000.00元】</p>
                        </div>
                        <div className="tip-btn-group">
                            <a href="/" className="a1">打印</a>
                            <a href="/" className="a2" onClick={(e)=> {e.preventDefault();this.setState({alert1: false})}}>取消</a>
                            <a href="/" className="a3">确定</a>
                        </div>
                    </div>
                </Move>

                {/* 销售收款 */}
                <Move model={this.state.alert2}>
                    <div className="archives-alert move-obj">
                        <div className="pub-tit add">
                            <i className="ico-font2"></i>
                            <em className="ico-font2"></em> 销售收款
                        <div className="fr">
                            <span className="ico-close" onClick={(e)=> {e.preventDefault();this.setState({alert2: false})}}></span> 
                        </div>
                    </div>
                        <div className="two-wrap">
                            <div className="pub-table">
                                <ul>
                                    <li className="li1">
                                        <span>收款商场：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <button className="pub-down"></button>
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span></span>
                                        <label className="pub-check1"><input type="checkbox" />是否收全款</label>
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
                                    <li className="li2">
                                        <span>备注：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="two-wrap line">
                            <div className="pub-row-style none pub-no-border">
                                <div className="table-head">
                                    <div className="slide-bar">
                                        <span className="sp50">序号</span>
                                        <span className="sp180">收款方式</span>
                                        <span className="sp120">币种</span>
                                        <span className="sp180">收款金额</span>
                                        <span className="sp220">备注</span>
                                    </div>
                                </div>
                                <div className="table-row a1 pub-half pub-first-center">
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
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="btn-wrap">
                            <a href="/" className="a1" title="" onClick={(e)=> {e.preventDefault();this.setState({alert2: false})}}>退 出</a>
                            <a href="/" className="a2" title="">打 印</a>
                            <a href="/" className="a3" title="">清 空</a>
                            <a href="/" className="a4" title="" onClick={(e)=> {e.preventDefault();this.setState({alert1: true, alert2: false})}}>确 定</a>
                        </div>
                    </div>
                </Move>

                {/* 确认弹窗 */}
                <Move model={this.state.alert1}>
                    <div className="tips-wrapper move-obj">
                        <div className="pub-tit add">
                            <i className="ico-font30"></i>
                            提示
                            <div className="fr">
                                <span className="ico-close" onClick={(e)=> {e.preventDefault();this.setState({alert1: false})}}></span> 
                            </div>
                        </div>
                        <div className="tips-text">
                            <img src="img/33faba806d3a89bc_88x88.png" alt="" />
                            <b>销售订单：XS001658</b>
                            <p>【是否确认收款￥10,000.00元】</p>
                        </div>
                        <div className="tip-btn-group">
                            <a href="/" className="a1">打印</a>
                            <a href="/" className="a2" onClick={(e)=> {e.preventDefault();this.setState({alert1: false})}}>取消</a>
                            <a href="/" className="a3">确定</a>
                        </div>
                    </div>
                </Move>
            </>
        )
    }
}
