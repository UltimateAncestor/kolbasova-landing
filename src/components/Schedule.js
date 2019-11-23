import React from 'react'
import IFrame from 'react-iframe'
import style from '../styles/schedule.css'
import {Bounce} from "react-reveal";

export default class Schedule extends React.Component{
    render() {
        return(
            <Bounce right>
            <div className={style.calendarWrapper}>
            <IFrame
                src="https://calendar.google.com/calendar/embed?src=krkolbasova%40gmail.com&ctz=Europe%2FMoscow"
                style="border: 0"
                width="95%"
                height="600"
                frameborder="0"
                scrolling="no"/>
            </div>
            </Bounce>
        )
    }
}
