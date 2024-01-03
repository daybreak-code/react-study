function App (){
    const handleClick = (name, e) => {
        console.log('button been clicked', name, e)
    }
    return (
        <div className="App">
            <button onClick={(e) => handleClick('jack', e)}>click me</button>
        </div>
    )
}

export default App