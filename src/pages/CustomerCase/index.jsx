import React, { Component } from 'react'

import img2 from '../../style/img/160228070832troqwv.jpg'

import prev from '../../style/img/custom–1.png'
import next from '../../style/img/custom–2.png'

import {Input, DropDown, Frame, Move } from '../../components/UI';

import Pager from '../../components/Pager';
import Waterfall from '../../components/Waterfall';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default class index extends Component {

    constructor(){
        super()
        let wid = window.innerWidth;
        this.state = {

            // 下拉选择项
            items1: ['实景拍摄', '效果图', 'VR情景', '样板房', '展示厅', '其他'],
            index1: 0,
            index5: 7,

            items2: ['中小户型', '大户型', '复式/双拼', '独栋别墅', '样板房', '商业空间', '其他'],
            index2: 0,

            items3: ['按最新', '按城市', '按户型', '按风格', '按点赞', '按收藏'],
            index3: 0,

            items4: ['现代/简约', '新/中式', '新/古典', '古典/欧式', '乡村/美式', '意式/轻奢', '北欧', '东南亚','地中海','其他'],
            index4: 11,
            index6: 11,

            // 表单显示内容项
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

            // 表单查询内容项
            search1: '',
            search2: '',

            name: '',

            // 跳窗显示项
            alert1: false,
            alert2: true,

            data: [
                {
                    src: 'http://img.sccnn.com/bimg/338/70540.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/338/70477.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/341/22386.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/338/70432.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/338/70541.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/338/70568.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/340/02119.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/341/22457.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/340/02127.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/340/02126.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/340/02121.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/338/70540.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/338/70477.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/341/22386.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/338/70432.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/338/70541.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/338/70568.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/340/02119.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/341/22457.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/340/02127.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/340/02126.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/340/02121.jpg'
                },
                {
                    src: 'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0824ab18972bd40797d8db1179899e510fb3093a.jpg'
                },
                {
                    src: 'https://sc8.mofengwo.cn/tuku/6372333258101659495921101.jpg'
                },
                {
                    src: 'https://sc8.mofengwo.cn/tuku/6372358446274492571008670.jpg'
                },
                {
                    src: 'https://sc8.mofengwo.cn/tuku/6372333292974485792619349.jpg'
                },
            ],

            col: wid <= 1665 ? 3 : 4,
        }
    }
    xmTanUploadImg = (e)=>{
        console.log(e);
    }

    click = (e) =>{
        e.preventDefault();
        this.setState({alert2: true})
    }

    componentDidMount(){

    }

    render() {
        return (
            <>
                <div className="customer-case">
                    <h2 className="pub-tit">
                        <i className="ico-font12"></i>
                        客户案例
                        <div className="fr">
                            <a className="a3 w100" href="/" onClick={(e)=> {e.preventDefault();this.setState({alert1: true})}} title="">上传</a>
                            <a className="a4 w100" href="/">查询</a>
                        </div>
                    </h2>
                    <div className="pub-table">
                        <ul>
                            <DropDown items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})}>案例类型</DropDown>

                            <DropDown items={this.state.items4} index={this.state.index4} onChange={(index)=> this.setState({index4: index})}>案例风格</DropDown>

                            <Input title="项目名称" value={this.state.input1} model={(v)=>this.setState({input1: v})}></Input>

                            <DropDown items={this.state.items3} index={this.state.index3} onChange={(index)=> this.setState({index3: index})}>排序方式</DropDown>

                        </ul>
                    </div>
                </div>

                <div className="clearfix">
                    <div className="case-item">
                        <Frame bottom={41}>

                            <Waterfall col={this.state.col} margin={15} data={this.state.data} additional={114} click={this.click}></Waterfall>

                            {/* <ul> */}
                                {/* <li onClick={(e)=> {e.preventDefault();this.setState({alert2: true})}}>
                                    <div className="pict">
                                        <p>
                                            <a className="fr" href="/" title=""><i className="ico-cang i1"></i><i className="ico-cang"></i>收藏</a>
                                            <a className="fr" href="/" title=""><i className="ico-zang i1"></i><i className="ico-zang"></i>100082</a>
                                        </p>
                                        <img src={img1} alt="" />
                                    </div>
                                    <div className="text">
                                        <b className="sp1">春暖花开-面朝大海，喧市的心灵港湾</b>
                                        <p>上传人：李嘉霖</p>
                                    </div>
                                    <div className="ctcase">
                                        <a className="c1" href="/">深 圳</a>
                                        <a className="c2" href="/">云景尚峰</a>
                                        <a className="c3" href="/">独栋别墅</a>
                                        <a className="c4" href="/">现代/简约</a>
                                    </div>
                                </li> */}
                            {/* </ul> */}
                        </Frame>
                    </div>
                </div>

                <Pager></Pager>

                {/* 轮播大图 */}
                <Move model={this.state.alert2}>
                    <div className="case-scroll move-obj">
                        <a className="pos prev swiper-button-prev" href="/"><img src={prev} alt="上一张" /></a>
                        <a className="pos next swiper-button-next" href="/"><img src={next} alt="下一张" /></a>
                        <div className="wrap">
                            <span className="ico-close" onClick={(e)=> {e.preventDefault();this.setState({alert2: false})}}></span>
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1}
                                navigation={
                                    {
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                    }
                                }
                                pagination={{ clickable: true }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => this.setState({alert2: false})}
                                >
                                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                            </Swiper>
                            {/* <div className="swiper-pagination"></div> */}
                        </div>
                    </div>
                </Move>

                {/* 上传案例 */}
                <Move className="alert-two" model={this.state.alert1}>
                    <div className="case-alert move-obj">
                        <div className="pub-tit add">
                            <i className="ico-up"></i>
                            上传案例
                            <div className="fr">
                                <span className="ico-close" onClick={(e)=> {e.preventDefault();this.setState({alert1: false})}}></span>
                            </div>
                        </div>

                        <div className="wrap">
                            <div className="fl-wrap">
                                <img id="xmTanImg" src="img/" alt="" />
                            </div>

                            <div className="pub-table">
                                <ul>
                                    <Input title="标题" type="text" placeholder="文字在20字以内" value={this.state.input4} required model={(v)=> this.setState({input4: v})}></Input>
                                    <Input title="项目名称" value={this.state.input5} required model={(v)=> this.setState({input5: v})}></Input>
                                    <DropDown items={this.state.items1} index={this.state.index5} required onChange={(index)=> this.setState({index5: index})}>案例类型</DropDown>
                                    <DropDown items={this.state.items4} index={this.state.index6} required onChange={(index)=> this.setState({index6: index})}>案例风格</DropDown>
                                    <DropDown items={this.state.items2} index={this.state.index2} required onChange={(index)=> this.setState({index2: index})}>户型</DropDown>
                                    <Input title="所在城市" value={this.state.input4} required model={(v)=> this.setState({input4: v})}></Input>
                                    <Input title="上传图片" type="text" placeholder="大小不能超过3M" value={this.state.input5} required model={(v)=> this.setState({input5: v})}>
                                        <a className="upload" href="/" title="">浏览<input type="file" onChange={this.xmTanUploadImg} accept="image/*"/></a>
                                    </Input>
                                    <Input title="上传图片" type="text" placeholder="大小不能超过3M" value={this.state.input6} model={(v)=> this.setState({input6: v})}>
                                        <a className="upload" href="/" title="">浏览<input type="file" onChange={this.xmTanUploadImg} accept="image/*"/></a>
                                    </Input>
                                    <Input title="上传图片" type="text" placeholder="大小不能超过3M" value={this.state.input7} model={(v)=> this.setState({input7: v})}>
                                        <a className="upload" href="/" title="">浏览<input type="file" onChange={this.xmTanUploadImg} accept="image/*"/></a>
                                    </Input>
                                    <Input title="上传图片" type="text" placeholder="大小不能超过3M" value={this.state.input8} model={(v)=> this.setState({input8: v})}>
                                        <a className="upload" href="/" title="">浏览<input type="file" onChange={this.xmTanUploadImg} accept="image/*"/></a>
                                    </Input>
                                    <Input title="上传图片" type="text" placeholder="大小不能超过3M" value={this.state.input9} model={(v)=> this.setState({input9: v})}>
                                        <a className="upload" href="/" title="">浏览<input type="file" onChange={this.xmTanUploadImg} accept="image/*"/></a>
                                    </Input>
                                    <Input title="上传图片" type="text" placeholder="大小不能超过3M" value={this.state.input10} model={(v)=> this.setState({input10: v})}>
                                        <a className="upload" href="/" title="">浏览<input type="file" onChange={this.xmTanUploadImg} accept="image/*"/></a>
                                    </Input>
                                    <Input title="上传人" value={this.state.input11} model={(v)=> this.setState({input11: v})}></Input>
                                </ul>
                            </div>

                        </div>
                        <div className="btn-wrap">
                            <a href="/" className="a1" title="" onClick={(e)=> {e.preventDefault();this.setState({alert1: false})}}>退 出</a>
                            <a href="/" className="a3" title="">新 建</a>
                            <a href="/" className="a5" title="">删 除</a>
                            <a href="/" className="a2" title="">审 核</a>
                            <a href="/" className="a4" title="">保 存</a>
                        </div>
                    </div>
                </Move>
            </>
        )
    }
}
