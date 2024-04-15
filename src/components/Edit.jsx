import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Edit() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button className='btn' onClick={handleShow}>
                <i className="fa-regular fa-pen-to-square fa-2xl"></i>
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="floatingPassword" label="Project Title" className='mb-2'>
                        <Form.Control type="text" placeholder="Project Title" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Project Overview" className='mb-2'>
                        <Form.Control type="text" placeholder="Project Overview" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Languages Used" className='mb-2'>
                        <Form.Control type="text" placeholder="Languages Used" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Github Url" className='mb-3'>
                                <Form.Control type="text" placeholder="Github Url" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Demo Url"className='mb-3'>
                                <Form.Control type="text" placeholder="Demo url" />
                            </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit