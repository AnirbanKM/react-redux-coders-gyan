import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const items = useSelector((state) => state.cart);

    return (
        <>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <Link className="navbar-brand" to="/">Redux Store</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link">Cart</Link>
                        </li>
                        <li className="nav-item">
                            Cart item: {items.length}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;