import React, { Component } from 'react'

import img1 from '../../style/img/506c0a676c6df69a4a3c7ecbcc827116_162x180.png';
import img2 from '../../style/img/160228070832troqwv.jpg';

import Pager from '../../components/Pager';

import {Input, DropDown, Frame, Move } from '../../components/UI';

export default class index extends Component {
    constructor(){
        super()
        this.state = {

            // 下拉选择项
            items1: ['按货品型号', '按货品价格', '按品牌系列', '按新品上市', '按货品类别', '按货品特价','按房间分类'],
            index1: 4,

            field1:'',
            field2: '',

            // 表单显示内容项
            input1: '',
            input2: '',
            input3: '',

            // 表单查询内容项
            search1: '',

            alert1: false,
        }
    }

    join = (e)=> {
        e.preventDefault();
        e.stopPropagation();
        alert('加入成功')
    }

    render() {
        return (
            <>
                <Frame className="archives-type" bottom={7}>
                    <h2 className="pub-tit">
                        <i className="ico-type"></i>
                        货品类别
                    </h2>
                    <ul>
                        <li><a href="/" title="">00-内部货品Internal Goods</a></li>
                        <li><a href="/" title="">01-其他家具Other furniture</a></li>
                        <li><a href="/" title="">02-综合类others</a></li>
                        <li><a href="/" title="">03-沙发Sofa</a></li>
                        <li><a href="/" title="">04-茶几coffee table</a></li>
                        <li><a href="/" title="">05-电视柜TV cabinet</a></li>
                        <li><a href="/" title="">06-展示柜/酒柜Showcase wine cabinet</a></li>
                        <li><a href="/" title="">07-玄关Console</a></li>
                        <li><a href="/" title="">08-餐桌/吧台Dining table,Bar counter</a></li>
                        <li><a href="/" title="">09-餐椅/吧椅Side chair,Bar Stool</a></li>
                        <li><a href="/" title="">10-边柜/边桌Side board</a></li>
                        <li><a href="/" title="">11-床Bed</a></li>
                        <li><a href="/" title="">12-床头柜Night Table</a></li>
                        <li><a href="/" title="">13-床尾凳Bench</a></li>
                        <li><a href="/" title="">14-休闲椅Other Chairs</a></li>
                        <li><a href="/" title="">15-妆凳/脚凳Dressing Chair</a></li>
                        <li><a href="/" title="">16-妆台/妆柜DressingTable,Cabinet</a></li>
                        <li><a href="/" title="">17-衣柜Clothing Cabinet</a></li>
                        <li><a href="/" title="">18-斗柜Chest</a></li>
                        <li><a href="/" title="">19-书桌Writing Desk</a></li>
                        <li><a href="/" title="">20-书椅Writing Chair</a></li>
                        <li><a href="/" title="">21-书柜Bookcase</a></li>
                        <li><a href="/" title="">22-床垫Matress</a></li>
                        <li><a href="/" title="">23-镜Mirror</a></li>
                        <li><a href="/" title="">24-架Shelf</a></li>
                        <li><a href="/" title="">25-灯/烛台Lighting,Candle holder</a></li>
                        <li><a href="/" title="">26-画/相框Painting,Photo Frame</a></li>
                        <li><a href="/" title="">27-毯Carpet</a></li>
                        <li><a href="/" title="">28-抱枕Cushion</a></li>
                        <li><a href="/" title="">29-床上用品Bedclothes</a></li>
                        <li><a href="/" title="">30-茶餐用具Plate,Cup,Bowl etc.</a></li>
                        <li><a href="/" title="">31-玻璃水晶Crystal,Glass</a></li>
                        <li><a href="/" title="">32-窗帘curtain</a></li>
                        <li><a href="/" title="">33-屏风Screen</a></li>
                        <li><a href="/" title="">34-树脂/陶瓷Resin,Ceramics</a></li>
                        <li><a href="/" title="">35-花/果/树/植Flower,fruit,Tree,Plant</a></li>
                        <li><a href="/" title="">36-钟表/首饰Clock/Jewelry</a></li>
                        <li><a href="/" title="">37-公仔/玩具Doll,Toy</a></li>
                        <li><a href="/" title="">38-工艺精品/Artware</a></li>
                        <li><a href="/" title="">39-箱包/衣物Bags,Clothing</a></li>
                        <li><a href="/" title="">40-珠宝/玉器Jewellery,Jade</a></li>
                    </ul>
                </Frame>

                <div className="picture-right">
                    <div className="picture-guide">
                        <h2 className="pub-tit a3">
                            <i className="ico-menu"></i>
                            图片导购
                            <p>
                                <a className="a1" href="/" title="">意向单<em>0</em></a>
                                <a className="a2" href="/" title="">查询</a>
                            </p>
                        </h2>
                        <div className="pub-table">
                            <ul>
                                <Input title="搜索" width="48%" placeholder="请输入品牌或型号查询" value={this.state.input1} model={(v)=>this.setState({input1: v})}></Input>
                                <Input placeholder="请先选择客户"title="客户名称" required value={this.state.search1} model={(v)=>this.setState({search1: v})}>
                                    <button type="button" className="pub-search"></button>
                                </Input>
                                <DropDown items={this.state.items1} index={this.state.index1} onChange={(index) => this.setState({index1: index})}>排序方式</DropDown>
                            </ul>
                        </div>
                    </div>

                    <div className="clearfix">
                        <Frame className="picture-guide-item" bottom={41}>
                            <ul>
                                <li onClick={(e)=> {e.preventDefault();e.stopPropagation();this.setState({alert1: true})}}>
                                    <div className="pict">
                                        <span className="fl">SALE</span>
                                        <span className="fr">UEW</span>
                                        <img src={img1} alt="" />
                                    </div>
                                    <div className="text">
                                        <p>JNC104568－储物柜</p>
                                        <span>Jonathan Charles</span>
                                        <span className="sp1">1680*660*1820MM</span>
                                        <strong>
                                            <a href="/" title="" onClick={this.join}><var>加入意向单</var></a>
                                            <b>￥42,580.00</b>
                                            <del>￥68,880.00</del>
                                        </strong>
                                    </div>
                                </li>                                
                            </ul>
                        </Frame>
                    </div>

                    {/* 分页器 */}
                    <Pager></Pager>

                </div>

                {/* 图片导购 */}
                <Move model={this.state.alert1}>
                    <div className="picture-alert move-obj">
                        <div className="close">
                            <em className="ico-close" onClick={(e)=> {e.preventDefault();this.setState({alert1: false})}}></em>
                        </div>
                        <div className="pict">
                            <img src={img2} alt="" />
                        </div>
                        <div className="small">
                            <ul>
                                <li>
                                    <img src={img2} alt="" />
                                </li>
                                <li>
                                    <img src={img2} alt="" />
                                </li>
                                <li>
                                    <img src={img2} alt="" />
                                </li>
                                <li>
                                    <img src={img2} alt="" />
                                </li>
                                <li>
                                    <img src={img2} alt="" />
                                </li>
                                <li>
                                    <img src={img2} alt="" />
                                </li>
                                <li>
                                    <img src={img2} alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </Move>
            </>
        )
    }
}
