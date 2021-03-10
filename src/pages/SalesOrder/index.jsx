import React, { Component } from 'react'

import Pager from '../../components/Pager';

import {Input, DropDown, Frame, DateTime } from '../../components/UI';

export default class index extends Component {

    constructor(){
        super()
        this.state = {
            items1: ['菜单一', '菜单二', '菜单三', '菜单四'],
            index1: 0,
            
            items2: ['菜单一', '菜单二', '菜单三', '菜单四'],
            index2: 0,

            kehu:'',
            danhao:'',
            bianhao: '',

            field1: '',
            field2: '',
            field3: '',
            field4: '',
            field5: '',
            field6: '',
            field7: '',
            
            check1: true,

            bottom_alert: false,

            time1: '',
            time2: ''
        }
    }

    riDown = () => {
        const { bottom_alert } = this.state
        this.setState({
            bottom_alert: !bottom_alert
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
                        <a href="/" title=""><var className="i6">收款</var></a>
                        <a href="/" title=""><var className="i7">取消</var></a>
                        <a href="/" title=""><var className="i8">全貌</var></a>
                        <a href="/" title=""><var className="i9">送货</var></a>
                        <a href="/" title=""><var className="i10">调拨</var></a>
                        <a href="/" title=""><var className="i11">采购</var></a>
                        <a href="/" title=""><var className="i12">订货</var></a>
                        <a href="/" title=""><var className="i13">完结</var></a>
                        <a href="/" title=""><var className="i14">作废</var></a>
                        <a href="/" title=""><var className="i15">启用</var></a>
                        <a className="last" href="/" title=""><var className="i16">保存</var></a>
                    </div>
                    <div className="pub-table">
                        <ul>

                            <Input title="销售单号" value={this.state.danhao} model={(v)=> this.setState({danhao: v})}>
                                <i className="ico-sp0"></i>
                            </Input>

                            {/* <li>
                                <span>：</span>
                                <div className="input-wrap">
                                    <input type="text" />
                                    
                                </div>
                            </li> */}
                  
                            <DateTime title="销售日期" model={(v)=> this.setState({time1: v})} required></DateTime>
                            
                            <DateTime title="预送日期" model={(v)=> this.setState({time2: v})} required></DateTime>
        
                            <li></li>

                            <Input title="客户" value={this.state.kehu} model={(v)=> this.setState({kehu: v})}>
                                <a className="add" href="/" title="">新增</a>
                                <button className="pub-search"></button>
                            </Input>
              
                            <Input title="客户编码" value={this.state.bianhao} model={(v)=> this.setState({bianhao: v})}></Input>

                            <Input title="手机/电话" value={this.state.field1} model={(v)=> this.setState({field1: v})}></Input>

                            <li>
                                <span></span>
                                <p>
                                    <label className="pub-check1">
                                    <input type="checkbox" checked={this.state.check1} onChange={(e)=> this.setState({check1: e.target.checked})} />是否现场销售</label>
                                </p>
                            </li>

                            <Input width="48%" title="送货地址" value={this.state.field2} model={(v)=> this.setState({field2: v})}></Input>

                            <DropDown index={this.state.index1} items={this.state.items1} onChange={(index)=> this.setState({index1: index})}>销售商场</DropDown>

                            <DropDown type="down" index={this.state.index2} items={this.state.items2} onChange={(index)=> this.setState({index2: index})}>销售员</DropDown>
                            
                            <Input title="合计金额" value={this.state.field3} model={(v)=> this.setState({field3: v})}></Input>

                            <Input title="已收款" value={this.state.field4} model={(v)=> this.setState({field4: v})}></Input>

                            <Input title="未收余款" value={this.state.field5} model={(v)=> this.setState({field5: v})}></Input>

                            <Input title="整单折扣" value={this.state.field6} model={(v)=> this.setState({field6: v})}>
                                <a className="quzheng" href="/" title="">去零取整</a>
                            </Input>


                            <Input width="98%" title="备注" value={this.state.field7} model={(v)=> this.setState({field7: v})}></Input>
                         
                        </ul>
                    </div> 
                </div>
                
                <div className="pub-row-style">
                    <div className="table-head"> 
                        <div className="slide-bar">
                            <span className="sp60"><em className="ico-menu"></em>序号</span>
                            <span className="sp128">图 片</span>
                            <span className="sp120">货品编码</span> 
                            <span className="sp120">货品名称</span> 
                            <span className="sp120">型　号</span> 
                            <span className="sp130">尺　寸</span> 
                            <span className="sp60">单位</span> 
                            <span className="sp80">库存数</span> 
                            <span className="sp120">货品属性</span> 
                            <span className="sp100">单价</span> 
                            <span className="sp80">销售数</span> 
                            <span className="sp80">折扣%</span> 
                            <span className="sp120">金额</span> 
                            <span className="sp200">备　　注</span> 
                            <span className="sp100">已送货数</span>
                        </div>
                    </div>
                    <Frame className="table-row pub-small" bottom={this.state.bottom_alert ? 136 : 45}>
                        <ul>
                            <li>
                                <span className="sp65">
                                    <label className="pub-check"><input type="checkbox" />1</label>
                                </span>
                                <span className="sp128">
                                    <var></var>
                                </span>
                                <span className="sp120">
                                    <var className="edit">46546546465465445</var>
                                </span>
                            </li>
                            <li>
                                <span className="sp65">
                                    <label className="pub-check"><input type="checkbox" />2</label>
                                </span>
                                <span className="sp128">
                                    <var></var>
                                </span>
                                <span className="sp120">
                                    <var className="edit">此处可以编辑</var>
                                </span>
                            </li>
                            <li>
                                <span className="sp65">
                                    <label className="pub-check"><input type="checkbox" />3</label>
                                </span>
                                <span className="sp118">
                                    <var></var>
                                </span>
                            </li>
                            <li>
                                <span className="sp65">
                                    <label className="pub-check"><input type="checkbox" />4</label>
                                </span>
                                <span className="sp118">
                                    <var></var>
                                </span>
                            </li>
                            <li>
                                <span className="sp65">
                                    <label className="pub-check"><input type="checkbox" />5</label>
                                </span>
                                <span className="sp118">
                                    <var></var>
                                </span>
                            </li>
                            <li>
                                <span className="sp65">
                                    <label className="pub-check"><input type="checkbox" />6</label>
                                </span>
                                <span className="sp118">
                                    <var></var>
                                </span>
                            </li>
                            <li className="pub-last-back">
                                <span className="sp65">
                                    <label className="pub-check pub-ml-20"><input type="checkbox" />7</label>
                                </span>
                                <span className="sp200">
                                <b>合计：</b>
                                </span>
                            </li>
                        </ul>
                    </Frame>
                </div>

                <div className="add-wrap">
                    <div className="fl">
                        <a href="/" title=""><var className="i1">增加行</var></a>
                        <a href="/" title=""><var className="i2">插入行</var></a>
                        <a href="/" title=""><var className="i3">删除行</var></a>
                    </div>
                    <div className="cg-next">
                        <a href="/" title=""><var className="a1">首单</var></a>
                        <a href="/" title=""><var className="a2">上一单</var></a>
                        <a href="/" title=""><var className="a3">下一单</var></a>
                        <a href="/" title=""><var className="a4">末单</var></a>
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
                
                {/* 弹窗1 */}
                <div className="pub-shadow pub-one">
                    <div className="sale-alert move-obj">
                        <div className="pub-tit a2">
                            <i className="ico-xuan"></i>
                            选取货品
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
                                    <span>品牌：</span>
                                    <div className="input-wrap">
                                        <input type="text" />
                                        <button className="pub-down"></button>
                                        <div className="pub-drop-down">
                                            <span>菜单一</span>
                                            <span>菜单一</span>
                                            <span>菜单一</span>
                                            <span>菜单一</span>
                                            <span>菜单一</span>
                                        </div>
                                    </div>
                                </li>
                            <li className="li5">
                                    <span>系列：</span>
                                    <div className="input-wrap">
                                        <input type="text" />
                                        <button className="pub-down"></button>
                                        <div className="pub-drop-down">
                                            <span>菜单一</span>
                                            <span>菜单一</span>
                                            <span>菜单一</span>
                                            <span>菜单一</span>
                                            <span>菜单一</span>
                                        </div>
                                    </div>
                                </li>
                            <li className="li9">
                                    <span>货品类别：</span>
                                    <div className="input-wrap">
                                        <input type="text" />
                                        <button className="pub-down"></button>
                                        <div className="pub-drop-down">
                                            <span>内部货品Internal Goods</span>
                                            <span>其他家具Other furniture</span>
                                            <span>综合类others</span>
                                            <span>沙发Sofa</span>
                                            <span>茶几coffee table</span>
                                            <span>电视柜TV cabinet</span>
                                            <span>展示柜/酒柜Showcase wine cabinet</span>
                                            <span>玄关Console</span>
                                            <span>餐桌/吧台Dining table,Bar counter</span>
                                            <span>餐椅/吧椅Side chair,Bar Stool</span>
                                            <span>边柜/边桌Side board</span>
                                            <span>床Bed</span>
                                            <span>床头柜Night Table</span>
                                            <span>床尾凳Bench</span>
                                            <span>休闲椅Other Chairs</span>
                                            <span>妆凳/脚凳Dressing Chair</span>
                                            <span>妆台/妆柜DressingTable,Cabinet</span>
                                            <span>衣柜Clothing Cabinet</span>
                                            <span>斗柜Chest</span>
                                            <span>书桌Writing Desk</span>
                                            <span>书椅Writing Chair</span>
                                            <span>书柜Bookcase</span>
                                            <span>床垫Matress</span>
                                            <span>镜Mirror</span>
                                            <span>架Shelf</span>
                                            <span>灯/烛台Lighting,Candle holder</span>
                                            <span>画/相框Painting,Photo Frame</span>
                                            <span>毯Carpet</span>
                                            <span>抱枕Cushion</span>
                                            <span>床上用品Bedclothes</span>
                                            <span>茶餐用具Plate,Cup,Bowl etc.</span>
                                            <span>玻璃水晶Crystal,Glass</span>
                                            <span>树脂/陶瓷Resin,Ceramics</span>
                                            <span>花/果/树/植Flower,fruit,Tree,Plant</span>
                                            <span>钟表/首饰Clock/Jewelry</span>
                                            <span>公仔/玩具Doll,Toy</span>
                                            <span>工艺精品Artware</span>
                                            <span>窗帘Curtain</span>
                                            <span>屏风Screen</span>
                                            <span>箱包/衣物Bags,Clothing</span>
                                            <span>珠宝/玉器Jewellery,Jade</span>
                                        </div>
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
                                    <span className="sp130">尺 寸</span>
                                    <span className="sp140">品 牌</span>
                                    <span className="sp140">系 列</span>
                                    <span className="sp60">单 位</span>
                                    <span className="sp100">库存数</span>
                                    <span className="sp100">货品属性</span>
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
                    
                        {/* 分页 */}
                        <Pager></Pager>

                    </div>
                </div>
                
                {/* 客户信息2 */}
                <div className="pub-shadow pub-two">
                    <div className="archives-alert move-obj">
                        <div className="pub-tit add">
                            <i className="ico-info"></i>
                            <em className="ico-info"></em> 新增客户
                            <div className="fr">
                                <span className="ico-close"></span>
                            </div>
                        </div>
                        <div className="two-wrap">
                            <div className="pub-table">
                                <ul>
                                    <li className="li1">
                                        <span>客户编码：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <var className="pub-asterisk a1">*</var>
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>客户名称：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <var className="pub-asterisk a1">*</var>
                                        </div>
                                    </li>
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
                                    <li className="li1">
                                        <span>手机：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                            <var className="pub-asterisk a1">*</var>
                                        </div>
                                    </li>
                                    <li className="li1">
                                        <span>电话：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                        </div>
                                    </li>
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
                                        <span>备注：</span>
                                        <div className="input-wrap">
                                            <input type="text" name="" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="btn-wrap">
                            <a href="/" className="a1" title="">退出</a>
                            <a href="/" className="a2" title="">清空</a>
                            <a href="/" className="a4" title="">保存</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
