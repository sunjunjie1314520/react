import React, { Component } from 'react'

import img1 from '../../style/img/a12fd_1092x801.jpg'
import img3 from '../../style/img/99094e75cd9e0bf20b699ccc6dae832b_510x360.jpg'
import img2 from '../../style/img/506c0a676c6df69a4a3c7ecbcc827116_162x180.png'

import Pager from '../../components/Pager';

import { Input, Frame, DropDown, Move } from '../../components/UI';

export default class index extends Component {
    constructor(){
        super()
        this.state = {
            fields1: '1',
            fields2: '2',

            // 下拉选择项
            items1: ['按货品型号', '按货品价格', '按品牌系列', '按新品上市', '按货品类别', '按货品特价'],
            index1: 0,

            // 表单显示内容项
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',

            // 表单查询内容项
            search1: '',
            search2: '',
            search3: '',
            search4: '',
            search5: '',
            search6: '',
            search7: '',
            search8: '',
            search9: '',

            // 跳窗项
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
                                <img src={img3} alt="" />
                            </li>
                            <li>
                                <img src={img1} alt="" />
                            </li>
                            <li>
                                <img src={img3} alt="" />
                            </li>
                            <li>
                                <img src={img1} alt="" />
                            </li>
                            <li>
                                <img src={img3} alt="" />
                            </li>
                            <li>
                                <img src={img1} alt="" />
                            </li>
                            <li>
                                <img src={img3} alt="" />
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
                                <Input title="搜索" width="48%" placeholder="请输入品牌查询" value={this.state.input1} model={(v)=>this.setState({input1: v})}></Input>

                                <Input placeholder="请先选择客户"title="客户名称" required value={this.state.search1} model={(v)=>this.setState({search1: v})}>
                                    <button type="button" className="pub-search"></button>
                                </Input>

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
                                    <Input title="上传图片" type="text" placeholder="大小不能超过5M" value={this.state.input3} required model={(v)=> this.setState({input3: v})}>
                                        <a className="upload" href="/" title="">浏览<input type="file" onChange={this.xmTanUploadImg} accept="image/*"/></a>
                                    </Input>
                                    <Input placeholder="请选择..."title="关联货品" required value={this.state.search2} model={(v)=>this.setState({search2: v})}>
                                        <button type="button" className="pub-search"></button>
                                    </Input>
                                    <Input placeholder="请选择..."title="关联货品" value={this.state.search3} model={(v)=>this.setState({search3: v})}>
                                        <button type="button" className="pub-search"></button>
                                    </Input>
                                    <Input placeholder="请选择..."title="关联货品" value={this.state.search4} model={(v)=>this.setState({search4: v})}>
                                        <button type="button" className="pub-search"></button>
                                    </Input>
                                    <Input placeholder="请选择..."title="关联货品" value={this.state.search5} model={(v)=>this.setState({search5: v})}>
                                        <button type="button" className="pub-search"></button>
                                    </Input>
                                    <Input placeholder="请选择..."title="关联货品" value={this.state.search6} model={(v)=>this.setState({search6: v})}>
                                        <button type="button" className="pub-search"></button>
                                    </Input>
                                    <Input placeholder="请选择..."title="关联货品" value={this.state.search7} model={(v)=>this.setState({search7: v})}>
                                        <button type="button" className="pub-search"></button>
                                    </Input>
                                    <Input placeholder="请选择..."title="关联货品" value={this.state.search8} model={(v)=>this.setState({search8: v})}>
                                        <button type="button" className="pub-search"></button>
                                    </Input>
                                    <Input placeholder="请选择..."title="关联货品" value={this.state.search9} model={(v)=>this.setState({search9: v})}>
                                        <button type="button" className="pub-search"></button>
                                    </Input>
                                    <Input title="上传人" value={this.state.input4} model={(v)=> this.setState({input4: v})}></Input>

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
