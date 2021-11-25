import React, { PureComponent } from 'react';
import './Layout.css';
import SectionTitle from '../SectionTitle';
import Header from '../Header';
import { AuthConsumer, AuthProvider } from '../../contexts/Auth';
import Footer from '../Footer';
import LoginForm from '../LoginForm';

class Layout extends PureComponent {

  render() {
    return (
      <AuthConsumer>
        {() => (
          <React.Fragment>
            {this.props.header && (
              <header className={'header'}>
                <SectionTitle className={'header__title'} children={'Header'} />
                <Header />
              </header>
            )}
            <main
              className={`main ${this.props.header ? 'main--with-header' : ''} ${this.props.footer ? 'main--with-footer' : ''}`}>
              <SectionTitle className={'main__title'} children={'Main'} />
              {this.props.children}
            </main>
            {this.props.footer && (
              <footer className={'footer'}>
                <SectionTitle className={'header__title'} children={'Footer'} />
                <Footer />
              </footer>
            )}
          </React.Fragment>
        )
        }
      </AuthConsumer>
    );
  }
}

export default Layout;
