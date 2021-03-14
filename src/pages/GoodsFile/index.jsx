import React, { Component } from 'react'

// import Swiper from "swiper"

import SwiperCore, { Navigation, Pagination, Autoplay } from 'react-swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import Pager from '../../components/Pager';

import Table, {Box} from '../../components/Table';

import {Input, DropDown, Frame, Move } from '../../components/UI';

import img1 from '../../style/img/Goods_1199074c-5a08-49d6-834c-ff0b37996442.jpg';
import img2 from '../../style/img/Goods_27caca70-04a0-4659-979e-31459d0c9518.jpg';
import img3 from '../../style/img/Goods_a545c1fc-5f74-4d80-b975-40f3bd23cc7c.jpg';


SwiperCore.use([Navigation, Pagination, Autoplay]);

export default class index extends Component {
    constructor(){
        super()
        this.state = {

            items1: ['已停产','已停售','销售特价','采购特价'],
            index1: 0,

            items2: ['个','张','件','套','组','幅'],
            index2: 0,

            items3: '',
            index3: 0,

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
                                        <Box w={this.state.fields[0].width}><label className="pub-check3">
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
                                        <Input title="货品编码" width="48%" placeholder="编码会自动生成" value={this.state.input4} model={(v)=>this.setState({input4: v})}></Input>
                                        <Input title="品牌系列" width="48%" value={this.state.input3}  required model={(v)=>this.setState({input3: v})}>
                                            <button className="pub-search"></button>
                                        </Input>
                                        <DropDown width="48%" items={this.state.items1} index={this.state.index4} onChange={(index)=> this.setState({index4: index})} required>系列</DropDown>
                                        <DropDown width="48%" items={this.state.items1} index={this.state.index3} onChange={(index)=> this.setState({index3: index})} required>货品类别</DropDown>
                                        <Input title="货品名称" width="98%" value={this.state.input5} model={(v)=>this.setState({input5: v})} required></Input>
                                        <Input title="型号" width="48%" value={this.state.input6} model={(v)=>this.setState({input6: v})} required></Input>
                                        <Input title="尺寸" width="48%" value={this.state.input7} model={(v)=>this.setState({input7: v})}></Input>
                                        <DropDown width="48%" items={this.state.items2} index={this.state.index6} onChange={(index)=> this.setState({index6: index})} required>单位</DropDown>
                                        <Input title="颜色" width="48%" value={this.state.input7} model={(v)=>this.setState({input7: v})}></Input>
                                        <Input title="经销价" width="48%" value={this.state.input8} model={(v)=>this.setState({input8: v})}></Input>
                                        <Input title="零售价" width="48%" value={this.state.input9} model={(v)=>this.setState({input9: v})} ></Input>
                                        <Input title="采购价" width="48%" value={this.state.input10} model={(v)=>this.setState({input10: v})}></Input>
                                        <Input title="批发价" width="48%" value={this.state.input11} model={(v)=>this.setState({input11: v})}></Input>
                                        <Input title="产地" width="48%" value={this.state.input12} model={(v)=>this.setState({input12: v})}></Input>
                                        <Input title="条码标签" width="48%" placeholder="编码会自动生成" value={this.state.input13} model={(v)=>this.setState({input13: v})}></Input>
                                        <Input title="立方数" width="48%" value={this.state.input14} model={(v)=>this.setState({input14: v})}></Input>
                                        <Input title="包装数" width="48%" value={this.state.input15} model={(v)=>this.setState({input15: v})}></Input>
                                        <Input title="主材" width="48%" value={this.state.input16} model={(v)=>this.setState({input16: v})}></Input>
                                        <Input title="辅材" width="48%" value={this.state.input17} model={(v)=>this.setState({input17: v})}></Input>
                                        <Input title="描述" width="98%" value={this.state.input18} model={(v)=>this.setState({input18: v})}></Input>
                                        <Input title="备注" width="98%" value={this.state.input19} model={(v)=>this.setState({input19: v})}></Input>
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
