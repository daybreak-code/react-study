const articleType = 3

function getArticleTem (){
    if(articleType === 0) {
        return <div>Article 01</div>
    } else if(articleType === 1){
        return <div>Article 02</div>
    } else {
        return <div>Article 03</div>
    }
}

function App(){
    return (
        <div className="App">
            {getArticleTem()}
        </div>
    )
}

export default App