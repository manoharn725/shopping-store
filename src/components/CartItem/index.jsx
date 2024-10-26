import { useDispatch } from "react-redux";
import {
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} from "../../redux/slices/cartItemsSlice";

const CartItem = ({ id, title, price, quantity, image, rating }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-item-container">
      <div className="cart-item" key={id}>
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button
          onClick={() => dispatch(decreaseCartItemQuantity({ id, title, price, quantity, image, rating}))}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => dispatch(increaseCartItemQuantity({ id, title, price, quantity, image, rating}))}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(removeCartItem(id));
          }}
        >
          Remove
        </button>
      </div>
      <div className="item-total">${quantity * price}</div>
    </div>
  );
};

export default CartItem;
