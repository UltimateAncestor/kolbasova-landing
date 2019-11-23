import React from 'react'
import style from '../styles/contacts-content.css'
import idGenerator from "react-id-generator";
import {Bounce} from "react-reveal";
import {useMediaQuery} from 'react-responsive'
import i1 from "../public/pictures/main_site/icons/social_network/iconmonstr-telegram-4.svg";
import i2 from "../public/pictures/main_site/icons/social_network/iconmonstr-vk-4.svg";
import i3 from "../public/pictures/main_site/icons/social_network/iconmonstr-instagram-14.svg";
import i4 from "../public/pictures/main_site/icons/social_network/iconmonstr-viber-4.svg";
import i5 from "../public/pictures/main_site/icons/social_network/iconmonstr-whatsapp-4.svg";
import i6 from "../public/pictures/main_site/icons/social_network/iconmonstr-phone-8.svg";
import i7 from "../public/pictures/main_site/icons/social_network/iconmonstr-email-10.svg";

const MobileDevice = () => {
    return(
        <Bounce right>
            <div className={style.contentWrapper}>
                <div>
                    <a href={'https://t.me/Kolbasovaa'} title={'Telegram'}>
                        <img id={idGenerator()} src={i1} width={'19px'} height={'19px'} alt={'icon'}/>
                    </a>
                </div>
                <div>
                    <a href={'https://vk.com/k.demenko'} title={'My vk blog'}>
                        <img id={idGenerator()} src={i2} width={'17px'} height={'17px'} alt={'icon'}/></a>
                </div>
                <div>
                    <a href={'https://www.instagram.com/kolbasofa'} title={'My instagram blog'}>
                        <img id={idGenerator()} src={i3} width={'17px'} height={'17px'} alt={'icon'}/></a>
                </div>
                <div>
                    <a href={'viber://add?number=79772828920'}>
                        <img id={idGenerator()} src={i4} width={'17px'} height={'17px'} alt={'icon'}/></a>
                </div>
                <div>
                    <a href={'https://wa.me/79772828920'} title={'WatsApp'}>
                        <img id={idGenerator()} src={i5} width={'17px'} height={'17px'} alt={'icon'}/></a>
                </div>
                <div>
                    <a title={'+7(977)282-89-20'}>
                        <img id={idGenerator()} src={i6} width={'17px'} height={'17px'} alt={'+7(977)282-89-20'}/></a>
                </div>
                <div>
                    <a title={"email me: kdemenko@inbox.ru"}>
                        <img id={idGenerator()} src={i7} width={'17px'} height={'17px'} alt={'icon'}/></a>
                </div>
            </div>
        </Bounce>
    )
};
const DesktopDevice = () => {
    return(
        <Bounce right>
            <div className={style.contentWrapper}>
                <div>
                    <a href={'https://t.me/Kolbasovaa'} title={'Telegram'}>
                        <img id={'tlgrm'} src={i1} width={'70px'} height={'70px'} alt={'icon'}/>
                    </a>
                </div>
                <div>
                    <a href={'https://vk.com/k.demenko'} title={'My vk blog'}>
                        <img id={idGenerator()} src={i2} width={'70px'} height={'70px'} alt={'icon'}/></a>
                </div>
                <div>
                    <a href={'https://www.instagram.com/kolbasofa'} title={'My instagram blog'}>
                        <img id={idGenerator()} src={i3} width={'70px'} height={'70px'} alt={'icon'}/></a>
                </div>
                <div>
                    <a href={'viber://add?number=79772828920'}>
                        <img id={idGenerator()} src={i4} width={'70px'} height={'70px'} alt={'icon'}/></a>
                </div>
                <div>
                    <a href={'https://wa.me/79772828920'} title={'WatsApp'}>
                        <img id={idGenerator()} src={i5} width={'70px'} height={'70px'} alt={'icon'}/></a>
                </div>
                <div>
                    <a title={'+7(977)282-89-20'}>
                        <img id={idGenerator()} src={i6} width={'70px'} height={'70px'} alt={'+7(977)282-89-20'}/></a>
                </div>
                <div>
                    <a title={'email me'}>
                        <img id={idGenerator()} src={i7} width={'70px'} height={'70px'} alt={'icon'}/></a>
                </div>
            </div>
        </Bounce>
    )
}

const Mobile = () => {
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 });
    return isMobile ? <MobileDevice/> : <DesktopDevice/>
};

export default class PriceContent extends React.Component{
    render() {
        return (
            <div>
                <Mobile/>
            </div>
        );
    }
};
