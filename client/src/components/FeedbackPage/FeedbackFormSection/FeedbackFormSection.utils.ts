import { HTMLInputTypeAttribute } from 'react';

// Types
import {
  FeedbackFormInput,
  InputType,
  InputOptions,
  InputValidation,
  InputValidator,
  Feedback
} from 'types';

export const feedbackFormInputNames = Object.keys(FeedbackFormInput) as FeedbackFormInput[];

export type FeedbackFormConfig = {
  [key in FeedbackFormInput]: {
    label: string;
    inputType: InputType;
    inputConfig: {
      type?: HTMLInputTypeAttribute;
      placeholder?: string;
      rows?: number;
      options?: InputOptions;
    };
    validation: Partial<InputValidation>;
  };
};

export const feedbackFormConfig: FeedbackFormConfig = {
  [FeedbackFormInput.name]: {
    label: 'What is your name?',
    inputType: 'input',
    inputConfig: {
      type: 'input',
      placeholder: 'Please tell us your full name...'
    },
    validation: {
      [InputValidator.required]: true,
      [InputValidator.minLength]: 3,
      [InputValidator.maxLength]: 16
    }
  },
  [FeedbackFormInput.rating]: {
    label: 'Rate your experience with our app.',
    inputType: 'rating',
    inputConfig: {
      type: 'radio',
      options: {
        'rating-1': 1,
        'rating-2': 2,
        'rating-3': 3,
        'rating-4': 4,
        'rating-5': 5
      }
    },
    validation: {
      [InputValidator.required]: true
    }
  },
  [FeedbackFormInput.reasons]: {
    label: 'Tell us your reasons for giving this score.',
    inputType: 'textarea',
    inputConfig: {
      placeholder: 'Please state your reasons here...',
      rows: 3
    },
    validation: {
      [InputValidator.required]: true,
      [InputValidator.maxLength]: 250
    }
  },
  [FeedbackFormInput.suggestions]: {
    label: 'Anything that can be improved?',

    inputType: 'textarea',
    inputConfig: {
      placeholder: 'Please tell us what to improve, if any...',
      rows: 3
    },
    validation: {
      [InputValidator.maxLength]: 250
    }
  },
  [FeedbackFormInput.recommend]: {
    label: 'Would you recommend this app to someone else?',
    inputType: 'radio',
    inputConfig: {
      type: 'radio',
      options: {
        'option-1': 'Yes',
        'option-2': 'No'
      }
    },
    validation: {
      [InputValidator.required]: true
    }
  },
  [FeedbackFormInput.more]: {
    label: 'Care to share more?',
    inputType: 'textarea',
    inputConfig: {
      placeholder: 'Anything more?...',
      rows: 3
    },
    validation: {
      [InputValidator.maxLength]: 250
    }
  }
};

export type FeedbackForm = {
  [key in FeedbackFormInput]: {
    value: string;
    valid: boolean;
    errMsg: string;
  };
};

export const initialState: FeedbackForm = {
  [FeedbackFormInput.name]: {
    value: '',
    valid: false,
    errMsg: ''
  },
  [FeedbackFormInput.rating]: {
    value: '',
    valid: false,
    errMsg: ''
  },
  [FeedbackFormInput.reasons]: {
    value: '',
    valid: false,
    errMsg: ''
  },
  [FeedbackFormInput.suggestions]: {
    value: '',
    valid: false,
    errMsg: ''
  },
  [FeedbackFormInput.recommend]: {
    value: '',
    valid: false,
    errMsg: ''
  },
  [FeedbackFormInput.more]: {
    value: '',
    valid: false,
    errMsg: ''
  }
};

export const generateUpdatedForm = (
  validatedInputs: { valid: boolean; errMsg: string }[],
  oldForm: FeedbackForm
): FeedbackForm =>
  validatedInputs.reduce(
    (prevFields, currField, currentIndex) => ({
      ...prevFields,
      [feedbackFormInputNames[currentIndex]]: {
        ...oldForm[feedbackFormInputNames[currentIndex]],
        ...currField
      }
    }),
    initialState
  );

export const generateFormData = (
  formInputs: {
    value: string | number | Date;
    valid: boolean;
    errMsg: string;
  }[]
): Feedback =>
  formInputs.reduce<Feedback>(
    (prev, { value }, i): Feedback => ({
      ...prev,
      [feedbackFormInputNames[i]]: value
    }),
    {
      name: '',
      rating: 0,
      reasons: '',
      suggestions: '',
      recommend: '',
      more: '',
      timestamp: new Date()
    }
  );
