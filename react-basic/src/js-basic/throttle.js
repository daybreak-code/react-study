function throttle(fn, delay = 500){
    let oldTime = Date.now();
    return function(...args){
        let newTime = Date.now();
        if(newTime - oldTime > delay){
            fn(null, args);
        }
        oldTime = Date.now();
    }
}