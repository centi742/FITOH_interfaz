import React from "react";
import Layout from "../layout/layout";
//import CarrucelInicio from "../components/carrucel";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Banner from "../components/banner";
import imgprueba from "../img/imagendeprueba.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/jumbotron.css";
import Footer from "../components/Footer";
import car from "../icons/electric-car.png";
import calidad from "../icons/calidad.png";
import cinsurae from "../icons/car-insurance.png";
import newcar from "../icons/new-car.png";





const Home = () => {
  return (
    <Layout>
      <Banner />
        <br />
        <div className="Nestandares">
          <Container>
        <Row>
          
            <Col >
              <Row>
                <center className="estandares">NUESTROS ESTANDARES</center>
              </Row>
              <br />
              <Row>
              <Col>
                  <center><img src={car} alt=""  className="imgicons"/></center>
                  <h5 className="temai">IMPORTACION</h5>
                  <p className="parrafo">Importamos vehículos desde Estados Unidos, de acuerdo a los requerimientos de nuestros clientes.</p>
                </Col>
                <Col>
                <center><img src={cinsurae} alt=""  className="imgicons"/></center>
                <h5 className="temai">MODELOS RECIENTES</h5>
                  <p className="parrafo">Vehículos desde año 2014, marcas comerciales reconocidas versión americana.</p>
                </Col>
              </Row>
              <Row>
              <Col>
              <center><img src={calidad} alt=""  className="imgicons"/></center>
              <h5 className="temai">CALIDAD</h5>
                  <p className="parrafo">Utilizamos repuestos e insumos acorde a la calidad del fabricante, cuando se trabaja con calidad se puede hablar de garantía.</p>
                </Col>
                <Col>
                <center><img src={newcar} alt=""  className="imgicons"/></center>
                <h5 className="temai">COMPRA DE VEHICULOS EN SUBASTAS</h5>
                  <p className="parrafo">Se compran los vehiculos a la necesidad y gustos del cliente.</p>
                </Col>
              </Row>
            </Col>
            
          
          <Col></Col>
          
        </Row>
        </Container>
        </div>
      
      <div className="jumbotron">
        <Container>
         <Row>
          <center className="estandares">LOS MEJORES VEHICULOS.</center>
         </Row>
        </Container>
      </div>

      <Footer></Footer>
    </Layout>
  );
};

export default Home;
