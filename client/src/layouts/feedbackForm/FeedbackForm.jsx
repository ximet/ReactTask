import React from 'react';
import classes from './feedbackForm.module.css';
import { Formik, Form } from 'formik';
import { feedbackFormInitialValues } from '../../globalConsts';
import FeedbackFormField from './feedbackFormField/FeedbackFormField';
import * as Yup from 'yup'

class FeedbackForm extends React.Component {

    validate = Yup.object({
        name: Yup.string()
            .required('Name is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        feedbackText: Yup.string()
            .required('Feedback text is required')
    }) 

    handleSubmit = (values) => {
        console.log(values)
    } 
    
    render() {
        return (
        <Formik 
            initialValues={feedbackFormInitialValues}
            validationSchema={this.validate}
            onSubmit={values => this.handleSubmit(values)}
        >
            {formik => (
            <div className={classes.container}>
                <h4 className={classes.formTitle}>Leave your feedback</h4>
                <Form>
                    <FeedbackFormField label='name' name='name' type='text'/>
                    <FeedbackFormField label='email' name='email' type='text'/>
                    <FeedbackFormField label='feedbackText' fieldType='textArea' name='feedbackText' type='text'/>
                    <div className={classes.submitButtonContainer}>
                        <button className={classes.submitBtn} type="submit">Submit</button>
                    </div>
                </Form>
            </div>
            )}
        </Formik>
        );
    }
}

export default FeedbackForm;
