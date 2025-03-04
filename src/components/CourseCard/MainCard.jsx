import React from "react";
import { Card,Button } from "react-bootstrap";
import './CourseCard.css'
import { Link } from "react-router-dom";
export default function CourseCard(props) {
    const {title,body,img,desc,id,baseurl}=props;
  return (
    <>
    <Link className="text-decoration-none" to={`${baseurl}/${id}`}>
    <Card style={{height:'400px'}} className="m-card border-4  bg-transparent" >
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-center d-flex flex-column bg-transparent">
          <Card.Title className="text-warning">{title}</Card.Title>
          <Card.Text className="text-white">
            {body}
          </Card.Text>
        </Card.Body>
        <Button variant="warning" className="p-2 mx-3 my-2">Check Course</Button>

      </Card>
    </Link>
    </>
  );
}
