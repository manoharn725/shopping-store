import { Link } from "react-router-dom";
import cartIcon from "../../assets/cart-icon.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems  = useSelector((state) => state.cartItems);

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopping Store</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={cartIcon} alt="cart-icon" width={"30px"} />
          <div className="cart-items-count">{cartItems.length}</div>
        </Link>
      </div>
    </header>
  );
};
export default Header;
