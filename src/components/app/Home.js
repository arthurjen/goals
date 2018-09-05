import React, { Component } from 'react';
import styles from './Home.css';

export class Home extends Component {

  render() { 

    return (
      <div className={styles.home}>
        <p>Set some goals. Complete them.</p>
        <p>Look at other people's goals. Judge them.</p>
        
      </div>
    );
  }
}
 
export default Home;