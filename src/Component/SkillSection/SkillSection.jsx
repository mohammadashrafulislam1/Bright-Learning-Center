import React from 'react';
import './SkillSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const SkillSection = () => {
    return (
        <div>
    <div className='skill-section'>
    <h2>আমরা আমাদের শিক্ষার্থীদের <br/> যা অফার করছি</h2>
    <p>যেকোনো বিষয়ে যেকোনো কিছু শিখতে চলে যাও তোমার পছন্দের সেকশনে</p>
    </div>

    <div className='cards'>
        <div className='skill-card'>
            <img src="https://cdn-icons-png.flaticon.com/512/3429/3429142.png" alt="" />
            <div>
                <h3>পঞ্চম থেকে দ্বাদশ শ্রেণি পর্যন্ত</h3>
                <p>বিশেষজ্ঞ শিক্ষক তাদের গাইড করবেন</p>
            </div>
            <FontAwesomeIcon icon={faAngleRight} />
        </div>

        <div className='skill-card'>
            <img src="https://cdn-icons-png.flaticon.com/512/3095/3095221.png" alt="" />
            <div>
                <h3>স্কিলস</h3>
                <p>IELTS, SPOKEN ENGLISH</p>
            </div>
            <FontAwesomeIcon icon={faAngleRight} />
        </div>
    </div>
        </div>
    );
};

export default SkillSection;