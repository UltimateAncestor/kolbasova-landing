import React from 'react'
import Fade from 'react-reveal'
import style from '../styles/header.css'
import {Element} from 'react-scroll'

export default class ContactsHeader extends React.Component{
    render() {
        return (
            <Element name='contacts'>
                <Fade left>
                    <div id={'main'} className={style.wrapper}>
                        <h2>|&nbsp;C&nbsp;o&nbsp;n&nbsp;t&nbsp;a&nbsp;c&nbsp;t&nbsp;s&nbsp;|
                        </h2>
                    </div>
                </Fade>
            </Element>
        );
    }
}
