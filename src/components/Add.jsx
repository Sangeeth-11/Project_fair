import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Add() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button className='btn btn-info m-3' onClick={handleShow}>
                Add Projects
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                        <label htmlFor="img">
                        <input type="file" name="" id="img" style={{display:"none"}}/>
                        <img src="https://t4.ftcdn.net/jpg/05/65/22/41/360_F_565224180_QNRiRQkf9Fw0dKRoZGwUknmmfk51SuSS.jpg" alt="" srcset="" />
                        </label>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingPassword" label="Project Title" className='mb-2'>
                                <Form.Control type="text" placeholder="Project Title" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Project Overview" className='mb-2'>
                                <Form.Control type="text" placeholder="Project Overview" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Languages Used" className='mb-2'>
                                <Form.Control type="text" placeholder="Languages Used" />
                            </FloatingLabel>
                        </Col>
                            <FloatingLabel controlId="floatingPassword" label="Github Url" className='mb-3'>
                                <Form.Control type="text" placeholder="Github Url" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Demo Url"className='mb-3'>
                                <Form.Control type="text" placeholder="Demo url" />
                            </FloatingLabel>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save 
                    </Button>
                </Modal.Footer>
            </Modal>
       
        </>
    )
}

export default Add