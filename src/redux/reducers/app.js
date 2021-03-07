const init = {
    count: 1,
    loadding: false,
    data: [],
}

export default function reducer(state=init, action){
    const {type, data} = action
    switch(type){
        case 'ADD_ONE':
            return {
                ...state,
                count: state.count + data > 0 ? state.count + data : state.count
            }
        case 'LOAD_LOADING':
            return {
                ...state,
                loadding: true,
                data: []
            }
        case 'LOAD_DONE':
            return {
                ...state,
                loadding: false,
                data: action.data
            }
        default:
            return state
    }
}