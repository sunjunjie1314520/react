import React, { Component, createRef } from 'react'

import Pager from '../../components/Pager';

import { DropDown } from '../../components/UI';

import { offsetTop } from '../../utils';

export default class index extends Component {

    constructor(){
        super()
        this.div1 = createRef()
        this.div2 = createRef()
        this.state = {
            s1: null,
            h1: 420,
            down1: ['产品质量', '服务态度', '送货推迟', '包装问题', '安装技术', '货不对版', '产品设计', '建议', '其他'],
            index1: 0,
            down2: ['骂人', '态度差', '不给钱', '打架'],
            index2: 0,
        }
    }

    componentDidMount(){
        let w_hei = window.innerHeight
        let off_top = offsetTop(this.div1.current)
        let off_top1 = offsetTop(this.div2.current)
        this.setState({
            s1: w_hei - off_top - 37 - 2 - 7,
            h1: w_hei - off_top1 - 45
        })
    }


    change1 = (index) =>{
        this.setState({
            index1: index
        })
    }

    change2 = (index) =>{
        this.setState({
            index2: index
        })
    }

    render() {
        const { h1, s1, down1, index1, down2, index2 } = this.state
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
                        <a href="/" title=""><var className="i30">完结</var></a>
                        <a href="/" title=""><var className="i16">保存</var></a>
                    </div>
                    <div className="pub-table">
                        <ul>
                            <li>
                                <span>服务单号：</span>
                                <div className="input-wrap">
                                    <input type="text" />
                                    <i className="ico-sp0"></i>
                                </div>
                            </li>
                            <li>
                                <span>送货单号：</span>
                                <div className="input-wrap">
                                    <input type="text" className="a2" />
                                </div>
                            </li>
                            <li>
                                <span>送货日期：</span>
                                <div className="input-wrap J-datepicker-day right">
                                <input type="text" className="c-datepicker-data-input only-date" />
                                    <var className="pub-asterisk">*</var>
                                </div>
                            </li>
                            <li></li>
                            <li>
                                <span>客户：</span>
                                <div className="input-wrap">
                                    <input type="text" className="a2" />
                                </div>
                            </li>
                            <li>
                                <span>客户编码：</span>
                                <div className="input-wrap">
                                    <input type="text" className="a2" />
                                </div>
                            </li>
                            <li>
                                <span>手机/电话：</span>
                                <div className="input-wrap">
                                    <input type="text" className="a2" />
                                </div>
                            </li>

                            <DropDown index={index1} type="down" required items={down1} onChange={this.change1}>制单人</DropDown>
                            {/* <li>
                                <span>：</span>
                                <div className="input-wrap">
                                    <div className="pub-down-wrap"><input type="text" />				
                                    <button className="pub-down"></button>
                                    <div className="pub-drop-down">
                                            
                                    </div>
                                    </div>
                                    <var className="pub-asterisk">*</var>
                                </div>
                            </li> */}
                            <li className="li1">
                                <span>送货地址：</span>
                                <div className="input-wrap">
                                    <input type="text" />
                                </div>
                            </li>
                            <li>
                                <span>销售商场：</span>
                                <div className="input-wrap">
                                    <div className="pub-down-wrap"><input type="text" />				
                                </div>
                            </div>
                            </li>
                            <li>
                                <span>销售员：</span>
                                <div className="input-wrap">
                                    <div className="pub-down-wrap"><input type="text" />
                                </div>
                            </div>
                            </li>
                            <li className="li4">
                                <span>诉求内容：</span>
                                <div className="input-wrap">
                                    <div className="pub-down-wrap"><input type="text" />
                                    <var className="pub-asterisk">*</var>
                                </div>
                            </div>
                            </li>


                            <DropDown index={index2} required items={down2} onChange={this.change2}>投诉类别</DropDown>

                            {/* <li>
                                <span>投诉类别：</span>
                                <div className="input-wrap">
                                    <div className="pub-down-wrap"><input type="text" />				
                                    <button className="pub-down"></button>
                                    <div className="pub-drop-down">
                                            <span>产品质量</span>
                                            <span>服务态度</span>
                                            <span>送货推迟</span>
                                            <span>包装问题</span>
                                            <span>安装技术</span>
                                            <span>货不对版</span>
                                            <span>产品设计</span>
                                            <span>建议</span>
                                            <span>其他</span>
                                    </div>
                                    </div>
                                    <var className="pub-asterisk">*</var>
                                </div>
                            </li> */}
                            <li>
                                <span>服务次数：</span>
                                <div className="input-wrap">
                                    <input type="text" className="a2" />
                                </div>
                            </li>
                            <li>
                                <span>服务费用：</span>
                                <div className="input-wrap">
                                    <input type="text" className="a2" />
                                </div>
                            </li>
                            <li>
                                <span>责任部门：</span>
                                <div className="input-wrap">
                                    <input type="text" className="a2" />
                                </div>
                            </li>
                            <li>
                                <span>完成日期：</span>
                                <div className="input-wrap J-datepicker-day right">
                                    <input type="text" className="c-datepicker-data-input only-date" />
                                    <var className="pub-asterisk">*</var>
                                </div>
                            </li>		
                            <li className="li2">
                                    <span>服务说明：</span>
                                    <div className="input-wrap">
                                        <input type="text" />
                                        <var className="pub-asterisk">*</var>
                                    </div>
                            </li>	
                            <li className="li2">
                                <span>备注：</span>
                                <div className="input-wrap">
                                    <input type="text" />
                                </div>
                            </li>
                        </ul>
                    </div> 
                </div>	
                
                <div className="server-dan">
                    <div className="fl-layout">
                        <div className="pub-row-style">
                            <div className="table-head">
                                <div className="slide-bar" style={{minWidth: '1180px'}}>
                                    <span className="sp60">序号</span>
                                    <span className="sp160">货品编码</span>
                                    <span className="sp160">货品名称</span>
                                    <span className="sp150">型　号</span>
                                    <span className="sp150">尺　寸</span>
                                    <span className="sp60">单位</span>
                                    <span className="sp100">送货数</span>
                                    <span className="sp160">详细说明</span>
                                    <span className="sp180">处理结果</span>
                                </div>
                            </div>
                            <div className="table-row auto-height" style={{height: `${s1}px`}} ref={this.div1}>
                                <ul style={{minWidth: '1180px'}}>
                                    <li>
                                        <span className="sp50">
                                            <label className="pub-check"><input type="checkbox" name="" />1</label>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="sp50">
                                            <label className="pub-check"><input type="checkbox" name="" />2</label>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="sp50">
                                            <label className="pub-check"><input type="checkbox" name="" />3</label>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="sp50">
                                            <label className="pub-check"><input type="checkbox" name="" />4</label>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="sp50">
                                            <label className="pub-check"><input type="checkbox" name="" />5</label>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="sp50">
                                            <label className="pub-check"><input type="checkbox" name="" />6</label>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="sp50">
                                            <label className="pub-check"><input type="checkbox" name="" />7</label>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
                            <div className="wrap auto-height" style={{height: `${h1}px`}} ref={this.div2}>
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
                            </div>
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

                    <div className="ri-down">
                        <i className="ico-down"></i>
                    </div>
                </div>
                
                <div className="biao">
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
