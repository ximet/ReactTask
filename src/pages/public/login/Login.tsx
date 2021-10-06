import * as Components from 'components';
import { useTranslation } from 'hooks';
import { Form } from './components';
import * as S from './styles';

const Login = () => {
  const { t } = useTranslation('login');

  return (
    <S.Box>
      <S.Header>
        <Components.Typography as="h1" variant="h1">
          {t('login_title')}
        </Components.Typography>
        <Components.ThemeSwitcher />
      </S.Header>
      <Form />
    </S.Box>
  );
};

export default Login;
