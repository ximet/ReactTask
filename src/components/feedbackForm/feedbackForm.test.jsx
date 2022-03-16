import { render, fireEvent } from '@testing-library/react';
import FeedbackForm from './FeedbackForm';
 
import '@testing-library/jest-dom/extend-expect';
 
const fakeInputValue = new Array(301).join('');
 
describe('FeedbackForm component', () => {
    describe('component render', () => {
        it('component render with inputs, textarea and button', () => {
            const component = render(<FeedbackForm />);
            const inputEmail = component.getByTestId('emailTestId');
            const inputName = component.getByTestId('nameTestId');
            const textareaReview = component.getByTestId('reviewTestId');
            const buttonSubmit = component.getByTestId('buttonSubmitTestId');
 
            expect(inputEmail).toBeInTheDocument();
            expect(inputName).toBeInTheDocument();
            expect(textareaReview).toBeInTheDocument();
            expect(buttonSubmit).toBeInTheDocument();
        })
    })
 
    describe('with valid inputs', () => {
        it('submit button is not disabled', () => {
            const component = render(<FeedbackForm />);
            const inputEmail = component.getByTestId('emailTestId');
            const inputName = component.getByTestId('nameTestId');
            const textareaReview = component.getByTestId('reviewTestId');
            const buttonSubmit = component.getByTestId('buttonSubmitTestId');
   
            fireEvent.change(inputEmail, {target: {value: 'email@test.ru'}});
            fireEvent.change(inputName, {target: {value: 'user'}});
            fireEvent.change(textareaReview, {target: {value: 'test test test'}});
   
            expect(buttonSubmit).toBeEnabled();
        })
    })
 
    describe('with invalid email', () => {
        it('isEmpty error', () => {
            const component = render(<FeedbackForm />);
            const inputEmail = component.getByTestId('emailTestId');
            const buttonSubmit = component.getByTestId('buttonSubmitTestId');
           
            fireEvent.change(inputEmail, {target: {value: ''}});
            fireEvent.blur(inputEmail);
 
            expect(component.getByText('This field is required'));
            expect(buttonSubmit).toBeDisabled();
        })
 
        it('email error', () => {
            const component = render(<FeedbackForm />);
            const inputEmail = component.getByTestId('emailTestId');
            const buttonSubmit = component.getByTestId('buttonSubmitTestId');
           
            fireEvent.change(inputEmail, {target: {value: 'invalid email'}});
            fireEvent.blur(inputEmail);
 
            expect(component.getByText('Incorrect email'));
            expect(buttonSubmit).toBeDisabled();
        })
    })
 
    describe('with invalid name', () => {
        it('isEmpty error', () => {
            const component = render(<FeedbackForm />);
            const inputName = component.getByTestId('nameTestId');
            const buttonSubmit = component.getByTestId('buttonSubmitTestId');
           
            fireEvent.change(inputName, {target: {value: ''}});
            fireEvent.blur(inputName);
 
            expect(component.getByText('This field is required'));
            expect(buttonSubmit).toBeDisabled();
        })
 
        it('minLength 2 error', () => {
            const component = render(<FeedbackForm />);
            const inputName = component.getByTestId('nameTestId');
            const buttonSubmit = component.getByTestId('buttonSubmitTestId');
           
            fireEvent.change(inputName, {target: {value: 'm'}});
            fireEvent.blur(inputName);
 
            expect(component.getByText('Incorrect length'));
            expect(buttonSubmit).toBeDisabled();
        })
 
        it('maxLength 30 error', () => {
            const component = render(<FeedbackForm />);
            const inputName = component.getByTestId('nameTestId');
            const buttonSubmit = component.getByTestId('buttonSubmitTestId');
           
            fireEvent.change(inputName, {target: {value: 'invalid value invalid value invalid value'}});
            fireEvent.blur(inputName);
 
            expect(component.getByText('Incorrect length'));
            expect(buttonSubmit).toBeDisabled();
        })
    })
 
    describe('with invalid review', () => {
        it('isEmpty error', () => {
            const component = render(<FeedbackForm />);
            const textareaReview = component.getByTestId('reviewTestId');
            const buttonSubmit = component.getByTestId('buttonSubmitTestId');
           
            fireEvent.change(textareaReview, {target: {value: ''}});
            fireEvent.blur(textareaReview);
 
            expect(component.getByText('This field is required'));
            expect(buttonSubmit).toBeDisabled();
        })
 
        it('minLength 5 error', () => {
            const component = render(<FeedbackForm />);
            const textareaReview = component.getByTestId('reviewTestId');
            const buttonSubmit = component.getByTestId('buttonSubmitTestId');
           
            fireEvent.change(textareaReview, {target: {value: 'test'}});
            fireEvent.blur(textareaReview);
 
            expect(component.getByText('Incorrect length'));
            expect(buttonSubmit).toBeDisabled();
        })
 
        it('maxLength 200 error', () => {
            const component = render(<FeedbackForm />);
            const textareaReview = component.getByTestId('reviewTestId');
            const buttonSubmit = component.getByTestId('buttonSubmitTestId');
           
            fireEvent.change(textareaReview, {target: {value: fakeInputValue}});
            fireEvent.blur(textareaReview);
 
            expect(component.getByText('Incorrect length'));
            expect(buttonSubmit).toBeDisabled();
        })
    })
})
