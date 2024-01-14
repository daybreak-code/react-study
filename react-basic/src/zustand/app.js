import useStore from "./store";

function App(){
    const { count, inc} = useStore()
    return <button onCluck={inc}>{count}</button>
}

export default App