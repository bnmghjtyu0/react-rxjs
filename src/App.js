import React, { Component } from 'react'
import { render } from 'react-dom'
import Clock from './clock'
import SwitchMap from './rxjs/switchmap'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      intervalTime: 1000,
    }
  }
  incrementTime() {
    this.setState({
      intervalTime: this.state.intervalTime + 1000,
    })
  }
  decrementTime() {
    this.setState({
      intervalTime: this.state.intervalTime - 1000,
    })
  }
  render() {
    return (
      <div>
        {/* <button onClick={this.incrementTime.bind(this)}>Increment Time</button>
        <button onClick={this.decrementTime.bind(this)}>decrementTime Time</button>
        {`目前 ${this.state.intervalTime / 1000} 秒`}
        <Clock intervalTime={this.state.intervalTime} /> */}
        <SwitchMap />
      </div>
    )
  }
}
export default App
