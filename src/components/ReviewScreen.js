import React from "react";
import { reduxForm } from 'redux-form';
import { Form, FormGroup, Button, Field1,Label} from "./StyleForm";
import { connect } from 'react-redux';


let ReviewScreen = props => {

    const {  previousPage } = props;

    const { data } = props;  

     function onSubmit() {
       console.log(JSON.stringify(data, null, 2));
        // window.alert('Thank You');
     };

    return (
        <React.Fragment>
            <Form >
                <FormGroup>  Review Personal Details  </FormGroup>
                <FormGroup>
                    <Label>First Name</Label>
                    <Field1
                        name="firstname"
                        component="input"
                        type="text"
                        disabled={true}
                        defaultValue={data.firstname}  />
                </FormGroup>
                <FormGroup>
                    <Label>Last Name</Label>
                    <Field1
                        name="lastname"
                        component="input"
                        type="text"
                        disabled={true}
                        defaultValue={data.lastname} />
                </FormGroup>
                <FormGroup>
                    <Label>Email Id</Label>
                    <Field1
                        name="email"
                        component="input"
                        type="email"
                        disabled={true}
                        defaultValue={data.email}  />
                </FormGroup>
                < FormGroup >
                    <Label>Date of Birth</Label>
                    <Field1
                        name="dob"
                        component="input"
                        type="date"
                        disabled={true}
                        defaultValue={data.dob} />
                
                </FormGroup >

                <FormGroup>
                    <Label>Gender</Label>
                    <Field1
                        name="gender"
                        component="input"
                        type="text"
                        disabled={true}
                        defaultValue={data.gender}   />
                </FormGroup>
                <FormGroup>  Review Employment Details   </FormGroup>
                <FormGroup>
                    <Label>Employee Id</Label>
                    <Field1
                        name="empid"
                        component="input"
                        type="text"
                        disabled={true}
                        defaultValue={data.empid}  />
                </FormGroup>
                <FormGroup>
                    <Label>Company Email Id</Label>
                    <Field1
                        name="oemailid"
                        component="input"
                        type="email"
                        disabled={true} />
                </FormGroup>

                <FormGroup>
                    <Label>Designation</Label>
                    <Field1
                        name="designation"
                        component="input"
                        disabled={true}
                        defaultValue={data.designation}  />
                </FormGroup>
               
                <Button type="button" primary onClick={previousPage}>Employee Details </Button >
                <Button type="submit" primary onClick={()=>onSubmit()} >Submit </Button > 

                <FormGroup>

                </FormGroup>
            </Form>
        </React.Fragment>
    );
}

ReviewScreen = reduxForm({
    form: 'form',// a unique identifier for this form
})(ReviewScreen);


function mapStateToProps(val) {
    const data = val.form.reactpoc.values
    return {
        data
    }
}

export default connect(mapStateToProps)(ReviewScreen)
