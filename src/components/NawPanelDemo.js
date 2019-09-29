import React from 'react'
import style from '../styles/nav_panel.css'
import {HashRouter, Route} from 'react-router-dom'
import Header from './Header'
import Portfolio from "./Portfolio";

export default class NavPanelDemo extends React.Component{
    render() {
        return (
                <HashRouter>
                    <Route path={"/main"} component={Header} />
                    <Route path={"/portfolio"} component={Portfolio} />
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
                </HashRouter>
        );
    }
}
