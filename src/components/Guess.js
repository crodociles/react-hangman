import React, { Component } from "react";

class Guess extends Component {
  render() {
    return (
      <div>
        {this.props.result}
        {this.props.alphabet.map(letter => {
          return (
            <button
              className="guess-letter"
              disabled={this.props.guesses.correct.includes(letter)}
              key={letter}
              onClick={e => {
                this.props.onGuessHandle(e.target.innerHTML);
              }}
              disabled={
                this.props.guesses.correct.includes(letter) ||
                this.props.guesses.wrong.includes(letter)
              }
            >
              {letter}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Guess;
