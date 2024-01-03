const count = 100

function getName(){
    return 'jack'
}

function App (){
    return (
        <div className="App">
            this is App
            <br/>
            {'this is message'}
            <br/>
            {count}
            <br/>
            {getName()}
            <br/>
            {new Date().getDate()}
            <br/>
            <div style={{color: 'red'}}>this is div</div>
        </div>
    )
}

export default App