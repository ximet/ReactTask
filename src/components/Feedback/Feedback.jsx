import * as Styled from '../../styles/globalStyles';

const Feedback = ({ isFormValid, isFormSubmitted, form, setForm, submitForm }) => {
  return !isFormSubmitted ? (
    <>
      <h3>We'd like to ask you a few questions!</h3>
      <form onSubmit={submitForm}>
        {Object.values(form).map(field => (
          <Styled.Container column key={field.name}>
            <label htmlFor={field.name}>{field.question}</label>
            <Styled.Input
              bordred
              error={!!field.error}
              type="text"
              placeholder={field.placeholder}
              name={field.name}
              value={field.answer}
              onChange={setForm}
              required={field.validators.required}
            />
            <Styled.Error>{field.error}</Styled.Error>
          </Styled.Container>
        ))}
        <Styled.Button type="submit" disabled={!isFormValid}>
          Submit
        </Styled.Button>
      </form>
    </>
  ) : (
    <p>Submitted! Thank you for your feedback!</p>
  );
};

export default Feedback;
