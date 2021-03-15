import React, { Component } from 'react'

import Table, { Box, Li } from '../../components/Table';

import {Input, DropDown, Frame, ContainDown, DateTime} from '../../components/UI';

export default class index extends Component {

	constructor(){
        super()
        this.state = {
			items1: ['是', '否'],
            index1: 0,

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

			t1: '',
			t2: '',

			fields1: [
                {
                    width: 50,
                    name: '序号',
                },
                {
                    width: 200,
                    name: '消息主题',
                },
                {
                    width: 110,
                    name: '接收人',
                },
                {
                    width: 80,
                    name: '是否已读',
                },
                {
                    width: 140,
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
                        <i className="ico-font54"></i>
                        已发消息列表
                        <div className="fr">
                            <a className="a6" href="/" title="">查询</a>
                        </div>
                    </h2>

					<div className="pub-table">
						<ul>
							<Input title="消息主题" width="98%" value={this.state.input1} model={(v)=>this.setState({input1: v})}></Input>

							<Input title="接收人" width="48%" value={this.state.input2} model={(v)=>this.setState({input2: v})}>
								<button className="pub-search"></button>
							</Input>

							<DropDown width="48%" items={this.state.items1} index={this.state.index3} onChange={(index)=> this.setState({index3: index})}>是否已读</DropDown>

							<DateTime title="记录日期" width="48%" model={(v)=> this.setState({time1: v})} left={false}>
								<ContainDown index={this.state.down3} Select={(v)=>this.setState({down3: v})}></ContainDown>
							</DateTime>

                            <DateTime title="记录日期" width="48%" model={(v)=> this.setState({time2: v})} left={false}>
								<ContainDown index={this.state.down4} Select={(v)=>this.setState({down3: v})}></ContainDown>
							</DateTime>

						</ul>
					</div>

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


				<Frame className="notice-right bor" bottom={14}>
					<div className="box1">
						<h2 className="pub-tit">
							<i className="ico-font9"></i>
							发送消息
							<div className="fr">
								<a className="a2" href="/" title="">新建</a>
								<a className="a1" href="/" title="">删除</a>
								<a className="a3" href="/" title="">发送</a>
							</div>
						</h2>
						<div className="pub-table">
							<ul>
								<Input title="消息主题" width="64%" value={this.state.input4} required model={(v)=>this.setState({input4: v})}></Input>
								<Input title="接收人" width="32%" value={this.state.input5} required model={(v)=>this.setState({input5: v})}>
									<button type="button" onClick={()=> alert(`搜索【${this.state.input5}】中...`)} className="pub-search"></button>
								</Input>
							</ul>
						</div>

						<Frame className="negotiation" bottom={120}>
							<textarea name="" className="a2" placeholder="Enter Text..."></textarea>
						</Frame>

						<div className="edit-text">
							<div className="box a1">
								<p><b>【已读】</b>陈逸飞 2020-02-02 12:12</p>
							</div>
						</div>
					</div>
				</Frame>

			</>
        )
    }
}
