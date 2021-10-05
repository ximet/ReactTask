// example class component
import * as React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { reduxForm, Field } from 'redux-form';
import * as Components from 'components';
import * as authActions from 'store/auth/actions';
import { StyledWrapper } from './components';

class Form extends React.Component {
  onSubmit = (values) => {
    const { dispatch } = this.props;
    dispatch(authActions.login({ data: values }));
  };

  render() {
    const { t, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <StyledWrapper>
          <Field
            name="email"
            component={Components.TextInput}
            label={t('email')}
            type="email"
          />
          <Field
            name="password"
            component={Components.TextInput}
            label={t('password')}
            type="password"
          />
        </StyledWrapper>
        {/* TODO: add spinner */}
        <Components.Button type="submit" role="button">
          {t('login_title')}
        </Components.Button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({ loading: state.auth.loading });

const ReduxForm = reduxForm({ form: 'login' })(Form);
const ConnectedForm = connect(mapStateToProps)(ReduxForm);

export default withTranslation('login')(ConnectedForm);
