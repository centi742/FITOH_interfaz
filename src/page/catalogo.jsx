import React,{useState} from "react";
import Layout from "../layout/layout";
import { Container, Row, Col, Button, Card ,Form,InputGroup,Alert} from "react-bootstrap";

const Catalogo=()=>{
    const [ShowAlert,setShowAlert] = useState(false);
    
  const AlertShow =()=>{
    if (ShowAlert) {
      return (
        <Alert variant="dark" onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      );
    }
     return <Button onClick={() => setShowAlert(true)}>Ayuda</Button>;   
  }

    return (
      <Layout>
        <Container>
          <Row>
            
            <Col>
            <br /> 
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Modelo del vehiculo"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">
                  Modelo
                </InputGroup.Text>
              </InputGroup>
            </Col>
            <Col>
            <br /> 
            <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Marca del vehiculo"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">
                  Marca
                </InputGroup.Text>
              </InputGroup>
            </Col>
            
          </Row>
          <Row>
            <Col>
            <AlertShow/>
            
            </Col>
          </Row>
        </Container>
      </Layout>
    );
        
}

export default Catalogo;