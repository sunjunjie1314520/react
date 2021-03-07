import React, { Component } from 'react'

import PropTypes from 'prop-types'

export default class index extends Component {

    static propTypes = {
        Select: PropTypes.func.isRequired
    }

    constructor(){
        super()
        this.state = {
            index: 0,
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
        this.setState({active: false, index: k})
    }

    render() {
        const { items, active, index } = this.state
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
