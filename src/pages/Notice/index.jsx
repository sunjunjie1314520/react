import React, { Component, createRef } from 'react'

import E from "wangeditor"

import {Input, DropDown, Frame} from '../../components/UI';

import { offsetTop } from '../../utils';

export default class index extends Component {

    constructor(){
        super()
        this.left_layout = createRef()
        this.state = {
            items1: ['公告 Announcement', '通知 Notice', '文件资料 Document'],
            index1: 0,
            index2: 0,
            items2: ['是', '否'],
            index3: 0,

            items3: ['最近一周', '最近一月', '最近一季', '最近半年', '最近一年'],
            index4: 0,

            fields1: '',  // 新建公告通知

            fields2: '',  // 查询公告通知
            fields3: '',  // 发布人
        }
    }
    
    componentDidMount(){
        let w_hei = window.innerHeight
        let off_top = offsetTop(this.left_layout.current)
        this.left_layout.current.style.height = (w_hei - off_top - 17) +'px'
        
        // 编辑器
        const editor = new E("#summernote")
        editor.config.uploadImgServer = '/upload-img'
        editor.create()

        var dom = document.querySelector('.w-e-text-container')
        dom.style.height = '450px'
    }

    render() {
        return (
            <div className="way-sheet">
                <div className="fl-layout left-dom">
                    <h2 className="pub-tit">
                        <i className="ico-font11"></i>
                        公告通知列表
                        <div className="fr">
                            <a className="a6" href="/" title="">查询</a>
                        </div>
                    </h2>
                    
                    <div className="pub-table">
                        <ul>
                            <Input title="公告通知" width="98%" value={this.state.fields2} model={(v)=>this.setState({fields2: v})}></Input>
                            <Input title="发布人" width="48%" value={this.state.fields3} model={(v)=>this.setState({fields3: v})}>
                                <button className="pub-search"></button>
                            </Input>
                            <DropDown width="48%" items={this.state.items1} index={this.state.index2} onChange={(index)=> this.setState({index2: index})}>类型</DropDown>
                            <DropDown width="48%" items={this.state.items2} index={this.state.index3} onChange={(index)=> this.setState({index3: index})}>是否已读</DropDown>
                            <DropDown width="48%" items={this.state.items3} index={this.state.index4} onChange={(index)=> this.setState({index4: index})}>发布期间</DropDown>
                        </ul>
                    </div>

                    <div className="pub-row-style pub-mt-0 pub-border-no3">
                        <div className="table-head">
                            <div className="slide-bar">
                                <span className="sp50">序号</span>
                                <span className="sp180">公告通知</span>
                                <span className="sp100">发布人</span>
                                <span className="sp120">类型</span>
                                <span className="sp120">发布日期</span>
                            </div>
                        </div>
                        <div className="table-row auto-table pub-first-center" ref={this.left_layout}>
                            <ul>
                                <li>
                                    <span className="sp50">
                                    <label className="pub-check a1">1</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp50">
                                    <label className="pub-check a1">2</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp50">
                                    <label className="pub-check a1">3</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp50">
                                    <label className="pub-check a1">4</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp50">
                                    <label className="pub-check a1">5</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp50">
                                    <label className="pub-check a1">6</label>
                                    </span>
                                </li>
                                <li>
                                    <span className="sp50">
                                    <label className="pub-check a1">7</label>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <Frame className="notice-right bor" bottom={15}>
                    <div className="box1">
                        <h2 className="pub-tit">
                            <i className="ico-font57"></i>
                            公告通知
                            <div className="fr">
                                <a className="a2" href="/" title="">新建</a>
                                <a className="a1" href="/" title="">删除</a>
                                <a className="a3" href="/" title="">确定</a>
                            </div>
                        </h2>
                        <div className="pub-table">
                            <ul>
                                <Input title="公告通知" width="64%" value={this.state.fields1} required model={(v)=>this.setState({fields1: v})}></Input>
                                <DropDown width="32%" items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})} required>类型</DropDown>
                            </ul>
                        </div>

                    <div className="editer">
                        <div className="summernote" id="summernote"></div>
                    </div>

                    <div className="edit-text">
                        <div className="file-list">
                            <i className="ico-file"></i>
                            <p>
                                <span>李先生家居配置方案.PPT <a className="a0" href="/">下载</a><a className="a1" href="/">删除</a></span>  
                            </p>
                        </div>
                        <div className="pub-delete-btn fr">
                            <a href="/"><i className="ico-i2"></i><input type="file" />上传附件</a>
                        </div>
                        <div className="box">
                            <p><b>未阅读人：</b>李云峰、林婷婷、周驰、陈逸飞</p>
                        </div>
                    </div>
                    </div>
                </Frame>
            </div>
        )
    }
}
