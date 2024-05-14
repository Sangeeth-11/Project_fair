import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import base_url from '../services/server_url';
import { Row ,Col} from 'react-bootstrap';
import { editProject } from '../services/allApis';
import { toast } from 'react-toastify';
import { editProjectResponseContext } from '../Context_api/ContextShare';

function Edit({project}) {
    const {editResponse,SetEditResponse} = useContext(editProjectResponseContext)
    const [projectData,SetProjectData]=useState({...project,image:""})
    const [show, setShow] = useState(false);

    const [imageStatus ,setImageStatus] = useState(true)
    const [imagePreview ,setImagePreview] = useState("")
    //  console.log(project);
    useEffect(() => {
        if (projectData.image) {
            if (projectData.image.type == "image/jpg" || projectData.image.type == "image/jpeg" || projectData.image.type == "image/png") {
                setImageStatus(true)
                setImagePreview(URL.createObjectURL(projectData.image))
            } else {
               setImageStatus(false)
               setImagePreview("")
            }
        }
    }, [projectData.image])

    
    const handleSubmit=async()=>{
        const {title , overview , language , github , demo ,image}=projectData
        if (title && overview && language && github && demo) {
            const formData = new FormData()
            formData.append("title",title)
            formData.append("overview",overview)
            formData.append("language",language)
            formData.append("github",github)
            formData.append("demo",demo)
            formData.append("image",image?image:project.image)
            if (imagePreview) {
                const header = {
                    "Content-Type":"multipart/form-data",
                    "Authorization":`Bearer ${sessionStorage.getItem("token")}`
                }
                const result =await editProject(formData,header,projectData._id) 
                if (result.status == 200) {
                    handleClose()
                    toast.success("Project Updated successfully!!")
                    SetEditResponse(result)
                } else {
                    toast.error(result.response.data)
                }
                
            } else {
                const header = {
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${sessionStorage.getItem("token")}`
                }
                const result =await editProject(formData,header,projectData._id) 
                if (result.status == 200) {
                    handleClose()
                    toast.success("Project Updated successfully!!")
                    SetEditResponse(result)
                } else {
                    toast.error(result.response.data)
                }
            }
             
        } 
        else {
            toast.error("All fields are required")
        }
    }
    const handleClose = () => {
        setShow(false)
        setImagePreview("")
        SetProjectData({...project,image:""})
    };
    const handleShow = () => setShow(true);
    return (
        <>
            <button className='btn' onClick={handleShow}>
                <i className="fa-regular fa-pen-to-square fa-2xl"></i>
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col className='mb-3'>
                            <label htmlFor="img">
                                <input type="file" name="" id="img" style={{ display: "none" }} onChange={e => SetProjectData({ ...projectData, image: e.target.files[0] })} />
                                <img src={imagePreview?imagePreview:`${base_url}/uploads/${project.image}`} alt="" srcSet="" height={"200px"} width={"200px"}/>
                            </label>
                            {
                                !imageStatus &&
                                <p className='text-danger'>Invalid format,image format should be jpg,jpeg,png</p>
                            }
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingPassword" label="Project Title" className='mb-2'>
                                <Form.Control type="text" placeholder="Project Title" value={projectData.title} onChange={e => SetProjectData({ ...projectData, title: e.target.value })} />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Project Overview" className='mb-2'>
                                <Form.Control type="text" placeholder="Project Overview" value={projectData.overview} onChange={e => SetProject({ ...projectData, overview: e.target.value })} />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Languages Used" className='mb-2'>
                                <Form.Control type="text" placeholder="Languages Used" value={projectData.language} onChange={e => SetProjectData({ ...projectData, language: e.target.value })} />
                            </FloatingLabel>
                        </Col>
                        <FloatingLabel controlId="floatingPassword" label="Github Url" className='mb-3'>
                            <Form.Control type="text" placeholder="Github Url" value={projectData.github}  onChange={e => SetProjectData({ ...projectData, github: e.target.value })} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Demo Url" className='mb-3'>
                            <Form.Control type="text" placeholder="Demo url"  value={projectData.demo} onChange={e => SetProjectData({ ...projectData, demo: e.target.value })} />
                        </FloatingLabel>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit