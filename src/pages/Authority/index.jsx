import React, { Component } from 'react'

import { Input, Frame } from '../../components/UI';

export default class index extends Component {
    constructor(){
        super()
        this.state = {
            fields1: '',
            fields2: '',
            fields3: '',
            tree: [
                {
                    title: '货品管理',
                    slide: true,
                    check: false,
                    two: [
                        {
                            check: false,
                            title: '货品档案',
                            three: [
                                {
                                    check: false,
                                    title: '新建',
                                },
                                {
                                    check: false,
                                    title: '修改',
                                },
                                {
                                    check: false,
                                    title: '删除',
                                },
                                {
                                    check: false,
                                    title: '停用',
                                },
                            ]
                        },
                        {
                            check: false,
                            title: '价格审核',
                            three: []
                        },
                        {
                            check: false,
                            title: '货品导入',
                            three: []
                        },
                        {
                            check: false,
                            title: '售价类别',
                            three: []
                        },
                        {
                            check: false,
                            title: '货品特价',
                            three: []
                        },
                        {
                            check: false,
                            title: '打印货品表',
                            three: []
                        },
                    ]
                },
                {
                    title: '销售管理',
                    slide: false,
                    check: false,
                    two: [
                        {
                            check: false,
                            title: '没有子选项',
                            three: []
                        },
                        {
                            check: false,
                            title: '数据没有配置',
                            three: []
                        },
                    ]
                }
            ]
        }
    }
 
    slideHandle(index, slide){
        const { tree } = this.state
        tree[index].slide = slide
        this.setState({
            tree: tree
        })
    }

    checkAll(e, index){
        const { tree } = this.state
        const { checked } = e.target
        tree[index].check = checked
        if(checked){
            tree[index].two.forEach(item1=>{
                item1.check = true
                item1.three.forEach(item2=> item2.check = true)
            })
        } else {
            tree[index].two.forEach(item1=>{
                item1.check = false
                item1.three.forEach(item2=> item2.check = false)
            })
        }
        this.setState({
            tree: tree
        })
        
    }

    twoCheckHandle(e, parent, index){
        const { tree } = this.state
        const { checked } = e.target
        tree[parent].two[index].check = checked
        // console.log(e, parent, index);
        if(checked){
            tree[parent].two[index].three.forEach(item2=> item2.check = true)
        } else {
            tree[parent].two[index].three.forEach(item2=> item2.check = false)
        }
        let result = this.count(tree[parent].two)
        if(result)
            tree[parent].check = true
        else
            tree[parent].check = false

        this.setState({
            tree: tree
        })
    }

    count(array){
        const res = array.filter(item => item.check)
        return res.length === array.length
    }

    threeCheckHandle(e, parent1, parent2, index){
        const { tree } = this.state
        const { checked } = e.target
        // console.log(checked, parent1, parent2, index);
        tree[parent1].two[parent2].three[index].check = checked

        let result = this.count(tree[parent1].two[parent2].three)
        if(result)
            tree[parent1].two[parent2].check = true
        else
            tree[parent1].two[parent2].check = false

        this.setState({
            tree: tree
        })
    }

    render() {
        const {tree} = this.state
        return (
            <>
                <div className="left-wrappr">
                    <div className="query pub-bor-fl">
                        <h2 className="pub-tit">
                            <i className="ico-font31"></i>
                            用户列表
                            <div className="fr">
                                <a className="a6" href="/" title="">查询</a>
                            </div>
                        </h2>

                        <div className="pub-table">
                            <ul>
                                <Input width="98%" title="商场/仓库" value={this.state.fields1} model={(v)=> this.setState({fields1: v})}></Input>
                                <Input width="48%" title="用户编码" value={this.state.fields2} model={(v)=> this.setState({fields2: v})}></Input>
                                <Input width="48%" title="用户名称" value={this.state.fields3} model={(v)=> this.setState({fields3: v})}></Input>
                            </ul>
                        </div>

                        <div className="pub-row-style pub-mt-0 pub-border-no3">

                            <div className="table-head">
                                <div className="slide-bar">
                                    <span className="sp50">序号</span>
                                    <span className="sp120">用户编码</span>
                                    <span className="sp120">用户名称</span>
                                    <span className="sp120">商场/仓库</span>
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

                </div>

                <div className="right-wrapper">

                    <div className="xiao-box pub-bor-fl">

                        <h2 className="pub-tit">
                            <i className="ico-font32"></i>
                            拥有权限列表
                            <div className="fr">
                                <a className="a3 w100" href="/" title="">保存</a>
                            </div>
                        </h2>

                        <div className="pub-nav">
                            <a href="/"><i className="ico-font33"></i>展开</a>
                            <a href="/"><i className="ico-font34"></i>折叠</a>
                            <a href="/"><i className="ico-font35"></i>全选</a>
                            <a href="/"><i className="ico-font36"></i>全消</a>
                            <a href="/"><i className="ico-font37"></i>添加</a>
                            <a href="/"><i className="ico-font38"></i>移除</a>
                        </div>

                        <Frame className="tree" bottom={1 + 15}>
                            <div className="set-manage">
                                <ul>
                                    {
                                        tree.map((v, k)=>{
                                            return (
                                                <li key={k} className={v.slide ? 'acti': ''}>
                                                    <h2>
                                                        <i onClick={()=> this.slideHandle(k, !v.slide)} className="ico-show"></i>
                                                        <input type="checkbox" onChange={(e)=>this.checkAll(e, k)} checked={v.check} />
                                                        <i className="ico-file2"></i>
                                                        {v.title}
                                                    </h2>
                                                    {
                                                        v.two.map((v1, k1)=>{
                                                            return (
                                                                <div className="one" key={k1}>
                                                                    <h3><input type="checkbox" onChange={(e)=>this.twoCheckHandle(e, k, k1)} checked={v1.check} /><i className="ico-file3"></i>{v1.title}</h3>
                                                                    <div className="two">
                                                                        {
                                                                            v1.three.map((v2, k2)=>{
                                                                                return (
                                                                                    <p key={k2}><input type="checkbox" onChange={(e)=>this.threeCheckHandle(e, k, k1, k2)} checked={v2.check} /><i className="ico-file3"></i><var>{v2.title}</var></p>
                                                                                )
                                                                            })
                                                                        }
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </li>
                                            )
                                        })
                                    }
                                    
                                    {/* <li>
                                        <h2><i className="ico-show"></i><input type="checkbox" /><i className="ico-file2"></i>销售管理</h2>
                                    </li>
                                    <li>
                                        <h2><i className="ico-show"></i><input type="checkbox" /><i className="ico-file2"></i>库存管理</h2>
                                    </li>
                                    <li>
                                        <h2><i className="ico-show"></i><input type="checkbox" /><i className="ico-file2"></i>售后管理</h2>
                                    </li>
                                    <li>
                                        <h2><i className="ico-show"></i><input type="checkbox" /><i className="ico-file2"></i>采购管理</h2>
                                    </li>
                                    <li>
                                        <h2><i className="ico-show"></i><input type="checkbox" /><i className="ico-file2"></i>客户管理</h2>
                                    </li>
                                    <li>
                                        <h2><i className="ico-show"></i><input type="checkbox" /><i className="ico-file2"></i>品牌管理</h2>
                                    </li>
                                    <li>
                                        <h2><i className="ico-show"></i><input type="checkbox" /><i className="ico-file2"></i>经销管理</h2>
                                    </li> */}
                                </ul>
                            </div>
                        </Frame>
                    </div>
                </div>
            </>
        )
    }
}
