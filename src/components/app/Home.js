import React, { Component } from 'react';
import styles from './Home.css';

export class Home extends Component {

  render() { 

    return (
      <div className={styles.home}>
        <h1>welcome to goalpost</h1>
        <p>Set some goals.</p>
        <h3>Meet them.</h3>
        <p>Check on the progress of others.</p>
        <h3>Judge them.</h3>
        
      </div>
    );
  }
}
 
export default Home;