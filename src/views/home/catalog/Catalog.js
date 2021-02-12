import React, {Fragment} from 'react';
import './catalog.scss'
import catalogImg from './../../../assets/images/catalog/1.png';

function Catalog() {

    const Products = [
        {
            id: 1,
            image: '1.png',
            name: "КОМПЛЕКТ ПОСТЕЛЬНОГО БЕЛЬЯ MENSY ЛЮКС",
            size: "Полуторный",
            material: "Сатин / 100% хлопок",
            price: 1499
        },
        {
            id: 2,
            image: '1.png',
            name: "КОМПЛЕКТ ПОСТЕЛЬНОГО БЕЛЬЯ MENSY ЛЮКС",
            size: "Полуторный",
            material: "Сатин / 100% хлопок",
            price: 1499
        },
    ];
    return (
        <section className='catalog'>
            <div className="catalog__content">

                {Products.map(p => (
                    <Fragment key={p.id}>
                        <div className="catalog__content__item">
                            <div className="item__image">
                                <img src={catalogImg} alt=""/>
                            </div>
                            <div className="item__info">
                                <div className="name">{p.name}</div>
                                <div className="size">{p.size}</div>
                                <div className="material">{p.material}</div>
                                <div className="item__end">
                                    <div className="buy">Купить</div>
                                    <div className="price">1499 ₽</div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                ))}

            </div>
        </section>
    );
}

export default Catalog;
