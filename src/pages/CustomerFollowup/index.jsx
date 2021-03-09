import React, { Component, createRef } from 'react'

import { offsetTop } from '../../utils';

import {Input, DropDown, Frame } from '../../components/UI';

export default class index extends Component {

    constructor(){
        super()
        this.left_layout = createRef()

        this.state = {
            items1: ['1', '2', '3'],
            index1: 0,

            items2: ['潜在客户', '咨询介绍', '初步意向', '正常跟进','方案报价', '商务谈价', '成交开单', '流失作废'],
            index2: 0,
            index4: 0,

            items3: ['最近一周', '最近一月', '最近三月', '最近半年'],
            index3: 0,

            market: '',
            name: '',

            cusname: '',
            next_up: '',
        }
    }
    
    componentDidMount(){
        let w_hei = window.innerHeight
        let off_top = offsetTop(this.left_layout.current)
        this.left_layout.current.style.height = (w_hei - off_top - 15) +'px'
    }

    render() {
        return (
            <div>
                <div className="way-sheet">
                    <div className="fl-layout left-dom">
                        <h2 className="pub-tit">
                            <i className="ico-font10"></i>
                            客户跟进列表
                            <div className="fr">
                                <a className="a2" href="/" title="">新建</a>
                                <a className="a4" href="/" title="">查询</a>
                            </div>
                        </h2>

                        <div className="pub-table">
                            <ul>
                                <Input width="98%" title="商场" value={this.state.market} model={(v)=>this.setState({market: v})}>
                                    <button className="pub-search"></button>
                                </Input>
                                
                                <Input width="48%" title="客户名称" value={this.state.name} model={(v)=>this.setState({name: v})}>
                                    <button className="pub-search"></button>
                                </Input>

                                <DropDown width="48%" items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})}>跟进人</DropDown>
                                
                                <DropDown width="48%" items={this.state.items2} index={this.state.index2} onChange={(index)=> this.setState({index2: index})}>跟进阶段</DropDown>
                                
                                <DropDown width="48%" items={this.state.items3} index={this.state.index3} onChange={(index)=> this.setState({index3: index})}>跟进期间</DropDown>

                            </ul>
                        </div>

                        <div className="pub-row-style pub-mt-0 pub-border-no3">
                            <div className="table-head">
                                <div className="slide-bar">
                                    <span className="sp50">序号</span>
                                    <span className="sp160">商场</span>
                                    <span className="sp120">客户名称</span>
                                    <span className="sp120">跟进阶段</span>
                                    <span className="sp120">跟进日期</span>
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
                </div>
                
                <div className="notice-right bg-none">

                    <div className="box1">
                        <h2 className="pub-tit">
                            <i className="ico-font9"></i>
                            新建跟进
                            <div className="fr">
                                <a className="a3" href="/" title="">确定</a>
                            </div>
                        </h2>

                        <div className="pub-table">
                            <ul>
             
                                <Input width="31%" title="客户名称" required value={this.state.cusname} model={(v)=>this.setState({cusname: v})}>
                                    <button type="button" className="pub-search"></button>
                                </Input>

                                <DropDown width="31%" items={this.state.items2} index={this.state.index4} onChange={(index)=> this.setState({index4: index})}>跟进阶段</DropDown>

                                <Input width="32%" title="下次跟进" required value={this.state.next_up} model={(v)=>this.setState({next_up: v})}>
                                    <button type="button" className="pub-search"></button>
                                </Input>           
                            </ul>
                        </div>

                        <div className="negotiation">
                            <h2>
                                <b>商务谈价</b>
                                <span>李先生-13510668888</span>
                                <span className="fr">东方鱼薇 2019-08-18 / 12:32</span>
                            </h2>
                            <textarea name="" placeholder="Enter Text..."></textarea>
                        </div>
                    </div>
                    
                    <div className="box2">
                        <h2 className="pub-tit">
                            <i className="ico-font8"></i>
                            跟进记录
                            <div className="fr">
                                <a className="a2" href="/" title="">跟进</a>
                                <a className="a4" href="/" title="">建议</a>
                            </div>
                        </h2>


                        <Frame className="limitheight" bottom={14}>

                            <div className="follow-up-record">
                                <h2><b className="b1">方案报价</b> <span>李先生-13510668888</span><var>方案报价：￥168,359.00</var><span className="fr">东方鱼薇 2019-08-06 / 10:16</span></h2>
                                <div className="text">
                                    <p>议案中说，加州是中国在美国的最重要的合作伙伴之一，目前大约有200万华人华侨生活在加州。中国政府也高度重视与加州的友好合作关系。中国是美国第五大游客来源地，2016年有近150万中国游客到访加州。加州和北京、上海、广州、西安、成都、武汉、青岛等中国主要城市之间每天有20多个航班，并且加州已与中国20多对城市结为友好城市。</p>
                                </div>
                            </div>

                            {/* <div className="negotiation">
                                <h2>
                                    <img src="img/建议.png" alt="" />
                                    <b>建议审评</b><span>何晓蒙 2019-08-08 / 16:33</span>
                                    <label className="pub-check1 pub-mt-f7">
                                        <input type="checkbox" checked />是否发送提醒
                                    </label>
                                    <button>发送</button>
                                </h2>
                                <textarea name="" placeholder="Enter Text..."></textarea>
                            </div> */}

                            <div className="follow-up-record">
                                <h2><b className="b2">正常跟进</b> <span>李先生-13510668888</span><span className="fr">东方鱼薇 2019-08-06 / 10:16</span></h2>
                                <div className="text">
                                    <p>因此，加州众议院决定，支持加州与中国之间为增进互利经济机会继续保持协调合作，增加互利经济机会，并在人文交往、贸易、气候变化、教育、旅游、科技、创新和绿色发展等领域加强实质性合作。</p>
                                </div>
                            </div>
                            <div className="follow-up-record">
                                <h2><b className="b2">正常跟进</b> <span>李先生-13510668888</span><span className="fr">东方鱼薇 2019-08-06 / 10:16</span></h2>
                                <div className="text">
                                    <p>因此，加州众议院决定，支持加州与中国之间为增进互利经济机会继续保持协调合作，增加互利经济机会，并在人文交往、贸易、气候变化、教育、旅游、科技、创新和绿色发展等领域加强实质性合作。</p>
                                </div>
                            </div>
                            <div className="follow-up-record a1">
                                <h2>
                                    <b className="b3">建议审评</b>
                                    <span className="fr">何晓蒙 2017-08-06 / 10:16</span>
                                </h2>
                                <div className="text a1">
                                    <p>因此，加州众议院决定，支持加州与中国之间为增进互利经济机会继续保持协调合作。</p>
                                </div>
                            </div>					
                            <div className="follow-up-record">
                                <h2><b className="b4">咨询介绍</b> <span>李先生-13510668888</span><span className="fr">东方鱼薇 2019-08-06 / 10:16</span></h2>
                                <div className="text">
                                    <p>因此，加州众议院决定，积极支持加州与中国之间为增进互利经济机会继续保持协调合作，增加互利经济机会，并在人文交往、贸易、气候变化、教育、旅游、科技、创新和绿色发展等领域加强实质性合作。</p>
                                </div>
                            </div>
                            <div className="follow-up-record">
                                <h2><b className="b5">初步意向</b> <span>李先生-13510668888</span><span className="fr">东方鱼薇 2019-08-06 / 10:16</span></h2>
                                <div className="text">
                                    <p>因此，加州众议院决定，积极支持加州与中国之间为增进互利经济机会继续保持协调合作，增加互利经济机会，并在人文交往、贸易、气候变化、教育、旅游、科技、创新和绿色发展等领域加强实质性合作。因此，加州众议院决定，积极支持加州与中国之间为增进互利经济机会继续保持协调合作，增加互利经济机会，并在人文交往、贸易、气候变化、教育、旅游、科技、创新和绿色发展等领域加强实质性合作。</p>
                                </div>
                            </div>
                        </Frame>
                    </div>
                </div>
            </div>
        )
    }
}
