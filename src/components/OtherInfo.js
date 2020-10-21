import React, { Component,Fragment } from 'react'

export class OtherInfo extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values,handleChange } = this.props;

        return (
            <Fragment>
                <div className="ui container">
                    <h2>Step 3:</h2>
                 
                    <div className="ui segment">
                    <h3>Other Info</h3>
                <form className="ui form">
                    <div className="field">
                        <label>Allergies (if any)</label>
                        <input type="text" placeholder="Allergy Name" onChange={handleChange('allergies')} defaultValue={values.allergies}/>
                    </div>
                    <div className="field">
                        <label>Hobbies</label>
                        <input type="text" placeholder="Hobbies Name" onChange={handleChange('hobbies')} defaultValue={values.hobbies}/>
                    </div>
                    <div className="field">
                        <label>City</label>
                        <input type="text" placeholder="City" onChange={handleChange('city')} defaultValue={values.city}/>
                    </div>
                    <div className="field">
                        <label>Date of Birth</label>
                        <input type="text" placeholder="Date of Birth" onChange={handleChange('dob')} defaultValue={values.dob}/>
                    </div>
                </form>
                <br/>
                <button className="ui primary button" onClick={this.continue}>Save & Submit</button>
                <button className="ui black button" onClick={this.back}>Back</button>
                <button className="ui red button" onClick={this.back}>Cancel</button>
                </div>
                </div>
            </Fragment>
        )
    }
}

export default OtherInfo;
