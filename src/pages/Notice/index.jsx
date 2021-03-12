import React, { Component, createRef } from 'react'

import E from "wangeditor"

import Table, { Box, Li } from '../../components/Table';

import {Input, DropDown, Frame} from '../../components/UI';

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
                            已发消息列表
                            <div className="fr">
                                <a className="a6" href="/" title="">查询</a>
                            </div>
                        </h2>

                        <div className="pub-table">
                            <ul>
                                <Input title="公告通知" width="98%" value={this.state.input1} model={(v)=>this.setState({input1: v})}></Input>
                                <Input title="发布人" width="48%" value={this.state.input2} model={(v)=>this.setState({input2: v})}>
                                    <button className="pub-search"></button>
                                </Input>
                                <DropDown width="48%" items={this.state.items1} index={this.state.index2} onChange={(index)=> this.setState({index2: index})}>类型</DropDown>
                                <DropDown width="48%" items={this.state.items2} index={this.state.index3} onChange={(index)=> this.setState({index3: index})}>是否已读</DropDown>
                                <DropDown width="48%" items={this.state.items3} index={this.state.index4} onChange={(index)=> this.setState({index4: index})}>发布期间</DropDown>

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
                            <i className="ico-font57"></i>
                            公告通知
                            <div className="fr">
                                <a className="a2" href="/" title="">新建</a>
                                <a className="a1" href="/" title="">删除</a>
                                <a className="a3" href="/" title="">确定</a>
                            </div>
                        </h2>
                        <div className="pub-table">
                            <ul>
                                <Input title="公告通知" width="64%" value={this.state.input3} required model={(v)=>this.setState({input3: v})}></Input>
                                <DropDown width="32%" items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})} required>类型</DropDown>
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
                        <div className="box">
                            <p><b>未阅读人：</b>李云峰、林婷婷、周驰、陈逸飞</p>
                        </div>
                    </div>
                    </div>
                </Frame>
          </>
        )
    }
}
