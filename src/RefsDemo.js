import React, { Component } from "react";

export default class RefsDemo extends React.Component {
  constructor(pros) {
    super(pros);
    this.inputRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }
  handleClick() {
    alert(this.inputRef.current.value);
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
