function debounce(func, wait, immediate = false){
    let timeout;
    return function(){
        const context = this;
        const args = arguments;

        if(timeout !== undefined){
            clearTimeout(timeout);
        }

        if(immediate && !timeout){
            func.apply(context, args);
        }

        setTimeout(() => {
            timeout = undefined;
            if(!immediate){
                func.apply(context, args);
            }
        }, wait)

    }
}