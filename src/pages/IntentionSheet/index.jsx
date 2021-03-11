import React, { Component } from 'react'

import Table, { Box, Li } from '../../components/Table';

import { Input, DropDown } from '../../components/UI';

import Pager from '../../components/Pager';

export default class index extends Component {

    constructor(props){
        super(props)
        this.state = {
            field1: '1',
            field2: '2',
            field3: '3',

            items1: ['深圳宝能家居广场', '深圳第三空间'],
            index1: 0,

            items2: ['1222', '333'],
            index2: 0,

            items3: ['最近一周', '最近半月','最近一月','最近三月'],
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
                    width: 140,
                    name: '客户手机号',
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
                    width: 80,
                    name: '库存数',
                },
                {
                    width: 80,
                    name: '单价',
                },
                {
                    width: 80,
                    name: '选购数',
                },
                {
                    width: 100,
                    name: '金额',
                },
                {
                    width: 120,
                    name: '添加日期',
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
                    <i className="ico-font8"></i>
                        客户意向单
                        <div className="fr">
                            <a className="a5 w100" href="/" title="">导出</a>
                            <a className="a2 w100" href="/" title="">导购</a>
                            <a className="a1 w100" href="/" title="">删行</a>
                            <a className="a3 w100" href="/" title="">开单</a>
                            <a className="a4 w100" href="/" title="">查询</a>
                        </div>
                    </h2>
                    <div className="pub-table">
                        <ul>
                            <Input width="23%" placeholder="请输入..."title="客户手机号" value={this.state.cusname} model={(v)=>this.setState({cusname: v})}></Input>
                            <DropDown index={this.state.index1} items={this.state.items1} onChange={(index)=> this.setState({index1: index})}>商场</DropDown>
                            <DropDown index={this.state.index2} items={this.state.items2} onChange={(index)=> this.setState({index2: index})}>制单人</DropDown>
                            <DropDown index={this.state.index3} items={this.state.items3} onChange={(index)=> this.setState({index3: index})}>添加期间</DropDown>
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
                     <li className="pub-last-back">
                        <Box w={this.state.fields1[0].width}></Box>
                        <Box w={this.state.fields1[1].width}>
                            <b>合计：</b>
                        </Box>
                     </li>
                  </Table>


                <Pager></Pager>

            </>
        )
    }
}
