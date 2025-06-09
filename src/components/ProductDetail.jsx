import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error('Failed to fetch product details');
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  if (loading) return <div className="product-detail" style={{ padding: '2rem' }}>Loading product details...</div>;
  if (error) return <div className="product-detail" style={{ padding: '2rem', color: 'red' }}>Error: {error}</div>;
  if (!product) return null;

  return (
    <div className="product-detail">
      <img src={product.thumbnail} alt={product.title} />
      <div className="details">
        <h2>{product.title}</h2>
        <p className="description">{product.description}</p>
        <div className="price">${product.price.toFixed(2)}</div>
        <button className="add-btn" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
