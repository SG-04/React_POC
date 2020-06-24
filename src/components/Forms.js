import React, { Component } from 'react';
import PersonalDet from './PersonalDet';
import EmploymentDet from './EmploymentDet';
import ReviewScreen from './ReviewScreen';
import Stepper from 'react-stepper-horizontal';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
            page: 0,
            steps: [
                { title: 'Personal Details' },
                { title: 'Employment Details' },
                { title: 'Review Screen' }
            ]
        };
       
    }
    nextPage() {
        this.setState({ page: this.state.page + 1 });
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 });
    }

    render() {
        const { onSubmit } = this.props;
        const { page,steps } = this.state;
        return (
            <div>
            <Stepper steps={steps} activeStep={page} />

                {page === 0 && <PersonalDet onSubmit={this.nextPage} />}
                {page === 1 &&
                    <EmploymentDet
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                    />}
                {page === 2 &&
                    <ReviewScreen
                    previousPage={this.previousPage}
                    onSubmit={onSubmit}
                    />}
                
            </div>
        );
    }
}


export default Forms;
