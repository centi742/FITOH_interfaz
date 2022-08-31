import React from "react";
import Layout from "../layout/layout";
//import CarrucelInicio from "../components/carrucel";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Banner from "../components/banner";
import imgprueba from "../img/imagendeprueba.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Target from "../components/targeta";
import "../css/jumbotron.css";
import breakI from "../icons/break1.png";
import engine from "../icons/engine1.png";
import spray from "../icons/spray-paint.png";
import truck from "../icons/semi.png";
import car from "../icons/car.png";
import forklift from "../icons/forklift.png";
import towtruck from "../icons/tow-truck(1).png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Container fluid="md">
        <br />
        <center>
          <h5 className="tema">
            <i className="distintivo">En FITHO AUTOPARTS.</i>Ofrecemos servicios
            como:
          </h5>
        </center>

        <h3 className="tema">
          <center>Multiservicios Pacheco</center>
        </h3>
        <Row>
          <Col>
            <p>
              Contamos con cotizaciones gratuitas, precios accesibles,
              promociones mensuales, garantía, servicio y recolección de
              vehículos a domicilio.
            </p>
            <p>
              Detectamos y Satisfacemos las necesidades de nuestros clientes,
              superando siempre sus expectativas de calidad y servicio a un
              precio justo, con el compromiso de honestidad y transparencia
              permanentes. Evitando siempre pretextos, llegaremos siempre a dar
              soluciones y respuestas acertadas, para lograr tener única y
              exclusivamente clientes satisfechos.
            </p>
            <center><Button>Visitar</Button></center>
            <br />
          </Col>
          <Col>
            <Row>
              <Col xs lg="2">
                {" "}
                <img src={breakI} className="imgicons" />
              </Col>
              <Col>
                {" "}
                <h5> Cambios de pastillas.</h5>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs lg="2">
                <img src={engine} className="imgicons" />
              </Col>
              <Col>
                <h5> Cambios de aceite.</h5>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs lg="2">
                <img src={spray} className="imgicons" />
              </Col>
              <Col>
                <h5> Enderezado y pintura.</h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="jumbotron">
        <Container>
          <center>
            <h2 className="tema">Importadora FITOH AutoParts</h2>
          </center>
          <br />
          <center>
            <p>
              <center>
                <Col xs={8}>
                      Empresa líder de transporte de carga y transporte particular en el
                    país, expertos en transporte de carga garantizando eficiencia,
                    eficacia, seguridad y rentabilidad Empresa especializada en el
                    transporte terrestre de carga.
                  
                </Col>
             
              </center>
            </p>
          </center>
          <Row>
            <Col>
            <Card>
               <center><img src={truck} alt="cargando..." className="imgIcons"/>
              <h5 className="tema">Trasporte pesado</h5>

              <p> se traen maquinaria para trabajo pesado como trailers, furgones y camiones</p>
              </center> 
              </Card>
            </Col>
            <Col>
            <Card>
               <center><img src={car} alt="cargando..." className="imgIcons"/>
              <h5 className="tema">Trasporte liviano</h5>

              <p> se traen maquinaria para trabajo pesado como trailers, furgones y camiones</p>
              </center> 
              </Card>
            </Col>
            <Col>
                <Card>
                  <center><img src={forklift} alt="cargando..." className="imgIcons"/>
                  <h5 className="tema">Trasporte Industrial</h5>

                  <p> se traen maquinaria para trabajo pesado como trailers, furgones y camiones</p>
                  </center> 
               </Card>
            </Col>
            <Col>
            <Card>
               <center><img src={towtruck} alt="cargando..." className="imgIcons"/>
              <h5 className="tema">Servicio grua 24 Horas</h5>

              <p> se traen maquinaria para trabajo pesado como trailers, furgones y camiones</p>
              </center> 
              </Card>
            </Col>
          </Row>
        
        </Container>
      </div>
      
      <Footer></Footer>
    </Layout>
    
  );
};

export default Home;
