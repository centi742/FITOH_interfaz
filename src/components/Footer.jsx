import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Col,Row} from "react-bootstrap";
import "../css/footer.css";

const Footer=()=>{
    return(
        <div className="footerH">
            <Row>
             <Col>
                <h3 className="BrandFooter">FITOH Autoparts</h3>
             </Col>
             <Col></Col>
             <Col></Col>
            </Row>
            
        </div>
    )
}

export default Footer;