import React from 'react'

export default class ModalWindow extends React.Component{
    render() {
        return(
            <div>
            <iframe
                src="https://calendar.google.com/calendar/embed?src=55atob1k1rv6m7mjkp9nb0t8v8%40group.calendar.google.com&ctz=Europe%2FMoscow"
                style="border: 0" width="800" height="600" frameBorder="0" scrolling="no"/>
            </div>
        )
    }
}
