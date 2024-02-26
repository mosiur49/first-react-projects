import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <Link Link to="/">shop</Link>
                <Link Link to="/Orders">Order</Link>
                <Link Link to="/inventory">Inventory</Link>
                <Link Link to="login">Login</Link>
            </nav>

        </div>
    );
};

export default Header;