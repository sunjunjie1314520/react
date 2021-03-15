import React, { Component } from 'react'

import Table, { Box, Li } from '../../components/Table';

import {Input, DropDown, Frame, DateTime } from '../../components/UI';

export default class index extends Component {

    constructor(){
        super()
        this.state = {
            items1: ['深圳宝能家居广场', '上海红星美凯龙真北店', '北京居然之家朝阳店'],
            index1: 0,

            items2: ['潜在客户', '咨询介绍', '初步意向', '正常跟进','方案报价', '商务谈价', '成交开单', '流失作废'],
            index2: 0,
            index7: 8,

            items3: ['最近一周', '最近一月', '最近三月', '最近半年'],
            index3: 0,

            items4: ['一', '二', '三', '四'],
            index4: 0,

            items5: ['一', '二', '三', '四'],
            index5: 0,

            items6: ['潜在客户', '咨询介绍', '初步意向', '正常跟进','方案报价', '商务谈价', '成交开单', '流失作废'],
            index6: 0,
 

            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',

            search1: '',
            search2: '',

            market: '',
            name: '',

            cusname: '',
            next_up: '',

            fields1: [
                {
                    width: 50,
                    name: '序号',
                },
                {
                    width: 120,
                    name: '商场名称',
                },
                {
                    width: 100,
                    name: '客户名称',
                },
                {
                    width: 100,
                    name: '跟进阶段',
                },
                {
                    width: 80,
                    name: '跟进人',
                },
                {
                    width: 100,
                    name: '跟进日期',
                },
            ],
            data1: [
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
            ]
        }
    }

    render() {
        return (
            <>
                <div className="notice-left">
                    <h2 className="pub-tit">
                        <i className="ico-font10"></i>
                        跟进列表
                        <div className="fr">
                            <a className="a2" href="/" title="">新建</a>
                            <a className="a6" href="/" title="">查询</a>
                        </div>
                    </h2>
                    <div className="pub-table">
                        <ul>
                            <DropDown width="98%" items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})}>商场</DropDown>

                            <Input title="客户名称" width="48%" value={this.state.search1} model={(v)=>this.setState({search1: v})}>
                                <button className="pub-search"></button>
                            </Input>

                            <DropDown width="48%" items={this.state.items4} index={this.state.index4} onChange={(index)=> this.setState({index4: index})}>跟进人</DropDown>

                            <DropDown width="48%" items={this.state.items2} index={this.state.index2} onChange={(index)=> this.setState({index2: index})}>跟进阶段</DropDown>

                            <DropDown width="48%" items={this.state.items3} index={this.state.index3} onChange={(index)=> this.setState({index3: index})}>跟进期间</DropDown>
                        </ul>
                    </div>

                    {/* 清除浮动 */}
                    <div className="clear"></div>

                    <Table fields={this.state.fields1} margin bottom={15}>
                    {
                        this.state.data1.map((v, k)=>{
                            return (
                                <Li key={k} check={v.check}>
                                    <Box w={this.state.fields1[0].width}>
                                        <label className="pub-check">
                                            {k+1}
                                        </label>
                                    </Box>
                                    <Box w={this.state.fields1[1].width}>1111</Box>
                                    <Box w={this.state.fields1[2].width}>2222</Box>
                                    <Box w={this.state.fields1[3].width}>3333</Box>
                                </Li>
                            )
                        })
                    }
                    </Table>

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

                                <Input width="31%" placeholder="新客户请直接选择..."title="客户名称" required value={this.state.search2} model={(v)=>this.setState({search2: v})}>
                                    <button type="button" className="pub-search"></button>
                                </Input>

                                <DropDown width="31%" items={this.state.items2} index={this.state.index7} onChange={(index)=> this.setState({index7: index})}required>跟进阶段</DropDown>

                                <DateTime width="31%" title="下次跟进" model={(v)=> this.setState({time1: v})} required></DateTime>
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


                        <Frame className="limitheight" bottom={15}>

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
                            <div className="follow-up-record back">
                                <h2>
                                    <b className="b3">建议审评</b>
                                    <span className="fr">何晓蒙 2017-08-06 / 10:16</span>
                                </h2>
                                <div className="text">
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
            </>
        )
    }
}
