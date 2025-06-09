import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import useFetchProducts from '../hooks/useFetchProducts';

function ProductList() {
  const { products, loading, error } = useFetchProducts();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="product-list-container">Loading products...</div>;
  if (error) return <div className="product-list-container">Error: {error}</div>;

  return (
    <div className="product-list-container">
      <input
        type="search"
        className="search-input"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        aria-label="Search products"
      />
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
