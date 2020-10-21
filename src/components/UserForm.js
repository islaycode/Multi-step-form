import React, { Component } from "react";
import BasicInfo from "./BasicInfo";
import Confirm from "./Confirm";
import EducationInfo from "./EducationInfo";
import OtherInfo from "./OtherInfo";

export class UserForm extends Component {
  state = {
    step: 1,
    fname: "",
    mname: "",
    lname: "",
    college: "",
    degree: "",
    specialisation: "",
    dop: "",
    allergies: "",
    hobbies: "",
    city: "",
    dob: "",
  };
  //Go to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  //Handle fields change
  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };
  render() {
    const { step } = this.state;
    const {
      fname,
      mname,
      lname,
      college,
      degree,
      specialisation,
      dop,
      allergies,
      hobbies,
      city,
      dob,
    } = this.state;
    const values = {
      fname,
      lname,
      mname,
      college,
      degree,
      specialisation,
      dop,allergies,
      hobbies,
      city,
      dob,
    };
    switch (step) {
      case 1:
        return (
          <BasicInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <EducationInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <OtherInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    default:
        
    }
  }
}

export default UserForm;
