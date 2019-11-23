import React from 'react'
import style from '../styles/price-content-wrapper.css'

export default class PriceContent extends React.Component{
    render(){
        return(
            <div className={style.priceContentWrapper}>
                <div>
                    <span>
                        <strong>ЭКСПРЕСС</strong><br/>
                        <s>3000</s><br/>
                        <strong>1500</strong><br/>
                        <p>Съемка 30 мин - 5 фото в деликатной ретуши<br/>
                        Все удачные кадры в авторской обработке<br/>
                        Разработка сценария фотосессии<br/>
                        Консультирование по подбору образа<br/>
                        Срок обработки - 1 неделя<br/><br/>
                        *студия, визажист, стилист оплачивается отдельно<br/>
                        </p>
                    </span>
                </div>
                <div>
                    <span>
                        <strong>СТАНДАРТ</strong><br/>
                        <s>4000</s><br/>
                        <strong>2500</strong><br/>
                        <p>Съемка 1 час - 15 фото в деликатной ретуши<br/>
                        Все удачные кадры в авторской обработке<br/>
                        Разработка сценария фотосессии<br/>
                        Консультирование по подбору образа<br/>
                        Срок обработки - 1 неделя<br/><br/>
                        *студия, визажист, стилист оплачивается отдельно<br/>
                        </p>
                    </span>
                </div>
            </div>
        )
    }
};
