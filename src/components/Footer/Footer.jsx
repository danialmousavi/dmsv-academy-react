import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Footer() {
return (
    <>
            <Row className='footer text-white d-flex justify-content-center align-items-center p-3 m-0' style={{width:'100%'}} >
            <Col xs={12} md={6} className='d-flex justify-content-center'>
                <h4>DMSV ACADEMY</h4>
            </Col>
            <Col xs={12} md={6} className='d-flex justify-content-evenly'>
                <FaInstagram size={30} />
                <FaWhatsapp size={30} />
                <FaTelegram size={30} />
                <FaTwitter size={30} />
                <FaFacebook size={30} />
            </Col>
        </Row>
        <Row className='footer text-white d-flex justify-content-center align-items-center p-3 m-0' style={{width:'100%'}} >
            <Col xs={12} md={6} className='text-warning'>
                <h4>About Us</h4>
                <p>DMSV Academy is dedicated to providing top-notch education and training in various fields. Our mission is to empower individuals with the knowledge and skills they need to succeed in their careers and personal lives. Join us to experience a transformative learning journey.</p>
            </Col>
            <Col xs={12} md={6} className='d-flex justify-content-center'>
                <Row className='d-flex flex-column'>
                    <Col>
                        <h6 className='text-warning'>Courses</h6>
                    </Col>
                    <Col>
                        <ul className='list-unstyled'>
                            <li><Link className='text-decoration-none text-warning'>Python</Link></li>
                            <li><Link className='text-decoration-none text-warning'>React JS</Link></li>
                            <li><Link className='text-decoration-none text-warning'>Three JS</Link></li>
                            <li><Link className='text-decoration-none text-warning'>PHP</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Col>
        </Row>
    </>
)
}
