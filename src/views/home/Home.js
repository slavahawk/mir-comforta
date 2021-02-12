import React, {Fragment} from 'react';
import './home.scss'
import mainBackground from './../../assets/images/home/1.png';
import {Link} from "react-router-dom";
import Catalog from "./catalog/Catalog";


function Home() {

    return (
        <div className="home">
            <section className='main' style={{backgroundImage: `url(${mainBackground})`}}>
                <div className="main__content">
                    <h1>Постельное белье европейского производства</h1>
                    <p>
                        Спите крепче, наслаждаясь приятным и качественным постельным бельем из экологически чистых
                        материалов.
                    </p>
                    <Link to={'/catalog'}>Смотреть каталог</Link>
                </div>
            </section>
            <section className='advantages'></section>
            <Catalog/>
        </div>
    );
}

export default Home;
