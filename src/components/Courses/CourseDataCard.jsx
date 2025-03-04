import React from 'react'
import { Col ,Row} from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';
export default function CourseDataCard({course}) {
    console.log(course);
    
return (
    <div className="d-flex flex-column justify-content-center p-3 rounded-3">
        <div>
            <h2 className="text-center text-warning">{course.price}$</h2>
        </div>
        <div className="mt-3">
            <button className="btn btn-warning w-100">Register</button>
        </div>
        <div className="mt-3">
            <Row className="d-flex justify-content-between align-items-center mt-3">
                <Col>
                    <h5 className="text-white">Satisfaction: {course.satisfaction}</h5>
                </Col>
                <Col>
                    <button className="btn btn-outline-success disabled">
                        Number of students: {course.students}
                    </button>
                </Col>
            </Row>
        </div>
        <div className="mt-4">
            <h6 className="text-white">Course progress percentage: {course.progress}</h6>
            <ProgressBar
                variant="success"
                animated
                now={course.progress}
                label={course.progress}
                className="mt-3"
            />
        </div>
        <div className='mt-4'>
            <ul className="list-unstyled">
                <li className="d-flex justify-content-between text-white">
                    <span className="text-warning fs-4">Course type</span>
                    <span className="fs-4">{course.type}</span>
                </li>
                <hr className="text-warning" />
                <li className="d-flex justify-content-between text-white">
                    <span className="text-warning fs-4">Support type</span>
                    <span className="fs-4">{course.support}</span>
                </li>
                <hr className="text-warning" />
                <li className="d-flex justify-content-between text-white">
                    <span className="text-warning fs-4">Prerequisite</span>
                    <span className="fs-4">{course.prerequisite}</span>
                </li>
                <hr className="text-warning" />
                <li className="d-flex justify-content-between text-white">
                    <span className="text-warning fs-4">Level</span>
                    <span className="fs-4">{course.level}</span>
                </li>
                <hr className="text-warning" />
            </ul>
        </div>
        <div>
            <Row className="d-flex justify-content-between align-items-center">
                <Col>
                    <img
                        src="https://media.licdn.com/dms/image/v2/D4D03AQFwYCgMKq_qYQ/profile-displayphoto-shrink_100_100/B4DZUazeMnHkAY-/0/1739911457755?e=1746057600&v=beta&t=xgp1BLzxEthkOn3URNNBEWyOT-LenjTjS7KpL8VfSDA"
                        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                        alt="Teacher"
                    />
                </Col>
                <Col className="d-flex align-items-baseline">
                    <h5 className="text-warning">Teacher:</h5>
                    <h6 className="text-white">Danial Mousavi</h6>
                </Col>
            </Row>
        </div>
    </div>
);
}
