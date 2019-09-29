import React from "react";
import style from "../styles/head-photo-content.css";
import banner from "../public/pictures/main_site/banners/banner-1.svg";

export default class HeadPhotoContent extends React.Component{
    render() {
        return (
            <div className={style.wrapper}>
                <img src={banner} alt={"banner-1"}/>
            </div>
        );
    }
}
