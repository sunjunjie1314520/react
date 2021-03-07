
export const addOne = data => ({type: 'ADD_ONE', data})

export const loadLoading = () => ({type: 'LOAD_LOADING'})

export const loadDone = data => ({type: 'LOAD_DONE', data})

export const loadDataAsync = () => {
    return dispatch => {
        dispatch(loadLoading())
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://okami.net.cn:8000/query')
        xhr.send()
        xhr.onreadystatechange = function(){
            if(xhr.status === 200 && xhr.readyState===4){
                let data = JSON.parse(xhr.response).data
                dispatch(loadDone(data))
            }
        }
    }
}