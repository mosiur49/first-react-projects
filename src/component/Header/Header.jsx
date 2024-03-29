import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">shop</a>
                <a href="/order">order</a>
                <a href="/inventory">Inventory</a>
                <a href="login">Login</a>
            </nav>

        </div>
    );
};

export default Header;