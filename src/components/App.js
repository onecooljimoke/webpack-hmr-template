import React, { Component } from "react";
import Example from "example";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(
      this.increment.bind(this),
      1000
    )
  }

  increment() {
    this.setState(({ counter }) => {
      return {counter: counter + 10};
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { counter } = this.state;

    return (
      <header>
        <div>Webpack is doing its thing with React and Jeff</div>
        <div>{counter}</div>
        <Example title="Hey Asterisk" />
      </header>
    );
  }
}
