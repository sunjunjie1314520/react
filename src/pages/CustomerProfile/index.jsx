import React, { Component } from 'react'

import { Input, DropDown, Frame, Move } from '../../components/UI';

import Pager from '../../components/Pager';

import Table, {Box} from '../../components/Table';

export default class index extends Component {
    constructor(){
        super()
        this.state = {

            items1: ['下拉菜单1','下拉菜单2','下拉菜单3','下拉菜单4','下拉菜单5'],
            index1: 0,

            items2: ['下拉菜单1','下拉菜单2','下拉菜单3','下拉菜单4','下拉菜单5'],
            index2: 2,

            fields1: '1',
            fields2: '2',


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
                    width: 120,
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
                    width: 150,
                    name: '地址',
                },
                {
                    width: 150,
                    name: '归属商场',
                },
                {
                    width: 150,
                    name: '出生年月',
                },
                {
                    width: 150,
                    name: '客户来源',
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
                    width: 130,
                    name: '职业',
                },
                {
                    width: 130,
                    name: '工作单位',
                },
                {
                    width: 130,
                    name: '楼盘名称',
                },
                {
                    width: 130,
                    name: '户型',
                },
                {
                    width: 130,
                    name: '喜好风格',
                },
                {
                    width: 130,
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
                            <a title="" onClick={(e)=>{e.preventDefault(); this.setState({show1: true})}} className="a2" href="/"><i className="ico-xin1"></i>新建</a>
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
                                <Input placeholder="客户编码" title="客户编码" value={this.state.fields1} required model={(v)=>this.setState({fields1: v})}></Input>
                                <Input placeholder="手机/电话" title="手机/电话" value={this.state.fields2} required model={(v)=>this.setState({fields2: v})}></Input>
                                <DropDown items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})}>归属商场</DropDown>
                                <DropDown items={this.state.items2} index={this.state.index2} onChange={(index)=> this.setState({index2: index})}>建立人</DropDown>
                            </ul>
                        </div>
                    </div>
                    
                    {/* 表格 */}
                    <Table fields={this.state.fields} bottom={42}>
                        {
                            this.state.data.map((v, k)=>{
                                return (
                                    <li key={k} className={v.check ? 'pub-table-back': ''}>
                                        <Box w={this.state.fields[0].width}><label className="pub-check"><input onChange={(e)=>this.checkHandle(e.target.checked, k)} checked={v.check} type="checkbox" />{k}</label></Box>
                                        <Box w={this.state.fields[1].width}>asdf</Box>
                                        <Box w={this.state.fields[2].width}>65464654</Box>
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
                                        <Box w={this.state.fields[17].width}>65464654</Box>
                                        <Box w={this.state.fields[18].width}>65464654</Box>
                                        <Box w={this.state.fields[19].width}>65464654</Box>
                                        <Box w={this.state.fields[20].width}>65464654</Box>
                                    </li>
                                )
                            })
                        }
                    </Table>

                    {/* 分页 */}
                    <Pager></Pager>

                </div>

                {/* 弹窗 */}
                <Move model={this.state.show1}>
                    <div className="archives-alert move-obj">
                        <div className="pub-tit add">
                                <i className="ico-info"></i>
                                <em className="ico-info"></em> 客户信息
                            <div className="fr">
                                <span className="ico-close" onClick={(e)=>{e.preventDefault(); this.setState({show1: false})}}></span> 
                            </div>
                        </div>
                        
                        <div className="two-wrap">
                            <div className="pub-table">
                                <ul>
                                    <Input title="客户编码" width="48%" value={this.state.field1} required model={(v)=>this.setState({field1: v})}></Input>
                                    <Input title="客户名称" width="48%" value={this.state.field1} required model={(v)=>this.setState({field1: v})} required></Input>
          
                                    <li className="li1">
                                        <span>性别：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <button className="pub-down"></button>
                                            <div className="pub-drop-down">
                                                <span>男</span>
                                                <span>女</span>
                                            </div>
                                            <var className="pub-asterisk">*</var>
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>客户类别：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <button className="pub-down"></button>
                                            <div className="pub-drop-down">
                                                <span>潜在客户 Potential Customers</span>
                                                <span>普通客户 Ordinary</span>
                                                <span>大客户 Key Account</span>
                                                <span>设计师 Designer</span>
                                                <span>重要客户 VIP</span>
                                            </div>
                                            <var className="pub-asterisk">*</var>
                                        </div>
                                    </li>

                                    <Input title="手机" width="48%" value={this.state.field1} required model={(v)=>this.setState({field1: v})} required></Input>
                                    <Input title="电话" width="48%" value={this.state.field1} required model={(v)=>this.setState({field1: v})}></Input>

                                    <li className="li2">
                                        <span>地址：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <button className="pub-down"></button>
                                        </div>
                                    </li>
                                    <li className="li2">
                                        <span>归属商场：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <button className="pub-down"></button>
                                            <var className="pub-asterisk">*</var>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="two-wrap">
                            <div className="pub-table">
                                <ul>
                                    <li className="li1">
                                        <span>出生年月：</span>
                                        <div className="input-wrap J-datepicker-day right">
                                            <input type="text" className="c-datepicker-data-input only-date" />
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>客户来源：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <button className="pub-down"></button>
                                        </div>
                                    </li>

                                    <li className="li1">
                                        <span>微信/QQ：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>邮箱：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>职业：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>工作单位：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>楼盘名称：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <button className="pub-down"></button>
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>房型：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <button className="pub-down"></button>
                                            <div className="pub-drop-down">
                                                <span>中小户型</span>
                                                <span>大户型</span>
                                                <span>复式/跃层</span>
                                                <span>别墅/双拼</span>
                                                <span>商业/会所</span>
                                                <span>自建房</span>
                                                <span>其他</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>喜好风格：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <button className="pub-down"></button>
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>性格特征：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <button className="pub-down"></button>
                                        </div>
                                    </li>
                                    <li className="li2">
                                        <span>购置意向：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <button className="pub-down"></button>
                                            <div className="pub-drop-down">
                                                <span>添置家具</span>
                                                <span>更换家具</span>
                                                <span>整屋家具</span>
                                                <span>整屋固装</span>
                                                <span>软装饰品</span>
                                                <span>全套软硬装家具</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="li2">
                                        <span>备注：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="btn-wrap">
                            <a href="/" className="a1" title="">退 出</a>
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