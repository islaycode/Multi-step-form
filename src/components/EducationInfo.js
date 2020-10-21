import React, { Component,Fragment } from 'react'

export class EducationalInfo extends Component {
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
                    <h2>Step 2:</h2>
                 
                    <div className="ui segment">
                    <h3>Educational Info</h3>
                <form className="ui form">
                    <div className="field">
                        <label>College</label>
                        <input type="text" placeholder="College Name" onChange={handleChange('college')} defaultValue={values.college}/>
                    </div>
                    <div className="field">
                        <label>Degree</label>
                        <input type="text" placeholder="Degree Name" onChange={handleChange('degree')} defaultValue={values.degree}/>
                    </div>
                    <div className="field">
                        <label>Specialisation</label>
                        <input type="text" placeholder="Specialisation" onChange={handleChange('specialisation')} defaultValue={values.specialisation}/>
                    </div>
                    <div className="field">
                        <label>Date of Passing</label>
                        <input type="text" placeholder="Date of Passing" onChange={handleChange('dop')} defaultValue={values.dop}/>
                    </div>
                </form>
                <br/>
                <button className="ui primary button" onClick={this.continue}>Save & Next</button>
                <button className="ui black button" onClick={this.back}>Back</button>
                <button className="ui red button">Cancel</button>
                </div>
                </div>
            </Fragment>
        )
    }
}

export default EducationalInfo;
