import React, { PureComponent, createRef } from 'react'

// import { Switch } from 'antd';

// import { Save, Read } from '../../utils';

import PubSub from 'pubsub-js';

export default class RealTime extends PureComponent {

    constructor(){
        super()
        this.input = createRef()
        this.state = {
            
        }
    }

    // 搜索
    search =()=> {
        let name = this.input.current.value
        PubSub.publish('getNetData', name)
        PubSub.publish('Reset')
    }

    // 刷新
    refres =()=> {
        this.input.current.value = ''
        this.search()
    }
    
    keyDown=(e)=>{
        if(e.keyCode === 13){
            this.search()
        }
    }

    render() {
        return (
            <div className="search-wrapper">
                <div className="box">
                    <input ref={this.input} maxLength={12} type="tel" placeholder="请输入基金代号" onKeyUp={this.keyDown} />
                    <button className="search" onClick={this.search}>搜索</button>
                    <button className="radius" onClick={this.refres}>刷新数据</button>
                </div>
                {
                    this.props.children
                }
            </div>
        )
    }
}
