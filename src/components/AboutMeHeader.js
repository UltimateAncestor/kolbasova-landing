import React from 'react'
import Fade from 'react-reveal'
import style from '../styles/header.css'
import {Element} from 'react-scroll'

export default class AboutMe extends React.Component{
    render() {
        return (
            <Element name='about'>
                <Fade right>
                    <div id={'main'} className={style.wrapper}>
                        <h2>|&nbsp;A&nbsp;b&nbsp;o&nbsp;u&nbsp;t&nbsp;&nbsp;m&nbsp;e&nbsp;|
                        </h2>
                    </div>
                </Fade>
            </Element>
        );
    }
}
