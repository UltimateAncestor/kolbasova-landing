import React from 'react'
import idGenerator from 'react-id-generator'
import style from '../styles/collector.css'
import Header from "./Header";
import HeadPhotoContent from "./HeadPhotoContent";
import NavPanel from "./NavPanel";
import Portfolio from "./Portfolio";
import MainPhotoContent from "./MainPhotoContent";
import ModalWindow from "./ModalWindow";
import v1 from '../public/pictures/main_site/photo/vertical/web_view/1.svg'
import v2 from '../public/pictures/main_site/photo/vertical/web_view/2.svg'
import v3 from '../public/pictures/main_site/photo/vertical/web_view/3.svg'
import v4 from '../public/pictures/main_site/photo/vertical/web_view/6.svg'
import v5 from '../public/pictures/main_site/photo/vertical/web_view/7.svg'
import v6 from '../public/pictures/main_site/photo/vertical/web_view/8.svg'

const photo_web_view = [
    {
        id: idGenerator(),
        photo: v1
    },
    {
        id: idGenerator(),
        photo: v2
    },
    {
        id: idGenerator(),
        photo: v3
    },
    {
        id: idGenerator(),
        photo: v4
    },
    {
        id: idGenerator(),
        photo: v5
    },
    {
        id: idGenerator(),
        photo: v6
    }
];

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
                        <Portfolio/>
                    </div>
                    <div className={style.mainPhotoContent}>
                        <MainPhotoContent data={photo_web_view}/>
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
