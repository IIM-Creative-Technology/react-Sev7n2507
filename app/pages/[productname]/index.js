import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import Marketplace from '../../components/Marketplace';
import { useEffect } from 'react';

const Pageproduct = () => {
  const product = JSON.parse(localStorage.getItem('selected_product'));

  console.log(product);

  return (
    <>
      <Navbar />
      <Card
        title={product.title}
        image={product.image}
        description={product.description}
        price={product.price}
      />
    </>
  );
};

export default Pageproduct;
