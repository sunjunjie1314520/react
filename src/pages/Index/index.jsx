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
                                <span>????????????</span>
                            </Link>
                        </li>
                        <li className="c2 w1">
                            <Link to="">
                                <i className="ico-i2"></i>
                                <span>????????????</span>
                            </Link>
                        </li>
                        <li className="c3">
                            <Link to="">
                                <i className="ico-i3"></i>
                                <span>????????????</span>
                            </Link>
                        </li>
                        <li className="c4">
                            <Link to="">
                                <i className="ico-i4"></i>
                                <span>????????????</span>
                            </Link>
                        </li>
                        <li className="c5">
                            <Link to="">
                                <i className="ico-i5"></i>
                                <span>??????????????????</span>
                            </Link>
                        </li>
                        <li className="c4">
                            <Link to="">
                                <i className="ico-i6"></i>
                                <span>????????????</span>
                            </Link>
                        </li>
                        <li className="c5">
                            <Link to="">
                                <i className="ico-i7"></i>
                                <span>????????????</span>
                            </Link>
                        </li>
                        <li className="c6">
                            <Link to="">
                                <i className="ico-i8"></i>
                                <span>?????????????????????</span>
                            </Link>
                        </li>
                        <li className="c1 w1">
                            <Link to="">
                                <i className="ico-i9"></i>
                                <span>??????????????????</span>
                            </Link>
                        </li>
                        <li className="c2">
                            <Link to="">
                                <i className="ico-i10"></i>
                                <span>????????????</span>
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
                                    ????????????????????????
                                    <div className={`ico-down ${a1?'acti':''}`} onClick={this.a}></div>
                                </div>
                                <div className="model-content" style={{display: a2 ? 'none': 'block'}}>
                                    <h3>
                                        <span className="sp1">?????????</span>
                                        <span className="sp2">?????????</span>
                                        <span className="sp3">?????????</span>
                                    </h3>
                                    <dl ref={this.a1} style={{height: `${hei1}px`}}>
                                        <dd>
                                            <span className="sp1">??????????????????CG002865</span>
                                            <span className="sp2">?????????</span>
                                            <span className="sp3">2019-08-16 / 12:35</span>
                                        </dd>
                                        <dd>
                                            <span className="sp1">??????????????????CG002869</span>
                                            <span className="sp2">?????????</span>
                                            <span className="sp3">2019-08-18 / 15:29</span>
                                        </dd>
                                        <dd>
                                            <span className="sp1">????????????????????????SH003402</span>
                                            <span className="sp2">????????????</span>
                                            <span className="sp3">2019-06-12 / 18:15</span>
                                        </dd>
                                        <dd>
                                            <span className="sp1">??????????????????SH005065</span>
                                            <span className="sp2">?????????</span>
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
                                    ???????????????????????????
                                    <div className={`ico-down ${a2?'acti':''}`} onClick={this.b}></div>
                                </div>
                                <div className="model-content" style={{display: a1 ? 'none': 'block'}}>
                                    <h3>
                                        <span className="sp1">?????????</span>
                                        <span className="sp2">?????????</span>
                                        <span className="sp3">?????????</span>
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
                                    ???????????????
                                    <div className={`ico-down ${ a3 ? 'acti' : ''}`} onClick={this.c}></div>
                                </div>
                                <div className="model-content" style={{display: a4 ? 'none': 'block'}}>
                                    <h3>
                                        <span className="sp1">?????????</span>
                                        <span className="sp2">?????????</span>
                                        <span className="sp3">?????????</span>
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
                                    ??????/??????
                                    <div className={`ico-down ${ a4 ? 'acti' : ''}`} onClick={this.d}></div>
                                </div>
                                <div className="model-content" style={{display: a3 ? 'none': 'block'}}>
                                    <h3>
                                        <span className="sp1">?????????</span>
                                        <span className="sp2">?????????</span>
                                        <span className="sp3">?????????</span>
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
