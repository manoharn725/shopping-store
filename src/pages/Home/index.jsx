import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product";
import { useEffect } from "react";
import { fetchProducts } from "../../store/thunks/fetchProducts";

const Home = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {isError ? (
        <h1>Something went wrong! Try again later</h1>
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="products-container">
          {products.map(({ id, title, rating, price, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              rating={rating.rate}
              price={price}
              image={image}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default Home;
