// pages/index.js
import React from 'react';
import Header from './components/header';
import style1 from '../style/app.module.css'

const HomePage = () => {
    return (
        <div className={style1['red']}>
            <Header />
            <span className={style1['black']}> <h1>Trang chủ</h1></span>
            {/* Nội dung trang chủ */}
        </div>
    );
};

export default HomePage;

