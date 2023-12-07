import React from 'react';
import { FaShoppingBag, FaUser, FaPaw, FaSearch } from 'react-icons/fa';
// import style1 from '../style/app.module.css'
// import headerCss from './components/acx.css'
import '@/styles/header.css';


export default function Home() {
    return (
        <body>
            <main className='header'>
                <div className='banner'></div>
                <div className='menu'>
                    <li>NAM</li>
                    <li>NỮ</li>
                    <li>TRẺ EM</li>
                    <li>SALE</li>
                    <li>THÔNG TIN</li>
                </div>

                <div className='others'>
                    <div>
                        <li><input type="text" /></li><a href=''><FaSearch /></a>
                    </div>
                    <div>
                        <a href=''>
                            <li><FaPaw /></li>
                        </a>
                    </div>
                    <div>
                        <a href=''>
                            <li><FaUser /></li>
                        </a>
                    </div>
                    <div>
                        <a href=''>
                            <li> <FaShoppingBag /></li>
                        </a>
                    </div>
                </div>
            </main>

        </body>
    );

};