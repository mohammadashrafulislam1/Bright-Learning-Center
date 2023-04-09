import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className='root'>
    <Header></Header>
    <Outlet></Outlet>
    <section className='banner'>
     <div><h1 className='header-title'>Bright এর সাথে মজা করে শিখুন </h1></div>
    </section>
            
        </div>
    );
};

export default Home;