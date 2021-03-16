import React, { Component, createRef } from 'react'

import E from "wangeditor"

import Table, { Box, Li } from '../../components/Table';

import {Input, ContainDown, DateTime, Frame} from '../../components/UI';

export default class index extends Component {

    constructor(){
        super()
        this.left_layout = createRef()
        this.state = {
            items1: ['公告 Announcement', '通知 Notice', '文件资料 Document'],
            index1: 0,
            index2: 0,

            items2: ['是', '否'],
            index3: 0,

            items3: ['最近一周', '最近一月', '最近一季', '最近半年', '最近一年'],
            index4: 0,

            input1: '',
            input2: '',
            input3: '',
            input4: '',

            down1: 0,
            down2: 1,
            down3: 5,
            down4: 6,
            down5: 0,
            down6: 0,
            down7: 0,
            down8: 1,

            time1: '',
            time2: '',
            time3: '',

            fields1: [
                {
                    width: 50,
                    name: '序号',
                },
                {
                    width: 300,
                    name: '备忘录主题',
                },
                {
                    width: 140,
                    name: '记录日期',
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

    componentDidMount(){
        // 编辑器
        const editor = new E("#summernote")
        editor.config.uploadImgServer = '/upload-img'
        editor.create()

        var dom = document.querySelector('.w-e-text-container')
        dom.style.height = '520px'
    }

    render() {
        return (
            <>
                <div className="notice-left">
                        <h2 className="pub-tit">
                            <i className="ico-font54"></i>
                            备忘录列表
                            <div className="fr">
                                <a className="a6" href="/" title="">查询</a>
                            </div>
                        </h2>

                        <div className="pub-table">
                            <ul>
                            <Input title="备忘录主题" width="98%" value={this.state.input1} model={(v)=>this.setState({input1: v})}></Input>

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
                                    </Li>
                                )
                            })
                        }
                        </Table>
			    </div>


                <Frame className="notice-right bor" bottom={14}>
                    <div className="box1">
                        <h2 className="pub-tit">
                            <i className="ico-font57"></i>
                            记事本
                            <div className="fr">
                                <a className="a2" href="/" title="">新建</a>
                                <a className="a1" href="/" title="">删除</a>
                                <a className="a3" href="/" title="">保存</a>
                            </div>
                        </h2>
                        <div className="pub-table">
                            <ul>
                                <Input title="备忘录主题" width="64%" value={this.state.input4} required model={(v)=>this.setState({input4: v})}></Input>
                                <DateTime width="31%" title="提醒日期" model={(v)=> this.setState({time3: v})}></DateTime>
                            </ul>
                        </div>

                    <div className="editer">
                        <div className="summernote" id="summernote"></div>
                    </div>

                    <div className="edit-text">
                        <div className="file-list">
                            <i className="ico-file"></i>
                            <p>
                                <span>李先生家居配置方案.PPT <a className="a0" href="/">下载</a><a className="a1" href="/">删除</a></span>
                            </p>
                        </div>
                        <div className="pub-delete-btn fr">
                            <a href="/"><i className="ico-i2"></i><input type="file" />上传附件</a>
                        </div>
                    </div>
                    </div>
                </Frame>
          </>
        )
    }
}
