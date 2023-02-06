import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const items = useSelector((state) => state.cart);

    const [bodyBgDark, setbodyBgDark] = useState(false);


    const changeBodyBg = () => {

        document.getElementsByClassName('screenMode')[0].innerText = 'White Mode';

        document.getElementsByClassName('screenMode')[0].style.cssText = 'background: #fff; color: #1c1c1c; border: 2px solid green;';

        let appBody = document.getElementsByTagName('body');

        if (bodyBgDark) {
            appBody[0].classList.remove('dark');
            setbodyBgDark(false);
            document.getElementsByClassName('screenMode')[0].innerText = 'Dark Mode';
            document.getElementsByClassName('screenMode')[0].style.cssText = 'background: #1c1c1c; color: #fff; border: 2px solid green;';
            return false;
        }

        appBody[0].classList.add('dark');
        setbodyBgDark(true);

    }

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
                        <li className="nav-item">
                            <button className='screenMode' onClick={changeBodyBg}>Dark More</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;