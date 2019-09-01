import React from "react";
import style from "../styles/head-photo-content.css";
import banner from "../public/pictures/main_site/banners/banner-1.jpg";

export default class HeadPhotoContent extends React.Component{
    render() {
        return (
            <div className={style}>
                <img src={banner} alt={"banner-1"}/>
            </div>
        );
    }
}
