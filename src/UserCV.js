import React, { Component } from "react";
import Contacts from "./Contacts";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
class UserCV extends Component {
  render() {
    return (
      <div class="user-cv">
        <PersonalInfo />
        <Contacts />
        <Experience />
      </div>
    );
  }
}
export default UserCV;
