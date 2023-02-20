import React, { Fragment, useEffect } from "react";
// import { CgMouse } from "react-icons";

import "./Home.css";
import ProductCard from "./ProductCard";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../Redux/Actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";


const Home = () => {
  const alert=useAlert()
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    if(error){
       alert.error(error)
       dispatch(clearErrors)
    }
    dispatch(getProduct());
  }, [dispatch,error,alert]);
  return (
    <Fragment>
      {loading ? (
    <Loader/>
      ) : (
        <Fragment>
          <MetaData title="Husky-shop" />
          <div className="banner">
            <p>Welcome to Husky Shop</p>
            <h1>Find Amazing proudtcs Below </h1>
            <a href="#container">
              <button>
                Scroll
                {/* <CgMouse /> */}
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured product</h2>
          <div className="container" id="container">
            {products &&
              products.slice(0,3).map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;