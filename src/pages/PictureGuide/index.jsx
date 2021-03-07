import React, { Component, createRef } from 'react'

import img1 from '../../style/img/506c0a676c6df69a4a3c7ecbcc827116_162x180.png';

import Pager from '../../components/Pager';
import Input from '../../components/Input';

import { offsetTop } from '../../utils';

export default class index extends Component {
    constructor(){
        super()
        this.state = {
            down1: ['按货品型号', '按货品价格', '按品牌系列', '按新品上市', '按货品类别', '按货品特价'],
            index1: 0,
        }
        this.left_layout = createRef()
        this.rihgt_layout = createRef()
    }
    
    componentDidMount(){
        let w_hei = window.innerHeight
        let off_top = offsetTop(this.left_layout.current)
        this.left_layout.current.style.height = (w_hei - off_top - 15) +'px'
        let off_top1 = offsetTop(this.rihgt_layout.current)
        this.rihgt_layout.current.style.height = (w_hei - off_top1 - 42 - 8) +'px'
    }

    change = (index) => {
        this.setState({index1: index})
    }

    render() {
        const { down1, index1 } = this.state
        return (
            <>
                <div className="archives-type" ref={this.left_layout}>
                    <h2 className="pub-tit">
                        <i className="ico-type"></i>
                        货品类别
                    </h2>
                    <ul>
                        <li><a href="/" title="">00-内部货品Internal Goods</a></li>
                        <li><a href="/" title="">01-其他家具Other furniture</a></li>
                        <li><a href="/" title="">02-综合类others</a></li>
                        <li><a href="/" title="">03-沙发Sofa</a></li>
                        <li><a href="/" title="">04-茶几coffee table</a></li>
                        <li><a href="/" title="">05-电视柜TV cabinet</a></li>
                        <li><a href="/" title="">06-展示柜/酒柜Showcase wine cabinet</a></li>
                        <li><a href="/" title="">07-玄关Console</a></li>
                        <li><a href="/" title="">08-餐桌/吧台Dining table,Bar counter</a></li>
                        <li><a href="/" title="">09-餐椅/吧椅Side chair,Bar Stool</a></li>
                        <li><a href="/" title="">10-边柜/边桌Side board</a></li>
                        <li><a href="/" title="">11-床Bed</a></li>
                        <li><a href="/" title="">12-床头柜Night Table</a></li>
                        <li><a href="/" title="">13-床尾凳Bench</a></li>
                        <li><a href="/" title="">14-休闲椅Other Chairs</a></li>
                        <li><a href="/" title="">15-妆凳/脚凳Dressing Chair</a></li>
                        <li><a href="/" title="">16-妆台/妆柜DressingTable,Cabinet</a></li>
                        <li><a href="/" title="">17-衣柜Clothing Cabinet</a></li>
                        <li><a href="/" title="">18-斗柜Chest</a></li>
                        <li><a href="/" title="">19-书桌Writing Desk</a></li>
                        <li><a href="/" title="">20-书椅Writing Chair</a></li>
                        <li><a href="/" title="">21-书柜Bookcase</a></li>
                        <li><a href="/" title="">22-床垫Matress</a></li>
                        <li><a href="/" title="">23-镜Mirror</a></li>
                        <li><a href="/" title="">24-架Shelf</a></li>
                        <li><a href="/" title="">25-灯/烛台Lighting,Candle holder</a></li>
                        <li><a href="/" title="">26-画/相框Painting,Photo Frame</a></li>
                        <li><a href="/" title="">27-毯Carpet</a></li>
                        <li><a href="/" title="">28-抱枕Cushion</a></li>
                        <li><a href="/" title="">29-床上用品Bedclothes</a></li>
                        <li><a href="/" title="">30-茶餐用具Plate,Cup,Bowl etc.</a></li>
                        <li><a href="/" title="">31-玻璃水晶Crystal,Glass</a></li>
                        <li><a href="/" title="">32-窗帘curtain</a></li>
                        <li><a href="/" title="">33-屏风Screen</a></li>			
                        <li><a href="/" title="">34-树脂/陶瓷Resin,Ceramics</a></li>
                        <li><a href="/" title="">35-花/果/树/植Flower,fruit,Tree,Plant</a></li>
                        <li><a href="/" title="">36-钟表/首饰Clock/Jewelry</a></li>
                        <li><a href="/" title="">37-公仔/玩具Doll,Toy</a></li>
                        <li><a href="/" title="">38-工艺精品/Artware</a></li>
                        <li><a href="/" title="">39-箱包/衣物Bags,Clothing</a></li>
                        <li><a href="/" title="">40-珠宝/玉器Jewellery,Jade</a></li>
                    </ul>
                </div>
                
                <div className="picture-right">
                    <div className="picture-guide">
                        <h2 className="pub-tit a3">
                            <i className="ico-menu"></i>
                            图片导购
                            <p>
                                <a className="a1" href="/" title="">意向单<em>0</em></a>
                                <a className="a2" href="/" title="">查询</a>
                            </p>
                        </h2>
                        <div className="pub-table">
                            <ul>
                                <Input type="default" width="48%" placeholder="请输入货品型号或品牌系列查询">搜索</Input>
                                <Input type="search" placeholder="请输入客户手机号" required>客户手机号</Input>
                                <Input type="down" items={down1} index={index1} onChange={this.change}>排序方式</Input>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="clearfix">
                        <div className="picture-guide-item">
                            <ul className="auto-height" ref={this.rihgt_layout}>
                                <li>
                                    <div className="pict">
                                        <span className="fl">SALE</span>
                                        <span className="fr">UEW</span>
                                        <img src={img1} alt="" />
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
                                        <img src={img1} alt="" />
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
                                        <img src={img1} alt="" />
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
                                        <img src={img1} alt="" />
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
                                        <img src={img1} alt="" />
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
                                        <img src={img1} alt="" />
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
                                        <img src={img1} alt="" />
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
                                        <img src={img1} alt="" />
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
                                        <img src={img1} alt="" />
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
                                        <img src={img1} alt="" />
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
                                        <img src={img1} alt="" />
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
                                        <img src={img1} alt="" />
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
                                        <img src={img1} alt="" />
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
                                        <img src={img1} alt="" />
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
                                        <img src={img1} alt="" />
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
                    
                    <Pager></Pager>
                    
                </div>

                
                {/* 图片导购 */}

                <div className="pub-shadow">
                    <div className="picture-alert">
                        <div className="close"><em className="ico-close a1"></em></div>
                        <div className="pict">
                            <img src="img/160228070832troqwv.jpg" alt="" />
                        </div>
                        <div className="small">
                            <ul>
                                <li>
                                    <img src="img/160228070832troqwv.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="img/160228070832gueyza.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="img/160228063951ffymmg.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="img/160228065904pdckkr.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="img/MLQ-Dior 25102.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="img/160228065904xwsfom.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="img/160228074814uewqgl.jpg" alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
