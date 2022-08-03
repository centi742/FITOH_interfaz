import React from "react";
import Layout from "../layout/layout";
//import CarrucelInicio from "../components/carrucel";
import {Container,Row,Col,Button,Card} from "react-bootstrap"
import Banner from "../components/banner";
import imgprueba from "../img/imagendeprueba.png"
import "bootstrap/dist/css/bootstrap.min.css";
import Target from "../components/targeta";
import "../css/jumbotron.css"

const Home =()=>{
    return(
        <Layout>
            <Banner/>
            <Container  fluid="md">
            <br />
                <center><h5 className="tema"><i className="distintivo">En FITHO AUTOPARTS.</i>Ofrecemos servicios como:</h5></center>
                <br />
                <Row>
                    <Col>
                        <p>hjaskhkjsahjkshjksahjkshjkshjksahjksahjksa sahghsagsahjsahjs jasggsagh bjGAGJGJSAUJ JHSJAGUYTSAYS</p>
                        <p>hjaskhkjsahjk shjksahjks hjkshjksa hjksahjksa sahghsagsahjsahjs jasggsagh bjGAGJGJSAUJ JHSJAGUYTSAYS</p>

                    </Col>
                    <Col>
                        <Row>
                            <Col><p>haiasjjh gashgsaghsa jhajshhjah</p></Col>
                        </Row>
                        <Row>
                            <Col><p>haiasjjh gashgsaghsa jhajshhjah</p></Col>
                        </Row>
                        <Row>
                            <Col><p>haiasjjh gashgsaghsa jhajshhjah</p></Col>
                        </Row>
                    </Col>
                </Row>
</Container>
                <div className="jumbotron">
                    <Container>
                        <center><h2 className="tema">Our Service</h2></center>
                        <br />
                        <center><p>hjaskhkjsahjkshjksahjkshjkshjksahjksahjksa sahghsagsahjsahjs jasggsagh bjGAGJGJSAUJ JHSJAGUYTSAYS
                        hjaskhkjsahjkshjksahjkshjkshjksahjksahjksa sahghsagsahjsahjs jasggsagh bjGAGJGJSAUJ JHSJAGUYTSAYS</p></center> 
                        <Row>
                            <Col>hola</Col>   
                            <Col>hola</Col>
                            <Col>hola</Col>
                            <Col>hola</Col> 
                        </Row> 
                      hola
                    </Container>
                   
                </div>
            
        </Layout>
        
    );
}

export default Home;