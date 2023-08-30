import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h2>Count : {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: anushanilpb@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
