import React from 'react'
import style from '../styles/main-photo-content.css'

export default class MainPhotoContent extends React.Component{
    render() {
        const photo_content = this.props.data.map(function (item) {
            return(
                <div id={item.id} className={style.photo_wrapper}>
                    <span>Открыть</span>
                    <img src={item.photo} alt={"photo"}/>
                </div>
            )
        });
        return(
            <React.Fragment>
            <div className={style.wrapper}>
                {photo_content}
            </div>
            </React.Fragment>
        )
    }
}
