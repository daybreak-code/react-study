import { useEffect,useState } from "react";

function Son (){
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('timer is working')
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])
    return <div>this is Son</div>
}

function App (){
    const [show, setShow] = useState(true)
    return (
        <div>
            {show && <Son />}
            <button onClick={() => setShow(false)}>remove Son Component</button>
        </div>
    )
}

export default App