import React, { Component, createRef } from 'react'

import Pager from '../../components/Pager';

import WrapHeight from '../../components/WrapHeight';
import Input, { InputPub } from '../../components/Input';


import { offsetTop } from '../../utils';


export default class index extends Component {

    constructor(){
        super()
        this.right_layout = createRef()
        this.state = {
            fields1: '1',
            fields2: '2',
            fields3: '3',
            items1: ['已停售', '未停售', '已停产', '未停产'],
            index1: 0
        }
    }
    
    componentDidMount(){
        let w_hei = window.innerHeight
        let off_top1 = offsetTop(this.right_layout.current)
        this.right_layout.current.style.height = (w_hei - off_top1 - 42) +'px'
    }

    alertHandle = (e) => {
        e.preventDefault()
        console.log('弹窗');
    }

    render() {
        return (
            <div>
                <WrapHeight className="archives-type" bottom={7}>
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
                </WrapHeight>

                <div className="archives-right">
                    <div className="function-wrap">
                        <div className="pub-fun">
                            <a title="" className="a2" href="/" onClick={this.alertHandle}><i className="ico-xin1"></i>新建</a>
                            <a href="/" title="" className="a2"><i className="ico-fu"></i>复制</a>
                            <a title="" className="a2" href="/" onClick={this.alertHandle}><i className="ico-ka"></i>卡片</a>
                            <a href="/" title="" className="a2"><i className="ico-shan"></i>删除</a>
                            <a href="/" title="" className="a2"><i className="ico-ting"></i>停用</a>
                            <a href="/" title="" className="a2"><i className="ico-qi"></i>启用</a>
                            <a href="/" title="" className="a2"><i className="ico-cha"></i>查询</a>
                        </div>	
                        <div className="pub-table">
                            <ul>
                                <InputPub title="货品编码" value={this.state.fields1} model={(v)=>this.setState({fields1: v})}></InputPub>
                                <InputPub title="型号" value={this.state.fields2} model={(v)=>this.setState({fields2: v})}></InputPub>
                                <InputPub title="品牌系列" value={this.state.fields3} model={(v)=>this.setState({fields3: v})}>
                                    <button className="pub-search"></button>
                                </InputPub>
                                <Input items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})}>货品状态</Input>
                            </ul>
                        </div>
                    </div>
                    
                            <div className="clearfix">
                                <div className="pub-row-style">
                                    <div className="table-head"> 
                                        <div className="slide-bar">
                                            <span className="sp60">序号</span>
                                            <span className="sp120">货品编码</span>
                                            <span className="sp120">货品名称</span>
                                            <span className="sp140">型 号</span>
                                            <span className="sp140">尺 寸</span>
                                            <span className="sp60">单 位</span>
                                            <span className="sp140">品 牌</span>
                                            <span className="sp140">系 列</span>
                                            <span className="sp100">采购价</span>				
                                            <span className="sp100">零售价</span>
                                            <span className="sp100">经销价</span>
                                            <span className="sp100">批发价</span>
                                            <span className="sp100">条码标签</span>				
                                            <span className="sp100">颜 色</span>
                                            <span className="sp100">产 地</span>
                                            <span className="sp120">厂 家</span>	   
                                            <span className="sp80">立方数</span>
                                            <span className="sp80">包装数</span>						
                                            <span className="sp120">主 材</span>
                                            <span className="sp120">辅 材</span>
                                            <span className="sp150">描 述</span>
                                            <span className="sp80">是否停售</span>
                                            <span className="sp80">是否停产</span>
                                            <span className="sp80">建立人</span>
                                            <span className="sp100">建立时间</span>
                                            <span className="sp160">备 注</span>			
                                        </div>
                                    </div>
                                <div className="table-row auto-height" ref={this.right_layout}>
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
                                        <li>
                                            <span className="sp60">
                                                <label className="pub-check"><input type="checkbox" />3</label>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="sp60">
                                                <label className="pub-check"><input type="checkbox" />4</label>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="sp60">
                                                <label className="pub-check"><input type="checkbox" />5</label>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="sp60">
                                                <label className="pub-check"><input type="checkbox" />6</label>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="sp60">
                                                <label className="pub-check"><input type="checkbox" />7</label>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                    </div>

                    <Pager></Pager>

                </div>
            </div>
        )
    }
}
