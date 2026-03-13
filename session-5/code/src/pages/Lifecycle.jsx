import React, { Component } from "react";

class Lifecycle extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      name: "alex",
    };
  }

  componentDidMount = () => {
    // api calls
  };

  handleUpdate = () => {
    this.setState({
      name: "alaya",
    });
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    return true;
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log(prevState, this.state.name);
    return "snapshot";
  };

  getSnapshotBeforeUpdate = (prevProps, prevState, data) => {
    console.log(data);
  };

  componentWillUnmount = () => {
    clearTimeout();
  };

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <button onClick={this.handleUpdate}>Update</button>
      </div>
    );
  }
}

export default Lifecycle;
