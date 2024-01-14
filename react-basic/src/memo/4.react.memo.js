import React, {useState} from 'react'

const MemoSon = React.memo(function Son(){
    console.log('子组件被重新渲染了')
    return <div>this is span</div>
})

function App(){
    const [list, setList] = useState([1,2,3])
    return (
        <>
            <MemoSon list={list} />
            <button onClick={() => setList([1,2,3])}>
                {JSON.stringify(list)}
            </button>
        </>
    )
}

export default App