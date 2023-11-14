// components/Header.js
import React from 'react';
import style1 from '@/app/style/app.module.css'

const Header = () => {
    return (
        <header>
            <span className={style1['blue']}><h1>Logo</h1></span>
            {/* Thêm các phần tử khác của header */}
        </header>
    );
};

export default Header;
