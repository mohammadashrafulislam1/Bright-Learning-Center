import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='menu'>
            <img src="../../../images/logo.jpg" alt="" />

    <div className='right-side'>
            <Link className='link' to="/">হোম</Link>
            <Link className='link' to="/academic">একাডেমিক প্রোগ্রাম</Link>
            <Link className='link' to="/course">কোর্স</Link>
            <Link className='link' to="/about">আমাদের সম্পর্কে</Link>
            <Link className='link' to="/contact">যোগাযোগ</Link>
                
            <Link to="#"><button className='login-btn'>লগ ইন / সাইন আপ</button></Link>
    </div>
            
        </div>
    );
};

export default Header;