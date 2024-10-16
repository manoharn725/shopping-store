import { useSelector } from "react-redux";

const ProductList = () => {
  const productsList = useSelector((state) => state.products)

  return (
    <div className="products-container">
    {productsList.map((product) => {
      return(
    <div className="product" key={product.id}>
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{product.title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{+product.rating.rate}⭐⭐⭐⭐</p>
        <p className="price">${product.price}</p>
      </div>
      <div className="cta-container">
        <button>Add to Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  )})}
  </div>
  );
};
export default ProductList;
