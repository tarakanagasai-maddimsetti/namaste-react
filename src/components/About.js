import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Class componenet</h1>
        <h2>This is my About page</h2>
        <UserClass name={"First (class)"} location={"Andhra Class"} />
        <UserClass name={"Second (class)"} location={"Telangana Class"} />
      </div>
    );
  }
}

export default About;
