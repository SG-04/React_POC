import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector} from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import { Form, FormGroup, Label,  Message, Button } from "./StyleForm";


const renderDesignation = ({ input, meta: { touched, error } }) => (
    <div>
        <select {...input}>
            <option value="">Select designation</option>
            {design.map(val => <option value={val} key={val} >{val}</option>)}
        </select>
        <Message>{touched && error && <span>{error}</span>}</Message>
    </div>
);

const design = ["Group Project Manager", "Project Manager", "Technology Analyst", "Senior Systems Engineer", "Systems Engineer"]

let EmploymentDet = props => {
    const { handleSubmit, previousPage } = props;

    const [empid, setEmpid] = useState('');
    const [oemailid, setOemailid] = useState('');
   // const [designation, setDesignation] = useState('');

    return (

        <React.Fragment>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    Employment Details Form
                 </FormGroup>
                <FormGroup>
                    <Field
                        name="empid"
                        component={renderField}
                        type="text"
                        label="Employee Id"
                        value={empid}
                        onChange={(e) => setEmpid(e.target.value)}
                    />
                </FormGroup>

                    
               <FormGroup>
                            <Field name="oemailid" component={renderField} type="email" label="Company Email Id"  value={oemailid}
                                onChange={(e) => setOemailid(e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <Label>Designation</Label>
                    <Field name="designation" component={renderDesignation} 
                        />

                </FormGroup>
                <Button type="button" primary onClick={previousPage}>Previous</Button >
                <Button type="submit" primary  >Review </Button >
              
            </Form>


        </React.Fragment>

            
    );
};


EmploymentDet=  reduxForm({
    form: 'reactpoc', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
})(EmploymentDet);



const employeeSelector = formValueSelector('reactpoc') 

EmploymentDet = connect(state => {
    const employeeDetails = employeeSelector(state, 'empid', 'oemailid', 'designation')
    return {
        employeeDetails
    }
})(EmploymentDet)


export default EmploymentDet



