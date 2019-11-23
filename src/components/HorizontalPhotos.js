import React from 'react'
import style from '../styles/horizontal-photo-content.css'
import uuid from 'uuid'
import Modal from "react-modal";
import modalStyle from "../styles/modal.css";
export default class HorizontalPhotos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            modalPhoto: null
        };
    }

    handleOpenModal = (photo) => {
        this.setState({
            showModal: true,
            modalPhoto: photo
        })
    };

    handleCloseModal = () => {
        this.setState({
            showModal: false,
            modalPhoto: null
        })
    };

    createPhotoGalary = (arrayOfPhotoObjects) =>
        arrayOfPhotoObjects.map(
            (obj, idx) =>
                <div key={uuid()} className={style.photoWrapper} onClick={()=>this.handleOpenModal(obj.webViewPhotoUrl)}>
                    <span id={`op${idx}`}>Открыть</span>
                    <img src={obj.webViewPhotoUrl} alt={"photo"} width={'100%'}/>
                </div>
        );

    render() {
        const {photos} = this.props;
        return(
            <React.Fragment>
                <div className={style.wrapper}>
                    {this.createPhotoGalary(photos)}
                </div>
                <Modal className={modalStyle.modalHorizontal}
                       overlayClassName={modalStyle.overlay}
                       isOpen={this.state.showModal}
                       onRequestClose={this.handleCloseModal}>
                    <img src={this.state.modalPhoto} alt={'photo'} onClick={this.handleCloseModal}/>
                </Modal>
            </React.Fragment>
        )
    }
}
