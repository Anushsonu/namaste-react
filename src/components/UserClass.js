import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(`${this.props.name} constructor`);
    this.state = {
      userInfo: {
        name: "Anush",
        location: "Port Blair ",
      },
    };
  }

  async componentDidMount() {
    // const data = await fetch("https://api.github.com/users/AnushSonu");
    // const json = await data.json();
    // this.setState({
    //   userInfo: json,
    // });
    // console.log(`${this.props.name} did mount`);
  }

  componentWillUnmount() {}

  render() {
    const { name, location } = this.props;
    // console.log(`${this.props.name} rendered`);
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
        <h2>Name: {this.state.userInfo.login}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: anushanilpb@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
