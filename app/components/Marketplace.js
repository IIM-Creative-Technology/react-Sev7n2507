import React, { useState, useEffect } from 'react';
import styles from '../styles/Marketplace.module.css';
import Card from './Card';

export default function Marketplace() {
  const [user, setUser] = useState(null);
  return (
    <div className={styles.marketcontainer}>
      <Card
        title="Sapin"
        image="https://images.unsplash.com/photo-1639247011190-79eb2abbe621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
        description="3m de haut"
        price="300"
      />

      <Card
        title="PC Gaming"
        image="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1684&q=80"
        description="Ca marche fort"
        price="1500"
      />
      <Card
        title="Smart watch"
        image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
        description="Pour le sport"
        price="250"
      />
      <Card
        title="Polaroid"
        image="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        description="Photos à l'ancienne"
        price="400"
      />
      <Card
        title="Nike"
        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        description="Cours plus vite"
        price="270"
      />
      <Card
        title="Plante"
        image="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
        description="Bien belle plante"
        price="90"
      />
    </div>
  );
}
