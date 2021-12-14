import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Card.module.css';

import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Card(props) {
  const [selected, setSelected] = useState(null);
  const router = useRouter();

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const gotoproductpage = () => {
    localStorage.setItem('selected_product', JSON.stringify(props));
    router.push(props.title);
  };
  return (
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
  );
}
