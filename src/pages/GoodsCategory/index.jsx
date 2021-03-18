import React, { Component } from 'react'

// import Swiper from "swiper"

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';


import {Input, Frame, DropDown} from '../../components/UI';


SwiperCore.use([Navigation, Pagination, Autoplay]);

export default class index extends Component {
    constructor(){
        super()
        this.state = {

            // 下拉选择项
            items1: ['客厅', '餐厅', '书房', '卧室', '休闲室', '玄关', '户外', '其他' ],
            index1: 9,

            // 表单显示内容项
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            input6: '',

        }
    }


    render() {
        return (
            <>
                <Frame className="archives-type" bottom={14}>
                    <div className="pub-tit">
                        <i className="ico-type"></i>
                        货品类别
                    </div>
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

                <div className="archives-right">
                    <Frame className="function-wrap color" bottom={14}>
                        <div className="pub-fun">
                            <a href="/" title="" className="a2"><i className="ico-xin1"></i>新建</a>
                            <a href="/" title="" className="a2"><i className="ico-shan"></i>删除</a>
                            <a href="/" title="" className="a2"><i className="ico-ting"></i>停用</a>
                            <a href="/" title="" className="a2"><i className="ico-qi"></i>启用</a>
                            <a href="/" title="" className="a2"><i className="ico-bao"></i>保存</a>
                        </div>
                        <div className="pub-table">
                            <ul>
                                <Input width="30%" title="类别编码" value={this.state.input1} model={(v)=>this.setState({input1: v})}required></Input>
                                <li></li>
                                <li></li>
                                <Input width="30%" title="类别名称" value={this.state.input2} model={(v)=>this.setState({input2: v})}required></Input>
                                <li></li>
                                <li></li>
                                <DropDown width="30%" items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})}>房间分类</DropDown>
                                <li></li>
                                <li></li>
                                <Input width="30%" title="备注" value={this.state.input4} model={(v)=>this.setState({input4: v})}></Input>
                                <li></li>
                                <li></li>
                                <Input width="30%" title="建立人" value={this.state.input5} model={(v)=>this.setState({input5: v})}></Input>
                                <li></li>
                                <li></li>
                                <Input width="30%" title="修改人" value={this.state.input6} model={(v)=>this.setState({input6: v})}></Input>
                            </ul>
                        </div>
                    </Frame>

                </div>

            </>
        )
    }
}
