import { useState } from "react"

function App (){
    let [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    const [form, setForm] = useState({name: 'jack'})

    const changeForm = () => {
        setForm({
            ...form,
            name: 'john'
        })
    }

    return (
        <div>
            <button onClick={handleClick}>{count}</button>
            <button onClick={changeForm}>modify form {form.name}</button>
        </div>
    )
}