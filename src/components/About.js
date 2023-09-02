import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       <h2>About</h2>
//       {/* <User name={"Anush from fun"} /> */}
//       <UserClass name={"1st child"} location={"Port Blair"} />
//       <UserClass name={"2nd child"} location={"Port Blair"} />
//     </div>
//   );
// };

// export default About;
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Const");
  }

  componentDidMount() {
    console.log("Parent did mount");
  }

  render() {
    console.log("Parent rendered");
    return (
      <>
        <UserClass name={`1st Child`} />
        <UserClass name={`2st Child`} />
      </>
    );
  }
}

export default About;
