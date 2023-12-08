import React from 'react';
import { FaShoppingBag, FaUser, FaPaw, FaSearch } from 'react-icons/fa';
// import style1 from '../style/app.module.css'
import '@/styles/headerMenu.css';

export default function Home() {
    return (
        <body>
            <main className='header'>
                <form action="" id='search'>
                    <input type="text" placeholder="Search..." />
                    <button id='search-btn'><i className='fa-solid 
                    fa-magnifying-glass'></i></button>
                </form>
                <ul id="nav">
                    <li><a href="">Trang chủ</a></li>
                    <li><a href="">Tin Tức</a></li>
                    <li><a href="">Diễn Đàn</a></li>
                    <li><a href="">Sự Kiện</a></li>
                    <li><a href="">Thư Viện</a></li>
                </ul>
            </main>
        </body>
    );

};