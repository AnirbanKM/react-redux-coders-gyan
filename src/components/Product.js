import React, { useState, useEffect } from 'react';
// We need a useDispatch hook for dispatcher
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Product = () => {

    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {

            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProducts(data);
        }

        fetchProducts();
    }, []);

    const handleAdd = (product) => {
        // we need store the product into the redux store
        dispatch(add(product));
    }

    return (
        <div className='row products'>
            {
                products.map((product, index) => {
                    return <div className="col-md-3" key={product.id}>
                        <img src={product.image} alt="Card image" />
                        <h4 className="card-title">{product.title}</h4>
                        <h5 className="card-title">Price: {product.price}/-</h5>
                        <button type="button" className="btn btn-primary" onClick={() => handleAdd(product)}>
                            Add to cart
                        </button>
                    </div>;
                })
            }

        </div>
    )
}

export default Product;