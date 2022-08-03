import React from "react";
import imgprueba from "../img/imagendeprueba.png"
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,Button} from "react-bootstrap";

const Target =(props)=>{
    return(
        <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src={props.imgBanner}/>
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                {props.descrip}
            </Card.Text>
            <Button variant="primary">{props.btntext}</Button>
        </Card.Body>
    </Card>
    )
}

export default Target;