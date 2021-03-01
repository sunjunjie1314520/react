

var appReducer = function(state, action){
    if(!state){
        return {
            count: 0,
            loadding: false,
            data: []
        }
    }
    switch(action.type){
        case 'ADD_ONE':
            return {
                ...state,
                count: state.count + 1
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

export default appReducer