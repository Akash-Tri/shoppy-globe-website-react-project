import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function ProductItem({ product }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  return (
    <div className="product-item">
      <Link className="product-link" to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} />
        <h3>{product.title}</h3>
        <div className="price">${product.price.toFixed(2)}</div>
      </Link>
      <button className="add-btn" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
