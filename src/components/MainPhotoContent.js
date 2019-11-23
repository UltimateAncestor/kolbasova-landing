import React from 'react'
import uuid from 'uuid'
import Modal from 'react-modal'
import style from "../styles/main-photo-content.css";
import modalStyle from "../styles/modal.css";

Modal.setAppElement('#root');

export default class _MainPhotoContent extends React.Component{

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
                <div key={uuid()} className={style.photo_wrapper} onClick={()=>this.handleOpenModal(obj.webViewPhotoUrl)}>
                    <span id={`op${idx}`}>Открыть</span>
                    <img src={obj.webViewPhotoUrl} alt={"photo"}/>
                </div>
        );

    render() {
        const {photos} = this.props;
        return (
            <React.Fragment>
           <div className={style.wrapper}>
            {this.createPhotoGalary(photos)}
           </div>
                <Modal className={modalStyle.modalVertical}
                       overlayClassName={modalStyle.overlay}
                       isOpen={this.state.showModal}
                       onRequestClose={this.handleCloseModal}>
                    <img src={this.state.modalPhoto} alt={'photo'} className={modalStyle.modalVertical} onClick={this.handleCloseModal}/>
                </Modal>
            </React.Fragment>
        );
    }
}


