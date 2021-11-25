import React, { PureComponent } from 'react';
import './Header.css';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button';

class Header extends PureComponent {
  render() {
    return (
      <AuthConsumer value={this.context}>
        {({ isAuthorized, email }) =>
          <div className={'header__content'}>
            {isAuthorized && (
              <div className={'header-menu'}>
                <p className='header-menu__email header-email t-header-email'>{email}</p>
                <Button className={'t-logout'} children={'Logout'} />
              </div>
            )}
          </div>
        }
      </AuthConsumer>
    );
  }
}

export default Header;
