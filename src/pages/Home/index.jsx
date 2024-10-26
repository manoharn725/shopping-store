import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/thunks/fetchProducts";
import { statusCode } from "../../components/utils/constants";

const Home = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

 if(status === statusCode.LOADING){
  return <p>Loading....</p>
 }
 if(status === statusCode.ERROR){
  return <p>Something went wrong! Try again later</p>
 }
  return (
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
  );
};
export default Home;
