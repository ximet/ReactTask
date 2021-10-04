import * as Components from 'components';
import { useTranslation } from 'hooks';
import { StyledBox, StyledHeader, Form } from './components';

const Login = () => {
  const { t } = useTranslation('login');

  return (
    <Components.Wrapper>
      <Components.Container size="sm">
        <StyledBox>
          <StyledHeader>
            <Components.Typography as="h1" variant="h1">
              {t('login_title')}
            </Components.Typography>
            <Components.ThemeSwitcher />
          </StyledHeader>
          <Form />
        </StyledBox>
      </Components.Container>
    </Components.Wrapper>
  );
};

export default Login;
