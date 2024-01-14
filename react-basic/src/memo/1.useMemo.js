import { useState } from 'react'

function factorialOf(n) {
    console.log('斐波那契函数执行了')
    return n <= 0 ? 1 : n * factorialOf(n - 1)
}

function App(){
    const [count, setCount] = useState(0)
    const sumByCount = factorialOf(count)
    const [num, setNum] = useState(0)

    return (
        <>
            {sum}
            <button onClick={() => setCount(count + 1)}>+count:{count}</button>
            <button onClick={() => setNum(num + 1)}>+num:{num}</button>
        </>
    )
}

export default App