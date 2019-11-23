import React from 'react'
import Fade from 'react-reveal'
import style from '../styles/header.css'
import {Element} from 'react-scroll'

export default class Header extends React.Component{
    render() {
        return (
            <Element name='main'>
            <Fade left>
                <div id={'main'} className={style.wrapper}>
                    <h2>|K&nbsp;R&nbsp;I&nbsp;S&nbsp;T&nbsp;I&nbsp;N&nbsp;
                        A&nbsp;&nbsp;&nbsp;K&nbsp;O&nbsp;L&nbsp;B&nbsp;A&nbsp;S&nbsp;O&nbsp;V&nbsp;A|
                    </h2>
                </div>
            </Fade>
            </Element>
        );
    }
}
