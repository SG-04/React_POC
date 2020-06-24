import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Form, FormGroup, Button, Label, Message } from "./StyleForm";
import validate from './validate';
import renderField from './renderField';

const renderError = ({ meta: { touched, error } }) =>
    touched && error ?<Message> <span>{error}</span></Message> : false;


let PersonalDet = props => {
    const { handleSubmit} = props;

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmailid] = useState('');
    const [dob, setDateofbirth] = useState('');
    //const [gender, setGender] = useState('')


    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    Personal Details Form
                 </FormGroup>
                < FormGroup >
                    <Field
                        name="firstname"
                        component={renderField}
                        type="text"
                        label="First Name"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                </FormGroup >
                <FormGroup>
                    <Field
                        name="lastname"
                        component={renderField}
                        type="text"
                        label="Last Name"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />

                </FormGroup>
                <FormGroup>
                    <Field
                        name="email"
                        component={renderField}
                        type="email"
                        label="Email Id"
                        value={email}
                        onChange={(e) => setEmailid(e.target.value)}
                    />
                </FormGroup> 
                <FormGroup>
                    <Field
                        name="dob"
                        component={renderField}
                        type="date"
                        label="Date of Birth"
                        value={dob}
                        onChange={(e) => setDateofbirth(e.target.value)}
                    />                 
                </FormGroup>                
                <FormGroup>
                    <Label>Gender</Label>
                    <Label>
                        <Field name="gender" component="input" type="radio" value="Male"  />
                        {' '}
            Male
          </Label>
                    <Label>
                        <Field name="gender" component="input" type="radio" value="Female"  />
                        {' '}
            Female
          </Label>              
                <Field name="gender" component={renderError} />
                </FormGroup>
                <FormGroup>
                    <Button type="submit" primary >Proceed</Button >
                </FormGroup>
            </Form>


        </React.Fragment>
           
        
    );
};

PersonalDet= reduxForm({
    form: 'reactpoc', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
})(PersonalDet);

 const personalSelector = formValueSelector('reactpoc') 

PersonalDet = connect(state => {
    const personalDetails = personalSelector(state, 'firstname', 'lastname', 'email', 'dob',  'gender')
    return {
        personalDetails
    }
})(PersonalDet)

export default PersonalDet


