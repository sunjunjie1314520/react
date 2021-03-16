import React, { Component } from 'react'

import Table, { Box, Li } from '../../components/Table';

import { Input, DropDown, } from '../../components/UI';

import Pager from '../../components/Pager';

export default class index extends Component {

    constructor(props){
        super(props)
        this.state = {

            // 下拉选择项
            items1: ['1222', '333'],
            index1: 0,

            items2:
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
            index2: 19,

            items3: ['1222', '333'],
            index3: 0,

            items4: ['asdf64', '4545'],
            index4: 0,

            // 表单显示内容项
            input1: '',
            input2: '',
            input3: '',
            input4: '',

            // 表单查询内容项
            search1: '',

            // table表头文字列项
            fields1: [
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
                    width: 160,
                    name: '型 号',
                },
                {
                    width: 180,
                    name: '尺 寸',
                },
                {
                    width: 260,
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
                    width: 200,
                    name: '修改前值',
                },
                {
                    width: 200,
                    name: '修改后值',
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
                        批量修改货品
                    <div className="fr">
                            <a className="a2 w100" href="/" title="">增行</a>
                            <a className="a1 w100" href="/" title="">删行</a>
                            <a className="a3 w100" href="/" title="">确定</a>
                            <a className="a4 w100" href="/" title="">查询</a>
                        </div>
                    </h2>
                    <div className="pub-table">
                        <ul>
                            <Input title="品牌" value={this.state.search1} model={(v)=>this.setState({search1: v})}><button className="pub-search"></button></Input>
                            <DropDown items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})}>系列</DropDown>
                            <DropDown items={this.state.items2} index={this.state.index2} onChange={(index)=> this.setState({index2: index})}>货品类别</DropDown>
                            <Input title="货品名称" value={this.state.input1} model={(v)=>this.setState({input1: v})}></Input>

                            <DropDown width="48%" items={this.state.items3} index={this.state.index3} onChange={(index)=> this.setState({index3: index})} required>需要修改项</DropDown>
                            <DropDown width="48%" items={this.state.items4} index={this.state.index4} onChange={(index)=> this.setState({index4: index})} required>统一修改傎</DropDown>
                        </ul>
                    </div>
                </div>

                <Table fields={this.state.fields1} bottom={42}>
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
                </Table>

                {/* 分页 */}
                <Pager></Pager>
            </>
        )
    }
}
