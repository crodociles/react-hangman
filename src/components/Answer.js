import React, { Component } from "react";

class Answer extends Component {
  render() {
    return (
      <div className="answer-wrapper">
        {this.props.answer.map((letter, index) => {
          return (
            <div className="answer-letter" key={index}>
              {this.props.guesses.correct.includes(letter)
                ? ` ${letter} `
                : " ? "}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Answer;
