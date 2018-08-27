import React, { Component } from "react";

const BodyPart = props => (
  <div>
    <svg width="80" height="150">
      {props.part.num <= props.guesses.wrong.length ? props.part.svg : ""}
    </svg>
  </div>
);

export default BodyPart;
