import React, { Component } from 'react'

import img1 from '../../style/img/99094e75cd9e0bf20b699ccc6dae832b_510x360.jpg'

import {Input, DropDown, Frame } from '../../components/UI';

import Pager from '../../components/Pager';

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

            name: '项目昵称'
        }
    }

    alert = (e) => {
        e.preventDefault()
        alert('你点击了上传')
    }

    render() {
        return (
            <div>
                <div className="customer-case">
                    <h2 className="pub-tit">
                        <i className="ico-font12"></i>
                        客户案例
                        <p>
                            <a className="a1" href="/" onClick={this.alert} title="">上传</a>
                            <a className="a2" href="/" onClick={this.alert} title="">查询</a>
                        </p>
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
                                <li>
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

            </div>
        )
    }
}
