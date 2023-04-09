import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import './Home.css';
import SkillSection from '../SkillSection/SkillSection';
import GetFromUs from '../GetFromUs/GetFromUs';

const Home = () => {
    return (
        <div className='root'>
    <Header></Header>
    <Outlet></Outlet>
    <section className='banner'>
        <div>
        <h1 className='header-title'> <span>Bright</span> এর সাথে আপনার উজ্জ্বল ভবিষ্যতের জন্য সেরা শিক্ষা </h1>
        <p className='header-des'>সকল শিক্ষার্থীদের সারাবছর পড়ালেখার <br/> কমপ্লিট সল্যুশন</p>

        <div>
            <button className='header-btn'>সমস্ত প্রোগ্রাম দেখুন</button>
        </div>
        </div>

        <div className='right-side'>
            <img src="../../../images/pngegg (1).png" alt="" />
        </div>
    </section>
    
    <SkillSection></SkillSection>
    <GetFromUs></GetFromUs>
        </div>
    );
};

export default Home;