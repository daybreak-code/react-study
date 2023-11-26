import {useSate} from "react"

function A ({onGetAName}) {
    const name = 'this is A name'
    return (
        <div>
            this is A component
            <button onClick={() => onGetAName(name)}>send</button>
        </div>
    )
}

function B ({name}){
    return (
        <div>
            this is B Component,
            {name}
        </div>
    )
}

function App () {
    const [name, setName] = useSate('')
    const getAName = (name) => {
        console.log(name)
        setName(name)
    }
    return (
        <div>
            this is App
            <A onGetAName={getAName} />
            <B name={name} />
        </div>
    )
}

export default App