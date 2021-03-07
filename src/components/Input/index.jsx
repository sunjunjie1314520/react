import React, { Component, createRef } from 'react'

import PropTypes from 'prop-types';

export default class Input extends Component {

    constructor(props){
        super(props)
        this.state = {
            down: false,
        }
    }

    select(k){
        this.blur()
        this.props.onChange(k)
    }

    focus = () =>{
        this.setState({down: true})
    }

    blur = () =>{
        this.setState({down: false})
    }

    render() {
        const {items, index} = this.props
        const { down } = this.state
        return (
            <li className={down ?'pub-borderColor':''} style={{width: this.props.width}} onMouseLeave={this.blur}>
                <span>{this.props.children}：</span>
                <div className="input-wrap">
                    {/* 下拉选择框 */}
                    <input type="text" onClick={this.focus} readOnly="readonly" value={items[index]} placeholder={this.props.placeholder}/>
                    {/* 下拉按钮 */}
                    <button onClick={this.focus} className="pub-down"></button>
                    {/* 下拉选择结构 */}
                    <div className="pub-drop-down" style={{display: down ? 'block' : 'none'}}>
                        {
                            items.map((v, k)=>{
                                return <span onClick = {()=> this.select(k)} key={k}>{v}</span>
                            })
                        }
                    </div>
                    {/* 必填项 */}
                    {this.props.required ? <var className="pub-asterisk">*</var> : ''}
                </div>
            </li>
        )
    }
}

class InputPub extends Component {

    static propTypes = {
        model: PropTypes.func.isRequired
    }

    static defaultProps = {
        title: '默认标题',
        value: '-',
        placeholder: '请输入...'
    }

    constructor(props){
        super(props)
        this.input = createRef()
        this.state = {
            active: false,
        }
    }

    focus = () =>{
        this.setState({active: true})
    }

    blur = () =>{
        this.setState({active: false})
        console.log(this.props.value);
    }

    render() {
        const { active } = this.state
        return (
            <li className={active ?'pub-borderColor':''} style={{width: this.props.width}}>
                {/* 标题 */}
                <span>{this.props.title}：</span>
                <div className="input-wrap">
                    {/* 输入框 */}
                    <input placeholder={this.props.placeholder} type="text" name="" onBlur={this.blur} onChange={(e)=>this.props.model(e.target.value)} onFocus={this.focus} ref={this.input} value={this.props.value}  />
                    {/* 主体内容 */}
                    {this.props.children}
                    {/* 必填项 */}
                    {this.props.required ? <var className="pub-asterisk">*</var> : ''}
                </div>
            </li>
        )
    }
}


export { InputPub }