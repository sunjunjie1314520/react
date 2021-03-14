import React, { Component } from 'react'
import Waterfall from '../../components/Waterfall';

export default class Waterfall extends Component {
    render() {
        return (
            <div>
                <Waterfall col={4} margin={15}></Waterfall>
            </div>
        )
    }
}
