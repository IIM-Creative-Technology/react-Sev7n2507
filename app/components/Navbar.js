import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [user, setUser] = useState(null);
  return (
    <div className={styles.navcontainer}>
      <a href="/">
        <h3>Corp</h3>
      </a>
      <p>Menu</p>
      <div>{user ? <button>Logout</button> : <button>login</button>}</div>
    </div>
  );
}
