import React, { Component } from 'react'

// import Swiper from "swiper"

// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import Pager from '../../components/Pager';

import Table, {Box} from '../../components/Table';

import {Input, DropDown, Frame, Move } from '../../components/UI';

import img1 from '../../style/img/Goods_1199074c-5a08-49d6-834c-ff0b37996442.jpg';
import img2 from '../../style/img/Goods_27caca70-04a0-4659-979e-31459d0c9518.jpg';
import img3 from '../../style/img/Goods_a545c1fc-5f74-4d80-b975-40f3bd23cc7c.jpg';


// SwiperCore.use([Navigation, Pagination, Autoplay]);

export default class index extends Component {
    constructor(){
        super()
        this.state = {

            items1: ['已停产','已停售','销售特价','采购特价'],
            index1: 0,

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

            show1: false,

            fields: [
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
                    width: 150,
                    name: '尺 寸',
                },
                {
                    width: 60,
                    name: '单 位',
                },
                {
                    width: 140,
                    name: '品牌',
                },
                {
                    width: 140,
                    name: '系列',
                },
                {
                    width: 100,
                    name: '采购价',
                },
                {
                    width: 100,
                    name: '零售价',
                },
                {
                    width: 100,
                    name: '经销价',
                },
                {
                    width: 100,
                    name: '批发价',
                },
                {
                    width: 100,
                    name: '条码标签',
                },
                {
                    width: 80,
                    name: '颜色',
                },
                {
                    width: 80,
                    name: '产地',
                },
                {
                    width: 100,
                    name: '厂家',
                },
                {
                    width: 60,
                    name: '立方数',
                },
                {
                    width: 60,
                    name: '包装数',
                },
                {
                    width: 100,
                    name: '主 材',
                },
                {
                    width: 100,
                    name: '辅 材',
                },
                {
                    width: 150,
                    name: '描 述',
                },
                {
                    width: 60,
                    name: '是否停售',
                },
                {
                    width: 60,
                    name: '是否停产',
                },
                {
                    width: 80,
                    name: '建立人',
                },
                {
                    width: 100,
                    name: '建立时间',
                },
                {
                    width: 100,
                    name: '修改人',
                },
                {
                    width: 150,
                    name: '备 注',
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
            ],

            alert1: true,

            produce: [
                {
                    src: img1
                },
                {
                    src: img2
                },
                {
                    src: img3
                },
                {
                    src: img1
                },
                {
                    src: img2
                },
                {
                    src: img3
                },
            ],
        }
    }

    checkHandle(check, k){
        const {data} = this.state
        data[k].check = check
        this.setState({
            data: data
        })
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <>
                <Frame className="archives-type" bottom={7}>
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
                    <div className="function-wrap">
                        <div className="pub-fun">
                            <a title="" className="a2" href="/" onClick={(e)=> {e.preventDefault();this.setState({alert1: true})}}><i className="ico-xin1"></i>新建</a>
                            <a href="/" title="" className="a2"><i className="ico-fu"></i>复制</a>
                            <a title="" className="a2" href="/"><i className="ico-ka"></i>卡片</a>
                            <a href="/" title="" className="a2"><i className="ico-shan"></i>删除</a>
                            <a href="/" title="" className="a2"><i className="ico-ting"></i>停用</a>
                            <a href="/" title="" className="a2"><i className="ico-qi"></i>启用</a>
                            <a href="/" title="" className="a2"><i className="ico-cha"></i>查询</a>
                        </div>
                        <div className="pub-table">
                            <ul>
                                <Input title="货品编码" value={this.state.input1} model={(v)=>this.setState({input1: v})}></Input>
                                <Input title="型号" value={this.state.input2} model={(v)=>this.setState({input2: v})}></Input>
                                <Input title="品牌系列" value={this.state.input3} model={(v)=>this.setState({input3: v})}>
                                    <button className="pub-search"></button>
                                </Input>
                                <DropDown items={this.state.items1} index={this.state.index0} onChange={(index)=> this.setState({index0: index})}>货品状态</DropDown>
                            </ul>
                        </div>
                    </div>

                    {/* 表格 */}
                    <Table fields={this.state.fields} bottom={43}>
                        {
                            this.state.data.map((v, k)=>{
                                return (
                                    <li key={k} className={v.check ? 'pub-table-back': ''}>
                                        <Box w={this.state.fields[0].width}><label className="pub-check">
                                            <input onChange={(e)=>this.checkHandle(e.target.checked, k)} checked={v.check} type="checkbox" />{k+1}</label>
                                        </Box>
                                        <Box w={this.state.fields[1].width}>111</Box>
                                        <Box w={this.state.fields[2].width}>2222</Box>
                                        <Box w={this.state.fields[3].width}>6546465</Box>
                                        <Box w={this.state.fields[4].width}>6546464</Box>
                                        <Box w={this.state.fields[5].width}>套</Box>
                                        <Box w={this.state.fields[6].width}>asdf</Box>
                                        <Box w={this.state.fields[7].width}>65464654</Box>
                                        <Box w={this.state.fields[8].width}>65464654</Box>
                                        <Box w={this.state.fields[9].width}>65464654</Box>
                                        <Box w={this.state.fields[10].width}>65464654</Box>
                                        <Box w={this.state.fields[11].width}>65464654</Box>
                                     </li>
                                )
                            })
                        }
                    </Table>

                    <Pager></Pager>

                </div>
                
                {/* 弹窗1 */}
                <Move className="pub-one" model={this.state.alert1}>
                    <div className="goods move-obj">
                        <div className="pub-tit add">
                            <i className="ico-font39"></i>
                            货品信息
                            <div className="fr">
                                <span className="ico-close" onClick={(e)=> {e.preventDefault();this.setState({alert1: false})}}></span>
                            </div>
                        </div>
                        <div className="box-one">
                            <div className="fl-wrap">
                                <div className="pub-table">
                                    <ul>
                                        <li className="li1">
                                            <span>货品编码：</span>
                                            <div className="input-wrap">
                                                <input type="text" />
                                            </div>
                                        </li>
                                        <li className="li1">
                                            <span>品牌：</span>
                                            <div className="input-wrap">
                                                <input type="text" />
                                                <button className="pub-search"></button>
                                                <var className="pub-asterisk">*</var>
                                            </div>
                                        </li>
                                        <li className="li1">
                                            <span>系列：</span>
                                            <div className="input-wrap">
                                                <input type="text" />
                                                <button className="pub-down"></button>
                                                <var className="pub-asterisk">*</var>
                                            </div>
                                        </li>
                                        <li className="li1">
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
                                                <var className="pub-asterisk">*</var>
                                            </div>
                                        </li>
                                        <li className="li2">
                                            <span>货品名称：</span>
                                            <div className="input-wrap">
                                                <input type="text" />
                                                <var className="pub-asterisk">*</var>
                                            </div>
                                        </li>
                                        <li className="li1">
                                            <span>型号：</span>
                                            <div className="input-wrap">
                                                <input type="text" />
                                                <var className="pub-asterisk">*</var>
                                            </div>
                                        </li>
                                        <li className="li1">
                                            <span>尺寸：</span>
                                            <div className="input-wrap">
                                                <input type="text" />
                                            </div>
                                        </li>
                                        <li className="li1">
                                            <span>单位：</span>
                                            <div className="input-wrap">
                                                <input type="text" />
                                                <button className="pub-down"></button>
                                                <div className="pub-drop-down">
                                                <span>张</span>
                                                <span>个</span>
                                                <span>件</span>	
                                                <span>套</span>
                                                <span>台</span>
                                                <span>幅</span>
                                                <span>盏</span>
                                                </div>	
                                                <var className="pub-asterisk">*</var>
                                            </div>
                                        </li>
                                        <li className="li1">
                                            <span>颜色：</span>
                                            <div className="input-wrap">
                                                <input type="text" />
                                            </div>
                                        </li>
                                        <li className="li1">
                                            <span>经销价：</span>
                                            <div className="input-wrap">
                                                <input type="text" />
                                            </div>
                                        </li>
                                        <li className="li1">
                                            <span>零售价：</span>
                                            <div className="input-wrap">
                                                <input type="text" />
                                            </div>
                                        </li>
                                        <li className="li1">
                                            <span>采购价：</span>
                                            <div className="input-wrap">
                                                <input type="text" />
                                            </div>
                                        </li>
                                        <li className="li1">
                                            <span>批发价：</span>
                                            <div className="input-wrap">
                                                <input type="text" />
                                            </div>
                                        </li>
                                        <li className="li1">
                                            <span>产地：</span>
                                            <div className="input-wrap">
                                                <input type="text" />
                                            </div>
                                        </li>
                                        <li className="li1">
                                            <span>条码标签：</span>
                                            <div className="input-wrap">
                                                <input type="text" />
                                            </div>
                                        </li>
                                        <li className="li1">
                                            <span>立方数：</span>
                                            <div className="input-wrap">
                                                <input type="text" />
                                            </div>
                                        </li>
                                        <li className="li1">
                                            <span>包装数：</span>
                                            <div className="input-wrap">
                                                <input type="text" />
                                            </div>
                                        </li>
                                        <li className="li1">
                                            <span>主材：</span>
                                            <div className="input-wrap">
                                                <input type="text" />
                                            </div>
                                        </li>
                                        <li className="li1">
                                            <span>辅材：</span>
                                            <div className="input-wrap">
                                                <input type="text" />
                                            </div>
                                        </li>
                                        <li className="li2">
                                            <span>描述：</span>
                                            <div className="input-wrap">
                                                <input type="text" />
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
                            <div className="fr-wrap">
                                <div className="pict">
                                    <img src={img1} alt="" />
                                    <i className="ico-shou"></i>
                                    <i className="ico-chuan"></i>
                                </div>
                                <div className="scroll">
                                    <i className="pos next swiper-button-next"></i>
                                    <Swiper
                                        spaceBetween={9}
                                        slidesPerView={4}
                                        autoplay={{
                                            delay: 3000,
                                            stopOnLastSlide: false,
                                            disableOnInteraction: false
                                        }}
                                        loop
                                        navigation={{nextEl: '.swiper-button-next',}}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={()=> this.setState({alert1: false})}
                                    >
                                        {
                                            this.state.produce.map((item, k)=>{
                                                return (
                                                    <SwiperSlide key={k} >
                                                        {/* <li className="swiper-slide"> */}
                                                            <img src={item.src} alt="" />
                                                        {/* </li> */}
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="set-config">
                            <div className="fl">
                                <label className="pub-check1"><input type="checkbox" />是否费用</label>
                                <label className="pub-check1"><input type="checkbox" />是否停产</label>
                                <label className="pub-check1"><input type="checkbox" />是否停售</label>
                                <label className="pub-check1"><input type="checkbox" />是否无折</label>
                            </div>
                            <div className="fr">
                                <a href="/"><i className="ico-i1"></i>上传</a>
                                <a href="/"><i className="ico-i2"></i>删除</a>
                                <a href="/"><i className="ico-i3"></i>主图</a>
                            </div>
                        </div>
                        <div className="btn-group">
                            <a className="c1" href="/" onClick={(e)=> {e.preventDefault();this.setState({alert1: false})}}>退 出</a>
                            <a className="c2" href="/">上 页</a>
                            <a className="c2" href="/">下 页</a>
                            <a className="c3" href="/">新 建</a>
                            <a className="c4" href="/">保 存</a>
                        </div>
                    </div>
                </Move>
            </>
        )
    }
}
