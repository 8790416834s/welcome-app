import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {text: true}

  onButtons = () => {
    this.setState(prevState => ({text: !prevState.text}))
  }

  onAuthButton = () => {
    const {text} = this.state
    if (text) {
      return (
        <button type="button" className="button" onClick={this.onButtons}>
          Subscribe
        </button>
      )
    }
    return (
      <button type="button" className="button" onClick={this.onButtons}>
        Subscribed
      </button>
    )
  }

  render() {
    const {text} = this.state

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <div>{this.onAuthButton()}</div>
      </div>
    )
  }
}

export default Welcome
