// pages/index.js
import React from 'react';
import Header from './components/header';
import style1 from '../style/app.module.css'

export default function Home() {
    return (
        <main className='header'>
            <div className={style1['top-header']}>
                <div className={style1['top-header-inner']}>
                    <div className={style1['container']}>
                        <div className={style1['row align-items-center']}>
                            <div className={style1['col-lg-6 d-none d-lg-block']}>
                                <nav className={style1["header-navigation"]}>
                                    <div className={style1["menu-secondary-menu-container"]}>
                                        <ul id={style1["secondary-menu"]} className={style1["menu"]}>
                                            <li id="menu-item-130" className={style1["menu-item menu-item-type-post_type menu-item-object-page menu-item-130"]}>
                                                <a href="">TÀI KHOẢN</a></li>
                                            <li id="menu-item-131" className={style1["menu-item menu-item-type-post_type menu-item-object-page menu-item-131"]}>
                                                <a href="">YÊU THÍCH</a></li>
                                            <li id="menu-item-132" className={style1["menu-item menu-item-type-post_type menu-item-object-page menu-item-132"]}>
                                                <a href="">THANH TOÁN</a></li>
                                            <li id="menu-item-460" className={style1["menu-item menu-item-type-post_type menu-item-object-page menu-item-460"]}>
                                                <a href="">GIỎ HÀNG</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div className={style1['banner']}>

            </div>


        </main>

    );

};



