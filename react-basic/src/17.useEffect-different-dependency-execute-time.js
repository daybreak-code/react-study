import { useEffect,useState } from "react";

function App(){
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('been executed')
    }, [count])

    return (
        <div>
            this is app
            <button onClick={() => setCount(count+1)}>+{count}</button>
        </div>
    )
}

export default App