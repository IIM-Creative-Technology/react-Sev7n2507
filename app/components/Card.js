import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Card.module.css';

import { useRouter } from 'next/router';

export default function Card(props) {
  const router = useRouter();

  const gotoproductpage = () => {
    localStorage.setItem('selected_product', JSON.stringify(props));
    router.push(props.title);
  };
  return (
    <>
      {props && (
        <div className={styles.cardcontainer}>
          <Image src={props.image} alt="" width="300vh" height="200vh" />

          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <h2>{props.price} €</h2>
          <button
            onClick={() => {
              gotoproductpage();
            }}
          >
            Acheter
          </button>
        </div>
      )}
    </>
  );
}
