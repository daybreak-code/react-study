import './index.css'

const style = {
    color: 'red',
    fontSize: '50px'
}

function App (){
    return (
        <div>
            <span style={style}>this is span</span>
            <span className='foo'>this is class for foo</span>
        </div>
    )
}

export default App