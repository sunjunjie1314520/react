import React, { Component, createRef } from 'react'

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
            data: [
                {
                    src: 'http://img.sccnn.com/bimg/338/70540.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/338/70477.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/341/22386.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/338/70432.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/338/70541.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/338/70568.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/340/02119.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/341/22457.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/340/02127.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/340/02126.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/340/02121.jpg'
                },
                {
                    src: 'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0824ab18972bd40797d8db1179899e510fb3093a.jpg'
                },
                // 1
                {
                    src: 'http://img.sccnn.com/bimg/338/70540.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/338/70477.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/341/22386.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/338/70432.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/338/70541.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/338/70568.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/340/02119.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/341/22457.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/340/02127.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/340/02126.jpg'
                },
                {
                    src: 'http://img.sccnn.com/bimg/340/02121.jpg'
                },
                {
                    src: 'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0824ab18972bd40797d8db1179899e510fb3093a.jpg'
                },
            ]
        }
    }

    componentDidMount(){
        const { col, margin } = this.props
        let array = new Array(col)
        for(var i =0; i< array.length; i++){
            array[i] = 0
        }

        let win_width = this.layout.current.offsetWidth - margin
        this.setState({
            array: array,
            width:  win_width / col - margin,
        })

    }
    load=(e, index)=>{

        console.group(`第${index+1}张`);

        const { height } = e.target
        const { data, array, width, count } = this.state
        const { margin, col } = this.props
        
        if(count%col === 0){
            for(var i = 0; i< array.length; i++){
                array[i] = array[i] + margin
            }
        }

        let min = Math.min(...array)
        
        console.log('array =>', array)
        console.log('min', min)

        var index1 = array.findIndex(item => item===min)
        console.log('find =>', index1)

        let top = array[index1]
        array[index1] = top + height
                
        data[index].left = index1 * width + margin*(index1+1)
        data[index].top = min
        data[index].load = true

        console.log(array)

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
            max: max,
            count: count + 1,
        })

        console.groupEnd();
    }

    handleScroll(e) {
        // console.log(e.nativeEvent);
        const x = 130

        const { translate, max } = this.state
        const { margin } = this.props

        if (e.nativeEvent.deltaY <= 0) {
            console.log('up');
            let up = translate + x
            console.log(up);
            this.setState({
                translate: up >= 0 ? 0 : up
            })
        } 
        else{
            console.log('down');
            let down = translate - x
            var a = this.layout.current.clientHeight
            let res = (max + margin - a) * -1
            console.log(down, res);
            this.setState({
                translate: down<res ? res : down
            })
        }
    }
    render() {
        const {data, width, max, translate} = this.state
        return (
            <div className="wrap-image" ref={this.layout} onWheel={(e) => this.handleScroll(e)}>
                <div className="box" style={{height: `${max}px`, transform: `translate3d(0, ${translate}px, 0)`}} all={data.length + '张'}>
                    <ul>
                        {
                            data.map((v, k)=>{
                                return (
                                    <li key={k} style={{left: `${v.left}px`, top: `${v.top}px`, width: `${width}px`}}>
                                        <img style={{visibility: v.load ? 'visible':'hidden'}} onLoad={e=> this.load(e, k)} src={v.src} alt=""/>
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