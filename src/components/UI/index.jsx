import React, { Component, createRef } from 'react';

import PropTypes from 'prop-types'

import { offsetTop } from '../../utils';

import { DatePicker } from 'antd';

class Input extends Component {

    static propTypes = {
        model: PropTypes.func.isRequired
    }

    static defaultProps = {
        title: '默认标题',
        value: '-',
        placeholder: '',
        ltr: false,
        split: false,
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
                    {
                        this.props.ltr ? this.props.children : ''
                    }
                    {
                        this.props.split ? this.props.children[0] : ''
                    }
                    <input placeholder={this.props.placeholder} type="text" name="" onBlur={this.blur} onChange={(e)=>this.props.model(e.target.value)} onFocus={this.focus} ref={this.input} value={this.props.value}  />
                    {/* 主体内容 */}
                    {
                        this.props.ltr ? '' : this.props.split ? this.props.children[1] : this.props.children
                    }
                    {/* 必填项 */}
                    {this.props.required ? <var className="pub-asterisk">*</var> : ''}
                </div>
            </li>
        )
    }
}


class DateTime extends Component {

    static propTypes = {
        model: PropTypes.func.isRequired
    }

    static defaultProps = {
        title: '默认标题',
        left: true,
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
            <li className={active ? 'pub-borderColor' : ''} style={{width: this.props.width}}>
                {/* 标题 */}
                <span>{this.props.title}：</span>
                <div className={`input-wrap J-datepicker-day ${this.props.left ? '' : 'no'}`}>
                    {this.props.children}
                    <DatePicker bordered={false} onFocus={this.focus} onBlur={this.blur} onChange={(e, string)=>this.props.model(string)}></DatePicker>
                    {/* 必填项 */}
                    {this.props.required ? <var className="pub-asterisk">*</var> : ''}
                </div>
            </li>
        )
    }
}

class DropDown extends Component {

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

class Frame extends Component {

    static propTypes = {
        bottom: PropTypes.number
    }

    static defaultProps = {
        bottom: 0
    }

    constructor(props){
        super(props)
        this.wrapper = createRef()
        this.state = {
            height: null,
        }
    }
    
    componentDidMount(){
        const { bottom } = this.props
        let w_hei = window.innerHeight
        let off_top = offsetTop(this.wrapper.current)
        this.wrapper.current.style.height = `${w_hei - off_top - bottom}px`
        this.setState({
            height: w_hei - off_top
        })
    }

    componentDidUpdate(){
        const { bottom } = this.props
        const { height } = this.state
        this.wrapper.current.style.height = `${height - bottom}px`
    }

    render() {
        return (
            <div {...this.props} ref={this.wrapper}>
                {this.props.children}
            </div>
        )
    }
}

class ContainDown extends Component {

    static propTypes = {
        Select: PropTypes.func.isRequired
    }

    static defaultProps = {
        index: 0,
    }

    constructor(){
        super()
        this.state = {
            items: ['含', '=', '≠', '&gt;', '&lt;', '≥', '≤'],
            active: false,
        }
    }

    select = (active) => {
        this.setState({
            active: active,
        })
    }

    click(k){
        this.props.Select(k)
        console.log(k);
        this.setState({
            active: false,
        })
    }

    render() {
        const { items, active } = this.state
        const { index } = this.props
        return (
            <div className="select-down" onMouseLeave={()=> this.select(false)}>
                <h2 onClick={()=> this.select(true)} dangerouslySetInnerHTML={{__html: items[index]}}></h2>
                <div className="box" style={{display: active ? 'block': 'none'}}>
                    {
                        items.map((v, k)=>{
                            return <span onClick={()=> this.click(k)} key={k} dangerouslySetInnerHTML={{__html: v}}></span>
                        })
                    }
                </div>
            </div>
        )
    }
}

class Move extends Component{

    constructor(){
        super()
        this.move = createRef()
    }
    static propTypes = {
        model: PropTypes.bool
    }

    static defaultProps = {
        model: false,
    }

    componentDidMount(){
        this.init()
    }

    init(){
        const drag = this.move.current.firstChild // 移动的对象
        const drag1 = this.move.current.firstChild.firstChild //按下的对象
        drag1.onmousedown = function(event){
            event.stopPropagation()
            event.preventDefault()
            var diffX = event.clientX - drag.offsetLeft
            var diffY = event.clientY - drag.offsetTop
            if(typeof drag.setCapture !== 'undefined'){
                    drag.setCapture(); 
            }
            document.onmousemove = function(event){
                var moveX = event.clientX - diffX
                var moveY = event.clientY - diffY
                if(moveX < 0){
                    moveX = 0
                }else if(moveX > window.innerWidth - drag.offsetWidth){
                    moveX = window.innerWidth - drag.offsetWidth
                }
                if(moveY < 0){
                    moveY = 0
                }else if(moveY > window.innerHeight - drag.offsetHeight){
                    moveY =  window.innerHeight - drag.offsetHeight
                }
                drag.style.left = moveX + 'px';
                drag.style.top = moveY + 'px'
            }
            document.onmouseup = function(event){
                this.onmousemove = null;
                this.onmouseup = null;
                //修复低版本ie bug  
                if(typeof drag.releaseCapture!='undefined'){  
                    drag.releaseCapture();  
                }  
            }
        }
    }

    componentDidUpdate(){
        
        if(this.props.model){
            let w = window.innerWidth
            let h = window.innerHeight
            const firstChild = this.move.current.firstChild
            let height = firstChild.offsetHeight
            let width = firstChild.offsetWidth
            console.log(w, width, height);
            firstChild.style.left = (w-width)/2 + 'px'
            firstChild.style.top = (h-height)/2 + 'px'
        }
        
    }

    render(){
        return (
            <div className="pub-shadow" style={{display: this.props.model ? 'block': 'none'}} ref={this.move}>
                {this.props.children}
            </div>
        )
    }
}

export { Input, DropDown, Frame, ContainDown, DateTime, Move }