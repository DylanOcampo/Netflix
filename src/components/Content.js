import { Col, Row } from "react-bootstrap"
import {MovieItem} from "./MovieItem.js"


export const Content = ({identifier}) => {

    let element;
    if(identifier === 1) {
        element = (
        <div>
            <h1 style={{paddingTop: "10px",  paddingLeft: "10px"}}>Netflix Originals</h1>
            <Row>
                <Col><MovieItem Type = {0}></MovieItem></Col>
            </Row>
            <h1 style={{paddingTop: "10px", paddingLeft: "10px"}}>Must Watch</h1>
            <Row>
                <Col><MovieItem Type = {1}></MovieItem></Col>
            </Row>
            <h1 style={{paddingTop: "10px", paddingLeft: "10px"}}>Recommended</h1>
            <Row>
                <Col><MovieItem Type = {1}></MovieItem></Col>
            </Row>
        </div>
    );
    }

    if(identifier === 2) {
        element = (
        <div>
            <h1 style={{paddingTop: "10px",  paddingLeft: "10px"}}>Best Series</h1>
            <Row>
                <Col><MovieItem Type = {1}></MovieItem></Col>
            </Row>
            <h1 style={{paddingTop: "10px", paddingLeft: "10px"}}>Must Watch</h1>
            <Row>
                <Col><MovieItem Type = {1}></MovieItem></Col>
            </Row>
            <h1 style={{paddingTop: "10px", paddingLeft: "10px"}}>Recommended</h1>
            <Row>
                <Col><MovieItem Type = {1}></MovieItem></Col>
            </Row>
        </div>
    );
    }

    if(identifier === 3) {
        element = (
        <div>
            <h1 style={{paddingTop: "10px",  paddingLeft: "10px"}}>Best Movies</h1>
            <Row>
                <Col><MovieItem Type = {0}></MovieItem></Col>
            </Row>
            <h1 style={{paddingTop: "10px", paddingLeft: "10px"}}>Must Watch</h1>
            <Row>
                <Col><MovieItem Type = {0}></MovieItem></Col>
            </Row>
            <h1 style={{paddingTop: "10px", paddingLeft: "10px"}}>Recommended</h1>
            <Row>
                <Col><MovieItem Type = {0}></MovieItem></Col>
            </Row>
        </div>
    );
    }



    return (

        <>{element}</>

        


    ) 
    
}