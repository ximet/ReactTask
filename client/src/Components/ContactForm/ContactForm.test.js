import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
    test('should render inputs and button', () => {
        render(<ContactForm />);
        expect(screen.getByTestId('name-input')).toBeInTheDocument();
        expect(screen.getByTestId('email-input')).toBeInTheDocument();
        expect(screen.getByTestId('comments-input')).toBeInTheDocument();
        expect(screen.getByTestId('button-submit')).toBeInTheDocument();
    }
    );

    test('should not submit empty form', () => {
        render(<ContactForm />);
        const submitButton = screen.getByTestId('button-submit');
        const errorText = screen.getByTestId('error');
        
        fireEvent.click(submitButton);
        expect(errorText).toBeInTheDocument();
    }
    );

    test('should submit form', () => {
        render(<ContactForm />);
        const nameInput = screen.getByTestId('name-input');
        const emailInput = screen.getByTestId('email-input');
        const messageInput = screen.getByTestId('comments-input');
        const submitButton = screen.getByTestId('button-submit');
        fireEvent.change(nameInput, { target: { value: 'John' } });
        fireEvent.change(emailInput, { target: { value: 'mail@doe.com' } });
        fireEvent.change(messageInput, { target: { value: 'Hello this is a test message, thanks for reading!' } });
        fireEvent.click(submitButton);
    }
    );
});


  