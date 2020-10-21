import React, { Component,Fragment } from 'react'

export class BasicInfo extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values,handleChange } = this.props;

        return (
            <Fragment>
                <div className="ui container">
                    <h2>Step 1:</h2>
                    
                    <div className="ui segment">
                    <h3>Basic Info</h3>
                <form className="ui form">
                    <div className="field">
                        <label>First Name</label>
                        <input type="text" placeholder="First name" onChange={handleChange('fname')} defaultValue={values.fname}/>
                    </div>
                    <div className="field">
                        <label>Middle Name</label>
                        <input type="text" placeholder="Middle name" onChange={handleChange('mname')} defaultValue={values.mname}/>
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input type="text" placeholder="last name" onChange={handleChange('lname')} defaultValue={values.lname}/>
                    </div>
                </form>
                <br/>
                <button className="ui primary button" onClick={this.continue}>Save & Next</button>
                <button className="ui red button">Cancel</button>
                </div>
                </div>
            </Fragment>
        )
    }
}

export default BasicInfo;
