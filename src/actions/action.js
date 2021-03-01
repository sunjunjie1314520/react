var loadData = () => {
    return dispatch => {
        dispatch({type: 'LOAD_LOADING'})
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://okami.net.cn:8000/query')
        xhr.send()
        xhr.onreadystatechange = function(){
            if(xhr.status === 200 && xhr.readyState===4){
                let data = JSON.parse(xhr.response).data
                dispatch({type: 'LOAD_DONE', data: data})
            }
        }
    }
}

export { loadData }