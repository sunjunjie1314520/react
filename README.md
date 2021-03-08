# window.innerHeight

# this.left_layout.current.offsetHeight

# this.a1.current.offsetTop

import { offsetTop } from '../../utils';

import { DropDown } from '../../components/UI';

import Pager from '../../components/Pager';

constructor(){
    super()
    this.left_layout = createRef()
    this.right_layout = createRef()
    this.state = {}
}

componentDidMount(){
    let w_hei = window.innerHeight
    let off_top = offsetTop(this.left_layout.current)
    this.left_layout.current.style.height = (w_hei - off_top - 16) +'px'
}

# 输入框
    <Input title="公告通知" width="64%" value={this.state.fields1} required model={(v)=>this.setState({fields1: v})}></Input>
# 下拉选择
    <DropDown width="32%" items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})} required>类型</DropDown>