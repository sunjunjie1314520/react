import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <>
                <div className="pages">
                    <div className="wrap">
                        <a className="nolink" href="/" title="">上一页</a>
                        <a href="/" title="">1</a>
                        <a href="/" title="">2</a>
                        <a className="curr" href="/" title="">3</a>
                        <a href="/" title="">4</a>
                        <a href="/" title="">5</a>
                        <a href="/" title="">6</a>
                        <a href="/" title="">7</a>
                        <span>...</span>
                        <a href="/" title="">下一页</a>
                        <a href="/" title="">50</a>
                        <p>
                            <span>跳转到：</span>
                            <input type="text" name="" />
                            <button>GO</button>
                        </p>
                    </div>
                </div>
            </>
        )
    }
}
