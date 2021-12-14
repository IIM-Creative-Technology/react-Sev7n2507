import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [user, setUser] = useState(null);
  return (
    <div className={styles.navcontainer}>
      <div className={styles.navcontainer__content}>
        <a href="/">
          <h3>Corp</h3>
        </a>
        <div>
          {user ? (
            <button className={styles.logout}>Logout</button>
          ) : (
            <button className={styles.login}>login</button>
          )}
        </div>
      </div>
    </div>
  );
}
