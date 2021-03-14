import React, { Component } from 'react'

import img1 from '../../style/img/99094e75cd9e0bf20b699ccc6dae832b_510x360.jpg'
import img2 from '../../style/img/160228070832troqwv.jpg'

import prev from '../../style/img/custom–1.png'
import next from '../../style/img/custom–2.png'

import {Input, DropDown, Frame, Move } from '../../components/UI';

import Pager from '../../components/Pager';

// import Waterfall from '../../components/Waterfall';

export default class index extends Component {

    constructor(){
        super()
        this.state = {
            items1: ['实景拍摄', '效果图', 'VR情景', '样板房', '展示厅', '其他'],
            index1: 0,

            items2: ['小户型', '高层', '大户型', '复式/双拼', '独栋别墅', '样板房', '商业空间', '其他'],
            index2: 0,

            items3: ['按最新', '按城市', '按户型', '按风格', '按点赞', '按收藏'],
            index3: 0,

            input1: '',
            input2: '',
            input3: '',
            input4: '',

            name: '',

            alert1: false,
            alert2: false,
        }
    }
    xmTanUploadImg = (e)=>{
        console.log(e);
    }
    render() {
        return (
            <>
                <div className="customer-case">
                    <h2 className="pub-tit">
                        <i className="ico-font12"></i>
                        客户案例
                        <div className="fr">
                            <a className="a3" href="/" onClick={(e)=> {e.preventDefault();this.setState({alert1: true})}} title="">上传</a>
                            <a className="a2" href="/" onClick={(e)=> {e.preventDefault();this.setState({alert1: true})}} title="">查询</a>
                        </div>
                    </h2>
                    <div className="pub-table">
                        <ul>
                            <DropDown items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})}>案例类型</DropDown>

                            <DropDown items={this.state.items2} index={this.state.index2} onChange={(index)=> this.setState({index2: index})}>户型</DropDown>

                            <Input title="项目名称" value={this.state.name} model={(v)=>this.setState({name: v})}></Input>

                            <DropDown items={this.state.items3} index={this.state.index3} onChange={(index)=> this.setState({index3: index})}>排序方式</DropDown>

                        </ul>
                    </div>
                </div>

                <div className="clearfix">
                    <div className="case-item">
                        <Frame className="auto-height" bottom={41}>
                            <ul>
                                <li onClick={(e)=> {e.preventDefault();this.setState({alert2: true})}}>
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
                                </li>
                            </ul>
                        </Frame>
                    </div>
                </div>

                <Pager></Pager>

                {/* 轮播大图 */}
                <Move model={this.state.alert2}>
                    <div className="case-scroll move-obj">
                        <a className="pos prev" href="/"><img src={prev} alt="上一张" /></a>
                        <a className="pos next" href="/"><img src={next} alt="下一张" /></a>
                        <div className="wrap">
                            <span className="ico-close" onClick={(e)=> {e.preventDefault();this.setState({alert2: false})}}></span>
                            <ul className="swiper-wrapper">
                                <li className="swiper-slide">
                                    <img src={img2} alt="" />
                                </li>
                            </ul>
                            <div className="swiper-pagination"></div>
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
                                    <li>
                                        <span>标题：</span>
                                        <div className="input-wrap">
                                            <input type="text" placeholder="文字介绍在20字以内" />
                                            <var className="pub-asterisk">*</var>
                                        </div>
                                    </li>
                                    <li>
                                        <span>上传图片：</span>
                                        <div className="input-wrap">
                                            <input className="in1" type="text" placeholder="大小不能超过3M" />
                                            <a className="upload" href="/">浏览<input type="file" onChange={this.xmTanUploadImg} accept="image/*"/></a>
                                            <var className="pub-asterisk">*</var>
                                        </div>
                                    </li>
                                    <li>
                                        <span>上传图片：</span>
                                        <div className="input-wrap">
                                            <input className="in1" type="text" placeholder="大小不能超过3M" />
                                            <a className="upload" href="/">浏览<input type="file" onChange={this.xmTanUploadImg} accept="image/*"/></a>
                                        </div>
                                    </li>
                                    <li>
                                        <span>上传图片：</span>
                                        <div className="input-wrap">
                                            <input className="in1" type="text" placeholder="大小不能超过3M" />
                                            <a className="upload" href="/">浏览<input type="file" onChange={this.xmTanUploadImg} accept="image/*"/></a>
                                        </div>
                                    </li>
                                    <li>
                                        <span>上传图片：</span>
                                        <div className="input-wrap">
                                            <input className="in1" type="text" placeholder="大小不能超过3M" />
                                            <a className="upload" href="/">浏览<input type="file" onChange={this.xmTanUploadImg} accept="image/*"/></a>
                                        </div>
                                    </li>
                                    <li>
                                        <span>上传图片：</span>
                                        <div className="input-wrap">
                                            <input className="in1" type="text" placeholder="大小不能超过3M" />
                                            <a className="upload" href="/">浏览<input type="file" onChange={this.xmTanUploadImg} accept="image/*"/></a>
                                        </div>
                                    </li>
                                    <li>
                                        <span>上传图片：</span>
                                        <div className="input-wrap">
                                            <input className="in1" type="text" placeholder="大小不能超过3M" />
                                            <a className="upload" href="/">浏览<input type="file" onChange={this.xmTanUploadImg} accept="image/*"/></a>
                                        </div>
                                    </li>
                                    <li>
                                        <span>案例类型：</span>
                                        <div className="input-wrap">
                                            <input type="text" />
                                            <button className="pub-down"></button>
                                            <div className="pub-drop-down">
                                                <span>实景拍摄</span>
                                                <span>效果图</span>
                                                <span>VR情景</span>
                                                <span>样板房</span>
                                                <span>展示厅</span>
                                                <span>其他</span>
                                            </div>
                                            <var className="pub-asterisk">*</var>
                                        </div>
                                    </li>
                                    <li>
                                        <span>案例风格：</span>
                                        <div className="input-wrap">
                                            <input type="text" />
                                            <button className="pub-down"></button>
                                            <div className="pub-drop-down">
                                                <span>现代/简约</span>
                                                <span>新/中式</span>
                                                <span>新/古典</span>
                                                <span>古典/欧式</span>
                                                <span>乡村/美式</span>
                                                <span>意式/轻奢</span>
                                                <span>北欧</span>
                                                <span>其他</span>
                                            </div>
                                            <var className="pub-asterisk">*</var>
                                        </div>
                                    </li>
                                    <li>
                                        <span>项目名称：</span>
                                        <div className="input-wrap">
                                            <input type="text" className="a2" />
                                            <var className="pub-asterisk">*</var>
                                        </div>
                                    </li>
                                    <li>
                                        <span>户型：</span>
                                        <div className="input-wrap">
                                            <input type="text" />
                                            <button className="pub-down"></button>
                                                <div className="pub-drop-down">
                                                <span>小户型</span>
                                                <span>高层</span>
                                                <span>大户型</span>
                                                <span>复式/双拼</span>
                                                <span>独栋别墅</span>
                                                <span>样板房</span>
                                                <span>商业空间</span>
                                                <span>其他</span>
                                            </div>
                                            <var className="pub-asterisk">*</var>
                                        </div>
                                    </li>
                                    <li>
                                        <span>城市：</span>
                                        <div className="input-wrap">
                                            <input type="text" className="a2" />
                                            <var className="pub-asterisk">*</var>
                                        </div>		
                                    </li>
                                    <li>
                                        <span>上传人：</span>
                                        <div className="input-wrap">
                                            <input type="text" className="a2" />
                                        </div>		
                                    </li>
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
