import React, { Component } from 'react'

import Pager from '../../components/Pager';

import Table, { Box, Li } from '../../components/Table';

import { Input, DateTime, ContainDown } from '../../components/UI';

export default class index extends Component {

    constructor(props){
        super(props)
        this.state = {
            field1: '123',
            field2: '456',
            field3: '',

            index1: 0,
            index2: 1,
            index3: 2,
            index4: 3,
            index5: 4,
            index6: 5,
            index7: 6,
            index8: 7,

            fields1: [
                {
                    width: 60,
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
                    name: '销售日期',
                },
                {
                    width: 100,
                    name: '客户名称',
                },
                {
                    width: 100,
                    name: '客户编码',
                },
                {
                    width: 120,
                    name: '订单金额',
                },
                {
                    width: 120,
                    name: '已付金额',
                },
                {
                    width: 120,
                    name: '还剩余款',
                },
                {
                    width: 80,
                    name: '销售员',
                },
                {
                    width: 220,
                    name: '备 注',
                },
                {
                    width: 80,
                    name: '收款人',
                },
                {
                    width: 100,
                    name: '收款日期',
                },
                {
                    width: 80,
                    name: '修改人',
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
                            <Input ltr={true} title="销售单号" value={this.state.field1} model={(v)=>this.setState({field1: v})}>
                                <ContainDown index={this.state.index1} Select={(v)=> this.setState({index1: v})}></ContainDown>
                            </Input>

                            <Input split={true} title="销售商场" value={this.state.field1} model={(v)=>this.setState({field1: v})}>
                                <ContainDown index={this.state.index2} Select={(v)=> this.setState({index2: v})}></ContainDown>
                                <button className="pub-search"></button>
                            </Input>

                            <DateTime title="销售日期" width="23%" model={(v)=> this.setState({t1: v})} left={false}>
								<ContainDown index={this.state.index6} Select={(v)=>this.setState({d1: v})}></ContainDown>
							</DateTime>

                            <DateTime title="销售日期" width="23%" model={(v)=> this.setState({t1: v})} left={false}>
								<ContainDown index={this.state.index7} Select={(v)=>this.setState({d1: v})}></ContainDown>
							</DateTime>

                            <Input ltr={true} title="货品编码" value={this.state.field2} model={(v)=>this.setState({field2: v})}>
                                <ContainDown index={this.state.index5} Select={(v)=> this.setState({index5: v})}></ContainDown>
                            </Input>

                            <Input ltr={true} title="型号" value={this.state.field2} model={(v)=>this.setState({field1: v})}>
                                <ContainDown index={this.state.index3} Select={(v)=> this.setState({index3: v})}></ContainDown>
                            </Input>

                            <Input ltr={true} title="客户编码" value={this.state.field2} model={(v)=>this.setState({field1: v})}>
                                <ContainDown index={this.state.index4} Select={(v)=> this.setState({index4: v})}></ContainDown>
                            </Input>

                            <Input split={true} title="销售员" value={this.state.field3} model={(v)=>this.setState({field1: v})}>
                                <ContainDown index={this.state.index8} Select={(v)=> this.setState({index8: v})}></ContainDown>
                                <button className="pub-search"></button>
                            </Input>
                        </ul>
                    </div>
                </div>

                <Table fields={this.state.fields1} bottom={42}>
                    {
                        this.state.data1.map((v, k)=>{
                            return (
                                <Li key={k} check={v.check}>
                                    <Box w={this.state.fields1[0].width}>
                                        <label className="pub-check">
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

                {/* 分页器 */}
                <Pager></Pager>

            </>
        )
    }
}
