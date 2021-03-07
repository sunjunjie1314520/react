import React, { Component, createRef } from 'react'

import { offsetTop } from '../../utils';

export default class index extends Component {

    constructor(){
        super()
        this.left_layout = createRef()
        this.right_layout = createRef()
        this.state = {}
    }
    
    componentDidMount(){
        let w_hei = window.innerHeight
        let off_top = offsetTop(this.left_layout.current)
        this.left_layout.current.style.height = (w_hei - off_top - 15) +'px'
        let off_top1 = offsetTop(this.right_layout.current)
        this.right_layout.current.style.height = (w_hei - off_top1 - 14) +'px'
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
                                <li className="li2">
                                    <span>商场：</span>
                                    <div className="input-wrap">
                                        <input type="text" name="" />
                                        <button className="pub-search"></button>
                                    </div>
                                </li>
                                <li className="li1">
                                    <span>客户名称：</span>
                                    <div className="input-wrap">
                                        <input type="text" name="" />
                                        <button className="pub-search"></button>
                                    </div>
                                </li>
                                <li className="li1">
                                    <span>跟进人：</span>
                                    <div className="input-wrap">
                                        <input type="text" name="" />
                                        <button className="pub-down"></button>
                                        
                                    </div>
                                </li>
                                <li className="li1">
                                    <span>跟进阶段：</span>
                                    <div className="input-wrap">
                                        <input type="text" name="" />
                                        <button className="pub-down"></button>
                                        <div className="pub-drop-down">
                                            <span>潜在客户</span>
                                            <span>咨询介绍</span>
                                            <span>初步意向</span>
                                            <span>正常跟进</span>
                                            <span>方案报价</span>
                                            <span>商务谈价</span>
                                            <span>成交开单</span>
                                            <span>流失作废</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="li1">
                                    <span>跟进期间：</span>
                                    <div className="input-wrap">
                                        <input type="text" name="" />
                                        <button className="pub-down"></button>
                                        <div className="pub-drop-down">
                                            <span>最近一周</span>
                                            <span>最近一月</span>
                                            <span>最近三月</span>
                                            <span>最近半年</span>
                                        </div>
                                    </div>
                                </li>
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
                                <li className="li5">
                                    <span>客户名称：</span>
                                    <div className="input-wrap">
                                        <input type="text" placeholder="新客户请直接选择" />
                                        <button type="button" className="pub-search"></button>
                                        <var className="pub-asterisk">*</var>
                                    </div>
                                </li>
                                <li className="li5">
                                    <span>跟进阶段：</span>
                                    <div className="input-wrap">
                                        <input type="text" name="" />
                                        <button type="button" className="pub-down"></button>
                                        <div className="pub-drop-down">
                                            <span>潜在客户</span>
                                            <span>咨询介绍</span>
                                            <span>初步意向</span>
                                            <span>正常跟进</span>
                                            <span>方案报价</span>
                                            <span>商务谈价</span>
                                            <span>成交开单</span>
                                            <span>流失作废</span>
                                        </div>
                                        <var className="pub-asterisk">*</var>
                                    </div>
                                </li>
                                <li className="li6">
                                    <span>下次跟进：</span>
                                    <div className="input-wrap J-datepicker-day right">
                                        <input type="text" className="c-datepicker-data-input only-date" />
                                        <var className="pub-asterisk">*</var>
                                    </div>
                                </li>
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
                        <div className="limitheight auto-table" ref={this.right_layout}>

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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
