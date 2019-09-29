import React from 'react'
import Fade from 'react-reveal'
import style from '../styles/portfolio.css'

export default class Portfolio extends React.Component{
    render() {
        return (
            <Fade right>
                <div className={style.wrapper}>
                    <h2>|&nbsp;P&nbsp;&nbsp;o&nbsp;&nbsp;r&nbsp;&nbsp;t&nbsp;&nbsp;f&nbsp;&nbsp;o&nbsp;&nbsp;l&nbsp;&nbsp;i&nbsp;&nbsp;o&nbsp;|</h2>
                </div>
            </Fade>
        );
    }
}
