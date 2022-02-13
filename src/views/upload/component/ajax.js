// 自己封装的ajax
export default function ajax(options){
    // 创建xhr 对象
    const xhr = new XMLHttpRequest();
    const action = options.action;
    const fd = new FormData(); // h5用来上传文件的api
    
    fd.append(options.filename,options.file)
    // 开启请求 上传的文件和文件名
    xhr.onerror = function (err) {
        if( options.onError  )options.onError(err); // 触发错误回调
    }
    xhr.onload = function () {
        let text = xhr.responseText || xhr.response;
       if(options.onSuccess)options.onSuccess(text) //成功回调
    }
    xhr.upload.onprogress = function (e) {
        if(e.total>0){
            e.percent = e.loaded / e.total * 100;
        }
        options.onProgress(e)
    }
    xhr.open('post',action,true)
    // // 发送请求
    xhr.send(fd); // 传递文件对应的数据

    return xhr;
}  