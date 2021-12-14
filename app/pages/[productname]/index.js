import Navbar from '../../components/Navbar';
import styles from '../../styles/Product.module.css';

const Pageproduct = () => {
  const product = JSON.parse(localStorage.getItem('selected_product'));

  return (
    <div>
      <Navbar />
      {product && (
        <div className={styles.product__container}>
          <div className={styles.product__container_img}>
            <img src={product.image} alt="" />
          </div>
          <div className={styles.product__container_infos}>
            <h2 className="product__container-title">{product.title}</h2>
            <h3 className="product__container-price">{product.price} Є</h3>
          </div>
          <div className={styles.product__container_desc}>
            <p className="product__container-description">
              {product.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pageproduct;
