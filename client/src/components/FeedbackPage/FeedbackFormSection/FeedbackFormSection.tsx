import React, { FunctionComponent, HTMLInputTypeAttribute, useState, useEffect } from 'react';

// Custom hooks
import useBeforeUnload from 'hooks/useBeforeUnload';
import usePrompt from 'hooks/usePrompt';

// Types
import type { InputType, ChangeEventType } from 'types';

// Components
import Input from 'components/Input/Input';

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
      options?: Record<string, string | number>;
    };
    value?: string;
  };
};

const feedbackFormConfig: FeedbackForm = {
  [FeedbackFormInput.name]: {
    label: '1. What is your name?',
    inputType: 'input',
    inputConfig: {
      type: 'input',
      placeholder: 'Please tell us your full name...'
    }
  },
  [FeedbackFormInput.rating]: {
    label: '2. Rate your experience with our app.',
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
    }
  },
  [FeedbackFormInput.reasons]: {
    label: '3. Tell us your reasons for giving this score.',
    inputType: 'textarea',
    inputConfig: {
      placeholder: 'Please state your reasons here...',
      rows: 3
    }
  },
  [FeedbackFormInput.suggestions]: {
    label: '4. Anything that can be improved?',
    inputType: 'textarea',
    inputConfig: {
      placeholder: 'Please tell us what to improve, if any...',
      rows: 3
    }
  },
  [FeedbackFormInput.recommend]: {
    label: '5. Would you recommend this app to someone else?',
    inputType: 'radio',
    inputConfig: {
      type: 'radio',
      options: {
        'option-1': 'Yes',
        'option-2': 'No'
      }
    }
  },
  [FeedbackFormInput.more]: {
    label: '6. Care to share more?',
    inputType: 'textarea',
    inputConfig: {
      placeholder: 'Anything more?...',
      rows: 3
    }
  }
};

const formElementsArray = Object.entries(feedbackFormConfig).map(entry => ({
  id: entry[0],
  config: entry[1]
}));

const FeedbackFormSection: FunctionComponent = () => {
  const [feedbackForm, setFeedbackForm] = useState<FeedbackForm>({
    [FeedbackFormInput.name]: {
      value: ''
    },
    [FeedbackFormInput.rating]: {
      value: ''
    },
    [FeedbackFormInput.reasons]: {
      value: ''
    },
    [FeedbackFormInput.suggestions]: {
      value: ''
    },
    [FeedbackFormInput.recommend]: {
      value: ''
    },
    [FeedbackFormInput.more]: {
      value: ''
    }
  });
  const [isFormDirty, setIsFormDirty] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEventType, inputName: FeedbackFormInput) => {
    const updatedFeebackForm = {
      ...feedbackForm,
      [inputName]: {
        ...feedbackForm[inputName],
        value: e.currentTarget.value
      }
    };

    setFeedbackForm(updatedFeebackForm);
  };

  useEffect(() => {
    setIsFormDirty(Object.values(feedbackForm).some(input => input.value));
  }, [feedbackForm]);

  useBeforeUnload({
    when: isFormDirty
  });

  usePrompt('Are you sure you want to leave?', isFormDirty);

  return (
    <S.FeedbackFormSection id="survey">
      <Container>
        <Flex directionColumn>
          <h2>Fill Form Below</h2>
          <form>
            {formElementsArray.map(({ id, config }) => (
              <S.FeedbackFormGroup key={id}>
                <S.FeedbackFormLabel htmlFor={id}>{config.label}</S.FeedbackFormLabel>
                <Input
                  inputType={config.inputType}
                  id={id}
                  inputConfig={config.inputConfig}
                  onChange={e => handleInputChange(e, id as FeedbackFormInput)}
                />
              </S.FeedbackFormGroup>
            ))}
          </form>
        </Flex>
      </Container>
    </S.FeedbackFormSection>
  );
};

export default FeedbackFormSection;
