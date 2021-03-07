import React, { Component, createRef } from 'react'

import { offsetTop } from '../../utils';

export default class index extends Component {

    constructor(props){
        super(props)
        this.table = createRef()
        this.state = {
            
        }
    }
    
    componentDidMount(){
        let w_hei = window.innerHeight
        let off_top = offsetTop(this.table.current)
        this.table.current.style.height = (w_hei - off_top - 42) +'px'
    }

    render() {
        return (
            <div className="clearfix">
                <div className="pub-row-style">
                    <div className="table-head"> 
                        <div className="slide-bar">
                            <span className="sp60">序号</span>
                            <span className="sp120">客户编码</span>
                            <span className="sp120">客户名称</span>
                            <span className="sp60">性别</span>
                            <span className="sp140">客户类别</span>
                            <span className="sp150">手机</span>
                            <span className="sp150">电话</span>
                            <span className="sp200">地址</span>
                            <span className="sp160">归属商场</span>				
                            <span className="sp100">出生年月</span>
                            <span className="sp120">客户来源</span>
                            <span className="sp150">微信/QQ</span>
                            <span className="sp130">邮箱</span>
                            <span className="sp120">职业</span>
                            <span className="sp150">工作单位</span>
                            <span className="sp120">楼盘名称</span>
                            <span className="sp100">户型</span>
                            <span className="sp100">喜好风格</span>
                            <span className="sp100">性格特征</span>
                            <span className="sp200">备注</span>
                        </div>
                    </div>
                    <div className="table-row" ref={this.table}>
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
        )
    }
}
