import React, { Component } from "react";
import BodyRow from "./BodyRow";

class Man extends Component {
  render() {
    return (
      <div>
        {this.props.guesses.wrong.length === 6 && (
          <p>Sorry, looks like he died! Refresh page to try again</p>
        )}
        {this.props.result}

        <div className="body-top">
          <BodyRow guesses={this.props.guesses} row={this.props.body.top} />
        </div>
        <div className="body-middle">
          <BodyRow guesses={this.props.guesses} row={this.props.body.middle} />
        </div>
        <div className="body-lower">
          <BodyRow guesses={this.props.guesses} row={this.props.body.lower} />
        </div>
      </div>
    );
  }
}

export default Man;
