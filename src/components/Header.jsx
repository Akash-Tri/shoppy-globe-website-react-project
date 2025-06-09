import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItemsCount = useSelector((state) => state.cart.items.length);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        ShoppyGlobe
      </div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/cart">Go to Cart</NavLink>
      </nav>
      <div
        className="cart-icon"
        onClick={() => navigate("/cart")}
        title="Go to Cart"
      >
       🛒
        {cartItemsCount > 0 && (
          <span className="cart-count">{cartItemsCount}</span>
        )}
      </div>
    </header>
  );
}

export default Header;
