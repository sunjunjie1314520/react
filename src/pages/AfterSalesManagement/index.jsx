import React, { Component } from 'react'

import Pager from '../../components/Pager';

import Table, { Box, Li } from '../../components/Table';

import { Input, DropDown, DateTime, ContainDown, Frame, Move } from '../../components/UI';

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

            items3: ['一', '二', '三'],
            index3: 0,

            items4: ['AA', 'BB', 'CC'],
            index4: 0,

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
            input16: '',
            input17: '',
            input18: '',
            input19: '',
            input20: '',

            down1: 0,
            down2: 1,
            down3: 5,
            down4: 6,
            down5: 0,
            down6: 0,
            down7: 0,
            down8: 1,

            time1: '',
            time2: '',
            time3: '',
            time4: '',

            search1: '',
            search2: '',


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

            fields2: [
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
                    width: 160,
                    name: '品牌系列',
                },
                {
                    width: 60,
                    name: '单位',
                },
                {
                    width: 80,
                    name: '货品属性',
                },
                {
                    width: 80,
                    name: '库存数',
                },
                {
                    width: 80,
                    name: '单价',
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
            ],

        }
    }

    // 显示或隐藏 底部表单
        riDown = () => {
            const { bottom_alert } = this.state
            this.setState({
                bottom_alert: !bottom_alert
            })
        }

    // 表格复选框
        checkHandle1(check, k){
            const {data1} = this.state
            data1[k].check = check
            this.setState({
                data1: data1
            })
    }
    // 表格复选框2
        checkHandle2(check, k){
            const {data2} = this.state
            data2[k].check = check
            this.setState({
                data2: data2
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
                                            <label className="pub-check3">
                                                <input onChange={(e)=>this.checkHandle1(e.target.checked, k)} checked={v.check} type="checkbox" />
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
                        <a href="/" title=""><var className="i1" onClick={(e)=> {e.preventDefault();this.setState({alert1: true})}}>增加行</var></a>
                        <a href="/" title=""><var className="i3">删除行</var></a>
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


                {/* 选取货品 */}
                <Move model={this.state.alert1}>
                    <div className="sale-alert move-obj">
                        <div className="pub-tit add">
                            <i className="ico-xuan"></i>
                            选取送货单货品
                            <div className="fr">
                                <span className="ico-close" onClick={(e)=> {e.preventDefault();this.setState({alert1: false})}}></span>
                            </div>
                            <p className="mr">
                                <a className="a1" href="/" title="">选　取</a>
                                <a className="a2" href="/" title="">查　询</a>
                            </p>
                        </div>

                        <div className="pub-table">
                            <ul>
                                <Input title="送货单号" width="31%" value={this.state.input16} model={(v)=> this.setState({input16: v})} ></Input>
                                <DateTime title="送货日期" width="31%" model={(v)=> this.setState({time3: v})} left={false}>
								    <ContainDown index={this.state.down3} Select={(v)=>this.setState({down3: v})}></ContainDown>
							    </DateTime>

                                <DateTime title="送货日期" width="calc(32% - 6px)" model={(v)=> this.setState({time4: v})} left={false}>
                                    <ContainDown index={this.state.down4} Select={(v)=>this.setState({down3: v})}></ContainDown>
                                </DateTime>
                                <Input title="货品编码" width="31%" value={this.state.input17} model={(v)=> this.setState({input17: v})} ></Input>
                                <Input title="型号" width="31%" value={this.state.input18} model={(v)=> this.setState({input18: v})} ></Input>
                                <Input title="货品名称" width="calc(32% - 6px)" value={this.state.input19} model={(v)=> this.setState({input19: v})} ></Input>
                            </ul>
                        </div>

                        {/* 表格 */}

                        <Table fields={this.state.fields2} margin noborder>
                            {
                                this.state.data2.map((v, k)=>{
                                    return (
                                        <Li key={k} check={v.check}>
                                            <Box w={this.state.fields2[0].width}>
                                            <label className="pub-check3">
                                                <input onChange={(e)=>this.checkHandle2(e.target.checked, k)} checked={v.check} type="checkbox" />{k+1}
                                                    </label>
                                            </Box>
                                            <Box w={this.state.fields2[1].width}>111</Box>
                                            <Box w={this.state.fields2[2].width}>2222</Box>
                                        </Li>
                                    )
                                })
                            }

                        </Table>

                        {/* 分页 */}
                        <Pager></Pager>
                    </div>
                </Move>

            </>
        )
    }
}
