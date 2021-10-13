// example class component
import * as React from 'react';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { withTranslation, TFunction } from 'react-i18next';
import * as Components from 'components';
import { LoginSchema } from 'types/schemas';
import { authActions } from 'store/auth';
import { RootState } from 'store/types';
import * as S from './styles';

interface FormProps {
  dispatch: ThunkDispatch<RootState, void, AnyAction>;
  t: TFunction;
}
class Form extends React.Component<
  InjectedFormProps<LoginSchema, FormProps> & FormProps
> {
  onSubmit = (values: LoginSchema): void => {
    const { dispatch } = this.props;
    dispatch(authActions.login(values));
  };

  render() {
    const { t, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <S.Wrapper>
          <Field
            name="user"
            component={Components.TextInput}
            label={t('user')}
          />
          <Field
            name="password"
            component={Components.TextInput}
            label={t('password')}
            type="password"
          />
        </S.Wrapper>
        {/* TODO: add spinner */}
        <Components.Button type="submit" role="button">
          {t('login_title')}
        </Components.Button>
      </form>
    );
  }
}

const mapStateToProps = (state: RootState) => ({ loading: state.auth.loading });

const ReduxForm = reduxForm<LoginSchema, FormProps>({ form: 'login' })(Form);
const ConnectedForm = connect(mapStateToProps)(ReduxForm);

export default withTranslation('login')(ConnectedForm);
