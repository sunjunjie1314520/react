import React, { Component } from 'react'

import Pager from '../../components/Pager';

import Table, { Box, Li } from '../../components/Table';

import {Input, DropDown, Frame, DateTime } from '../../components/UI';

export default class index extends Component {

    constructor(){
        super()
        this.state = {
            items1: ['菜单一', '菜单二', '菜单三', '菜单四'],
            index1: 0,

            field1: '',
            field2: '',
            field3: '',
            field4: '',
            field5: '',
            field6: '',
            field7: '',

            bottom_alert: false,

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
                    name: '采购数',
                },
                {
                    width: 60,
                    name: '折扣%',
                },
                {
                    width: 120,
                    name: '金 额',
                },
                {
                    width: 100,
                    name: '原币价',
                },
                {
                    width: 120,
                    name: '原币金额',
                },
                {
                    width: 80,
                    name: '货品单位',
                },
                {
                    width: 80,
                    name: '已收货数',
                },
                {
                    width: 80,
                    name: '未收货数',
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
            ]
        }
    }
        riDown = () => {
        const { bottom_alert } = this.state
        this.setState({
            bottom_alert: !bottom_alert
        })
    }


    checkHandle(check, k){
        const {data1} = this.state
        data1[k].check = check
        this.setState({
            data1: data1
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
                        <Input title="采购单号" value={this.state.danhao} model={(v)=> this.setState({danhao: v})}>
                                <i className="ico-sp0"></i>
                            </Input>

                            {/* <li>
                                <span>：</span>
                                <div className="input-wrap">
                                    <input type="text" />

                                </div>
                            </li> */}

                            <DateTime title="采购日期" model={(v)=> this.setState({time1: v})} required></DateTime>

                            <DateTime title="交货日期" model={(v)=> this.setState({time2: v})} required></DateTime>

                            <li></li>
                            <DropDown index={this.state.index1} items={this.state.items1} onChange={(index)=> this.setState({index1: index})}required>供应商</DropDown>
                            <DropDown index={this.state.index1} items={this.state.items1} onChange={(index)=> this.setState({index1: index})}required>品牌系列</DropDown>
                            <Input title="联系电话" value={this.state.field3} model={(v)=> this.setState({field3: v})}></Input>
                            <DropDown index={this.state.index1} items={this.state.items1} onChange={(index)=> this.setState({index1: index})}required>采购人</DropDown>
                            <Input width="98%" title="备注" value={this.state.field7} model={(v)=> this.setState({field7: v})}></Input>
                        </ul>
                    </div>
                </div>

                <Table fields={this.state.fields1} bottom={this.state.bottom_alert ? 136 : 45}>
                    {
                        this.state.data1.map((v, k)=>{
                            return (
                                <Li key={k} check={v.check}>
                                    <Box w={this.state.fields1[0].width}>
                                        <label className="pub-check">
                                            <input onChange={(e)=>this.checkHandle(e.target.checked, k)} checked={v.check} type="checkbox" />
                                            {k+1}
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
                        <a href="/" title=""><var className="i1">增加行</var></a>
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

            </>
        )
    }
}