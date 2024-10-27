import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../store/slices/cartItemsSlice";

const Product = ({ id, title, rating, price, image }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.products);
  return (
    <div className="product">
      <div className="product-image">
        <img
          src={image}
          alt={`${isLoading ? title : 'loading...'}`}
        />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{+rating} ★ ★ ★ ★</p>
        <p className="price">${price}</p>
      </div>
      <div className="cta-container">
        <button
          onClick={() =>
            dispatch(addCartItem({ id, title, rating, price, image }))
          }
        >
          Add to Cart
        </button>
        <button>Add to Wishlist</button>
      </div>
    </div>
  );
};
export default Product;
