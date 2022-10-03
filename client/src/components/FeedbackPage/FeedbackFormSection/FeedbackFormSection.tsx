import React, { FunctionComponent, useState, HTMLInputTypeAttribute } from 'react';

// Types
import { InputElement } from 'types';

// Components
import Input from 'components/Input/Input';

// Styles
import { Container, Flex } from 'styles/global';
import * as S from '../FeedbackPage.styles';

enum FeedbackFormElement {
  name = 'name',
  rating = 'rating',
  reasons = 'reasons',
  suggestions = 'suggestions',
  recommend = 'recommend',
  more = 'more'
}

type FeedbackForm = {
  [key in FeedbackFormElement]: {
    label: string;
    elementType: InputElement;
    elementConfig: {
      type?: HTMLInputTypeAttribute;
      placeholder?: string;
      rows?: number;
      options?: Record<string, unknown>;
    };
  };
};

const FeedbackFormSection: FunctionComponent = () => {
  const [feedbackForm, setFeebackForm] = useState<FeedbackForm>({
    name: {
      label: '1. What is your name?',
      elementType: 'input',
      elementConfig: {
        type: 'input',
        placeholder: 'Please tell us your full name...'
      }
    },
    rating: {
      label: '2. Rate your experience with our app.',
      elementType: 'rating',
      elementConfig: {
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
    reasons: {
      label: '3. Tell us your reasons for giving this score.',
      elementType: 'textarea',
      elementConfig: {
        placeholder: 'Please state your reasons here...',
        rows: 3
      }
    },
    suggestions: {
      label: '4. Anything that can be improved?',
      elementType: 'textarea',
      elementConfig: {
        placeholder: 'Please tell us what to improve, if any...',
        rows: 3
      }
    },
    recommend: {
      label: '5. Would you recommend this app to someone else?',
      elementType: 'radio',
      elementConfig: {
        type: 'radio',
        options: {
          'option-1': 'Yes',
          'option-2': 'No'
        }
      }
    },
    more: {
      label: '6. Care to share more?',
      elementType: 'textarea',
      elementConfig: {
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
                <S.FeedbackFormLabel htmlFor="name">{config.label}</S.FeedbackFormLabel>
                <Input
                  elementType={config.elementType}
                  id={id}
                  elementConfig={config.elementConfig}
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
