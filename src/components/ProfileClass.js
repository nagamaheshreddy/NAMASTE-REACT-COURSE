import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count1: 0,
      count2: 0,
    };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>This is my Profile Class component page</h1>
        <h2>Name:{this.props.name}</h2>
        <h3>Count1:{this.state.count1}</h3>
        <h3>Count2:{this.state.count2}</h3>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increase Count
        </button>
      </div>
    );
  }
}

export default ProfileClass;
