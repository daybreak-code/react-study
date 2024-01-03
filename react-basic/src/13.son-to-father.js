import {useSate} from 'react'

function Son ({onGetSonMsg}){
    const sonMsg = 'this is son msg'
    return (
        <div>
            this is son
            <button onClick={() => onGetSonMsg(sonMsg)}>sendMsg</button>
        </div>
    )
}

function App (){
    const [msg, setMsg] = useSate('')
    const getMsg = (msg) => {
        console.log(msg)
        setMsg(msg)
    }
    return (
        <div>
            this is App, {msg}
            <Son onGetSonMsg={getMsg} />
        </div>
    )
}