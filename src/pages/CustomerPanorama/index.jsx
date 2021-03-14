import React, { Component } from 'react'

import { Input } from '../../components/UI';

import Table, { Box, Li } from '../../components/Table';

export default class index extends Component {

    constructor(){
        super()
        this.state = {
            s1: null,
            h1: 420,

            items1: ['张三', '李四', '王五'],
            index1: 0,

            items2: ['产品质量', '服务态度', '送货推迟', '包装问题', '安装技术', '货不对版', '产品设计', '建议', '其他'],
            index2: 0,

            field1: '',
            field2: '',
            field3: '',

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

            time1: '',
            time2: '',

            alert1: false,

            fields1: [
                {
                    width: 50,
                    name: '序号',
                },
                {
                    width: 140,
                    name: '货品编码',
                },
                {
                    width: 120,
                    name: '货品名称',
                },
                {
                    width: 150,
                    name: '型 号',
                },
                {
                    width: 180,
                    name: '尺 寸',
                },
                {
                    width: 120,
                    name: '货品属性',
                },
                {
                    width: 80,
                    name: '单位',
                },
                {
                    width: 80,
                    name: '库存数',
                },
                {
                    width: 100,
                    name: '订货数',
                },
                {
                    width: 100,
                    name: '单价',
                },
                {
                    width: 100,
                    name: '已送数',
                },
                {
                    width: 60,
                    name: '折扣%',
                },
                {
                    width: 120,
                    name: '送货额',
                },
                {
                    width: 260,
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
            ]

        }
    }


    render() {
        return (
            <>
                <div className="panorama-list">
                    <h2 className="pub-tit">
                        <i className="ico-inten2"></i>
                        <var>销售单全貌</var>
                        <div className="seacrh">
                            <input type="text" placeholder="请输入销售单号查询"/>
                            <button type="submit">查询</button>
                        </div>
                    </h2>
                    <div className="tabs">
                        <a href="/" title="">销售详情</a>
                        <a href="/" title="">收款记录</a>
                        <a className="acti" href="/" title="">送货详情</a>
                        <a href="/" title="">退货情况</a>
                        <a href="/" title="">售后服务</a>
                        <a href="/" title="">跟进情况</a>
                    </div>
                    <div className="pub-table">
                        <ul>
                            <Input title="送货单号" value={this.state.input4} model={(v)=>this.setState({input4: v})}></Input>
                            <Input title="销售单号" value={this.state.input4} model={(v)=>this.setState({input4: v})}></Input>
                            <Input title="送货日期" value={this.state.input4} model={(v)=>this.setState({input4: v})}></Input>
                            <Input title="出货仓库" value={this.state.input4} model={(v)=>this.setState({input4: v})}></Input>

                            <Input title="客户名称" value={this.state.input4} model={(v)=>this.setState({input4: v})}></Input>
                            <Input title="客户编码" value={this.state.input4} model={(v)=>this.setState({input4: v})}></Input>
                            <Input title="手机/电话" value={this.state.input4} model={(v)=>this.setState({input4: v})}></Input>
                            <Input title="销售商场" value={this.state.input4} model={(v)=>this.setState({input4: v})}></Input>

                            <Input width="48%" title="送货地址" value={this.state.input7} model={(v)=>this.setState({input7: v})}></Input>
                            <Input title="制单人" value={this.state.input4} model={(v)=>this.setState({input4: v})}></Input>
                            <Input title="销售员" value={this.state.input4} model={(v)=>this.setState({input4: v})}></Input>
                            <Input width="98%" title="备注" value={this.state.input15} model={(v)=>this.setState({input15: v})}></Input>

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
            </>
        )
    }
}
