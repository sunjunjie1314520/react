import React, { Component, createRef } from 'react'

import { DatePicker } from 'antd';

import { offsetTop } from '../../utils';

import WrapHeight from '../../components/WrapHeight';

import Input, { InputPub } from '../../components/Input';

import ContainDown from '../../components/ContainDown';

export default class index extends Component {

	constructor(){
        super()
        this.left_layout = createRef()
        this.right_layout = createRef()
        this.state = {
			items2: ['是', '否'],
            index3: 0,

			fields1: '1',  // 搜索消息主题
            fields4: '4',  // 搜索接收人

            fields2: '2',  // 消息主题
            fields3: '3',  // 接收人

			t1: 0,
			t2: 0,
		}
    }
    
    componentDidMount(){
        let w_hei = window.innerHeight
        let off_top = offsetTop(this.left_layout.current)
        this.left_layout.current.style.height = (w_hei - off_top - 17) +'px'

        let off_top1 = offsetTop(this.right_layout.current)
        this.right_layout.current.style.height = (w_hei - off_top1 - 15) +'px'
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
					<InputPub title="消息主题" width="98%" value={this.state.fields2} model={(v)=>this.setState({fields2: v})}></InputPub>
					<InputPub title="接收人" width="48%" value={this.state.fields3} model={(v)=>this.setState({fields3: v})}>
						<button className="pub-search"></button>
					</InputPub>

					<Input width="48%" items={this.state.items2} index={this.state.index3} onChange={(index)=> this.setState({index3: index})}>是否已读</Input>

					<li className="li1">
						<span>发送日期：</span>
						<div className="input-wrap J-datepicker-day right">
							<ContainDown Select={(v)=>this.setState({t1: v})}></ContainDown>
							<DatePicker bordered={false}></DatePicker>
						</div>
					</li>
					<li className="li1">
						<span>发送日期：</span>
						<div className="input-wrap J-datepicker-day right">
							<ContainDown Select={(v)=>this.setState({t2: v})}></ContainDown>
							<DatePicker bordered={false}></DatePicker>
						</div>
					</li>
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
		<div className="notice-right bor" ref={this.right_layout}>
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
						<InputPub title="消息主题" width="64%" value={this.state.fields1} required model={(v)=>this.setState({fields1: v})}></InputPub>
						<InputPub title="接收人" width="32%" value={this.state.fields4} required model={(v)=>this.setState({fields4: v})}>
							<button type="button" onClick={()=> alert(`搜索【${this.state.fields4}】中...`)} className="pub-search"></button>
						</InputPub>
					</ul>
				</div>

				<WrapHeight className="negotiation" bottom={120}>
					<textarea name="" className="a2" placeholder="Enter Text..."></textarea>
				</WrapHeight>

				<div className="edit-text">
					<div className="box a1">
						<p><b>【已读】</b>陈逸飞 2020-02-02 12:12</p>
					</div>
				</div>
			</div>
		</div>
	</div>
        )
    }
}
