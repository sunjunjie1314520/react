import React, { Component } from 'react'

import Table, { Box, Li } from '../../components/Table';

import {Input, DropDown, Frame, DateTime, ContainDown } from '../../components/UI';

export default class index extends Component {

    constructor(){
        super()
        this.state = {
            items1: ['是', '否'],
            index1: 1,

            items3: ['最近一周', '最近一月', '最近三月', '最近半年'],
            index3: 0,

            time1: '',
            time2: '',

            search1: '',
            search2: '',

            input1: '',
			input2: '',
            input3: '',
            input4: '',
			input5: '',

            down1: 0,
            down2: 1,
            down3: 5,
            down4: 6,
            down5: 0,
            down6: 0,
            down7: 0,
            down8: 1,

            market: '',
            name: '',


            fields1: [
                {
                    width: 50,
                    name: '序号',
                },
                {
                    width: 260,
                    name: '消息主题',
                },
                {
                    width: 120,
                    name: '发送人',
                },
                {
                    width: 140,
                    name: '发送日期',
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
                        <i className="ico-font54"></i>
                        收到消息列表
                        <div className="fr">
                            <a className="a6" href="/" title="">查询</a>
                        </div>
                    </h2>
                    <div className="pub-table">
                        <ul>
                            <Input title="消息主题" width="98%" value={this.state.input1} model={(v)=>this.setState({input1: v})}></Input>

                            <Input title="发送人" width="48%" value={this.state.search1} model={(v)=>this.setState({search1: v})}>
                                <button className="pub-search"></button>
                            </Input>

                            <DropDown width="48%" items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})}>是否已读</DropDown>

                            <DateTime title="收到日期" width="48%" model={(v)=> this.setState({time1: v})} left={false}>
								<ContainDown index={this.state.down3} Select={(v)=>this.setState({down3: v})}></ContainDown>
							</DateTime>

                            <DateTime title="收到日期" width="48%" model={(v)=> this.setState({time2: v})} left={false}>
								<ContainDown index={this.state.down4} Select={(v)=>this.setState({down3: v})}></ContainDown>
							</DateTime>
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
                                回复消息
                                <div className="fr">
                                    <a className="a3" href="/" title="">发送</a>
                                </div>
                            </h2>

                            <div className="pub-table">
                                <ul>
                                    <Input title="消息主题" width="64%" value={this.state.input4} model={(v)=>this.setState({input4: v})}></Input>
                                    <Input title="抄送" width="32%" value={this.state.search2} model={(v)=>this.setState({search2: v})}>
                                        <button type="button" onClick={()=> alert(`搜索【${this.state.input5}】中...`)} className="pub-search"></button>
                                    </Input>
                                </ul>
                            </div>

                            <div className="negotiation">
                            <h2>
                                <b className="b3">回复 / 五一促销活动方案</b>
                                <span>东方鱼薇-13510668888</span>
                                <span className="fr">何晓蒙 2019-08-18 / 12:32</span>
                            </h2>
                                <textarea name="" placeholder="Enter Text..."></textarea>
                            </div>
                        </div>

                    <div className="box2">
                        <h2 className="pub-tit">
                            <i className="ico-font53"></i>
                            历史消息
                            <div className="fr">
                                <a className="a2" href="/" title="">回复</a>
                                <a className="a1" href="/" title="">删除</a>
                            </div>
                        </h2>


                        <Frame className="limitheight" bottom={15}>

                            <div className="follow-up-record">
                                <h2><b className="b2">回复3 / 五一促销活动方案</b> <span>李先生-13510668888</span><span className="fr">东方鱼薇 2019-08-06 / 10:16</span></h2>
                                <div className="text">
                                    <p>议案中说，加州是中国在美国的最重要的合作伙伴之一，目前大约有200万华人华侨生活在加州。中国政府也高度重视与加州的友好合作关系。中国是美国第五大游客来源地，2016年有近150万中国游客到访加州。加州和北京、上海、广州、西安、成都、武汉、青岛等中国主要城市之间每天有20多个航班，并且加州已与中国20多对城市结为友好城市。</p>
                                </div>
                            </div>
                            <div className="follow-up-record">
                                <h2><b className="b2">回复2 / 五一促销活动方案</b> <span>李先生-13510668888</span><span className="fr">东方鱼薇 2019-08-06 / 10:16</span></h2>
                                <div className="text">
                                    <p>因此，加州众议院决定，支持加州与中国之间为增进互利经济机会继续保持协调合作，增加互利经济机会，并在人文交往、贸易、气候变化、教育、旅游、科技、创新和绿色发展等领域加强实质性合作。</p>
                                </div>
                            </div>
                            <div className="follow-up-record back">
                                <h2>
                                    <b className="b3">回复 / 五一促销活动方案</b>
                                    <span className="fr">何晓蒙 2017-08-06 / 10:16</span>
                                </h2>
                                <div className="text">
                                    <p>因此，加州众议院决定，支持加州与中国之间为增进互利经济机会继续保持协调合作。</p>
                                </div>
                            </div>
                            <div className="follow-up-record">
                                <h2><b className="b2">五一促销活动方案</b> <span>李先生-13510668888</span><span className="fr">东方鱼薇 2019-08-06 / 10:16</span></h2>
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
