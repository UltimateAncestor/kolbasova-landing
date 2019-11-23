import React from 'react'
import style from '../styles/about-me-content.css'
import idGenerator from 'react-id-generator'
import myPhoto from '../public/pictures/main_site/photo/vertical/web_view/gif/me.gif'
import {Link} from "react-scroll";
import {useMediaQuery} from 'react-responsive'

const MobileDevice = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.photo_container}>
                <img id={idGenerator()} src={myPhoto} width={'140px'} height={'200px'} alt={'My photo'}/>
            </div>
            <div className={style.text_container}>
                    <span>
                        Фотограф для тех, <br />
                        кому важно чувствовать себя в кадре комфортно.<br />
                        На съемках раскрываю внутреннюю красоту <br />
                        и показываю людей без лишней ретуши.<br />
                        Если хочешь атмосферных фотографий - обращайся.<br /><br />
                    </span>
            </div>
            <div className={style.connectLinkContainer}>
                <div className={style.connectLink}>
                    <Link to={'contacts'} spy={true} smooth={true} duration={500}>
                        Заказать фотосессию
                    </Link>
                </div>
            </div>
        </div>
    )
};
const DesktopDevice = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.photo_container}>
                <img id={idGenerator()} src={myPhoto} width={'400px'} height={'600px'} alt={'My photo'}/>
            </div>
            <div className={style.text_container}>
                    <p>
                        Фотограф для тех, <br />
                        кому важно чувствовать себя в кадре комфортно.<br />
                        На съемках раскрываю внутреннюю красоту <br />
                        и показываю людей без лишней ретуши.<br />
                        Если хочешь атмосферных фотографий - обращайся.<br /><br />
                    </p>
            </div>
            <div className={style.connectLinkContainer}>
                <div className={style.connectLink}>
                    <Link to={'contacts'} spy={true} smooth={true} duration={500}>
                        Заказать фотосессию
                    </Link>
                </div>
            </div>
        </div>
    )
};
const Mobile = () => {
    const isMobile = useMediaQuery({ minWidth: '320px', maxWidth: '480px' });
    return isMobile ? <MobileDevice/> : <DesktopDevice/>
};
export default class AboutMeContent extends React.Component{
    render(){
        return(
            <Mobile/>
        )
    }
};
