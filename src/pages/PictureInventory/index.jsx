import React, { Component, createRef } from 'react'


import { offsetTop } from '../../utils';

export default class index extends Component {

    constructor(props){
        super(props)
        this.left_layout = createRef()
        this.state = {}
    }
    componentDidMount(){
        let w_hei = window.innerHeight
        let off_top = offsetTop(this.left_layout.current)
        this.left_layout.current.style.height = (w_hei - off_top - 45) +'px'
    }
    
    render() {
        return (
            <>
                <div className="intention-list">
                    <h2 className="pub-tit">
                    <i className="ico-font3"></i>
                        图片库存表
                    <div className="fr">
                            <a className="a5 w100" href="/" title="">导出</a>
                            <a className="a4 w100" href="/" title="">查询</a>
                        </div>
                    </h2>
                    <div className="pub-table">
                        <ul>
                            <li>
                                <span>货品编码：</span>
                                <div className="input-wrap">
                                    <input name="" type="text" className="a2" />
                                </div>
                            </li>
                            <li>
                                <span>品名/型号：</span>
                                <div className="input-wrap">
                                    <input name="" type="text" className="a2" />
                                </div>
                            </li>
                            <li>
                                <span>货品类别：</span>
                                <div className="input-wrap">
                                    <input type="text" name="" />
                                    <button className="pub-down"></button>
                                    <div className="pub-drop-down">
                                        <span>内部货品Internal Goods</span>
                                        <span>其他家具Other furniture</span>
                                        <span>综合类others</span>
                                        <span>沙发Sofa</span>
                                        <span>茶几coffee table</span>
                                        <span>电视柜TV cabinet</span>
                                        <span>展示柜/酒柜Showcase wine cabinet</span>
                                        <span>玄关Console</span>
                                        <span>餐桌/吧台Dining table,Bar counter</span>
                                        <span>餐椅/吧椅Side chair,Bar Stool</span>
                                        <span>边柜/边桌Side board</span>
                                        <span>床Bed</span>
                                        <span>床头柜Night Table</span>
                                        <span>床尾凳Bench</span>
                                        <span>休闲椅Other Chairs</span>
                                        <span>妆凳/脚凳Dressing Chair</span>
                                        <span>妆台/妆柜DressingTable,Cabinet</span>
                                        <span>衣柜Clothing Cabinet</span>
                                        <span>斗柜Chest</span>
                                        <span>书桌Writing Desk</span>
                                        <span>书椅Writing Chair</span>
                                        <span>书柜Bookcase</span>
                                        <span>床垫Matress</span>
                                        <span>镜Mirror</span>
                                        <span>架Shelf</span>
                                        <span>灯/烛台Lighting,Candle holder</span>
                                        <span>画/相框Painting,Photo Frame</span>
                                        <span>毯Carpet</span>
                                        <span>抱枕Cushion</span>
                                        <span>床上用品Bedclothes</span>
                                        <span>茶餐用具Plate,Cup,Bowl etc.</span>
                                        <span>玻璃水晶Crystal,Glass</span>
                                        <span>树脂/陶瓷Resin,Ceramics</span>
                                        <span>花/果/树/植Flower,fruit,Tree,Plant</span>
                                        <span>钟表/首饰Clock/Jewelry</span>
                                        <span>公仔/玩具Doll,Toy</span>
                                        <span>工艺精品Artware</span>
                                        <span>窗帘Curtain</span>
                                        <span>屏风Screen</span>
                                        <span>箱包/衣物Bags,Clothing</span>
                                        <span>珠宝/玉器Jewellery,Jade</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <p>
                                    <label className="pub-check1 fl" title="库存为零不显示">
                                        <input type="checkbox" />库存为零不显示
                                    </label>
                                    <label className="pub-check1 fr" title="停产停售不显示">
                                        <input type="checkbox" />停产停售不显示
                                    </label>
                                </p>
                            </li>
                            <li>
                                <span>品牌：</span>
                                <div className="input-wrap">
                                    <input type="text" name="" />
                                    <button className="pub-search"></button>
                                </div>
                            </li>
                            <li>
                                <span>系列：</span>
                                <div className="input-wrap">
                                    <input type="text" name="" />
                                    <button className="pub-down"></button>
                                    <div className="pub-drop-down">
                                        <span>李白</span>
                                        <span>李诚</span>
                                        <span>李世琳</span>
                                        <span>李家欣</span>
                                        <span>李蒙</span>
                                    </div>
                                </div>
                            </li>
                            <li className="li1">
                                <span>商场/仓库：</span>
                                <div className="input-wrap">
                                    <input type="text" name="" />
                                    <button className="pub-down"></button>
                                    <div className="pub-drop-down">
                                        <span>李白</span>
                                        <span>李诚</span>
                                        <span>李世琳</span>
                                        <span>李家欣</span>
                                        <span>李蒙</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pub-row-style">
                    <div className="table-head"> 
                        <div className="slide-bar">
                            <span className="sp60">序号</span>
                            <span className="sp128">图 片</span>
                            <span className="sp150">商场/仓库</span>
                            <span className="sp120">货品编码</span>
                            <span className="sp120">货品名称</span>
                            <span className="sp120">型 号</span>
                            <span className="sp140">尺 寸</span>
                            <span className="sp150">系 列</span>
                            <span className="sp60">单位</span>
                            <span className="sp100">库存数</span>
                            <span className="sp120">单价</span>
                            <span className="sp100">销售订货</span>
                            <span className="sp100">采购订货</span>
                            <span className="sp100">经销订货</span>
                            <span className="sp100">待出库数</span>
                            <span className="sp100">待入库数</span>
                            <span className="sp120">有效数</span>
                        </div>
                    </div>
                        <div className="table-row auto-height pub-small" ref={this.left_layout}>
                        <ul>
                            <li>
                                <span className="sp65">
                                    <label className="pub-check"><input type="checkbox" />1</label>
                                </span>
                                <span className="sp118">
                                    <var></var>
                                </span>
                            </li>
                            <li>
                                <span className="sp65">
                                    <label className="pub-check"><input type="checkbox" />2</label>
                                </span>
                                <span className="sp118">
                                    <var></var>
                                </span>
                            </li>
                            <li>
                                <span className="sp65">
                                    <label className="pub-check"><input type="checkbox" />3</label>
                                </span>
                                <span className="sp118">
                                    <var></var>
                                </span>
                            </li>
                            <li>
                                <span className="sp65">
                                    <label className="pub-check"><input type="checkbox" />4</label>
                                </span>
                                <span className="sp118">
                                    <var></var>
                                </span>
                            </li>
                            <li>
                                <span className="sp65">
                                    <label className="pub-check"><input type="checkbox" />5</label>
                                </span>
                                <span className="sp118">
                                    <var></var>
                                </span>
                            </li>
                            <li>
                                <span className="sp65">
                                    <label className="pub-check"><input type="checkbox" />6</label>
                                </span>
                                <span className="sp118">
                                    <var></var>
                                </span>
                            </li>
                            <li className="pub-last-back">
                                <span className="sp65">
                                    <label className="pub-check pub-ml-20"><input type="checkbox" />7</label>
                                </span>
                                <span className="sp200">
                                <b>合计：</b>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pages">
                    <div className="wrap">
                        <a className="nolink" title="" href="/">上一页</a>
                        <a href="/" title="">1</a>
                        <a href="/" title="">2</a>
                        <a className="curr" href="/" title="">3</a>
                        <a href="/" title="">4</a>
                        <a href="/" title="">5</a>
                        <a href="/" title="">6</a>
                        <a href="/" title="">7</a>
                        <span>...</span>
                        <a href="/" title="">下一页</a>
                        <a href="/" title="">50</a>
                        <p>
                            <span>跳转到：</span>
                            <input type="text" name="" />
                            <button>GO</button>
                        </p>
                    </div>
                </div>
            </>
        )
    }
}
