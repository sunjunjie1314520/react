export const Read = function(key){
    let res = window.localStorage.getItem(key)
    return JSON.parse(res)
}

export const Save = function(key, json){
    window.localStorage.setItem(key, JSON.stringify(json))
}

export const offsetTop = function(elem){ 
    var top = elem.offsetTop;
    var parent = elem.offsetParent;
    while(parent){ 
        top += parent.offsetTop;
        parent = parent.offsetParent;
    }
    return top;
}