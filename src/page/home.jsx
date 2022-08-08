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
              Empresa líder de transporte de carga y transporte particular en el
              país, expertos en transporte de carga garantizando eficiencia,
              eficacia, seguridad y rentabilidad Empresa especializada en el
              transporte terrestre de carga.
              <br />
              Contactenos somos una empresa que se adapta a procesos
              administrativos que nos permite proveer servicios especializados
              de la mejor calidad con el fin de satisfacer todas las necesidades
              de nuestros clientes.
            </p>
          </center>
          <Row>
            <Col><h3 className="tema">Trasporte pesado</h3></Col>
            <Col><h3 className="tema">Trasporte liviano</h3></Col>
            <Col><h3 className="tema">Trasporte Industrial</h3></Col>
            <Col><h3 className="tema">Servicio de Grua</h3></Col>
          </Row>
          hola
        </Container>
      </div>
    </Layout>
  );
};

export default Home;
