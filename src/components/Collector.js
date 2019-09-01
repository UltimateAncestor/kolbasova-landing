import React from 'react'
import style from '../styles/collector.css'
import Header from "./Header";
import HeadPhotoContent from "./HeadPhotoContent";
import NavPanel from "./NavPanel";

export default class Collector extends React.Component{
    render() {
        return (
            <React.Fragment>
            <NavPanel/>
            <div className={style.rootModel}>
                    <div className={style.header}>
                        <Header/>
                    </div>
                    <div className={style.headPhotoContent}>
                        <HeadPhotoContent/>
                    </div>
                    <div className={style.textHeaderContent}>

                    </div>
                    <div className={style.mainPhotoContent}>

                    </div>
                    <div className={style.textPrice}>

                    </div>
                    <div className={style.priceContent}>

                    </div>
                    <div className={style.blockСontacts}>

                    </div>
                    <div className={style.footerPhotoContent}>

                    </div>
                    <div className={style.textFooterContent}>

                    </div>
                    <div className={style.aboutMe}>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}
