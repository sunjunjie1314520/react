# window.innerHeight

# this.left_layout.current.offsetHeight

# this.a1.current.offsetTop


```javascript
    componentDidMount(){
        let w_hei = window.innerHeight
        let off_top = offsetTop(this.left_layout.current)
        this.left_layout.current.style.height = (w_hei - off_top - 16) +'px'
    }
```

import { offsetTop } from '../../utils';

# 启动服务器
npm run start
# 编译
cd gulp  
gulp

# 创建页面 快捷方法 rcc => 按Tab键

# 先引入后使用------------------------------

import { Input, DropDown, Frame, Move, ContainDown, ContainDown } from '../../components/UI';

import Pager from '../../components/Pager';

import Table, { Box, Li } from '../../components/Table';

# 构造器

```javascript

constructor(props){
    super(props)
    this.state = {

        // Input
        input1: '',
        input2: '',
        input3: '',

        // DropDown
        items1:['第一个菜单', '2'],
        index1: 0,

        // ContainDown
        down1: 0,
        down2: 0,
        down3: 0,
        down4: 0,
        down4: 0,

        // ContainDown
        time1: '',

        // Tabel 列字段
        fields1: [
            {
                width: 60,
                name: '序号',
            },
            {
                width: 180,
                name: '销售商场',
            },
        ],
        // Tabel 源数据
        data1: [
            {
                id: 1,
                bianma: 'xxxxxxxxxxxxx',
                check: false,
            },
            {
                id: 2,
                bianma: 'xxxxxxxxxxxxx',
                check: false,
            },
        ]
    }
}

```

# 输入框
    <Input title="公告通知" placeholder="请输入单号..." width="64%" value={this.state.field1} model={(v)=>this.setState({field1: v})} required></Input>
# 下拉选择
    <DropDown width="32%" items={this.state.items1} index={this.state.index1} onChange={(index)=> this.setState({index1: index})} required>类型</DropDown>
# 时间器
    <DateTime title="送货日期" model={(v)=> this.setState({time1: v})} required></DateTime>
# 分页
    <Pager></Pager>
# 包含
    <Input ltr={true} title="销售单号" value={this.state.input1} model={(v)=>this.setState({input1: v})}>
        <ContainDown index={this.state.down1} Select={(v)=> this.setState({down1: v})}></ContainDown>
    </Input>

    <Input split={true} title="销售商场" value={this.state.input2} model={(v)=>this.setState({input2: v})}>
        <ContainDown index={this.state.down2} Select={(v)=> this.setState({down2: v})}></ContainDown>
        <button className="pub-search"></button>
    </Input>

    <DateTime title="销售日期" width="23%" model={(v)=> this.setState({time1: v})} left={false}>
        <ContainDown index={this.state.down3} Select={(v)=>this.setState({down3: v})}></ContainDown>
    </DateTime


```javascript
// 方法放在 rander 函数上方
checkHandle(check, k){
    const { data1 } = this.state
    data1[k].check = check
    this.setState({
        data1: data
    })
}
```
    // 显示或隐藏 底部表单
    riDown = () => {
        const { bottom_alert } = this.state
        this.setState({
            bottom_alert: !bottom_alert
        })
    }

    // 表格复选框
    checkHandle(check, k){
        const {data1} = this.state
        data1[k].check = check
        this.setState({
            data1: data1
        })
    }

    // 显示或隐藏 弹窗
    slide = () => {
        const {alert1} = this.state
        this.setState({
            alert1: !alert1
        })
    }

# 表格
    <Table fields={this.state.fields1} bottom={42} picture={true}>
        {
            this.state.data1.map((v, k)=>{
                return (
                    <Li key={k} check={v.check}>
                        <Box w={this.state.fields1[0].width}>
                            <label className="pub-check">
                                <input onChange={(e)=>this.checkHandle(e.target.checked, k)} checked={v.check} type="checkbox" />{k+1}
                            </label>
                        </Box>
                        <Box w={this.state.fields1[1].width}>111</Box>
                        <Box w={this.state.fields1[2].width}>2222</Box>
                    </Li>
                )
            })
        }
    </Table>



# 代码提交

python push.py


