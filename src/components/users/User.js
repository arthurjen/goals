import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './User.css';

class User extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  render() { 
    const { user } = this.props;

    return (
      <li className={styles.user}>
        <p>{user.name}</p>
        <section className="numbers">
          <p className="number">{user.completed}</p>
          <p className="number">/</p>
          <p className="number">{user.total}</p>
        </section>
      </li>
    );
  }
}
 
export default User;