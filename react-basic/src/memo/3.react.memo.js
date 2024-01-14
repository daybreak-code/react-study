import { useState } from 'react'

function Son() {
    console.log('子组件被重新渲染了')
    return <div>this is Son</div>
}

function App(){
    const [, forceUpdate] = useState()
    console.log('父组件重新渲染了')
    return (
        <>
            <Son />
            <button onClick={() => forceUpdate(Math.random())}>update</button>
        </>
    )
}

export default App