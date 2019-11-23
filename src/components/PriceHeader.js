import React from 'react'
import Fade from 'react-reveal'
import style from '../styles/header.css'
import {Element} from 'react-scroll'

export default class PriceHeader extends React.Component{
    render() {
        return (
            <Element name='prices'>
                <Fade left>
                    <div id={'main'} className={style.wrapper}>
                        <h2>|&nbsp;P&nbsp;r&nbsp;i&nbsp;c&nbsp;e&nbsp;s&nbsp;|
                        </h2>
                    </div>
                </Fade>
            </Element>
        );
    }
}
