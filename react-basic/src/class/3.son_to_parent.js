import { Component } from 'react'

class Son extends Component {
    render() {
        const {msg, onGetSonMsg} = this.props
        return (
            <> 
                <div>this is Son, {msg}</div>
                <button onClick={() => onGetSonMsg('this is Son msg')}>
                    changeMSg
                </button>
            </>
        )
    }
}

class App extends Component {
    state = {
        msg: 'this is initial app msg'
    }

    onGetSonMsg = (msg) => {
        this.setState({msg})
    }

    render() {
        return (
            <>
                <Son msg={this.state.msg} onGetSonMsg={this.onGetSonMsg}></Son>
            </>
        )
    }
}

export default App