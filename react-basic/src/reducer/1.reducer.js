import { useReducer } from 'react'

function reducer(state, action) {
    console.log('start to execute reducer ...')
    switch (action.type) {
        case 'INC':
            return state + 1
        case 'DEC':
            return state - 1
        case 'UPDATE':
            return state + action.payload
        default:
            return state
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, 0)
    return (
        <>
            <button onClick={() => dispatch({type: 'DEC'})}>-</button>
            {state}
            <button onClick={() => dispatch({type: 'INC'})}>-</button>
            <button onClick={() => dispatch({type: 'UPDATE', payload: 100})}>
                update to 100
            </button>
        </>
    )
}

export default App
