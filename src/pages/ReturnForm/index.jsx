import React, { Component } from 'react'

import Pager from '../../components/Pager';

import Table, { Box, Li } from '../../components/Table';

import {Input, DropDown, DateTime, Move, ContainDown } from '../../components/UI';

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

            items4: ['菜单一', '菜单二', '菜单三', '菜单四'],
            index4: 4,

            items5: ['菜单一', '菜单二', '菜单三', '菜单四'],
            index5: 4,

            items6:
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
            index6: 19,

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
            time4: '',

            // 下拉选择条件项
            down1: 0,
            down2: 1,
            down3: 5,
            down4: 6,
            down5: 0,
            down6: 0,
            down7: 0,
            down8: 1,

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
                    width: 140,
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
                    name: '货品属性',
                },
                {
                    width: 100,
                    name: '单价',
                },
                {
                    width: 80,
                    name: '送货数',
                },
                {
                    width: 80,
                    name: '可退数',
                },
                {
                    width: 100,
                    name: '本次退货数',
                },
                {
                    width: 80,
                    name: '原折扣%',
                },
                {
                    width: 140,
                    name: '金 额',
                },
                {
                    width: 160,
                    name: '备 注',
                },
            ],

            // table表头文字行项
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

            // table表头文字列项2
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
                    width: 140,
                    name: '送货单号',
                },
                {
                    width: 100,
                    name: '送货日期',
                },
                {
                    width: 80,
                    name: '送货数',
                },
                {
                    width: 80,
                    name: '可退数',
                },
                {
                    width: 100,
                    name: '单价',
                },
            ],

            // table表头文字行项2
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
                        <a href="/" title=""><var className="i14">作废</var></a>
                        <a href="/" title=""><var className="i15">启用</var></a>
                        <a href="/" title=""><var className="i16">保存</var></a>
                    </div>
                    <div className="pub-table">
                        <ul>
                        <Input title="退货单号" value={this.state.input1} model={(v)=> this.setState({input1: v})}>
                                <i className="ico-sp0"></i>
                            </Input>

                            {/* <li>
                                <span>：</span>
                                <div className="input-wrap">
                                    <input type="text" />

                                </div>
                            </li> */}

                            <Input title="退货单号" value={this.state.input2} model={(v)=> this.setState({input2: v})}></Input>

                            <DateTime title="退货日期" model={(v)=> this.setState({time2: v})} required></DateTime>

                            <li></li>
                            <Input title="客户名称" value={this.state.input3} model={(v)=> this.setState({input3: v})}></Input>
                            <Input title="手机/电话" value={this.state.input4} model={(v)=> this.setState({input4: v})}></Input>
                            <DropDown index={this.state.index3} items={this.state.items3} onChange={(index)=> this.setState({index3: index})}required>退货人</DropDown>
                            <DropDown index={this.state.index4} items={this.state.items4} onChange={(index)=> this.setState({index4: index})}required>退回仓库</DropDown>
                            <Input width="98%" title="备注" value={this.state.input5} model={(v)=> this.setState({input5: v})}></Input>
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
                            选取送货单货品
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
                                <Input title="送货单号" width="31%" value={this.state.input6} model={(v)=> this.setState({input6: v})} ></Input>
                                <DateTime title="送货日期" width="31%" model={(v)=> this.setState({time3: v})} left={false}>
								    <ContainDown index={this.state.down3} Select={(v)=>this.setState({down3: v})}></ContainDown>
							    </DateTime>

                                <DateTime title="送货日期" width="calc(32% - 6px)" model={(v)=> this.setState({time4: v})} left={false}>
                                    <ContainDown index={this.state.down4} Select={(v)=>this.setState({down3: v})}></ContainDown>
                                </DateTime>
                                <Input title="货品编码" width="31%" value={this.state.input7} model={(v)=> this.setState({input7: v})} ></Input>
                                <Input title="型号" width="31%" value={this.state.input8} model={(v)=> this.setState({input8: v})} ></Input>
                                <Input title="货品名称" width="calc(32% - 6px)" value={this.state.input9} model={(v)=> this.setState({input9: v})} ></Input>
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