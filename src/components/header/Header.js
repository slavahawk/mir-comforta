import React from 'react';
import {Link} from "react-router-dom";
import header from './header.scss';
import logo from './../../assets/images/logo.svg'

function Header() {
    return (
        <header>
            <div className="header__content">
                <div className="header__content__logo">
                    <Link to={'/'}>
                        <img src={logo} alt=""/>
                    </Link>
                </div>
                <nav className="header__content__nav">
                    <Link to={'/catalog'}>Каталог</Link>
                    <Link to={'/catalog'}>Оплата и доставка</Link>
                    <Link to={'/catalog'}>Контакты</Link>
                </nav>
                <div className="header__content__location">
                    <div className="location">Красноярск</div>
                    <a href="tel:+79082090500">+7 (908) 209 05 00</a>
                </div>
            </div>
        </header>
    )
}

export default Header
