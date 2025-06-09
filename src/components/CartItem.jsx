import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(removeFromCart(item.id));
  }

  function handleQtyChange(e) {
    const qty = Number(e.target.value);
    if (qty >= 1) {
      dispatch(updateQuantity({ id: item.id, quantity: qty }));
    }
  }

  return (
    <div className="cart-item">
      <div className="item-info">
        <strong>{item.title}</strong>
        <p>Price: ${item.price.toFixed(2)}</p>
      </div>
      <div className="item-controls">
        <input
          type="number"
          min="1"
          value={item.quantity}
          className="qty-input"
          onChange={handleQtyChange}
          aria-label={`Quantity of ${item.title}`}
        />
        <button className="remove-btn" onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
