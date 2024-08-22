//1. callback
function fetchData(url, callback){
    //1. 执行异步调用
    //2. 模仿异步回调
    setTimeout(() => {
        callback("success data");
    }, 1000);
}

fetchData("localhost:8080/test", function(data) {
    console.log(data)
})


//2. Promise
function fetch(url){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //1. call got response data
            resolve("success");

            //reject('failure')
        }, 1000);
    })
}

fetch('localhost:8080/test').then((data) => {
    console.log(data)
}).catch((error)=> {
    console.log(error)
})

//3. Aysnc/Await
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
    } catch (error) {
        console.log(error)
    }
}
