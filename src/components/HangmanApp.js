import React, { Component } from "react";
import Man from "./Man";
import Answer from "./Answer";
import Guess from "./Guess";
import alphabet from "alphabet";
import randomWords from "random-words";

class HangmanApp extends Component {
  state = {
    body: {
      top: [
        {
          name: "Head",
          svg: (
            <circle
              cx="40"
              cy="40"
              r="38"
              stroke="black"
              strokeWidth="3"
              fill="red"
              transform="translate(0 65)"
            />
          ),
          num: 1
        }
      ],
      middle: [
        {
          name: "Left Arm",
          svg: (
            <rect
              width="15"
              height="130"
              fill="red"
              strokeWidth="4"
              stroke="rgb(0,0,0)"
              rx="15"
              ry="15"
              transform="translate(60)"
            />
          ),
          num: 2
        },
        {
          name: "Body",
          svg: (
            <rect
              width="80"
              height="150"
              fill="red"
              strokeWidth="4"
              stroke="rgb(0,0,0)"
              rx="15"
              ry="15"
            />
          ),
          num: 3
        },
        {
          name: "Right Arm",
          svg: (
            <rect
              width="15"
              height="130"
              fill="red"
              strokeWidth="4"
              stroke="rgb(0,0,0)"
              rx="15"
              ry="15"
              transform="translate(5)"
            />
          ),
          num: 4
        }
      ],
      lower: [
        {
          name: "Left Leg",
          svg: (
            <rect
              width="15"
              height="150"
              fill="red"
              strokeWidth="4"
              stroke="rgb(0,0,0)"
              rx="15"
              ry="15"
              transform="translate(40)"
            />
          ),
          num: 5
        },
        {
          name: "Right Leg",
          svg: (
            <rect
              width="15"
              height="150"
              fill="red"
              strokeWidth="4"
              stroke="rgb(0,0,0)"
              rx="15"
              ry="15"
              transform="translate(20 )"
            />
          ),
          num: 6
        }
      ]
    },
    guesses: {
      correct: [],
      wrong: []
    },
    answer: randomWords()
      .toUpperCase()
      .split(""),
    alphabet: alphabet.upper,
    result: ""
  };
  onGuessHandle = guess => {
    let correct = this.state.guesses.correct;
    let wrong = this.state.guesses.wrong;
    const answer = this.state.answer;
    // if answer isn't in correct guesses array...
    if (!correct.includes(guess)) {
      // ...and matches a letter in the answer...
      if (answer.includes(guess)) {
        correct = correct.concat(guess);
      } else {
        wrong = wrong.concat(guess);
      }
    }
    this.setState({
      guesses: {
        correct,
        wrong
      }
    });
  };
  render() {
    return (
      <div>
        <h1>Hangman</h1>
        <Man guesses={this.state.guesses} body={this.state.body} />
        <Answer guesses={this.state.guesses} answer={this.state.answer} />
        <Guess
          result={this.state.result}
          answer={this.state.answer}
          guesses={this.state.guesses}
          alphabet={this.state.alphabet}
          onGuessHandle={this.onGuessHandle}
        />
      </div>
    );
  }
}

export default HangmanApp;
