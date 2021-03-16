import React, { Component } from 'react'

import Pager from '../../components/Pager';

import Table, { Box, Li } from '../../components/Table';

import {Input, DropDown, DateTime, Move } from '../../components/UI';

export default class index extends Component {

    constructor(){
        super()
        this.state = {

            // 下拉选择项
            items1: ['菜单一', '菜单二', '菜单三', '菜单四'],
            index1: 0,

            items2: ['菜单一', '菜单二', '菜单三', '菜单四'],
            index2: 4,

            items3: ['菜单一', '菜单二', '菜单三', '菜单四'],
            index3: 4,

            items4:
             [
                 '内部货品Internal Goods',
                 '其他家具Other furniture',
                 '综合类others',
                 '沙发Sofa',
                 '茶几coffee table',
                 '电视柜TV cabinet',
                 '展示柜/酒柜Showcase wine cabinet',
                 '玄关Console',
                 '餐桌/吧台Dining table,Bar counter',
                 '餐椅/吧椅Side chair,Bar Stool',
                 '边柜/边桌Side board',
                 '床Bed',
                 '床头柜Night Table',
                 '床尾凳Bench',
                 '休闲椅Other Chairs',
                 '妆凳/脚凳Dressing Chair',
                 '妆台/妆柜DressingTable,Cabinet',
                 '衣柜Clothing Cabinet',
                ],
            index4: 19,

            // 表单显示内容项
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            input6: '',
            input7: '',
            input8: '',
            input9: '',

            // 表单日期项
            time1: '',
            time2: '',
            time3: '',

            // 表单查询内容项
            search1: '',
            search2: '',

            bottom_alert: false,

            // table表头文字列项
            fields1: [
                {
                    width: 60,
                    name: '序号',
                },
                {
                    width: 120,
                    name: '货品编码',
                },
                {
                    width: 120,
                    name: '货品名称',
                },
                {
                    width: 120,
                    name: '型 号',
                },
                {
                    width: 160,
                    name: '尺 寸',
                },
                {
                    width: 60,
                    name: '单位',
                },
                {
                    width: 100,
                    name: '库存数',
                },
                {
                    width: 120,
                    name: '零售价',
                },
                {
                    width: 80,
                    name: '折扣%',
                },
                {
                    width: 140,
                    name: '申请特价',
                },
                {
                    width: 100,
                    name: '申请数量',
                },
                {
                    width: 100,
                    name: '已销售数',
                },
                {
                    width: 100,
                    name: '还剩数',
                },
                {
                    width: 160,
                    name: '备 注',
                },
            ],
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
            ],

            fields2: [
                {
                    width: 60,
                    name: '序号',
                },
                {
                    width: 140,
                    name: '货品编码',
                },
                {
                    width: 140,
                    name: '货品名称',
                },
                {
                    width: 140,
                    name: '型 号',
                },
                {
                    width: 160,
                    name: '尺 寸',
                },
                {
                    width: 180,
                    name: '品牌系列',
                },
                {
                    width: 100,
                    name: '货品属性',
                },
                {
                    width: 60,
                    name: '单位',
                },
                {
                    width: 80,
                    name: '库存数',
                },
                {
                    width: 100,
                    name: '单价',
                },
            ],
            data2: [
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
            ],

        }
    }

    // 显示或隐藏 底部表单
    riDown = () => {
        const { bottom_alert } = this.state
        this.setState({
            bottom_alert: !bottom_alert
        })
    }

    // 表格复选框1
    checkHandle1(check, k){
        const {data1} = this.state
        data1[k].check = check
        this.setState({
            data1: data1
        })
    }

    // 表格复选框2
    checkHandle2(check, k){
        const {data2} = this.state
        data2[k].check = check
        this.setState({
            data2: data2
        })
    }

    // 显示或隐藏 弹窗
    slide = () => {
        const {alert1} = this.state
        this.setState({
            alert1: !alert1
        })
    }


    render() {
        return (
            <>
                <div className="xiaoshow">
                    <div className="item-fun">
                        <a href="/" title=""><var className="i1">打印</var></a>
                        <a href="/" title=""><var className="i2">刷新</var></a>
                        <a href="/" title=""><var className="i3">列表</var></a>
                        <a href="/" title=""><var className="i4">新建</var></a>
                        <a href="/" title=""><var className="i5">删单</var></a>
                        <a href="/" title=""><var className="i18">提交</var></a>
                        <a href="/" title=""><var className="i29">撤回</var></a>
                        <a href="/" title=""><var className="i19">审核</var></a>
                        <a href="/" title=""><var className="i26">弃审</var></a>
                        <a href="/" title=""><var className="i20">查审</var></a>
                        <a href="/" title=""><var className="i13">完结</var></a>
                        <a href="/" title=""><var className="i16">保存</var></a>
                    </div>
                    <div className="pub-table">
                        <ul>
                        <Input title="申请单号" value={this.state.input1} model={(v)=> this.setState({input1: v})}>
                                <i className="ico-sp0"></i>
                            </Input>

                            {/* <li>
                                <span>：</span>
                                <div className="input-wrap">
                                    <input type="text" />

                                </div>
                            </li> */}

                            <DateTime title="申请日期" model={(v)=> this.setState({time1: v})} required></DateTime>

                            <DropDown index={this.state.index1} items={this.state.items1} onChange={(index)=> this.setState({index1: index})}required>申请人</DropDown>

                            <li></li>
                            <DateTime title="开始日期" model={(v)=> this.setState({time2: v})} required></DateTime>

                            <DateTime title="结束日期" model={(v)=> this.setState({time3: v})} required></DateTime>
                            
                            <Input title="申请商场" value={this.state.search1} required model={(v)=>this.setState({search1: v})}>
                                    <button className="pub-search"></button>
                            </Input>
                                <li>
                                    <span></span>
                                        <p>
                                            <label className="pub-check1">
                                            <input type="checkbox" checked={this.state.check1} onChange={(e)=> this.setState({check1: e.target.checked})} />是否所有商场</label>
                                        </p>
                                </li>
                            <Input width="98%" title="申请原因" value={this.state.input2} required model={(v)=> this.setState({input2: v})}></Input>
                            <Input width="98%" title="备注" value={this.state.input3} model={(v)=> this.setState({input3: v})}></Input>
                        </ul>
                    </div>
                </div>

                <Table fields={this.state.fields1} bottom={this.state.bottom_alert ? 136 : 45}>
                    {
                        this.state.data1.map((v, k)=>{
                            return (
                                <Li key={k} check={v.check}>
                                    <Box w={this.state.fields1[0].width}>
                                    <label className="pub-check3">
                                        <input onChange={(e)=>this.checkHandle1(e.target.checked, k)} checked={v.check} type="checkbox" />{k+1}
                                    </label>
                                    </Box>
                                    <Box w={this.state.fields1[1].width}>
                                        11111
                                    </Box>
                                    <Box w={this.state.fields1[2].width}>2222</Box>
                                </Li>
                            )
                        })
                    }
                    <li className="pub-last-back">
                        <Box w={this.state.fields1[0].width}></Box>
                        <Box w={this.state.fields1[1].width}>
                            <b>合计：</b>
                        </Box>
                    </li>
                </Table>


                <div className="add-wrap">
                    <div className="fl">
                        <a href="/" title=""><var className="i1" onClick={(e)=> {e.preventDefault();this.setState({alert1: true})}}>增加行</var></a>
                        <a href="/" title=""><var className="i2">插入行</var></a>
                        <a href="/" title=""><var className="i3">删除行</var></a>
                    </div>
                    <div className="cg-next">
                        <a href="/" title=""><var className="a1">首单</var></a>
                        <a href="/" title=""><var className="a2">上一单</var></a>
                        <a href="/" title=""><var className="a3">下一单</var></a>
                        <a href="/" title=""><var className="a4">末单</var></a>
                    </div>

                    <div className="ri-down" onClick={this.riDown}>
                        <i className={`ico-down ${this.state.bottom_alert ? 'acti': ''}`}></i>
                    </div>
                </div>

                <div className="biao" style={{display: this.state.bottom_alert ? 'block':'none'}}>
                    <ul>
                        <li>
                            <span>制单人：</span>
                            <input type="text" name="" />
                        </li>
                        <li>
                            <span>制单日期：</span>
                            <input type="text" name="" />
                        </li>
                        <li>
                            <span>审核人：</span>
                            <input type="text" name="" />
                        </li>
                        <li>
                            <span>审核日期：</span>
                            <input type="text" name="" />
                        </li>

                        <li>
                            <span>修改人：</span>
                            <input type="text" name="" />
                        </li>
                        <li>
                            <span>修改日期：</span>
                            <input type="text" name="" />
                        </li>
                        <li>
                            <span>完结人：</span>
                            <input type="text" name="" />
                        </li>
                        <li>
                            <span>完结日期：</span>
                            <input type="text" name="" />
                        </li>

                    </ul>
                </div>

                {/* 选取货品 */}
                <Move model={this.state.alert1}>
                    <div className="sale-alert move-obj">
                        <div className="pub-tit add">
                            <i className="ico-xuan"></i>
                            选取货品
                            <div className="fr">
                                <span className="ico-close" onClick={(e)=> {e.preventDefault();this.setState({alert1: false})}}></span>
                            </div>
                            <p className="mr">
                                <a className="a1" href="/" title="">选　取</a>
                                <a className="a2" href="/" title="">查　询</a>
                            </p>
                        </div>

                        <div className="pub-table">
                            <ul>
                                <Input title="货品编码" width="31%" value={this.state.input4} model={(v)=> this.setState({input4: v})} ></Input>
                                <Input title="型号" width="31%" value={this.state.input5} model={(v)=> this.setState({input5: v})} ></Input>
                                <Input title="货品名称" width="calc(32% - 6px)" value={this.state.input6} model={(v)=> this.setState({input6: v})} ></Input>
                                <DropDown width="31%" index={this.state.index2} items={this.state.items2} onChange={(index)=> this.setState({index2: index})}>品牌</DropDown>
                                <DropDown width="31%" index={this.state.index3} items={this.state.items3} onChange={(index)=> this.setState({index3: index})}>系列</DropDown>
                                <DropDown width="calc(32% - 6px)" index={this.state.index4} items={this.state.items4} onChange={(index)=> this.setState({index4: index})}>货品类别</DropDown>
                            </ul>
                        </div>

                        {/* 表格 */}

                        <Table fields={this.state.fields2} margin noborder>
                            {
                                this.state.data2.map((v, k)=>{
                                    return (
                                        <Li key={k} check={v.check}>
                                            <Box w={this.state.fields2[0].width}>
                                            <label className="pub-check3">
                                                <input onChange={(e)=>this.checkHandle2(e.target.checked, k)} checked={v.check} type="checkbox" />{k+1}
                                                    </label>
                                            </Box>
                                            <Box w={this.state.fields2[1].width}>111</Box>
                                            <Box w={this.state.fields2[2].width}>2222</Box>
                                        </Li>
                                    )
                                })
                            }

                        </Table>


                        {/* 分页 */}
                        <Pager></Pager>
                    </div>
                </Move>

            </>
        )
    }
}