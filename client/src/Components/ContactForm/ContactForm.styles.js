import styled from 'styled-components';
import theme from 'styled-theming';


export const backgroundColor = theme('theme', {
  light: '#b3ecff',
  dark: '#243145'
});

export const textColor = theme('theme', {
  light: '#000',
  dark: '#fafafa'
});

export const Container = styled.article`
  background: ${backgroundColor};
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  margin: 2rem auto 2rem auto;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
  }
`;

export const Input = styled.input`
  background: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  margin: 0.5rem 0;
  font-size: 1.2rem;
  font-weight: bold;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0.5rem 0;
  }
`;

export const TextArea = styled.textarea`
  background: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  margin: 0.5rem 0;
  font-size: 1.2rem;
  font-weight: bold;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0.5rem 0;
  }
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
  }
  margin-bottom: 20px;
`;
export const Error = styled.div`
  color: red;
`;

export const Button = styled.button`
  background: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  margin: 0.5rem 0;
  font-size: 1.2rem;
  font-weight: bold;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0.5rem 0;
  }
`;
export const Success = styled.div`
  color: green;
`;
