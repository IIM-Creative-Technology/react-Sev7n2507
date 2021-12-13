import React from 'react';
import Image from 'next/image';
import styles from '../styles/Card.module.css';

export default function Card(props) {
  return (
    <div className={styles.cardcontainer}>
      <Image src={props.image} alt="" width="300vh" height="200vh" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <h2>{props.price} €</h2>
      <button onClick={() => console.log(props)}>Acheté</button>
    </div>
  );
}
