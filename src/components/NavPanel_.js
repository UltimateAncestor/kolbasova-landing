import React from 'react'
import style from '../styles/nav_panel.css'
import {Link} from 'react-scroll'

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
                        <Link to={'main'} spy={true} smooth={true} duration={500}>В начало</Link>
                    </li>
                    <li className={style.menu__item}>
                        <Link to={'test'} spy={true} smooth={true} duration={500}>Портфолио</Link>
                    </li>
                    <li className={style.menu__item}>
                        <Link to={'prices'} spy={true} smooth={true} duration={500}>Прайс</Link>
                    </li>
                    <li className={style.menu__item}>
                        <Link to={'contacts'} spy={true} smooth={true} duration={500}>Контакты</Link>
                    </li>
                    <li className={style.menu__item}>
                        <Link to={'schedule'} spy={true} smooth={true} duration={500}>Расписание</Link>
                    </li>
                    <li className={style.menu__item}>
                        <Link to={'about'} smooth={true} duration={500}>Обо мне</Link>
                </li>
                </ul>
            </div>
    );}}
