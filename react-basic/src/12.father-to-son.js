function Son(props){
    console.log(props)
    return <div>this is Son, {props.name}, jsx: {props.child}</div>
}

function App (){
    const name = 'this is app name'
    return (
        <div>
            <Son 
                name={name}
                age={18}
                isTure={false}
                list={['vue']}
                cb={() => console.log('123')}
                child={<span>this is span</span>}
            />
        </div>
    )
}

export default App