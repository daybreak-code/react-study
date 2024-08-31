function get(object, path, defaultValue = undefined){
    if(object == null){
        return defaultValue;
    }
    const keys = Array.isArray(path) ? path : path.split('.');
    let current = object;
    for (let key of keys) {
        if (!isNaN(parseInt(key, 10))){
            key = parseInt(key, 10);
        }
        if (current == null || !(key in current)){
            return defaultValue;
        }
        current = current[key];
    }
    return current;
}
