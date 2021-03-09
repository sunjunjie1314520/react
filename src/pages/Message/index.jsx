import React, { Component } from 'react'

import {Input, DropDown, Frame, ContainDown, DateTime} from '../../components/UI';

export default class index extends Component {

	constructor(){
        super()
        this.state = {
			items1: ['是', '否'],
            index1: 0,

			fields1: '',  // 搜索消息主题
            fields4: '',  // 搜索接收人

            fields2: '',  // 消息主题
            fields3: '',  // 接收人

			d1: 0,
			d2: 0,

			t1: '',
			t2: '',
		}
    }

    render() {
        return (
            <div className="way-sheet">
				<div className="fl-layout left-dom">

					<h2 className="pub-tit">
						<i className="ico-font54"></i>
						已发消息列表
						<div className="fr">
							<a className="a6" href="/" title="">查询</a>
						</div>
					</h2>

					<div className="pub-table">
						<ul>
							<Input title="消息主题" width="98%" value={this.state.fields2} model={(v)=>this.setState({fields2: v})}></Input>

							<Input title="接收人" width="48%" value={this.state.fields3} model={(v)=>this.setState({fields3: v})}>
								<button className="pub-search"></button>
							</Input>

							<DropDown width="48%" items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})}>是否已读</DropDown>

							<DateTime title="发送日期" width="48%" model={(v)=> this.setState({t1: v})}>
								<ContainDown Select={(v)=>this.setState({d1: v})}></ContainDown>
							</DateTime>

							<DateTime title="发送日期" width="48%" model={(v)=> this.setState({t2: v})}>
								<ContainDown Select={(v)=>this.setState({d2: v})}></ContainDown>
							</DateTime>

						</ul>
					</div>

					<div className="pub-row-style pub-mt-0 pub-border-no3">
						<div className="table-head">
							<div className="slide-bar">
								<span className="sp50">序号</span>
								<span className="sp220">消息主题</span>
								<span className="sp100">接收人</span>
								<span className="sp80">是否已读</span>
								<span className="sp120">发送日期</span>
							</div>
						</div>
						<Frame className="table-row pub-first-center" bottom={17}>
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
						</Frame>

					</div>

				</div>
				<Frame className="notice-right bor" bottom={15}>
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
								<Input title="消息主题" width="64%" value={this.state.fields1} required model={(v)=>this.setState({fields1: v})}></Input>
								<Input title="接收人" width="32%" value={this.state.fields4} required model={(v)=>this.setState({fields4: v})}>
									<button type="button" onClick={()=> alert(`搜索【${this.state.fields4}】中...`)} className="pub-search"></button>
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
			</div>
        )
    }
}
