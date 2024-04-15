import React from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import {Row,Col} from 'react-bootstrap';


function ProjectCards() {

 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <>
   <Card style={{ width: '18rem' }}>
              <Card.Img onClick={handleShow} variant="top" src="https://png.pngtree.com/element_pic/16/12/25/97e6c42a95eb007792f94e4764ece9d2.jpg" />
              <Card.Body>
              <Card.Title>Project 1</Card.Title>
              </Card.Body>
               </Card>

        <Modal 
        show={show} 
        onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Project 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Row>
                <Col> <img className='img-fluid' src="https://png.pngtree.com/element_pic/16/12/25/97e6c42a95eb007792f94e4764ece9d2.jpg" alt="" />
                </Col>
                <Col>
                <h2>
                    Project1
                </h2>
                <h3>Overview</h3>
                <h3>Technologies Used</h3>
                <div className='d-flex justify-content-between'>
                    <a href=""><i className="fa-brands fa-github" style={{color: '#bca35c'}}></i> </a>
                    <a href=""> <i class="fa-solid fa-link" style={{color: '#bca35c'}}></i></a>
                </div>
                </Col>
            </Row>
        </Modal.Body>
        
      </Modal>
   </>
  )
}

export default ProjectCards