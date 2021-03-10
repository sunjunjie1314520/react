import React, { Component } from 'react'

import Table, { Box, Li } from '../../components/Table';

import {Input, DropDown, Frame, DateTime } from '../../components/UI';

export default class index extends Component {
    constructor(){
        super()
        this.state = {
            items1: ['深圳红星香蜜湖店', '上海红星真北店', '北京居然之家四环店'],
            index1: 0,

            items2: ['是', '否'],
            index2: 0,

            items3: ['最近一天', '最近三天', '最近一周', '最近半月', '最近一月', '最近三月', '最近半年'],
            index3: 0,

            index4: 0,

            field1:'',
            field2: '',

            t1: '',
            t2: '',

            fields1: [
                {
                    width: 50,
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
                    width: 120,
                    name: '货品属性',
                },
                {
                    width: 60,
                    name: '单位',
                },
                {
                    width: 60,
                    name: '库存数',
                },
                                {
                    width: 60,
                    name: '已送数',
                },
                {
                    width: 80,
                    name: '本次送货',
                },
                {
                    width: 80,
                    name: '单价',
                },
                {
                    width: 60,
                    name: '折扣%',
                },
                {
                    width: 100,
                    name: '金额',
                },
                {
                    width: 120,
                    name: '备注',
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
                {
                    id: 3,
                    bianma: 'xxxxxxxxxxxxx',
                    check: false,
                },
                {
                    id: 4,
                    bianma: 'xxxxxxxxxxxxx',
                    check: false,
                },
                {
                    id: 5,
                    bianma: 'xxxxxxxxxxxxx',
                    check: false,
                },
                {
                    id: 6,
                    bianma: 'xxxxxxxxxxxxx',
                    check: false,
                },
                {
                    id: 7,
                    bianma: 'xxxxxxxxxxxxx',
                    check: false,
                },
                {
                    id: 8,
                    bianma: 'xxxxxxxxxxxxx',
                    check: false,
                },
                {
                    id: 9,
                    bianma: 'xxxxxxxxxxxxx',
                    check: false,
                },
                {
                    id: 10,
                    bianma: 'xxxxxxxxxxxxx',
                    check: false,
                },
            ],

            fields2: [
                {
                    width: 50,
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
                ]
        }
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

                            <DropDown width="98%" items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})}>销售商场</DropDown>

                            <Input title="销售单号" width="48%" value={this.state.field1} model={(v)=>this.setState({field1: v})}>
                                <button className="pub-search"></button>
                            </Input>

                            <DropDown width="48%" items={this.state.items2} index={this.state.index2} onChange={(index)=> this.setState({index2: index})}>是否有余款</DropDown>

                            <Input title="客户名称" width="48%" value={this.state.field2} model={(v)=>this.setState({field2: v})}>
                                <button className="pub-search"></button>
                            </Input>

                            <DropDown width="48%" items={this.state.items3} index={this.state.index3} onChange={(index)=> this.setState({index3: index})}>预送期间</DropDown>

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
                        <Frame className="table-row pub-first-center" bottom={16}>
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
                        </Frame>
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

                                <DropDown width="64%" items={this.state.items1} index={this.state.index4} required onChange={(index)=> this.setState({index4: index})}>出货仓库</DropDown>
                                <li className="li5">
                                    <label className="pub-check1"><input type="checkbox" />是否全部送货</label>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="box4">
                        <div className="pub-table">
                            <ul>
                                <Input title="销售单号" width="31%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                                <Input title="销售日期" width="31%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                                <DateTime width="32%" title="预送日期" required model={(v)=> this.setState({t2: v})}></DateTime>
                                <Input title="客户名称" width="31%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                                <Input title="客户编码" width="31%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                                <Input title="手机/电话" width="32%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                                <Input title="送货地址" width="98%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                                <Input title="销售商场" width="31%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                                <Input title="销售员" width="31%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                                <Input title="未送总数" width="32%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                                <Input title="销售金额" width="31%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                                <Input title="累计收款" width="31%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                                <Input title="还剩余款" width="32%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                                <Input title="备注" width="98%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                            </ul>
                        </div>
                    </div>

                    <Table fields={this.state.fields1} bottom={17}>
                    {
                        this.state.data1.map((v, k)=>{
                            return (
                                <Li key={k} check={v.check}>
                                    <Box w={this.state.fields1[0].width}>
                                        <label className="pub-check">
                                            {k+1}
                                        </label>
                                    </Box>
                                    <Box w={this.state.fields1[1].width}>1111</Box>
                                    <Box w={this.state.fields1[2].width}>2222</Box>
                                    <Box w={this.state.fields1[3].width}>3333</Box>
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
                </div>
            </>
        )
    }
}