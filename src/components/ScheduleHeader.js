import React from 'react'
import Fade from 'react-reveal'
import style from '../styles/header.css'
import {Element} from 'react-scroll'

export default class Schedule extends React.Component{
    render() {
        return (
            <Element name='schedule'>
                <Fade left>
                    <div id={'schedule'} className={style.wrapper}>
                        <h2>|&nbsp;S&nbsp;c&nbsp;h&nbsp;e&nbsp;d&nbsp;u&nbsp;l&nbsp;e&nbsp;|
                        </h2>
                    </div>
                </Fade>
            </Element>
        );
    }
}
