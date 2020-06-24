const validate = values => {
    const errors = {};
    if (!values.firstname) {
        errors.firstname = 'Required';
    }
    if (!values.lastname) {
        errors.lastname = 'Required';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.gender) {
        errors.gender = 'Required';
    }
    if (!values.dob) {
        errors.dob = 'Required'
    } else if (values.dob) {
        var today = new Date();
        var birthDate = new Date(values.dob);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 18) {
            errors.dob = "Your age should be atleast 18 years ";
        } 
    }


    if (!values.empid) {
        errors.empid = 'Required'
    }

    if (!values.oemailid) {
        errors.oemailid = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.oemailid)) {
        errors.oemailid = 'Invalid email address'
    }
    if (!values.designation) {
        errors.designation = 'Required'
    }
    return errors;
};

export default validate;
