import React, { Component } from "react";

export class Confirm extends Component {
  render() {
    const {
      values: {
        fname,
        lname,
        mname,
        college,
        degree,
        specialisation,
        dop,
        allergies,
        hobbies,
        city,
        dob,
      },
    } = this.props;
    return (
      <div className="ui container">
        <h2>Table Display</h2>
        <div className="ui segment">
          <table class="ui celled table">
            <thead>
              <tr>
                <th>Name</th>
                <th>College</th>
                <th>Degree</th>
                <th>Specialisation</th>
                <th>Date of Passing</th>
                <th>City</th>
                <th>Date of Birth</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >{fname}</td>
                <td>{college}</td>
                <td>{degree}</td>
                <td>{specialisation}</td>
                <td>{dop}</td>
                <td>{city}</td>
                <td>{dob}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Confirm;
