import React, { FunctionComponent, useState, HTMLInputTypeAttribute } from 'react';

// Types
import { InputType } from 'types';

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
    label: string;
    inputType: InputType;
    inputConfig: {
      type?: HTMLInputTypeAttribute;
      placeholder?: string;
      rows?: number;
      options?: Record<string, string | number>;
    };
  };
};

const FeedbackFormSection: FunctionComponent = () => {
  const [feedbackForm, setFeebackForm] = useState<FeedbackForm>({
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
  });

  const formElementsArray = Object.entries(feedbackForm).map(entry => ({
    id: entry[0],
    config: entry[1]
  }));

  return (
    <S.FeedbackFormSection id="survey">
      <Container>
        <Flex directionColumn>
          <h2>Fill Form Below</h2>
          <form>
            {formElementsArray.map(({ id, config }) => (
              <S.FeedbackFormGroup key={id}>
                <S.FeedbackFormLabel htmlFor={id}>{config.label}</S.FeedbackFormLabel>
                <Input inputType={config.inputType} id={id} inputConfig={config.inputConfig} />
              </S.FeedbackFormGroup>
            ))}
          </form>
        </Flex>
      </Container>
    </S.FeedbackFormSection>
  );
};

export default FeedbackFormSection;
