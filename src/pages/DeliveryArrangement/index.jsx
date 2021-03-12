import React, { Component } from 'react'

import Table, { Box, Li } from '../../components/Table';

import {Input, DropDown, DateTime } from '../../components/UI';

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

            field1:'',
            field2: '',

            time1: '',
            time2: '',

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
                    width: 80,
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
                    name: '本次送货额',
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
                    name: '销售单号',
                },
                {
                    width: 100,
                    name: '客户名称',
                },
                {
                    width: 100,
                    name: '销售员',
                },
                {
                    width: 80,
                    name: '未送数',
                },
                {
                    width: 100,
                    name: '送货日期',
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

                            <Input title="销售单号" width="48%" value={this.state.input14} model={(v)=>this.setState({input14: v})}>
                                <button className="pub-search"></button>
                            </Input>

                            <DropDown width="48%" items={this.state.items2} index={this.state.index2} onChange={(index)=> this.setState({index2: index})}>是否有余款</DropDown>

                            <Input title="客户名称" width="48%" value={this.state.input15} model={(v)=>this.setState({input15: v})}>
                                <button className="pub-search"></button>
                            </Input>

                            <DropDown width="48%" items={this.state.items3} index={this.state.index3} onChange={(index)=> this.setState({index3: index})}>预送期间</DropDown>

                        </ul>
                    </div>
                    <Table fields={this.state.fields2} margin bottom={15}>
                    {
                        this.state.data2.map((v, k)=>{
                            return (
                                <Li key={k} check={v.check}>
                                    <Box w={this.state.fields2[0].width}>
                                        <label className="pub-check">
                                            {k+1}
                                        </label>
                                    </Box>
                                    <Box w={this.state.fields2[1].width}>1111</Box>
                                    <Box w={this.state.fields2[2].width}>2222</Box>
                                    <Box w={this.state.fields2[3].width}>3333</Box>
                                </Li>
                            )
                        })
                    }
                    </Table>
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
                                <Input title="销售单号" width="31%" value={this.state.input1} model={(v)=>this.setState({input1: v})}></Input>
                                <Input title="销售日期" width="31%" value={this.state.input2} model={(v)=>this.setState({input2: v})}></Input>
                                <DateTime width="32%" title="预送日期" required model={(v)=> this.setState({time1: v})}></DateTime>
                                <Input title="客户名称" width="31%" value={this.state.input3} model={(v)=>this.setState({input3: v})}></Input>
                                <Input title="客户编码" width="31%" value={this.state.input4} model={(v)=>this.setState({input4: v})}></Input>
                                <Input title="手机/电话" width="32%" value={this.state.input5} model={(v)=>this.setState({input5: v})}></Input>
                                <Input title="送货地址" width="98%" value={this.state.input6} model={(v)=>this.setState({input6: v})}></Input>
                                <Input title="销售商场" width="31%" value={this.state.input7} model={(v)=>this.setState({input7: v})}></Input>
                                <Input title="销售员" width="31%" value={this.state.input8} model={(v)=>this.setState({input8: v})}></Input>
                                <Input title="未送总数" width="32%" value={this.state.input9} model={(v)=>this.setState({input9: v})}></Input>
                                <Input title="销售金额" width="31%" value={this.state.input10} model={(v)=>this.setState({input10: v})}></Input>
                                <Input title="累计收款" width="31%" value={this.state.input11} model={(v)=>this.setState({input11: v})}></Input>
                                <Input title="还剩余款" width="32%" value={this.state.input12} model={(v)=>this.setState({input12: v})}></Input>
                                <Input title="备注" width="98%" value={this.state.input13} model={(v)=>this.setState({input13: v})}></Input>
                            </ul>
                        </div>
                    </div>

                    <Table fields={this.state.fields1} bottom={16}>
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