import React, { Component, createRef } from 'react'

import { offsetTop } from '../../utils';

import Input from '../../components/Input';

export default class index extends Component {
    constructor(){
        super()
        this.state = {}
        this.left_layout = createRef()
        this.right_layout = createRef()
    }
    
    componentDidMount(){
        let w_hei = window.innerHeight
        let off_top = offsetTop(this.left_layout.current)
        this.left_layout.current.style.height = (w_hei - off_top - 17) +'px'

        let off_top1 = offsetTop(this.right_layout.current)
        this.right_layout.current.style.height = (w_hei - off_top1 - 16) +'px'
    }
    render() {
        return (
            <>
                <div className="left-wrappr">
                    <div className="query pub-bor-fl">
                        <h2 className="pub-tit">
                            <i className="ico-font31"></i>
                            用户列表
                            <div className="fr">
                                <a className="a6" href="/" title="">查询</a>
                            </div>
                        </h2>

                        <div className="pub-table">
                            <ul>

                                <Input type="search" width="98%">商场/仓库</Input>
                                <Input type="default" width="48%">用户编码</Input>
                                <Input type="default" width="48%">用户名称</Input>
                            </ul>
                        </div>

                        <div className="pub-row-style pub-mt-0 pub-border-no3">

                            <div className="table-head">
                                <div className="slide-bar">
                                    <span className="sp50">序号</span>
                                    <span className="sp120">用户编码</span>
                                    <span className="sp120">用户名称</span>
                                    <span className="sp120">商场/仓库</span>
                                </div>
                            </div>

                            <div className="table-row pub-first-center" ref={this.left_layout}>
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

                </div>

                <div className="right-wrapper">

                    <div className="xiao-box pub-bor-fl">

                        <h2 className="pub-tit">
                            <i className="ico-font32"></i>
                            拥有权限列表
                            <div className="fr">
                                <a className="a3 w100" href="/" title="">保存</a>
                            </div>
                        </h2>

                        <div className="pub-nav">
                            <a href="/"><i className="ico-font33"></i>展开</a>
                            <a href="/"><i className="ico-font34"></i>折叠</a>
                            <a href="/"><i className="ico-font35"></i>全选</a>
                            <a href="/"><i className="ico-font36"></i>全消</a>
                            <a href="/"><i className="ico-font37"></i>添加</a>
                            <a href="/"><i className="ico-font38"></i>移除</a>
                        </div>

                        <div className="tree" ref={this.right_layout}>
                            <div className="set-manage">
                                <ul>
                                    <li className="acti">
                                        <h2><i className="ico-show"></i><input type="checkbox" /><i className="ico-file2"></i>货品管理</h2>
                                        <div className="one">
                                            <h3><input type="checkbox" /><i className="ico-file3"></i>货品档案</h3>
                                            <div className="two">
                                                <p><input type="checkbox" /><i className="ico-file3"></i><var>新建</var></p>
                                                <p><input type="checkbox" /><i className="ico-file3"></i><var>修改</var></p>
                                                <p><input type="checkbox" /><i className="ico-file3"></i><var>删除</var></p>
                                                <p><input type="checkbox" /><i className="ico-file3"></i><var>停用</var></p>
                                            </div>
                                        </div>
                                        <div className="one">
                                            <h3><input type="checkbox" /><i className="ico-file3"></i>价格审核</h3>
                                        </div>
                                        <div className="one">
                                            <h3><input type="checkbox" /><i className="ico-file3"></i>货品导入</h3>
                                        </div>
                                        <div className="one">
                                            <h3><input type="checkbox" /><i className="ico-file3"></i>售价类别</h3>
                                        </div>
                                        <div className="one">
                                            <h3><input type="checkbox" /><i className="ico-file3"></i>货品特价</h3>
                                        </div>
                                        <div className="one">
                                            <h3><input type="checkbox" /><i className="ico-file3"></i>打印货品表</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <h2><i className="ico-show"></i><input type="checkbox" /><i className="ico-file2"></i>销售管理</h2>
                                    </li>
                                    <li>
                                        <h2><i className="ico-show"></i><input type="checkbox" /><i className="ico-file2"></i>库存管理</h2>
                                    </li>
                                    <li>
                                        <h2><i className="ico-show"></i><input type="checkbox" /><i className="ico-file2"></i>售后管理</h2>
                                    </li>
                                    <li>
                                        <h2><i className="ico-show"></i><input type="checkbox" /><i className="ico-file2"></i>采购管理</h2>
                                    </li>
                                    <li>
                                        <h2><i className="ico-show"></i><input type="checkbox" /><i className="ico-file2"></i>客户管理</h2>
                                    </li>
                                    <li>
                                        <h2><i className="ico-show"></i><input type="checkbox" /><i className="ico-file2"></i>品牌管理</h2>
                                    </li>
                                    <li>
                                        <h2><i className="ico-show"></i><input type="checkbox" /><i className="ico-file2"></i>经销管理</h2>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    
                </div>
            </>
        )
    }
}
