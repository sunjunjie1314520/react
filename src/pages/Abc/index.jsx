import React, { Component } from 'react'

import { Input } from '../../components/UI';

export default class index extends Component {

    constructor(){
        super()
        this.state = {
            
        }
    }
    render() {
        return (
            <>
                <div className="xiaoshow">
                    <div className="item-fun">
                        <a href="/" title="">打印</a>
                        <a href="/" title="">刷新</a>
                        <a href="/" title="">列表</a>
                        <a href="/" title="">新建</a>
                        <a href="/" title="">删单</a>
                        <a href="/" title="">提交</a>
                        <a href="/" title="">撤回</a>
                        <a href="/" title="">审核</a>
                        <a href="/" title="">弃审</a>
                        <a href="/" title="">查审</a>
                        <a href="/" title="">完结</a>
                        <a href="/" title="">作废</a>
                        <a href="/" title="">启用</a>
                        <a href="/" title="">保存</a>
                    </div>
                    <div className="pub-table">
                        <ul>
                            <Input placeholder="请输入单号..." title="采购单号" width="98%" value={this.state.field1} model={(v)=>this.setState({field1: v})}></Input>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}