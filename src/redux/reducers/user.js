

var appReducer = function(state, action){
    if(!state){
        return {
            name: 'sdfdfd',
            list: [
                {
                    username: '1052',
                    abc: '4544'
                },
                {
                    username: '10asdfasd5a2',
                    abc: '4544'
                },
            ],
            appid: '',
            password:''
        }
    }
    switch(action.type){
        case 'ADD_ONE1':
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state
    }
}

export default appReducer