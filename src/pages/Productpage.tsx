import Header from '../components/header/header';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addCart } from '../redux/action';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}


const ProductPage: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product:any) =>{
    dispatch(addCart(product));
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data: Product = await response.json();
      setProduct(data);
      setLoading(false);
    };

    getProduct();
  }, [id]);

  const Loading: React.FC = () => {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  };

  const ShowProduct: React.FC = () => {
    if (!product) return null;

    return (
      <>
      
      <div className="col-md-6 mt-5">
        <img src={product.image} alt={product.title}  height="400px" width="400px"/>
      </div>
      <div className="col-md-6 mt-5">
        <h4 className='text-uppercase text-black-50'>
          {product.category}
        </h4>
        <h1 className='display-5'>{product.title}</h1>
        <p className="lead fw-bolder">
        rating: {product.rating && product.rating.rate}
        <i className="fa fa-start"></i>
        </p>
        <h3 className='display-6 fw-bold my-4'>
          ${product.price}
        </h3>
        <p className="lead">
          {product.description}
        </p>
        <button className="btn btn-outline-dark" onClick={()=>{addProduct(product)}}>
          buy now
        </button>
        {/* <NavLink to={"/cart"} className="btn  btn-dark">
          go to cart
        </NavLink > */}
      </div>
      </>
    );
  };

  return (
    <div>
      <Header/>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
