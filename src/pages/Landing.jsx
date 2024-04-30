import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProjectCards from '../components/ProjectCards';


function Landing() {
  return (
    <>
      <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '100vh', backgroundColor: 'rgb(30, 30, 30)' ,color:"white"}}>
        <Row>
          <Col className='p-5' sm={12} md={6}>
            <h1 style={{fontFamily:"cursive"}}>Project Fair</h1>
            <p style={{ textAlign: 'justify',fontFamily:"cursive" }}> Lorem ipsum dolor sit amet consectetur adipisicing uptate iure nisi ut soluta recusandae. Molestiae numquam incidunt velit nostrum aut nihil ducimus modi corporis omnis eligendi harum repudiandae, doloribus vel tempora totam, quaerat voluptates iusto ipsa dignissimos inventore dicta nam quis rerum consectetur! Provident, labore! Officiis placeat assumenda mollitia aspernatur, eaque voluptatibus facere molestiae repudiandae fugit atque?</p>
            <Link to={'login'}className='btn btn-warning' style={{ backgroundColor: 'hsla(36, 91%, 67%, 1)' }}>
              Explore For More <i className="fa-solid fa-arrow-right fa-sm" style={{ color: '#fff' }}></i> </Link>
          </Col>
          <Col className='p-3' sm={12} md={6}>
            <img src="https://www.lexington.es/app/uploads/2019/07/trabajo-por-proyectos3.jpg" alt="" style={{ height: '100%', width: '80%' ,opacity:"0.5"}} className=' rounded-5' />
          </Col >
        </Row>
      </div>
      <div className='p-5'>

        <h3 className='text-center'>Few Projects For You...</h3>
        <marquee behavior="" direction="left">
          <div className='d-flex justify-content-evenly mt-3'>

            <ProjectCards />
            <ProjectCards />
            <ProjectCards />

          </div>
        </marquee>
        <div className='text-center mt-3'>
          <Link to={'/projects'}>See More..</Link>

        </div>
      </div>

    </>
  )
}

export default Landing