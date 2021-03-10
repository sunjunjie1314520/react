import React, { Component, createRef } from 'react'

import Table, { Box, Li } from '../../components/Table';

import { Input, DropDown, Frame } from '../../components/UI';

import Pager from '../../components/Pager';

export default class index extends Component {

    constructor(props){
        super(props)
        this.left_layout = createRef()
        this.state = {
            field1: '1',
            field2: '2',
            field3: '3',

            items1: ['内部货品Internal Goods', '其他家具Other furniture'],
            index1: 0,

            items2: ['1222', '333'],
            index2: 0,

            items3: ['asdf64', '4545'],
            index3: 0,

            c1: true,
            c2: false,

            fields1: [
                {
                    width: 60,
                    name: '序号',
                },
                {
                    width: 120,
                    name: '图 片',
                },
                {
                    width: 150,
                    name: '商场/仓库',
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
                    width: 160,
                    name: '品牌系列',
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
                    width: 100,
                    name: '单价',
                },
                {
                    width: 80,
                    name: '销售订货',
                },
                {
                    width: 80,
                    name: '采购订货',
                },
                {
                    width: 120,
                    name: '经销订货',
                },
                {
                    width: 100,
                    name: '待出库数',
                },
                {
                    width: 120,
                    name: '待入库数',
                },
                {
                    width: 80,
                    name: '有效数',
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
                <div className="intention-list">
                    <h2 className="pub-tit">
                    <i className="ico-font3"></i>
                        图片库存表
                    <div className="fr">
                            <a className="a5 w100" href="/" title="">导出</a>
                            <a className="a4 w100" href="/" title="">查询</a>
                        </div>
                    </h2>
                    <div className="pub-table">
                        <ul>
                            <Input title="货品编码" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                            <Input title="品名/型号" value={this.state.field2} model={(v)=>this.setState({field2: v})}></Input>


                            <DropDown items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})}>货品类别</DropDown>

                            <li>
                                <p>
                                    <label className="pub-check1 fl" title="库存为零不显示">
                                        <input type="checkbox" checked={this.state.c1} onChange={(e)=>this.setState({c1: e.target.checked})}/>库存为零不显示
                                    </label>
                                    <label className="pub-check1 fr" title="停产停售不显示">
                                        <input type="checkbox" checked={this.state.c2} onChange={(e)=>this.setState({c2: e.target.checked})}/>停产停售不显示
                                    </label>
                                </p>
                            </li>

                            <Input title="品牌" value={this.state.field3} model={(v)=>this.setState({field3: v})}><button className="pub-search"></button></Input>
                            <DropDown items={this.state.items2} index={this.state.index2} onChange={(index)=> this.setState({index2: index})}>系列</DropDown>
                            <DropDown width="48%" items={this.state.items3} index={this.state.index3} onChange={(index)=> this.setState({index3: index})}>商场/仓库</DropDown>
                        </ul>
                    </div>
                </div>

                <Table fields={this.state.fields1} bottom={42} picture={true}>
        {
            this.state.data1.map((v, k)=>{
                return (
                    <Li key={k} check={v.check}>
                        <Box w={this.state.fields1[0].width}>
                            <label className="pub-check">
                                <input onChange={(e)=>this.checkHandle(e.target.checked, k)} checked={v.check} type="checkbox" />{k+1}
                            </label>
                        </Box>
                        <Box w={this.state.fields1[1].width}><var></var></Box>
                        <Box w={this.state.fields1[2].width}>2222</Box>
                    </Li>
                )
            })
        }
                  </Table>

                {/* 分页 */}
                <Pager></Pager>
            </>
        )
    }
}
