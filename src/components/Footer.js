import React from 'react'
import style from '../styles/footer.css'

export default class Footer extends React.Component{
    render() {
        return (
            <div className={style.wrapper}>
                    Профессиональный фотограф Кристина Колбасова  |  МО, г.Королев  |  тел.: +7(977)282-89-20  |  email: kdemenko@inbox.ru
            </div>
        );
    }
}
