import React, { FunctionComponent, FormEvent, useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Store
import { addFeedback } from 'redux/actionCreators/feedback';

// Types
import { ChangeEventType, FeedbackFormInput } from 'types';

// Custom hooks
import useBeforeUnload from 'hooks/useBeforeUnload';

// Components
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

// Assets
import { IconBlobOne, IconBlobTwo } from 'assets/images/svg';

// Utils
import inputValidator from 'utils/inputValidator';
import {
  FeedbackForm,
  feedbackFormConfig,
  feedbackFormInputNames,
  initialState,
  generateUpdatedForm,
  generateFormData
} from './FeedbackFormSection.utils';

// Styles
import { Container, Flex } from 'styles/global';
import * as S from '../FeedbackPage.styles';

export const formElementsArray = Object.entries(feedbackFormConfig).map(entry => ({
  id: entry[0] as FeedbackFormInput,
  config: entry[1]
}));

const FeedbackFormSection: FunctionComponent = () => {
  // State
  const [feedbackForm, setFeedbackForm] = useState<FeedbackForm>(initialState);
  const [isFormDirty, setIsFormDirty] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const dispatch = useDispatch();

  const feedbackFormInputs = Object.values(feedbackForm);

  // Handlers
  const handleInputChange = (e: ChangeEventType) => {
    const inputValue = e.currentTarget.value;
    const inputName = e.currentTarget.name as FeedbackFormInput;

    const { valid, errMsg } = inputValidator(
      inputValue,
      inputName,
      feedbackFormConfig[inputName].validation
    );

    setFeedbackForm({
      ...feedbackForm,
      [inputName]: {
        ...feedbackForm[inputName],
        value: inputValue,
        valid,
        errMsg
      }
    });
  };

  const handleFormChange = () => {
    const validatedInputs = feedbackFormInputs.map((input, i) =>
      inputValidator(
        input.value,
        feedbackFormInputNames[i],
        feedbackFormConfig[feedbackFormInputNames[i]].validation
      )
    );

    const updatedForm = generateUpdatedForm(validatedInputs, feedbackForm);
    setFeedbackForm({
      ...feedbackForm,
      ...updatedForm
    });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleFormChange();

    if (isFormValid) {
      const formData = generateFormData(feedbackFormInputs);
      formData.timestamp = new Date();

      dispatch(addFeedback(formData));
      setFeedbackForm(initialState);
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
      <S.FeedbackFormBlobOne>
        <IconBlobTwo />
      </S.FeedbackFormBlobOne>
      <Container>
        <Flex directionColumn>
          <h2>Fill Form Below</h2>
          <form aria-label="Fill out survey" onSubmit={handleFormSubmit}>
            <Flex directionColumn alignFlexStart>
              {formElementsArray.map(({ id, config }, i) => (
                <S.FeedbackFormGroup key={id}>
                  <S.FeedbackFormLabel htmlFor={id}>{`${i + 1}. ${config.label} ${
                    config.validation?.required ? '' : '(optional)'
                  }`}</S.FeedbackFormLabel>
                  <Input
                    id={id}
                    name={id}
                    value={feedbackForm[id].value}
                    inputType={config.inputType}
                    inputConfig={config.inputConfig}
                    valid={feedbackForm[id].valid}
                    errMsg={feedbackForm[id].errMsg}
                    aria-invalid={feedbackForm[id].valid}
                    aria-required={config.validation.required}
                    aria-errormessage={`${id}-errormessage`}
                    onChange={handleInputChange}
                  />
                </S.FeedbackFormGroup>
              ))}
              <Button type="submit" aria-label="Submit a form">
                Submit
              </Button>
            </Flex>
          </form>
        </Flex>
      </Container>
      <S.FeedbackFormBlobTwo>
        <IconBlobOne />
      </S.FeedbackFormBlobTwo>
    </S.FeedbackFormSection>
  );
};

export default FeedbackFormSection;
