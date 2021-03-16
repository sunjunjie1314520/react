import React, { Component } from 'react'

import Pager from '../../components/Pager';

import Table, { Box, Li } from '../../components/Table';

import { Input, DateTime, ContainDown } from '../../components/UI';

export default class index extends Component {

    constructor(props){
        super(props)
        this.state = {

            // 表单显示内容项
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',

            // 下拉选择项
            index1: 0,
            items1:['第一个菜单', '2'],

            // 表单查询条件项
            down1: 0,
            down2: 1,
            down3: 5,
            down4: 6,
            down5: 0,
            down6: 0,
            down7: 0,
            down8: 1,

            // 表单查询内容项
            search1: '',
            search2: '',

            // 表单日期项
            time1: '',
            time2: '',

            // table表头文字列项
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
            // table数据源项
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
                            <Input ltr={true} title="销售单号" value={this.state.input1} model={(v)=>this.setState({input1: v})}>
                                <ContainDown index={this.state.down1} Select={(v)=> this.setState({down1: v})}></ContainDown>
                            </Input>

                            <Input split={true} title="销售商场" value={this.state.search1} model={(v)=>this.setState({search1: v})}>
                                <ContainDown index={this.state.down2} Select={(v)=> this.setState({down2: v})}></ContainDown>
                                <button className="pub-search"></button>
                            </Input>

                            <DateTime title="销售日期" width="23%" model={(v)=> this.setState({time1: v})} left={false}>
								<ContainDown index={this.state.down3} Select={(v)=>this.setState({down3: v})}></ContainDown>
							</DateTime>

                            <DateTime title="销售日期" width="23%" model={(v)=> this.setState({time2: v})} left={false}>
								<ContainDown index={this.state.down4} Select={(v)=>this.setState({down3: v})}></ContainDown>
							</DateTime>

                            <Input ltr={true} title="货品编码" value={this.state.input2} model={(v)=>this.setState({input2: v})}>
                                <ContainDown index={this.state.down5} Select={(v)=> this.setState({down5: v})}></ContainDown>
                            </Input>

                            <Input ltr={true} title="型号" value={this.state.input3} model={(v)=>this.setState({input3: v})}>
                                <ContainDown index={this.state.down6} Select={(v)=> this.setState({down6: v})}></ContainDown>
                            </Input>

                            <Input ltr={true} title="客户编码" value={this.state.input4} model={(v)=>this.setState({input4: v})}>
                                <ContainDown index={this.state.down7} Select={(v)=> this.setState({down7: v})}></ContainDown>
                            </Input>

                            <Input split={true} title="销售员" value={this.state.search2} model={(v)=>this.setState({search2: v})}>
                                <ContainDown index={this.state.down8} Select={(v)=> this.setState({down8: v})}></ContainDown>
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
