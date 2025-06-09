import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="cart-summary">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
