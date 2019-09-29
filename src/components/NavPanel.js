import React from 'react'
import style from '../styles/nav_panel.css'

export default class NavPanel extends React.Component{
    render() {
        return (
            <div>
                <input id="menu__toggle" className={style.menu__toggle}
                       type="checkbox"/>
                <label className={style.menu__btn}
                       htmlFor="menu__toggle">
                    <span>

                    </span>
                </label>
                <ul className={style.menu__box}>
                    <li className={style.menu__item}>
                        <div>
                            <span>
                                Главная
                            </span>
                        </div>
                    </li>
                    <li className={style.menu__item}>
                        <span>
                                Портфолио
                        </span>
                    </li>
                    <li className={style.menu__item}><a>Прайс</a></li>
                    <li className={style.menu__item}><a>Бронирование</a></li>
                    <li className={style.menu__item}><a>Обо мне</a></li>
                    <li className={style.menu__item}><a>Контакты</a></li>
                </ul>
            </div>
        );
    }
}
