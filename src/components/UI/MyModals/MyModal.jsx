import React from 'react';
import {Modal} from "react-bootstrap";

const MyModal = ({children,show,setShow}) => {
    const handleClose = () => setShow(false);

    return (
        <Modal
            centered
            show={show}
            onHide={handleClose}
        >
            {children}
        </Modal>
    );
};

export default MyModal;