import { useMemo, useState } from 'react'

function fib(n){
    console.log('计算函数执行了')
    if (n < 3) return 1
    return fib(n - 2) + fib(n -1)
}

function App(){
    const [count, setCount] = useState(0)

    const sum = useMemo(() => {
        return fib(count)
    }, [count])

    const [num, setNum] = useState(0)

    return (
        <>
            {sum}
            <button onClick={() => setCount(count + 1)}>+count:{count}</button>
            <button onClick={() => setNum(num + 1)}>+count:{count}</button>
        </>
    )
}