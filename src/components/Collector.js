import React from 'react'
import style from '../styles/collector.css'
import Header from "./Header";
import HeadPhotoContent from "./HeadPhotoContent";
import Portfolio from "./Portfolio";
import uuid from 'uuid'
import NavPanel_ from "./NavPanel_";
import PriceHeader from "./PriceHeader";
import PriceContent from './PriceContent'
import ContactsHeader from "./ContactsHeader";
import ContactsContent from "./ContactsContent";
import AboutMeContent from "./AboutMeContent";
import Schedule from "./Schedule";
import ScheduleHeader from "./ScheduleHeader";
import AboutMeHeader from "./AboutMeHeader";
import FooterPhotoContent from "./FooterPhotoContent";
import HorizontalPhotos from "./HorizontalPhotos";
import Footer from "./Footer";
import mainPhotoContent from "./MainPhotoContent";

import v1 from "../public/pictures/main_site/photo/vertical/web_view/gif/1.gif";
import v2 from "../public/pictures/main_site/photo/vertical/web_view/gif/2.gif"
import v3 from "../public/pictures/main_site/photo/vertical/web_view/gif/3.gif"
import v4 from "../public/pictures/main_site/photo/vertical/web_view/gif/6.gif";
import v5 from "../public/pictures/main_site/photo/vertical/web_view/gif/7.gif";
import v6 from "../public/pictures/main_site/photo/vertical/web_view/gif/8.gif";
import v7 from "../public/pictures/main_site/photo/vertical/web_view/gif/11.gif";
import v8 from "../public/pictures/main_site/photo/vertical/web_view/gif/12.gif";
import v9 from "../public/pictures/main_site/photo/vertical/web_view/gif/13.gif";
import v10 from "../public/pictures/main_site/photo/vertical/web_view/gif/16.gif";
import v11 from "../public/pictures/main_site/photo/vertical/web_view/gif/17.gif";
import v12 from "../public/pictures/main_site/photo/vertical/web_view/gif/18.gif";
import v13 from "../public/pictures/main_site/photo/vertical/web_view/gif/19.gif";
import v14 from "../public/pictures/main_site/photo/vertical/web_view/gif/20.gif";
import v15 from "../public/pictures/main_site/photo/vertical/web_view/gif/21.gif";
import v16 from "../public/pictures/main_site/photo/vertical/web_view/gif/22.gif";
import v17 from "../public/pictures/main_site/photo/vertical/web_view/gif/23.gif";
import v18 from "../public/pictures/main_site/photo/vertical/web_view/gif/24.gif";
import v19 from "../public/pictures/main_site/photo/vertical/web_view/gif/25.gif";
import v20 from "../public/pictures/main_site/photo/vertical/web_view/gif/26.gif";

import h1 from '../public/pictures/main_site/photo/horizontal/web_view/gif/4.gif';
import h2 from '../public/pictures/main_site/photo/horizontal/web_view/gif/5.gif';
import h3 from '../public/pictures/main_site/photo/horizontal/web_view/gif/9.gif';
import h4 from '../public/pictures/main_site/photo/horizontal/web_view/gif/10.gif';
import h5 from '../public/pictures/main_site/photo/horizontal/web_view/gif/14.gif';
import h6 from '../public/pictures/main_site/photo/horizontal/web_view/gif/15.gif';
import h7 from '../public/pictures/main_site/photo/horizontal/web_view/gif/27.gif';
import h8 from '../public/pictures/main_site/photo/horizontal/web_view/gif/28.gif';

const photo_web_view = [
    {
        id: uuid(),
        webViewPhotoUrl: v1
    },
    {
        id: uuid(),
        webViewPhotoUrl: v2
    },

    {
        id: uuid(),
        webViewPhotoUrl: v3
    },
    {
        id: uuid(),
        webViewPhotoUrl: v4
    },
    {
        id: uuid(),
        webViewPhotoUrl: v5
    },
    {
        id: uuid(),
        webViewPhotoUrl: v6
    },
    {
        id: uuid(),
        webViewPhotoUrl: v7
    },
    {
        id: uuid(),
        webViewPhotoUrl: v8
    },
    {
        id: uuid(),
        webViewPhotoUrl: v9
    },
    {
        id: uuid(),
        webViewPhotoUrl: v10
    },
    {
        id: uuid(),
        webViewPhotoUrl: v11
    },
    {
        id: uuid(),
        webViewPhotoUrl: v12
    },
    {
        id: uuid(),
        webViewPhotoUrl: v13
    },
    {
        id: uuid(),
        webViewPhotoUrl: v14
    },
    {
        id: uuid(),
        webViewPhotoUrl: v15
    },
    {
        id: uuid(),
        webViewPhotoUrl: v16
    },
    {
        id: uuid(),
        webViewPhotoUrl: v17
    },
    {
        id: uuid(),
        webViewPhotoUrl: v18
    },
    {
        id: uuid(),
        webViewPhotoUrl: v19
    },
    {
        id: uuid(),
        webViewPhotoUrl: v20
    },
];
const horizontalPhotosTop = [
    {
        id: uuid(),
        webViewPhotoUrl: h1
    },
    {
        id: uuid(),
        webViewPhotoUrl: h2
    },
    {
        id: uuid(),
        webViewPhotoUrl: h3
    },
    {
        id: uuid(),
        webViewPhotoUrl: h7
    }
];
const horizontalPhotosBottom = [
    {
        id: uuid(),
        webViewPhotoUrl: h4
    },
    {
        id: uuid(),
        webViewPhotoUrl: h5
    },
    {
        id: uuid(),
        webViewPhotoUrl: h6
    },
    {
        id: uuid(),
        webViewPhotoUrl: h8
    }
];

export default class Collector extends React.Component{
    render() {
        return (
            <React.Fragment>
            <NavPanel_/>
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
                        <HorizontalPhotos photos={horizontalPhotosTop}/>
                        <mainPhotoContent photos={photo_web_view}/>
                        <HorizontalPhotos photos={horizontalPhotosBottom}/>
                    </div>
                    <div className={style.textPrice}>
                        <PriceHeader/>
                    </div>
                    <div className={style.priceContent}>
                        <PriceContent/>
                    </div>
                    <div className={style.blockСontacts}>
                        <ContactsHeader/>
                        <ContactsContent/>
                        <ScheduleHeader/>
                        <Schedule/>
                    </div>
                    <div className={style.footerPhotoContent}>
                        <FooterPhotoContent/>
                    </div>
                    <div className={style.aboutMe}>
                        <AboutMeHeader/>
                        <AboutMeContent/>
                    </div>
                    <div className={style.footerArea}>
                        <Footer/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
