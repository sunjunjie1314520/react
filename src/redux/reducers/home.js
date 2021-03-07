import { Read } from '../../utils'

let res = Read('default')

let normal = [
    {
        title: '主页',
        path:'/home/index',
        close: false,
    },
]

const init = {
    tabs: res ? res: normal
}

export default function reducer(state=init, action){
    const {type, data} = action
    switch(type){
        case 'ADD_OPEN_TABS':
            const result = state.tabs.find(item => {
                return item.path === data.path
            })
            let new_tabs = [...state.tabs]
            
            if(new_tabs.length > 10){
                new_tabs.splice(1, 1)
            }
            return result ? state : {
                ...state,
                tabs: [...new_tabs, data]
            }
        case 'CLOSE_TABS':
            let news = [...state.tabs]
            news.splice(data, 1)
            return {
                ...state,
                tabs: news
            }
        default:
            return state
    }
}