import React, { useState, useEffect } from 'react';

// We need a useDispatch hook for dispatcher
import { useDispatch, useSelector } from 'react-redux';

import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Product = () => {

    const dispatch = useDispatch();

    const { data: products, status } = useSelector((state) => state.product);

    useEffect(() => {

        dispatch(fetchProducts());

    }, []);

    const handleAdd = (product) => {
        // we need store the product into the redux store using useDispatch hook
        dispatch(add(product));
    }

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong....</h2>
    }

    return (
        <div className='row products'>
            {
                products.map((product) => {
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