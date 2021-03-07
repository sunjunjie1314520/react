import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import style from './index.module.styl';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.a1 = React.createRef();
        this.a2 = React.createRef();
        this.a3 = React.createRef();
        this.a4 = React.createRef();
        this.state = {
            init: null,
            hei1: null,
            hei2: null,
            hei3: null,
            hei4: null,
            a1: false,
            a2: false,
            a3: false,
            a4: false,
        }
    }
    componentDidMount(){
        let flowH = (window.innerHeight - this.a1.current.offsetTop - 39 * 2 - 10 - 14) / 2
        this.setState({
            init: flowH,
            hei1: flowH,
            hei2: flowH,
            hei3: flowH,
            hei4: flowH,
        })
    }
    a = () => {
        const { a1, init } = this.state
        this.setState({
            a1: !a1,
            hei1: !a1 ? init * 2 + 31 : init,
            a2: false,
            hei2: init,
        })
    }
    b = () => {
        const { a2, init } = this.state
        this.setState({
            a2: !a2,
            hei2: !a2 ? init * 2 + 31 : init,
            a1: false,
            hei1: init,
        })
    }
    c = () => {
        const { a3, init } = this.state
        this.setState({
            a3: !a3,
            hei3: !a3 ? init * 2 + 31 : init,
            a4: false,
            hei4: init,
        })
    }
    d = () => {
        const { a4, init } = this.state
        this.setState({
            a4: !a4,
            hei4: !a4 ? init * 2 + 31 : init,
            a3: false,
            hei3: init,
        })
    }

    render() {
        const { a1, a2, a3, a4, hei1, hei2, hei3, hei4 } = this.state
        return (
            <div className={style.container_index}>
                <div className="index-fun">
                    <ul>
                        <li className="c1">
                            <Link to="">
                                <i className="ico-i1"></i>
                                <span>货品档案</span>
                            </Link>
                        </li>
                        <li className="c2 w1">
                            <Link to="">
                                <i className="ico-i2"></i>
                                <span>销售订单</span>
                            </Link>
                        </li>
                        <li className="c3">
                            <Link to="">
                                <i className="ico-i3"></i>
                                <span>图片导购</span>
                            </Link>
                        </li>
                        <li className="c4">
                            <Link to="">
                                <i className="ico-i4"></i>
                                <span>客户案例</span>
                            </Link>
                        </li>
                        <li className="c5">
                            <Link to="">
                                <i className="ico-i5"></i>
                                <span>当前库存查询</span>
                            </Link>
                        </li>
                        <li className="c4">
                            <Link to="">
                                <i className="ico-i6"></i>
                                <span>送货安排</span>
                            </Link>
                        </li>
                        <li className="c5">
                            <Link to="">
                                <i className="ico-i7"></i>
                                <span>客户跟进</span>
                            </Link>
                        </li>
                        <li className="c6">
                            <Link to="">
                                <i className="ico-i8"></i>
                                <span>销售员业绩排名</span>
                            </Link>
                        </li>
                        <li className="c1 w1">
                            <Link to="">
                                <i className="ico-i9"></i>
                                <span>客户跟进分析</span>
                            </Link>
                        </li>
                        <li className="c2">
                            <Link to="">
                                <i className="ico-i10"></i>
                                <span>发送消息</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="model">
                    <ul>
                        <div className="wrap">
                            <li className={a2 ? 'no-border' : ''}>
                                <div className="pub-tit">
                                    <i className="ico-font40"></i>
                                    需要我审核的单据
                                    <div className={`ico-down ${a1?'acti':''}`} onClick={this.a}></div>
                                </div>
                                <div className="model-content" style={{display: a2 ? 'none': 'block'}}>
                                    <h3>
                                        <span className="sp1">内　容</span>
                                        <span className="sp2">提交人</span>
                                        <span className="sp3">日　期</span>
                                    </h3>
                                    <dl ref={this.a1} style={{height: `${hei1}px`}}>
                                        <dd>
                                            <span className="sp1">请审核采购单CG002865</span>
                                            <span className="sp2">李南宫</span>
                                            <span className="sp3">2019-08-16 / 12:35</span>
                                        </dd>
                                        <dd>
                                            <span className="sp1">请审核采购单CG002869</span>
                                            <span className="sp2">陈晓虹</span>
                                            <span className="sp3">2019-08-18 / 15:29</span>
                                        </dd>
                                        <dd>
                                            <span className="sp1">请审核采购收货单SH003402</span>
                                            <span className="sp2">东方鱼薇</span>
                                            <span className="sp3">2019-06-12 / 18:15</span>
                                        </dd>
                                        <dd>
                                            <span className="sp1">请审核送货单SH005065</span>
                                            <span className="sp2">何晓蒙</span>
                                            <span className="sp3">2019-06-06 / 11:52</span>
                                        </dd>
                                        <dd></dd>
                                        <dd></dd>
                                        <dd></dd>
                                    </dl>
                                </div>
                            </li>
                            <li className={a1 ? 'no-border' : ''}>
                                <div className="pub-tit">
                                    <i className="ico-font41"></i>
                                    我提交待审核的单据
                                    <div className={`ico-down ${a2?'acti':''}`} onClick={this.b}></div>
                                </div>
                                <div className="model-content" style={{display: a1 ? 'none': 'block'}}>
                                    <h3>
                                        <span className="sp1">内　容</span>
                                        <span className="sp2">提交人</span>
                                        <span className="sp3">日　期</span>
                                    </h3>
                                    <dl ref={this.a2} style={{height: `${hei2}px`}}>
                                        <dd></dd>
                                        <dd></dd>
                                        <dd></dd>
                                        <dd></dd>
                                        <dd></dd>
                                        <dd></dd>
                                        <dd></dd>
                                    </dl>
                                </div>
                            </li>
                        </div>
                        <div className="wrap">
                            <li className={a4 ? 'no-border' : ''}>
                                <div className="pub-tit">
                                    <i className="ico-font42"></i>
                                    收到的消息
                                    <div className={`ico-down ${ a3 ? 'acti' : ''}`} onClick={this.c}></div>
                                </div>
                                <div className="model-content" style={{display: a4 ? 'none': 'block'}}>
                                    <h3>
                                        <span className="sp1">内　容</span>
                                        <span className="sp2">提交人</span>
                                        <span className="sp3">日　期</span>
                                    </h3>
                                    <dl ref={this.a3} style={{height: `${hei3}px`}}>
                                        <dd></dd>
                                        <dd></dd>
                                        <dd></dd>
                                        <dd></dd>
                                        <dd></dd>
                                        <dd></dd>
                                        <dd></dd>
                                    </dl>
                                </div>
                            </li>
                            <li className={a3 ? 'no-border' : ''}>
                                <div className="pub-tit">
                                    <i className="ico-font43"></i>
                                    公告/通知
                                    <div className={`ico-down ${ a4 ? 'acti' : ''}`} onClick={this.d}></div>
                                </div>
                                <div className="model-content" style={{display: a3 ? 'none': 'block'}}>
                                    <h3>
                                        <span className="sp1">内　容</span>
                                        <span className="sp2">提交人</span>
                                        <span className="sp3">日　期</span>
                                    </h3>
                                    <dl ref={this.a4} style={{height: `${hei4}px`}}>
                                        <dd></dd>
                                        <dd></dd>
                                        <dd></dd>
                                        <dd></dd>
                                        <dd></dd>
                                        <dd></dd>
                                        <dd></dd>
                                    </dl>
                                </div>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}
