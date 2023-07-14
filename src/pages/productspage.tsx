
import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
}

const Productspage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const componentMounted = useRef(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');

      if (response.ok) {
        const products: Product[] = await response.json();
        setProducts(products);
        setFilter(products);
        setLoading(false);
      } else {
        console.log('Error: Unable to fetch products.');
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted.current = false;
    };
  }, []);

  const Loading: React.FC = () => {
    return <>loading...</>;
  };

  const filterProduct = (cat: string) => {
    let updatedList: Product[] = [];
    if (cat === 'all') {
      updatedList = products;
    } else {
      updatedList = products.filter((product) => product.category.toLowerCase() === cat.toLowerCase());
    }
    setFilter(updatedList);
  };

  const ShowProducts: React.FC = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline btn-dark me-2" onClick={() => filterProduct('all')}>
            all
          </button>
          <button className="btn btn-outline btn-dark me-2" onClick={() => filterProduct("men's clothing")}>
            men's clothing
          </button>
          <button className="btn btn-outline btn-dark me-2" onClick={() => filterProduct("women's clothing")}>
            women's clothing
          </button>
          <button className="btn btn-outline btn-dark me-2" onClick={() => filterProduct('jewelery')}>
            jewelry
          </button>
          <button className="btn btn-outline btn-dark me-2" onClick={() => filterProduct('electronics')}>
            Electronics
          </button>
        </div>
        {filter.map((product: Product, index: number) => {
          return (
            <div key={product.id} className="col-md-3">
              <div className="card h-100 text-center p-4">
                <img className="card-img-top" src={product.image} alt={product.title} height="250px" />
                <div className="card-body">
                  <h5 className="card-title">{product.title.substring(0, 12)}</h5>
                  <p className="card-text">${product.price}</p>
                  <NavLink to={`/productpage/${product.id}`} className="btn btn-outline-dark text-danger">buy now</NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">latest products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Productspage;
