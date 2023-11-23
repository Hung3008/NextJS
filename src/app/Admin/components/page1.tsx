// pages/index.js
import React from 'react';

import style1 from '../style/app.module.css'

export default function Home() {
    return (
        <body>
            <main className='header'>
                <div className={style1['banner']}>

                </div>
                <div className='menu'>
                    <li>NAM</li>
                    <li>NỮ</li>
                    <li>TRẺ EM</li>
                    <li>SALE</li>
                    <li>THÔNG TIN</li>
                </div>
                {/* <div className='others'>
                    <li><input type='text'> <i className='fas fa-search'></i></input></li>
                    <li><a className='fa fa-paw' href=''></a></li>
                    <li><a className='fa fa-user' href=''></a></li>
                    <li><a className='fa fa-shopping-bag' href=''></a></li>
                </div> */}


            </main>
        </body>
    );

};



