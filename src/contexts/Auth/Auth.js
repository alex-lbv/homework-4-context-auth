import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    'email': '',
    'authorizeError': '',
    'isAuthorized': false
  };

  authorize = (email, password) => {
    (email === 'stu@dent.com' && password === '123')
      ?
      (
        this.setState({ isAuthorized: true, email: email, authorizeError: '' })
      )
      :
      (
        this.setState({ authorizeError: 'Email или пароль введён не верно' })
      );
  };

  logout = () => {
    this.setState({ isAuthorized: false });
  };

  getProviderValue = () => {
    return {
      'email': this.state.email,
      'isAuthorized': this.state.isAuthorized,
      'authorizeError': this.state.authorizeError,
      'authorize': this.authorize,
      'logout': this.logout
    };
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
