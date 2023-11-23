import React from 'react';
import { FaShoppingBag, FaUser, FaPaw } from 'react-icons/fa';
import style1 from '../style/app.module.css'



export default function Home() {
    return (
        <body>
            <main className={style1['header']}>
                <div className={style1['banner']}>
                </div>
                <div className='menu'>
                    <li>NAM</li>
                    <li>NỮ</li>
                    <li>TRẺ EM</li>
                    <li>SALE</li>
                    <li>THÔNG TIN</li>
                </div>

                <div className='others'>
                    <div>
                        <a href=''>
                            <FaPaw />
                        </a>
                    </div>
                    <div>
                        <a href=''>
                            <FaUser />
                        </a>
                    </div>
                    <div>
                        <a href=''>
                            <FaShoppingBag />
                        </a>
                    </div>
                </div>
            </main>
        </body>
    );

};