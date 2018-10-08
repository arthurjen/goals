import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';
import { NavLink } from 'react-router-dom';
import Error from './Error';
import styles from './Header.css';

class Header extends PureComponent {

  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  };

 

  render() { 
    const { user, logout } = this.props;

    return (
      <header className={styles.header}>
        <section>
          <section id="title">
            <h1><NavLink exact to="/">goalpost</NavLink></h1>
            {user &&
              <span>
                <i className="fas fa-user"></i>
                {user.name}
              </span>
            }
          </section>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/goals">
                  <i className="fas fa-list"></i> goals
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/users">
                  <i className="fas fa-users"></i> users
                </NavLink>
              </li>
              <li>
                { user
                  ? <NavLink to="/" onClick={logout}>
                    <i className="fas fa-sign-out-alt"></i> logout
                  </NavLink>
                  : <NavLink to="/auth">
                    <i className="fas fa-sign-in-alt"></i> login
                  </NavLink>
                }
              </li>
            </ul>
          </nav>
        </section>

        <Error/>
      </header>
    );
  }
}
 
export default connect(
  state => ({ user: getUser(state) }),
  { logout }
)(Header);