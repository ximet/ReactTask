import React, { FunctionComponent, FormEvent, useState, useEffect, useCallback } from 'react';

// Types
import { ChangeEventType } from 'types';

// Custom hooks
import useBeforeUnload from 'hooks/useBeforeUnload';

// Components
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

// Utils
import inputValidator from 'utils/inputValidator';
import {
  FeedbackForm,
  FeedbackFormInput,
  feedbackFormConfig,
  initialState,
  createUpdatedForm
} from './FeedbackFormSection.utils';

// Styles
import { Container, Flex } from 'styles/global';
import * as S from '../FeedbackPage.styles';

const formElementsArray = Object.entries(feedbackFormConfig).map(entry => ({
  id: entry[0],
  config: entry[1]
}));

const FeedbackFormSection: FunctionComponent = () => {
  // State
  const [feedbackForm, setFeedbackForm] = useState<FeedbackForm>(initialState);
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

  const handleFormChange = () => {
    const inputNames = Object.keys(FeedbackFormInput) as FeedbackFormInput[];

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

  const checkIsFormTouched = useCallback(() => {
    setIsFormDirty(feedbackFormInputs.some(input => input.value));
    setIsFormValid(!feedbackFormInputs.map(input => input.valid).includes(false));
  }, [feedbackFormInputs]);

  useEffect(() => {
    checkIsFormTouched();
  }, [checkIsFormTouched]);

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
