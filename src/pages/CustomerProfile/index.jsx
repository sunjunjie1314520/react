import React, { Component } from 'react'

import { Input, DropDown, Frame, Move,DateTime } from '../../components/UI';

import Pager from '../../components/Pager';

import Table, {Box} from '../../components/Table';

export default class index extends Component {
    constructor(){
        super()
        this.state = {

            items1: ['下拉菜单1','下拉菜单2','下拉菜单3','下拉菜单4','下拉菜单5'],
            index1: 6,

            items2: ['下拉菜单1','下拉菜单2','下拉菜单3','下拉菜单4','下拉菜单5'],
            index2: 6,

            items3: ['男','女'],
            index3: 2,

            items4: ['中小户型','大户型','复式/跃层','别墅/双拼','商业/会所','自建房','其他'],
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

            fields1: '',
            fields2: '',

            show1: false,

            fields: [
                {
                    width: 60,
                    name: '序号',
                },
                {
                    width: 120,
                    name: '客户编码',
                },
                {
                    width: 120,
                    name: '客户名称',
                },
                {
                    width: 60,
                    name: '性别',
                },
                {
                    width: 120,
                    name: '客户类别',
                },
                {
                    width: 150,
                    name: '手机',
                },
                {
                    width: 150,
                    name: '电话',
                },
                {
                    width: 200,
                    name: '地址',
                },
                {
                    width: 150,
                    name: '归属商场',
                },
                {
                    width: 100,
                    name: '出生日期',
                },
                {
                    width: 120,
                    name: '客户来源',
                },
                {
                    width: 150,
                    name: '微信/QQ',
                },
                {
                    width: 130,
                    name: '邮箱',
                },
                {
                    width: 100,
                    name: '职业',
                },
                {
                    width: 140,
                    name: '工作单位',
                },
                {
                    width: 140,
                    name: '楼盘名称',
                },
                {
                    width: 120,
                    name: '户型',
                },
                {
                    width: 100,
                    name: '喜好风格',
                },
                {
                    width: 100,
                    name: '性格特征',
                },
                {
                    width: 200,
                    name: '备注',
                },
            ],

            data: [
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
            ]
        }
    }
        checkHandle(check, k){
            const {data} = this.state
            data[k].check = check
            this.setState({
                data: data
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
                <Frame className="archives-type" bottom={7}>
                    <h2 className="pub-tit">
                        <i className="ico-type"></i>
                        客户类别
                    </h2>
                    <ul>
                        <li><a href="/" title=""><i className="ico-i0"></i>潜在客户 Potential Customers</a></li>
                        <li><a href="/" title=""><i className="ico-i1"></i>普通客户 Ordinary</a></li>
                        <li><a href="/" title=""><i className="ico-i2"></i>大客户 Key Account</a></li>
                        <li><a href="/" title=""><i className="ico-i3"></i>设计师 Designer</a></li>
                        <li><a href="/" title=""><i className="ico-i4"></i>重要客户 VIP</a></li>
                    </ul>
                </Frame>

                <div className="archives-right">
                    <div className="function-wrap">
                        <div className="pub-fun">
                            <a title="" onClick={(e)=>{e.preventDefault(); this.setState({alert1: true})}} className="a2" href="/"><i className="ico-xin1"></i>新建</a>
                            <a href="/" title="" className="a2"><i className="ico-fu"></i>复制</a>
                            <a title="" className="a2" href="/"><i className="ico-ka"></i>卡片</a>
                            <a href="/" title="" className="a2"><i className="ico-quan"></i>全貌</a>
                            <a href="/" title="" className="a2"><i className="ico-shan"></i>删除</a>
                            <a href="/" title="" className="a2"><i className="ico-ting"></i>停用</a>
                            <a href="/" title="" className="a2"><i className="ico-qi"></i>启用</a>
                            <a href="/" title="" className="a2"><i className="ico-cha"></i>查询</a>
                        </div>
                        <div className="pub-table">
                            <ul>
                                <Input title="客户编码" value={this.state.input1} model={(v)=>this.setState({input1: v})}></Input>
                                <Input title="手机/电话" value={this.state.input2} model={(v)=>this.setState({input2: v})}></Input>

                                <DropDown items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})}>归属商场</DropDown>
                                <DropDown items={this.state.items2} index={this.state.index2} onChange={(index)=> this.setState({index2: index})}>建立人</DropDown>
                            </ul>
                        </div>
                    </div>

                    {/* 表格 */}
                    <Table fields={this.state.fields} bottom={43}>
                        {
                            this.state.data.map((v, k)=>{
                                return (
                                    <li key={k} className={v.check ? 'pub-table-back': ''}>
                                        <Box w={this.state.fields[0].width}><label className="pub-check3">
                                            <input onChange={(e)=>this.checkHandle(e.target.checked, k)} checked={v.check} type="checkbox" />{k+1}</label>
                                        </Box>
                                        <Box w={this.state.fields[1].width}>111</Box>
                                        <Box w={this.state.fields[2].width}>2222</Box>
                                        <Box w={this.state.fields[3].width}>65464654</Box>
                                        <Box w={this.state.fields[4].width}>65464654</Box>
                                        <Box w={this.state.fields[5].width}>65464654</Box>
                                        <Box w={this.state.fields[6].width}>asdf</Box>
                                        <Box w={this.state.fields[7].width}>65464654</Box>
                                        <Box w={this.state.fields[8].width}>65464654</Box>
                                        <Box w={this.state.fields[9].width}>65464654</Box>
                                        <Box w={this.state.fields[10].width}>65464654</Box>
                                        <Box w={this.state.fields[11].width}>65464654</Box>
                                        <Box w={this.state.fields[12].width}>65464654</Box>
                                        <Box w={this.state.fields[13].width}>65464654</Box>
                                        <Box w={this.state.fields[14].width}>65464654</Box>
                                        <Box w={this.state.fields[15].width}>65464654</Box>
                                        <Box w={this.state.fields[16].width}>65464654</Box>
                                    </li>
                                )
                            })
                        }
                    </Table>

                    {/* 分页 */}
                    <Pager></Pager>

                </div>

                {/* 弹窗 */}
                <Move model={this.state.alert1}>
                    <div className="archives-alert move-obj">
                        <div className="pub-tit add">
                                <i className="ico-info"></i>
                                <em className="ico-info"></em> 客户信息
                            <div className="fr">
                                <span className="ico-close" onClick={(e)=>{e.preventDefault(); this.setState({show1: false})}}></span>
                            </div>
                        </div>
                        <div className="two-wrap line">
                            <div className="pub-table">
                                <ul>
                                    <Input title="客户编码" width="48%" placeholder="编码会自动生成" value={this.state.input3} model={(v)=>this.setState({input3: v})}></Input>
                                    <Input title="客户名称" width="48%" value={this.state.input4} model={(v)=>this.setState({input4: v})} required></Input>
                                    <DropDown width="48%" items={this.state.items3} index={this.state.index3} onChange={(index)=> this.setState({index3: index})} required>性别</DropDown>
                                    <DropDown width="48%" items={this.state.items1} index={this.state.index4} onChange={(index)=> this.setState({index4: index})} required>客户类别</DropDown>
                                    <Input title="手机" width="48%" value={this.state.input5} model={(v)=>this.setState({input5: v})} required></Input>
                                    <Input title="电话" width="48%" value={this.state.input6} model={(v)=>this.setState({input6: v})}></Input>
                                    <Input title="地址" width="98%" value={this.state.input7} model={(v)=>this.setState({input7: v})}></Input>
                                    <DropDown width="98%" items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})} required>归属商场</DropDown>
                                </ul>
                            </div>
                        </div>

                        <div className="two-wrap line">
                            <div className="pub-table">
                                <ul>
                                    <DateTime width="48%" title="出生日期" model={(v)=> this.setState({time1: v})} ></DateTime>
                                    <DropDown width="48%" items={this.state.items1} index={this.state.index5} onChange={(index)=> this.setState({index5: index})}>客户来源</DropDown>
                                    <Input title="微信/QQ" width="48%" value={this.state.input8} model={(v)=>this.setState({input8: v})}></Input>
                                    <Input title="邮箱" width="48%" value={this.state.input9} model={(v)=>this.setState({input9: v})}></Input>
                                    <Input title="职业" width="48%" value={this.state.input10} model={(v)=>this.setState({input10: v})}></Input>
                                    <Input title="工作单位" width="48%" value={this.state.input11} model={(v)=>this.setState({input11: v})}></Input>
                                    <Input title="楼盘名称" width="48%" value={this.state.input12} model={(v)=>this.setState({input12: v})}></Input>
                                    <DropDown width="48%" items={this.state.items4} index={this.state.index4} onChange={(index)=> this.setState({index4: index})}>房型</DropDown>
                                    <DropDown width="48%" items={this.state.items1} index={this.state.index6} onChange={(index)=> this.setState({index6: index})}>喜好风格</DropDown>
                                    <DropDown width="48%" items={this.state.items1} index={this.state.index7} onChange={(index)=> this.setState({index7: index})}>性格特征</DropDown>
                                    <DropDown width="98%" items={this.state.items1} index={this.state.index8} onChange={(index)=> this.setState({index8: index})}>购置意向</DropDown>
                                    <Input title="备注" width="98%" value={this.state.input13} model={(v)=>this.setState({input13: v})}></Input>
                                </ul>
                            </div>
                        </div>
                        <div className="btn-wrap">
                            <a href="/" className="a1" title="" onClick={(e)=> {e.preventDefault();this.setState({alert1: false})}}>退 出</a>
                            <a href="/" className="a2" title="">上 页</a>
                            <a href="/" className="a2" title="">下 页</a>
                            <a href="/" className="a3" title="">新 建</a>
                            <a href="/" className="a4" title="">保 存</a>
                        </div>
                    </div>
                </Move>
            </>
        )
    }
}