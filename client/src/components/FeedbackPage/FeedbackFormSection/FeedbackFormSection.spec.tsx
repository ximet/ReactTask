import React from 'react';
import { fireEvent, render, screen, within } from 'tests/utilities';

import { addFeedback } from 'redux/actionCreators/feedback';
import FeedbackFormSection from './FeedbackFormSection';

const labels: string[] = [
  'What is your name?',
  'Rate your experience with our app.',
  'Tell us your reasons for giving this score.',
  'Anything that can be improved?',
  'Would you recommend this app to someone else?',
  'Care to share more?'
];

const initialFormValues: Record<string, string | undefined> = {
  name: '',
  rating: undefined,
  reason: '',
  suggestion: '',
  recommendation: undefined,
  more: ''
};

const getRadioButtons = (index: number): HTMLElement[] => {
  const radioButtonGroup = screen.getAllByRole('radiogroup');
  const radioButtons = within(radioButtonGroup[index]).getAllByRole('radio');
  return radioButtons;
};

const checkIfNotCheckedButRequired = (element: HTMLElement): void => {
  expect(element).not.toBeChecked();
  expect(element).toBeRequired();
};

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch
}));
jest.mock('redux/actionCreators/feedback', () => ({
  addFeedback: jest.fn()
}));

describe('FeedbackFormSection', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('when mounted', () => {
    it('should render a heading named "Fill Form Below"', () => {
      render(<FeedbackFormSection />);
      const headingElement = screen.getByRole('heading', { name: 'Fill Form Below' });
      expect(headingElement).toBeInTheDocument();
    });

    it('should render 6 survey question labels', () => {
      render(<FeedbackFormSection />);
      labels.forEach(label => {
        const labelElement = screen.getByText(label, { exact: false });
        expect(labelElement).toBeInTheDocument();
      });
      expect(labels.length).toEqual(6);
    });

    it('should render 4 textbox fields, two of them labelled optional should not be required', () => {
      render(<FeedbackFormSection />);
      const textboxElements = screen.getAllByRole('textbox');
      expect(textboxElements.length).toEqual(4);
      labels.forEach((label, index) => {
        const textboxElement = screen.queryByLabelText(`${index + 1}. ${label} (optional)`);
        if (textboxElement) {
          expect(textboxElement).not.toBeRequired();
        }
      });
    });

    it('should render 5 star-rating buttons and they should not be checked but required', () => {
      render(<FeedbackFormSection />);
      const radioButtons = getRadioButtons(0);
      expect(radioButtons.length).toEqual(5);
      radioButtons.forEach(radioButton => checkIfNotCheckedButRequired(radioButton));
    });

    it('should render 2 radio buttons labelled "Yes" and "No" respectively and they should not be checked but required', () => {
      render(<FeedbackFormSection />);
      const radioButtons = getRadioButtons(1);
      expect(radioButtons.length).toEqual(2);
      radioButtons.forEach(radioButton => checkIfNotCheckedButRequired(radioButton));
      expect(radioButtons[0]).toHaveAccessibleName('Yes');
      expect(radioButtons[1]).toHaveAccessibleName('No');
    });

    it('should render a button labelled "Submit a form"', () => {
      render(<FeedbackFormSection />);
      expect(screen.getByRole('button', { name: 'Submit a form' })).toBeInTheDocument();
    });

    it('should render a blank form', () => {
      render(<FeedbackFormSection />);
      expect(screen.getByRole('form')).toHaveFormValues(initialFormValues);
    });
  });

  describe('when typed in a textbox field', () => {
    it('should not render errors if typed value is valid', () => {
      render(<FeedbackFormSection />);
      const textboxElements = screen.getAllByRole('textbox');
      const errorMessageElements = screen.getAllByRole('alert');
      textboxElements.forEach(textboxElement => {
        fireEvent.change(textboxElement, { target: { value: 'Some value' } });
        errorMessageElements.forEach(errorMessageElement => {
          expect(errorMessageElement.textContent).toEqual('');
        });
      });
    });
  });

  describe('when a submit event is fired on the form', () => {
    it('should call dispatch function and reset form to a blank', async () => {
      render(<FeedbackFormSection />);
      const formElement = screen.getByRole('form');
      const textboxElements = screen.getAllByRole('textbox');
      const starRating1Button = getRadioButtons(0)[0];
      const yesButton = getRadioButtons(1)[0];

      textboxElements.forEach(textboxElement =>
        fireEvent.change(textboxElement, { target: { value: 'Some value' } })
      );
      fireEvent.click(starRating1Button);
      fireEvent.click(yesButton);
      expect(formElement).toHaveFormValues({
        name: 'Some value',
        rating: '1',
        reason: 'Some value',
        suggestion: 'Some value',
        recommendation: 'Yes',
        more: 'Some value'
      });

      fireEvent.submit(formElement);
      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(mockDispatch).toHaveBeenCalledWith(
        addFeedback({
          name: 'Some value',
          rating: Number('1'),
          reason: 'Some value',
          suggestion: 'Some value',
          recommendation: 'Yes',
          more: 'Some value',
          timestamp: new Date()
        })
      );
      expect(formElement).toHaveFormValues(initialFormValues);
    });
  });
});
