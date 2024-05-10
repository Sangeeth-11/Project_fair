import React from 'react'
import { Card } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import {Row,Col} from 'react-bootstrap';
import base_url from '../services/server_url';


function ProjectCards({project}) {

 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <>
   <Card style={{ width: '18rem' }}>
              <Card.Img onClick={handleShow} variant="top" src={`${base_url}/uploads/${project.image}`}  style={{height:"180px"}}/>
              <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              </Card.Body>
               </Card>

        <Modal 
        show={show} 
        onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Row>
                <Col> <img className='img-fluid' src={`${base_url}/uploads/${project.image}`}  style={{height:"180px",width:"300px"}} alt="" />
                </Col>
                <Col>
                <h2>
                {project.title}
                </h2>
                <h6>{project.overview}</h6>
                <h6>Languages Used-{project.language}</h6>
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