import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import styles from './Goals.css';

export class Goals extends PureComponent {

  static propTypes = {
    user: PropTypes.object,
  };

  componentDidMount() {
  }


  render() { 
    const { user } = this.props;

    return (
      <div className={styles.goals}>
        <h2>YOU ARE {user.name}!</h2>
      </div>
    );
  }
}
 
export default connect(
  state => ({
    user: getUser(state),
  }),
  null
)(Goals);
