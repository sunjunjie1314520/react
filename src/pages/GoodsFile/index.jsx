import React, { Component } from 'react'

import Pager from '../../components/Pager';

import Table, {Box} from '../../components/Table';

import {Input, DropDown, Frame } from '../../components/UI';

export default class index extends Component {
    constructor(){
        super()
        this.state = {

            items1: ['已停产','已停售','销售特价','采购特价'],
            index1: 0,

            show1: false,

            fields: [
                {
                    width: 60,
                    name: '序号',
                },
                {
                    width: 120,
                    name: '货品编码',
                },
                {
                    width: 120,
                    name: '货品名称',
                },
                {
                    width: 140,
                    name: '型 号',
                },
                {
                    width: 150,
                    name: '尺 寸',
                },
                {
                    width: 60,
                    name: '单 位',
                },
                {
                    width: 140,
                    name: '品牌',
                },
                {
                    width: 140,
                    name: '系列',
                },
                {
                    width: 100,
                    name: '采购价',
                },
                {
                    width: 100,
                    name: '零售价',
                },
                {
                    width: 100,
                    name: '经销价',
                },
                {
                    width: 100,
                    name: '批发价',
                },
                {
                    width: 100,
                    name: '条码标签',
                },
                {
                    width: 80,
                    name: '颜色',
                },
                {
                    width: 80,
                    name: '产地',
                },
                {
                    width: 100,
                    name: '厂家',
                },
                {
                    width: 60,
                    name: '立方数',
                },
                {
                    width: 60,
                    name: '包装数',
                },
                {
                    width: 100,
                    name: '主 材',
                },
                {
                    width: 100,
                    name: '辅 材',
                },
                {
                    width: 150,
                    name: '描 述',
                },
                {
                    width: 60,
                    name: '是否停售',
                },
                {
                    width: 60,
                    name: '是否停产',
                },
                {
                    width: 80,
                    name: '建立人',
                },
                {
                    width: 100,
                    name: '建立时间',
                },
                {
                    width: 100,
                    name: '修改人',
                },
                {
                    width: 150,
                    name: '备 注',
                },
            ],

            data: [
                {
                    id: 1,
                    bianma: 'xxxxxxxxxxxxx',
                    check: false,
                },
                {
                    id: 2,
                    bianma: 'xxxxxxxxxxxxx',
                    check: false,
                },
                {
                    id: 3,
                    bianma: 'xxxxxxxxxxxxx',
                    check: false,
                },
                {
                    id: 4,
                    bianma: 'xxxxxxxxxxxxx',
                    check: false,
                },
            ]
        }
    }
    checkHandle(check, k){
        const {data} = this.state
        data[k].check = check
        this.setState({
            data: data
        })
    }

    alertHandle = (e) => {
        e.preventDefault()
        console.log('弹窗');
    }

    render() {
        return (
            <div>
                <Frame className="archives-type" bottom={7}>
                    <div className="pub-tit">
                        <i className="ico-type"></i>
                        货品类别
                    </div>
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
                </Frame>

                <div className="archives-right">
                    <div className="function-wrap">
                        <div className="pub-fun">
                            <a title="" className="a2" href="/" onClick={this.alertHandle}><i className="ico-xin1"></i>新建</a>
                            <a href="/" title="" className="a2"><i className="ico-fu"></i>复制</a>
                            <a title="" className="a2" href="/" onClick={this.alertHandle}><i className="ico-ka"></i>卡片</a>
                            <a href="/" title="" className="a2"><i className="ico-shan"></i>删除</a>
                            <a href="/" title="" className="a2"><i className="ico-ting"></i>停用</a>
                            <a href="/" title="" className="a2"><i className="ico-qi"></i>启用</a>
                            <a href="/" title="" className="a2"><i className="ico-cha"></i>查询</a>
                        </div>
                        <div className="pub-table">
                            <ul>
                                <Input title="货品编码" value={this.state.fields1} model={(v)=>this.setState({fields1: v})}></Input>
                                <Input title="型号" value={this.state.fields2} model={(v)=>this.setState({fields2: v})}></Input>
                                <Input title="品牌系列" value={this.state.fields3} model={(v)=>this.setState({fields3: v})}>
                                    <button className="pub-search"></button>
                                </Input>
                                <DropDown items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})}>货品状态</DropDown>
                            </ul>
                        </div>
                    </div>

                         {/* 表格 */}
                    <Table fields={this.state.fields} bottom={43}>
                        {
                            this.state.data.map((v, k)=>{
                                return (
                                    <li key={k} className={v.check ? 'pub-table-back': ''}>
                                        <Box w={this.state.fields[0].width}><label className="pub-check">
                                            <input onChange={(e)=>this.checkHandle(e.target.checked, k)} checked={v.check} type="checkbox" />{k+1}</label>
                                        </Box>
                                        <Box w={this.state.fields[1].width}>111</Box>
                                        <Box w={this.state.fields[2].width}>2222</Box>
                                        <Box w={this.state.fields[3].width}>6546465</Box>
                                        <Box w={this.state.fields[4].width}>6546464</Box>
                                        <Box w={this.state.fields[5].width}>套</Box>
                                        <Box w={this.state.fields[6].width}>asdf</Box>
                                        <Box w={this.state.fields[7].width}>65464654</Box>
                                        <Box w={this.state.fields[8].width}>65464654</Box>
                                        <Box w={this.state.fields[9].width}>65464654</Box>
                                        <Box w={this.state.fields[10].width}>65464654</Box>
                                        <Box w={this.state.fields[11].width}>65464654</Box>
                                     </li>
                                )
                            })
                        }
                    </Table>

                    <Pager></Pager>

                </div>
            </div>
        )
    }
}
