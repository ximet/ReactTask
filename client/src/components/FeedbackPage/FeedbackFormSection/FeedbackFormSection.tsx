import React, {
  FunctionComponent,
  HTMLInputTypeAttribute,
  FormEvent,
  useState,
  useEffect
} from 'react';

// Types
import { InputType, ChangeEventType, InputOptions, InputValidator, InputValidation } from 'types';

// Custom hooks
import useBeforeUnload from 'hooks/useBeforeUnload';

// Components
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

// Utils
import inputValidator from 'utils/inputValidator';

// Styles
import { Container, Flex } from 'styles/global';
import * as S from '../FeedbackPage.styles';

enum FeedbackFormInput {
  name = 'name',
  rating = 'rating',
  reasons = 'reasons',
  suggestions = 'suggestions',
  recommend = 'recommend',
  more = 'more'
}

type FeedbackForm = {
  [key in FeedbackFormInput]: {
    label?: string;
    inputType?: InputType;
    inputConfig?: {
      type?: HTMLInputTypeAttribute;
      placeholder?: string;
      rows?: number;
      options?: InputOptions;
    };
    validation?: InputValidation;
    value?: string;
    valid?: boolean;
    errMsg?: string;
  };
};

const feedbackFormConfig: FeedbackForm = {
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

const formElementsArray = Object.entries(feedbackFormConfig).map(entry => ({
  id: entry[0],
  config: entry[1]
}));

const FeedbackFormSection: FunctionComponent = () => {
  // State
  const [feedbackForm, setFeedbackForm] = useState<FeedbackForm>({
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
  });
  const [isFormDirty, setIsFormDirty] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const feedbackFormInputs = Object.values(feedbackForm);

  // Handlers
  const handleInputChange = (e: ChangeEventType) => {
    const inputValue = e.currentTarget.value;
    const inputName = e.currentTarget.name as FeedbackFormInput;

    const { isValid, message } = inputValidator(
      inputValue,
      inputName,
      feedbackFormConfig[inputName].validation
    );

    setFeedbackForm({
      ...feedbackForm,
      [inputName]: {
        ...feedbackForm[inputName],
        value: inputValue,
        valid: isValid,
        errMsg: message
      }
    });
  };

  const createUpdatedForm = (
    validatedInputs: { valid: boolean; errMsg: string }[],
    inputNames: FeedbackFormInput[],
    form: FeedbackForm
  ) =>
    validatedInputs.reduce(
      (prevFields, currField, currentIndex) => ({
        ...prevFields,
        [inputNames[currentIndex]]: {
          ...form[inputNames[currentIndex]],
          ...currField
        }
      }),
      {}
    );

  const handleFormChange = () => {
    const inputNames = Object.keys(FeedbackFormInput).map(key => key as FeedbackFormInput);

    const validatedInputs = feedbackFormInputs.map((input, i) => {
      const { isValid: valid, message: errMsg } = inputValidator(
        input.value!,
        inputNames[i],
        feedbackFormConfig[inputNames[i]].validation
      );
      return { valid, errMsg };
    });

    const updatedForm = createUpdatedForm(validatedInputs, inputNames, feedbackForm);

    setFeedbackForm({
      ...feedbackForm,
      ...updatedForm
    });
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleFormChange();

    if (isFormValid) {
      // I will write code here in another feature
    }
  };

  useEffect(() => {
    setIsFormDirty(feedbackFormInputs.some(input => input.value));
  }, [feedbackFormInputs]);

  useEffect(() => {
    setIsFormValid(!feedbackFormInputs.map(input => input.valid).includes(false));
  }, [feedbackFormInputs]);

  useBeforeUnload({ when: isFormDirty });

  return (
    <S.FeedbackFormSection id="survey">
      <Container>
        <Flex directionColumn>
          <h2>Fill Form Below</h2>
          <form onSubmit={handleSubmitForm}>
            <Flex directionColumn alignFlexStart>
              {formElementsArray.map(({ id, config }, i) => (
                <S.FeedbackFormGroup key={id}>
                  <S.FeedbackFormLabel htmlFor={id}>{`${i + 1}. ${config.label} ${
                    config.validation?.required ? '' : '(optional)'
                  }`}</S.FeedbackFormLabel>
                  <Input
                    inputType={config.inputType}
                    id={id}
                    name={id}
                    inputConfig={config.inputConfig}
                    onChange={handleInputChange}
                  />
                  <S.FeedbackFormError>
                    {feedbackForm[id as FeedbackFormInput].errMsg}
                  </S.FeedbackFormError>
                </S.FeedbackFormGroup>
              ))}
              <Button>Submit</Button>
            </Flex>
          </form>
        </Flex>
      </Container>
    </S.FeedbackFormSection>
  );
};

export default FeedbackFormSection;
