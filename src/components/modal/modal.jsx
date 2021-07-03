import React, { useState } from 'react';
import { Button, Modal as BoostrapModal } from 'react-bootstrap';

import './modal.scss';

const Modal = (props) => {
    const {
        show, title, text, beforeClose,
    } = props;
    const [showLocal, setShowLocal] = useState(show);

    const closeModal = () => {
        setShowLocal(false);
        if (beforeClose) setTimeout(() => beforeClose(), 200);
    };

    return (
        <BoostrapModal show={showLocal} onHide={closeModal}>
            <BoostrapModal.Header>
                <BoostrapModal.Title>{title}</BoostrapModal.Title>
            </BoostrapModal.Header>
            <BoostrapModal.Body>{text}</BoostrapModal.Body>
            <BoostrapModal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Cerrar
                </Button>
            </BoostrapModal.Footer>
        </BoostrapModal>
    );
};

export default Modal;
