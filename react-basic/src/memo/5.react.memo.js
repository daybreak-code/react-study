import React, {useState} from 'react'

function arePropsEqual(oldProps, newProps) {
    console.log(oldProps, newProps)
    return (
        oldProps.list.length === newProps.list.length &&
        oldProps.list.every((oldItem, index) => {
            const newItem = newProps.list[index]
            console.log(newItem, oldItem)
            return oldItem === newItem
        })
    )
}

const MemoSon = React.memo(function Son(){
    console.log('子组件被重新渲染了')
    return <div>this is span</div>
}, arePropsEqual)

function App(){
    console.log('父组件被重新渲染了')
    const [list, setList] = useState([1,2,3])
    return (
        <>
            <MemoSon list={list} />
            <button onClick={() => setList([1,2,3])}>
                内容一样{JSON.stringify(list)}
            </button>
            <button onClick={() => setList([4,5,6])}>
                内容不一样{JSON.stringify(list)}
            </button>
        </>
    )
}

export default App