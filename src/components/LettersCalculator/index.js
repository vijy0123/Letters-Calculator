// Write your code here.
import {Component} from 'react'

import './index.css'

class LetterCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInputPhrase = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                type="text"
                className="letters-input"
                id="phraseText"
                placeholder="Enter the phrase"
                onChange={this.onChangeInputPhrase}
                value={inputPhrase}
              />
            </div>
            <p className="letters-count">No.of letters: {inputPhrase.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="letters-calculator-image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LetterCalculator
