// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  onButtons = () => {
    this.setState({text: 'Subscribed'})
  }

  render() {
    const {text} = this.state

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <div>
          <button type="button" className="button" onClick={this.onButtons}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
