
var baseURL;
if (process.env.NODE_ENV === 'development'){
    baseURL = 'http://127.0.0.1:8000/api';
} else {
    baseURL = 'https://active.okami.net.cn/api';
}
export default baseURL

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

export const compare = function({property, exclude, all}) {
    var length = property.split('.').length
    return function (a, b) {
        switch(length){

            case 1:
                var value1 = a[property]
                var value2 = b[property]
                let fields1 = exclude.split('.')
                let result = all ? all : a[fields1[0]][fields1[1]]
                if(result){
                    if (value1 > value2){
                        return -1
                    } else if (value1 < value2) {
                        return 1
                    } else {
                        return 0
                    }
                }
                break
            case 2:
                let fields2 = property.split('.')
                if (a[fields2[0]][fields2[1]] > b[fields2[0]][fields2[1]]) {
                    return -1
                } else if (a[fields2[0]][fields2[1]] < b[fields2[0]][fields2[1]]) { 
                    return 1
                } else {
                    return 0
                }
            case 3:
                let fields3 = property.split('.')
                if (a[fields3[0]][fields3[1]][fields3[2]] > b[fields3[0]][fields3[1]][fields3[2]]) {
                    return -1
                } else if (a[fields3[0]][fields3[1]][fields3[2]] < b[fields3[0]][fields3[1]][fields3[2]]) { 
                    return 1
                } else {
                    return 0
                }
            default:
                break
        }
    }
}

export const isDuringDate = function(beginDateStr, endDateStr){
    var Week = ['', '一', '二', '三', '四', '五', ''];
    var curDate = new Date(),
        year = curDate.getFullYear().toString(),
        month = curDate.getMonth() + 1 > 9 ? curDate.getMonth() + 1 : '0' + (curDate.getMonth() + 1),
        day = curDate.getDate() > 9 ? curDate.getDate().toString() : '0' + curDate.getDate().toString(),
        date = year.concat('-',month,'-', day, ' '),
        beginDate = new Date(date.concat(beginDateStr)),
        endDate = new Date(date.concat(endDateStr)),
        restday = Week[curDate.getDay()];
    
    if(curDate >= beginDate && curDate <= endDate && restday){
        return true;
    }
    return false;
}

//全屏
export const fullScreen = function(){
    var el = document.documentElement;
    var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;      
        if(typeof rfs != "undefined" && rfs) {
            rfs.call(el);
        };
      return;
}
//退出全屏
export const exitScreen = function(){
    try {
        if (document.exitFullscreen) {  
            document.exitFullscreen();  
        }  
        else if (document.mozCancelFullScreen) {  
            document.mozCancelFullScreen();  
        }  
        else if (document.webkitCancelFullScreen) {  
            document.webkitCancelFullScreen();  
        }  
        else if (document.msExitFullscreen) {  
            document.msExitFullscreen();  
        }
    } catch (error) {
        console.log(error);
    }
}

// 格式化
export const foramt = function(v){
    return `${v>0?'+':''}${v.toFixed(2)}%`
}