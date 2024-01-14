import { Component } from 'react'

class Son extends Component {
    render() {
        const { count } = this.props
        return <div>this is Son, {count}</div>
    }
}

class App extends Component {
    state = {
        count: 0
    }

    setCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return (
            <>
                <Son count={this.state.count} />
                <button onClick={this.setCount}>+</button>
            </>
        )
    }
}

export default App

//父传子用 props
//子传父用 方法调用