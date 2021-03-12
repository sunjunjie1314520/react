import React, { Component } from 'react'

import Pager from '../../components/Pager';

import Table, { Box, Li } from '../../components/Table';

import { Input, DropDown, DateTime, Frame } from '../../components/UI';

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
                    width: 60,
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
                    width: 140,
                    name: '型 号',
                },
                {
                    width: 160,
                    name: '尺 寸',
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
                    name: '送货数',
                },
                {
                    width: 140,
                    name: '详细说明',
                },
                {
                    width: 160,
                    name: '处理结果',
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

    slide = () => {
        const {alert1} = this.state
        this.setState({
            alert1: !alert1
        })
    }

    render() {
        const { alert1} = this.state
        return (
            <>
                <div className="xiaoshow">
                    <div className="item-fun">
                        <a href="/" title=""><var className="i1">打印</var></a>
                        <a href="/" title=""><var className="i2">刷新</var></a>
                        <a href="/" title=""><var className="i3">列表</var></a>
                        <a href="/" title=""><var className="i4">新建</var></a>
                        <a href="/" title=""><var className="i5">删单</var></a>
                        <a href="/" title=""><var className="i21">销售</var></a>
                        <a href="/" title=""><var className="i18">提交</var></a>
                        <a href="/" title=""><var className="i29">撤回</var></a>
                        <a href="/" title=""><var className="i19">审核</var></a>
                        <a href="/" title=""><var className="i26">弃审</var></a>
                        <a href="/" title=""><var className="i20">查审</var></a>
                        <a href="/" title=""><var className="i13">完结</var></a>
                        <a href="/" title=""><var className="i16">保存</var></a>
                    </div>
                    <div className="pub-table">
                        <ul>
                            <Input title="服务单号" value={this.state.input1} model={(v)=>this.setState({input1: v})} required><i className="ico-sp0"></i></Input>
                            <Input title="送货单号" value={this.state.input2} model={(v)=>this.setState({input2: v})}></Input>

                            <DateTime title="派单日期" model={(v)=> this.setState({time1: v})} required></DateTime>

                            <li></li>

                            <Input title="客户" value={this.state.input4} model={(v)=>this.setState({input4: v})}></Input>

                            <Input title="客户编码" value={this.state.input5} model={(v)=>this.setState({input5: v})}></Input>

                            <Input title="手机/电话" value={this.state.input6} model={(v)=>this.setState({input7: v})}></Input>

                            <DropDown items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})} required>制单人</DropDown>

                            <Input width="48%" title="送货地址" value={this.state.input7} model={(v)=>this.setState({input7: v})}></Input>

                            <Input title="销售商场" value={this.state.input8} model={(v)=>this.setState({input8: v})}></Input>

                            <Input title="销售员" value={this.state.input9} model={(v)=>this.setState({input9: v})}></Input>

                            <Input width="73%" title="诉求内容" value={this.state.input10} model={(v)=>this.setState({input10: v})} required></Input>

                            <DropDown items={this.state.items2} index={this.state.index2} onChange={(index)=> this.setState({index2: index})} required>投诉类别</DropDown>

                            <Input title="服务次数" value={this.state.input11} model={(v)=>this.setState({input11: v})}></Input>
                            <Input title="服务费用" value={this.state.input12} model={(v)=>this.setState({input12: v})}></Input>
                            <Input title="责任方" value={this.state.input13} model={(v)=>this.setState({input13: v})}></Input>

                            <DateTime title="完成日期" model={(v)=> this.setState({time2: v})} required></DateTime>

                            <Input width="98%" title="服务说明" value={this.state.input14} model={(v)=>this.setState({input14: v})} required></Input>
                            <Input width="98%" title="备注" value={this.state.input15} model={(v)=>this.setState({input15: v})}></Input>

                        </ul>
                    </div>
                </div>

                <div className="server-dan">
                    <div className="fl-layout">
                        <Table fields={this.state.fields1} bottom={this.state.bottom_alert ? 136 : 45}>
                        {
                            this.state.data1.map((v, k)=>{
                                return (
                                    <Li key={k} check={v.check}>
                                        <Box w={this.state.fields1[0].width}>
                                            <label className="pub-check">
                                                <input onChange={(e)=>this.checkHandle(e.target.checked, k)} checked={v.check} type="checkbox" />
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


                    </div>
                    <div className="fr-layout">
                        <div className="pub-row-style">
                            <h2 className="pub-tit">
                                <i className="ico-font48"></i>
                                照片
                                <div className="fr">
                                    <button><span className="ico-del"></span>删除</button>
                                    <button><span className="ico-upload"></span>上传</button>
                                </div>
                            </h2>
                            <Frame className="wrap" bottom={this.state.bottom_alert ? 135 : 44}>
                                <div className="pict">
                                    <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1275774655,4144136426&fm=26&gp=0.jpg" alt=""/>
                                </div>
                                <div className="box">
                                    <ul className="swiper-wrapper">
                                        <li className="swiper-slide">
                                            <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1275774655,4144136426&fm=26&gp=0.jpg" alt=""/>
                                        </li>
                                        <li className="swiper-slide">
                                            <img src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3452531538,3399298632&fm=26&gp=0.jpg" alt=""/>
                                        </li>
                                        <li className="swiper-slide">
                                            <img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3395864961,1527657332&fm=26&gp=0.jpg" alt=""/>
                                        </li>
                                        <li className="swiper-slide">
                                            <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1474266791,210202337&fm=26&gp=0.jpg" alt=""/>
                                        </li>
                                        <li className="swiper-slide">
                                            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1916479015,2637461109&fm=26&gp=0.jpg" alt=""/>
                                        </li>
                                        <li className="swiper-slide">
                                            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1389979529,546157614&fm=26&gp=0.jpg" alt=""/>
                                        </li>
                                    </ul>
                                </div>
                            </Frame>
                        </div>
                    </div>
                </div>

                <div className="add-wrap">
                    <div className="fl">
                        <a href="/" title=""><img src="img/icon50.png" alt=""/><var className="i1">增加行</var></a>
                        {/* <a href="/" title=""><img src="img/icon52.png" alt=""/>扫码增行</a> */}
                        <a href="/" title=""><img src="img/icon53.png" alt=""/><var className="i2">删除行</var></a>
                    </div>
                    <div className="cg-next">
                        <a className="a1" href="/" title=""><var className="a1">首单</var></a>
                        <a className="a1" href="/" title=""><var className="a2">上一单</var></a>
                        <a className="a2" href="/" title=""><var className="a3">下一单</var></a>
                        <a className="a2" href="/" title=""><var className="a4">末单</var></a>
                    </div>

                    <div className="ri-down" onClick={this.riDown}>
                        <i className={`ico-down ${this.state.bottom_alert ? 'acti': ''}`}></i>
                    </div>
                </div>

                <div className="biao" style={{display: this.state.bottom_alert ? 'block':'none'}}>
                    <ul>
                        <li>
                            <span>制单人：</span>
                            <input type="text" name="" />
                        </li>
                        <li>
                            <span>制单日期：</span>
                            <input type="text" name="" />
                        </li>
                        <li>
                            <span>审核人：</span>
                            <input type="text" name="" />
                        </li>
                        <li>
                            <span>审核日期：</span>
                            <input type="text" name="" />
                        </li>

                        <li>
                            <span>修改人：</span>
                            <input type="text" name="" />
                        </li>
                        <li>
                            <span>修改日期：</span>
                            <input type="text" name="" />
                        </li>
                        <li>
                            <span>完结人：</span>
                            <input type="text" name="" />
                        </li>
                        <li>
                            <span>完结日期：</span>
                            <input type="text" name="" />
                        </li>

                    </ul>
                </div>

                {/* 弹窗 */}
                <div className="pub-shadow">
                    <div className="sale-alert">

                        <div className="pub-tit a2">
                            <i className="ico-xuan"></i>
                            选取送货单货品
                            <div className="fr">
                                <span className="ico-close"></span>
                            </div>
                            <p>
                                <a className="a1" href="/" title="">选　取</a>
                                <a className="a2" href="/" title="">查　询</a>
                            </p>
                        </div>

                        <div className="pub-table">
                            <ul>
                                <li className="li5">
                                    <span>货品编码：</span>
                                    <div className="input-wrap">
                                        <input type="text" className="a2" />
                                    </div>
                                </li>
                                <li className="li5">
                                    <span>型号：</span>
                                    <div className="input-wrap">
                                        <input type="text" className="a2" />
                                    </div>
                                </li>
                                <li className="li9">
                                    <span>货品名称：</span>
                                    <div className="input-wrap">
                                        <input type="text" className="a2" />
                                    </div>
                                </li>
                                <li className="li5">
                                    <span>送货单号：</span>
                                    <div className="input-wrap">
                                        <input type="text" className="a2" />
                                    </div>
                                </li>
                                <li className="li5">
                                    <span>送货日期：</span>
                                <div className="input-wrap J-datepicker-day right">
                                    <div className="select-down">
                                        <h2>≥</h2>
                                        <div className="box">
                                            <span>含</span>
                                            <span>=</span>
                                            <span>≠</span>
                                            <span>&gt;</span>
                                            <span>&lt;</span>
                                            <span>≥</span>
                                            <span>≤</span>
                                        </div>
                                    </div>
                                    <input type="text" className="two-input" />
                                </div>
                                </li>
                                <li className="li9">
                                    <span>送货日期：</span>
                                <div className="input-wrap J-datepicker-day right">
                                    <div className="select-down">
                                        <h2>≤</h2>
                                        <div className="box">
                                            <span>含</span>
                                            <span>=</span>
                                            <span>≠</span>
                                            <span>&gt;</span>
                                            <span>&lt;</span>
                                            <span>≥</span>
                                            <span>≤</span>
                                        </div>
                                    </div>
                                    <input type="text" className="two-input" />
                                </div>
                                </li>
                            </ul>
                        </div>

                        {/* 表格 */}
                        <div className="pub-row-style pub-mt-0 pub-no-border">
                        <div className="table-head">
                                <div className="slide-bar">
                                    <span className="sp60">序号</span>
                                    <span className="sp120">货品编码</span>
                                    <span className="sp120">货品名称</span>
                                    <span className="sp120">型 号</span>
                                    <span className="sp140">尺 寸</span>
                                    <span className="sp140">送货单号</span>
                                    <span className="sp120">送货日期</span>
                                    <span className="sp100">销售数</span>
                                    <span className="sp100">已送数</span>
                                    <span className="sp120">单价</span>
                                </div>
                            </div>
                            <div className="table-row">
                                <ul>
                                    <li>
                                        <span className="sp60">
                                            <label className="pub-check"><input type="checkbox" />1</label>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="sp60">
                                            <label className="pub-check"><input type="checkbox" />2</label>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 分页器 */}
                        <Pager></Pager>

                    </div>
                </div>
            </>
        )
    }
}
