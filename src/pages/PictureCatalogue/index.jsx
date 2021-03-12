import React, { Component } from 'react'

import img1 from '../../style/img/a12fd_1092x801.jpg'
import img2 from '../../style/img/506c0a676c6df69a4a3c7ecbcc827116_162x180.png'

import Pager from '../../components/Pager';

import { Input, Frame, DropDown, Move } from '../../components/UI';

export default class index extends Component {
    constructor(){
        super()
        this.state = {
            fields1: '1',
            fields2: '2',

            items1: ['按货品型号', '按货品价格', '按品牌系列', '按新品上市', '按货品类别', '按货品特价'],
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

            alert1: false,
        }
    }

    xmTanUploadImg = () => {
        console.log('54564');
    }

    render() {
        return (
            <>
                <div className="picture-path">
                    <h2 className="pub-tit">
                        <i className="ico-font48"></i>
                        图片目录
                    </h2>
                    <Frame className="box" bottom={8}>
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
                    </Frame>
                </div>


                <div className="picture-list">
                    <div className="pub-border-wrap">
                        <h2 className="pub-tit">
                            <i className="ico-font49"></i>
                            图片列表
                            <div className="fr">
                                <a className="a3" href="/" title="" onClick={(e)=> {e.preventDefault();this.setState({alert1: true})}}>上传</a>
                                <a className="a2 let" href="/">意向单<em>0</em></a>
                                <a className="a4" href="/">查询</a>
                            </div>
                        </h2>
                        <div className="pub-table">
                            <ul>
                                <Input title="搜索" width="48%" placeholder="请输入品牌查询" value={this.state.input1} model={(v)=>this.setState({input1: v})}>
                                    <button class="pub-search"></button>
                                </Input>

                                <Input title="客户手机号" placeholder="请输入..." value={this.state.input2} required model={(v)=>this.setState({input2: v})}></Input>

                                <DropDown items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})}>排序方式</DropDown>

                            </ul>
                        </div>
                    </div>

                    <Frame className="pict-main pubsingleheight" bottom={41}>
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
                    </Frame>
                    

                    {/* 分页器 */}
                    <Pager></Pager>

                </div>
                

                {/* 上传图片 */}
                <Move model={this.state.alert1}>
                    <div className="case-alert move-obj">
                        
                        <div className="pub-tit add">
                            <i className="ico-up"></i>
                            上传图片
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
                </Move>
            </>
        )
    }
}
