import styled from 'styled-components';
import * as Components from 'components';
import { useTranslation } from 'hooks';

const StyledBox = styled(Components.Box)`
  margin-top: ${(props) => props.theme.spacing(40)};
`;

const StyledHeader = styled('header')`
  display: flex;
  justify-content: space-between;
`;

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
        </StyledBox>
      </Components.Container>
    </Components.Wrapper>
  );
};

export default Login;
