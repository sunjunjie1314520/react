import React, { Component, createRef } from 'react'

import PropTypes from 'prop-types';

import './index.styl'

export default class index extends Component {
    constructor(){
        super()
        this.layout = createRef()    
        this.state = {
            array: [],
            width: null,
            max: 0,
            count: 0,
            translate: 0,
        }
    }

    static propTypes = {
        additional: PropTypes.number
    }

    static defaultProps = {
        additional: 0
    }

    componentDidMount(){
        const { col, margin } = this.props

        // console.log(col);

        let array = new Array(col)
        for(var i = 0; i < array.length; i++){
            array[i] = 0
        }

        let win_width = this.layout.current.offsetWidth - margin
        this.setState({
            array: array,
            width:  win_width / col - margin,
        })

    }

    load=(e, index)=>{

        // console.group(`第${index+1}张`);

        const { height } = e.target
        const { array, width, count } = this.state
        const { margin, col, data, additional } = this.props
        
        if(count % col === 0){
            for(var i = 0; i< array.length; i++){
                array[i] = array[i] + margin + (count > col-1 ? additional : 0)
            }
        }

        let min = Math.min(...array)
        
        // console.log('array =>', array)
        // console.log('min', min)

        var index1 = array.findIndex(item => item===min)
        // console.log('find =>', index1)

        let top = array[index1]
        array[index1] = top + height
                
        data[index].left = index1 * width + margin*(index1+1)
        data[index].top = min
        data[index].load = true

        // console.log(array)

        let max = Math.max(...array)
        
        // console.log(window.innerWidth - document.body.scrollWidth)
        // console.log(window.innerWidth - document.body.clientWidth)
        // console.log(window.innerWidth - document.body.scrollLeft)

        // console.log(document.body.scrollHeight)
        // console.log(window.innerHeight , document.documentElement.clientHeight)
        
        // let is_scroll = this.layout.current.scrollHeight > this.layout.current.clientHeight
        // let scroll = (is_scroll ? 17 : 0)
        // let move = this.layout.current.scrollHeight - this.layout.current.clientHeight
        // console.log(move);

        this.setState({
            // width: win_width / col - margin,
            data: data,
            array: array,
            max: max + additional,
            count: count + 1,
        })

        console.groupEnd();
    }

    handleScroll(e) {
        const x = 130

        const { translate, max } = this.state
        const { margin } = this.props

        if (e.nativeEvent.deltaY <= 0) {
            let up = translate + x
            this.setState({
                translate: up >= 0 ? 0 : up
            })
        } 
        else{
            let down = translate - x
            let a = this.layout.current.clientHeight
            let res = (max + margin - a) * -1
            this.setState({
                translate: down < res ? res : down
            })
        }
    }

    componentDidUpdate(){
        
    }

    render() {
        const {width, max, translate} = this.state
        const { data } = this.props
        return (
            <div className="wrap-image" ref={this.layout} onWheel={(e) => this.handleScroll(e)}>
                <div className="box" style={{height: `${max}px`, transform: `translate3d(0, ${translate}px, 0)`}} all={data.length + '张'}>
                    <ul>
                        {
                            data.map((v, k)=>{
                                return (
                                    <li key={k} style={{left: `${v.left}px`, top: `${v.top}px`, width: `${width}px`}} onClick={(e)=> this.props.click(e)}>
                                        <div className="pict">
                                            <p>
                                                <a className="fr" href="/" title=""><i className="ico-cang i1"></i><i className="ico-cang"></i>收藏</a>
                                                <a className="fr" href="/" title=""><i className="ico-zang i1"></i><i className="ico-zang"></i>100082</a>
                                            </p>
                                            <img style={{visibility: v.load ? 'visible':'hidden'}} onLoad={e=> this.load(e, k)} src={v.src} alt=""/>
                                        </div>
                                        <div className="text">
                                            <b className="sp1">春暖花开-面朝大海，喧市的心灵港湾</b>
                                            <p>上传人：李嘉霖</p>
                                        </div>
                                        <div className="ctcase">
                                            <a className="c1" href="/">深 圳</a>
                                            <a className="c2" href="/">云景尚峰</a>
                                            <a className="c3" href="/">独栋别墅</a>
                                            <a className="c4" href="/">现代/简约</a>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}