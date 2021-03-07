import React, { Component, createRef } from 'react'

import img1 from '../../style/img/a12fd_1092x801.jpg'
import img2 from '../../style/img/506c0a676c6df69a4a3c7ecbcc827116_162x180.png'

import Pager from '../../components/Pager';

import Input from '../../components/Input';

import { offsetTop } from '../../utils';

export default class index extends Component {
    constructor(){
        super()
        this.left_layout = createRef()
        this.right_layout = createRef()
        this.state = {
            down: ['按货品型号', '按货品价格', '按品牌系列', '按新品上市', '按货品类别', '按货品特价'],
            index: 0,
        }
    }
    
    componentDidMount(){
        let w_hei = window.innerHeight
        let off_top = offsetTop(this.left_layout.current)
        this.left_layout.current.style.height = (w_hei - off_top - 15) +'px'
        let off_top1 = offsetTop(this.right_layout.current)
        this.right_layout.current.style.height = (w_hei - off_top1 - 48) +'px'
    }
    
    xmTanUploadImg = () => {
        console.log('54564');
    }

    change = (index) =>{
        this.setState({
            index: index
        })
    }

    render() {
        const {down, index} = this.state
        return (
            <>
                <div className="picture-path">
                    <h2 className="pub-tit">
                        <i className="ico-font48"></i>
                        图片目录
                    </h2>
                    <div className="box" ref={this.left_layout}>
                        <ul>
                            <li>
                                <img src={img1} alt="" />
                            </li>
                            <li>
                            <img src={img1} alt="" />
                            </li>
                            <li>
                                <img src={img1} alt="" />
                            </li>
                            <li>
                                <img src={img1} alt="" />
                            </li>
                            <li>
                                <img src={img1} alt="" />
                            </li>
                            <li>
                                <img src={img1} alt="" />
                            </li>
                            <li>
                                <img src={img1} alt="" />
                            </li>
                            <li>
                                <img src={img1} alt="" />
                            </li>				
                        </ul>
                    </div>
                </div>


                <div className="picture-list">
                    <div className="pub-border-wrap">
                        <h2 className="pub-tit">
                            <i className="ico-font49"></i>
                            图片列表
                            <div className="fr">
                                <a className="a3" href="/" title="">上传</a>
                                <a className="a2 let" href="/">意向单<em>0</em></a>
                                <a className="a4" href="/">查询</a>
                            </div>
                        </h2>
                        <div className="pub-table">
                            <ul>

                                <Input type="search" width="48%" placeholder="请输入品牌、系列查询">搜索</Input>
                                <Input type="default" placeholder="请输入客户手机号">客户手机号</Input>
                                <Input type="down" items={down} index={index} onChange={this.change} >排序方式</Input>
                            </ul>
                        </div>
                    </div>

                    <div className="pict-main pubsingleheight" ref={this.right_layout}>
                        <div className="fl">
                            <i className="ico-font50"></i>
                            <img src={img1} alt="" />
                        </div>
                        <div className="fr">
                            <div className="picture-guide-item">
                                <ul>
                                    <li>
                                        <div className="pict">
                                            <span className="fl">SALE</span>
                                            <span className="fr">UEW</span>
                                            <img src={img2} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>JNC104568－储物柜</p>
                                            <span>Jonathan Charles</span>
                                            <span className="sp1">1680*660*1820MM</span>
                                            <strong>
                                                <a href="/" title=""><var>加入意向单</var></a>
                                                <b>￥42,580.00</b>
                                                <del>￥68,880.00</del>
                                            </strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="pict">
                                            <span className="fl">SALE</span>
                                            <span className="fr">UEW</span>
                                            <img src={img2} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>JNC104568－储物柜</p>
                                            <span>Jonathan Charles</span>
                                            <span className="sp1">1680*660*1820MM</span>
                                            <strong>
                                                <a href="/" title=""><var>加入意向单</var></a>
                                                <b>￥42,580.00</b>
                                                <del>￥68,880.00</del>
                                            </strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="pict">
                                            <span className="fl">SALE</span>
                                            <span className="fr">UEW</span>
                                            <img src={img2} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>JNC104568－储物柜</p>
                                            <span>Jonathan Charles</span>
                                            <span className="sp1">1680*660*1820MM</span>
                                            <strong>
                                                <a href="/" title=""><var>加入意向单</var></a>
                                                <b>￥42,580.00</b>
                                                <del>￥68,880.00</del>
                                            </strong>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <Pager></Pager>
                </div>
                

                <div className="pub-shadow alert-two">

                    <div className="case-alert move-obj">
                        
                        <div className="pub-tit add">
                            <i className="ico-up"></i>
                            上传图片
                            <div className="fr">
                                <span className="ico-close"></span>
                            </div>
                        </div>

                        <div className="wrap">
                            <div className="fl-wrap">
                                <img id="xmTanImg" src="img/" alt="" />
                            </div>

                            <div className="pub-table">
                                <ul>
                                    <li>
                                        <span>上传图片：</span>
                                        <div className="input-wrap">
                                            <input className="in1" type="text" placeholder="图片大小不能超过3M" />
                                            <a className="upload" href="/">浏览<input type="file" onChange={this.xmTanUploadImg} accept="image/*"/></a>
                                            <var className="pub-asterisk">*</var>
                                        </div>
                                    </li>
                                    <li>
                                        <span>关联货品：</span>
                                        <div className="input-wrap">
                                            <input type="text" />
                                            <button className="pub-search"></button>
                                            <var className="pub-asterisk">*</var>
                                        </div>
                                    </li>
                                    <li>
                                        <span>关联货品：</span>
                                        <div className="input-wrap">
                                            <input type="text" />
                                            <button className="pub-search"></button>
                                        </div>
                                    </li>
                                    <li>
                                        <span>关联货品：</span>
                                        <div className="input-wrap">
                                            <input type="text" />
                                            <button className="pub-search"></button>
                                        </div>
                                    </li>
                                    <li>
                                        <span>关联货品：</span>
                                        <div className="input-wrap">
                                            <input type="text" />
                                            <button className="pub-search"></button>
                                        </div>
                                    </li>
                                    <li>
                                        <span>关联货品：</span>
                                        <div className="input-wrap">
                                            <input type="text" />
                                            <button className="pub-search"></button>
                                        </div>
                                    </li>
                                    <li>
                                        <span>关联货品：</span>
                                        <div className="input-wrap">
                                            <input type="text" />
                                            <button className="pub-search"></button>
                                        </div>
                                    </li>
                                    <li>
                                        <span>关联货品：</span>
                                        <div className="input-wrap">
                                            <input type="text" />
                                            <button className="pub-search"></button>
                                        </div>
                                    </li>
                                    <li>
                                        <span>关联货品：</span>
                                        <div className="input-wrap">
                                            <input type="text" />
                                            <button className="pub-search"></button>
                                        </div>
                                    </li>
                                    <li>
                                        <span>上传人：</span>
                                        <div className="input-wrap">
                                            <input type="text" className="a2" />
                                        </div>
                                    </li>
                                    <li>
                                        <span>上传日期：</span>
                                        <div className="input-wrap">
                                            <input type="text" className="a2" />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="btn-wrap">
                            <a href="/" className="a1" title="">退出</a>
                            <a href="/" className="a3" title="">新建</a>
                            <a href="/" className="a5" title="">删除</a>
                            <a href="/" className="a2" title="">清空</a>
                            <a href="/" className="a4" title="">保存</a>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
