import { useRef } from "react"

function App (){
    const inputRef = useRef(null)
    const showDom = () => {
        console.dir(inputRef.current)
    }
    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={showDom}>Got Dom</button>
        </div>
    )
}

export default App