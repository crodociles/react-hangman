import React, { Component } from "react";
import BodyPart from "./BodyPart";

class BodyRow extends Component {
  render() {
    return (
      <div>
        {this.props.row.map((part, index) => (
          <BodyPart guesses={this.props.guesses} key={index} part={part} />
        ))}
      </div>
    );
  }
}

export default BodyRow;
