import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {

    const dispatch = useDispatch();

    const products = useSelector((state) => state.cart);

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    }

    return (
        <>
            <h3>Cart</h3>

            <table className="table products">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr key={product.id}>
                                <td> <img src={product.image} alt="Card image" /></td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={() => {
                                        handleRemove(product.id)
                                    }}>
                                        Add to cart
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Cart;